import { Card, ForensicNote, Player, SceneTile } from "../types/game";
import { GoogleGenAI } from "@google/genai";
import OpenAI from "openai";
import {
  TILE_OPTION_TRAITS,
  TRAIT_LABEL_VI,
  TraitMap,
  getCardTraits,
  traitFit,
} from "./forensicKnowledge";

interface AIPlacementResult {
  placedTiles: SceneTile[];
  notes: ForensicNote[];
  discardedTileId?: string;
  discardReason?: string;
}

interface CaseContext {
  means: Card;
  clue: Card;
  innocentMeans: Card[];
  innocentClues: Card[];
}

export interface OptionEvaluation {
  index: number;
  /** How strongly this marker points at the key pair AND away from the other cards on the table. */
  value: number;
  /** Raw fit of the key cards with this option (no comparison with innocent cards). */
  keyFit: number;
  meansShared: string[];
  clueShared: string[];
  isNeutral: boolean;
}

// For Cause of Death the Means card is what matters; the Clue only breaks ties.
function typeWeights(tile: SceneTile): { m: number; c: number } {
  if (tile.type === "CAUSE_OF_DEATH") return { m: 1, c: 0.25 };
  if (tile.type === "LOCATION") return { m: 1, c: 1 };
  // Cause of Death already points strongly at the Means, so event tiles lean
  // slightly toward the Key Evidence, which is usually harder to guess.
  return { m: 0.85, c: 1.2 };
}

function optionTraits(tile: SceneTile, idx: number): TraitMap {
  return TILE_OPTION_TRAITS[tile.id]?.[idx] || {};
}

/**
 * Score one card type for one option:
 *  - reward the key card's fit,
 *  - subtract part of the average fit of the other cards of that type on the table
 *    (a marker every card fits tells investigators nothing),
 *  - bonus when the key card fits better than every innocent card (a unique pointer).
 */
function discriminativeScore(keyTraits: TraitMap, others: Card[], opt: TraitMap): { value: number; key: number; shared: string[] } {
  const key = traitFit(keyTraits, opt);
  if (others.length === 0) return { value: key.score, key: key.score, shared: key.shared };
  let sum = 0;
  let max = 0;
  for (const o of others) {
    const s = traitFit(getCardTraits(o.id), opt).score;
    sum += s;
    if (s > max) max = s;
  }
  const avg = sum / others.length;
  let value = key.score - 0.6 * avg;
  if (key.score > 0 && key.score > max) value += 2;
  return { value, key: key.score, shared: key.shared };
}

export function evaluateTile(tile: SceneTile, ctx: CaseContext): OptionEvaluation[] {
  const w = typeWeights(tile);
  const mTraits = getCardTraits(ctx.means.id);
  const cTraits = getCardTraits(ctx.clue.id);
  return tile.options.map((_, idx) => {
    const opt = optionTraits(tile, idx);
    const m = discriminativeScore(mTraits, ctx.innocentMeans, opt);
    const c = discriminativeScore(cTraits, ctx.innocentClues, opt);
    return {
      index: idx,
      value: w.m * m.value + w.c * c.value,
      keyFit: w.m * m.key + w.c * c.key,
      meansShared: m.shared,
      clueShared: c.shared,
      isNeutral: !!opt.neutral,
    };
  });
}

/** Best option for a tile. When nothing on the tile relates to the case, prefer a neutral option so the marker does not mislead. */
export function pickBestOption(tile: SceneTile, ctx: CaseContext): OptionEvaluation {
  const evals = evaluateTile(tile, ctx);
  const best = [...evals].sort((a, b) => b.value - a.value || b.keyFit - a.keyFit)[0];
  if (best.keyFit <= 0) {
    const neutral = evals.filter((e) => e.isNeutral).sort((a, b) => b.value - a.value)[0];
    if (neutral) return neutral;
  }
  return best;
}

function labelTraits(tags: string[], max = 3): string {
  return tags.slice(0, max).map((t) => TRAIT_LABEL_VI[t] || t).join(", ");
}

function explainChoice(tile: SceneTile, ev: OptionEvaluation, ctx: CaseContext): string {
  const opt = tile.options[ev.index];
  if (ev.keyFit <= 0) {
    return ev.isNeutral
      ? `Thẻ "${tile.titleVi}" không liên quan rõ đến vụ án — đặt ở "${opt.labelVi}" như một lựa chọn trung tính để không làm nhiễu điều tra.`
      : `Thẻ "${tile.titleVi}" không liên quan rõ đến vụ án — đặt ở "${opt.labelVi}" vì đây là lựa chọn ít khớp với các thẻ khác trên bàn nhất.`;
  }
  const parts: string[] = [];
  if (ev.meansShared.length) parts.push(`hung khí "${ctx.means.nameVi}" gợi ý ${labelTraits(ev.meansShared)}`);
  if (ev.clueShared.length) parts.push(`bằng chứng "${ctx.clue.nameVi}" gợi ý ${labelTraits(ev.clueShared)}`);
  return `Chọn "${opt.labelVi}" vì ${parts.join("; ")}.`;
}

/** Choose the most informative LOCATION tile (in the board game the Forensic Scientist picks one of the location tiles). */
export function chooseLocationTile(
  locationTiles: SceneTile[],
  means: Card,
  clue: Card,
  allPlayers: Player[]
): SceneTile {
  const ctx = buildContext(means, clue, allPlayers);
  let best = locationTiles[0];
  let bestValue = -Infinity;
  for (const tile of locationTiles) {
    const ev = pickBestOption(tile, ctx);
    const v = ev.keyFit > 0 ? ev.value : -100;
    if (v > bestValue) {
      bestValue = v;
      best = tile;
    }
  }
  return best;
}

// Find the least informative EVENT tile to discard in Round 2 and Round 3
export function findWeakestSceneTileToDiscard(
  activeTiles: SceneTile[],
  ctx: CaseContext
): { tileToDiscard: SceneTile; reason: string } {
  // Only EVENT tiles can be discarded (CAUSE_OF_DEATH and LOCATION are permanent)
  const replaceable = activeTiles.filter((t) => t.type === "EVENT");
  if (replaceable.length === 0) {
    return { tileToDiscard: activeTiles[activeTiles.length - 1], reason: "Thay thế manh mối cũ" };
  }

  let weakest = replaceable[0];
  let lowest = Infinity;
  for (const tile of replaceable) {
    const evals = evaluateTile(tile, ctx);
    const current = evals[tile.markerIndex ?? 0];
    const v = current.keyFit > 0 ? current.value : -50;
    if (v < lowest) {
      lowest = v;
      weakest = tile;
    }
  }
  return {
    tileToDiscard: weakest,
    reason: `Pháp y bỏ thẻ "${weakest.titleVi}" vì đây là dấu vết ít giúp phân biệt hung khí & bằng chứng nhất`,
  };
}

function buildContext(means: Card, clue: Card, allPlayers: Player[]): CaseContext {
  return {
    means,
    clue,
    innocentMeans: allPlayers.flatMap((p) => p.meansCards).filter((m) => m.id !== means.id),
    innocentClues: allPlayers.flatMap((p) => p.clueCards).filter((c) => c.id !== clue.id),
  };
}

// ---------------------------------------------------------------------------
// LLM providers
// ---------------------------------------------------------------------------
interface LLMMarker {
  tileId: string;
  optionIndex: number;
  reasoning?: string;
}

function buildLLMPrompt(tiles: SceneTile[], ctx: CaseContext): string {
  const traitsOf = (c: Card) =>
    Object.entries(getCardTraits(c.id))
      .sort((a, b) => b[1] - a[1])
      .map(([k]) => TRAIT_LABEL_VI[k] || k)
      .slice(0, 6)
      .join(", ");

  const tileBlocks = tiles
    .map((tile) => {
      const evals = evaluateTile(tile, ctx).sort((a, b) => b.value - a.value);
      const hints = evals
        .slice(0, 3)
        .filter((e) => e.keyFit > 0)
        .map((e) => `[${e.index}] ${tile.options[e.index].labelVi}`)
        .join(" > ");
      return `- tileId "${tile.id}" — ${tile.titleVi} / ${tile.titleEn}
${tile.options.map((o) => `    [${o.index}] ${o.labelVi} / ${o.labelEn}`).join("\n")}
    Gợi ý của hệ chuyên gia (tốt → kém): ${hints || "không có lựa chọn nào liên quan rõ — chọn phương án trung tính"}`;
    })
    .join("\n");

  return `Bạn là Nhà Giám Định Pháp Y (Forensic Scientist) trong board game "Deception: Murder in Hong Kong".
Bạn biết đáp án và chỉ được giao tiếp bằng cách đặt 1 viên đạn đánh dấu (marker) lên 1 lựa chọn của mỗi thẻ hiện trường.
Mục tiêu: giúp các thám tử đoán ĐÚNG cặp thẻ của hung thủ, phân biệt được với mọi thẻ khác trên bàn.

ĐÁP ÁN BÍ MẬT
- Hung khí (Means): ${ctx.means.nameVi} (${ctx.means.nameEn}) — đặc điểm: ${traitsOf(ctx.means)}
- Bằng chứng (Key Evidence): ${ctx.clue.nameVi} (${ctx.clue.nameEn}) — đặc điểm: ${traitsOf(ctx.clue)}

CÁC THẺ KHÁC ĐANG NẰM TRÊN BÀN (thẻ gây nhiễu — đừng chọn dấu vết khớp với chúng nhiều hơn đáp án):
- Hung khí khác: ${ctx.innocentMeans.map((c) => c.nameVi).join(", ") || "(không có)"}
- Bằng chứng khác: ${ctx.innocentClues.map((c) => c.nameVi).join(", ") || "(không có)"}

QUY TẮC
1. "Nguyên nhân tử vong" phải khớp đúng cơ chế gây chết của hung khí.
2. "Địa điểm" là nơi cả hung khí và bằng chứng có thể cùng xuất hiện một cách tự nhiên.
3. Thẻ sự kiện: chọn lựa chọn mô tả nổi bật nhất hung khí HOẶC bằng chứng, ưu tiên lựa chọn mà ít thẻ gây nhiễu cũng khớp.
4. Nếu thẻ không liên quan gì, chọn phương án trung tính nhất (ví dụ "Không có gì", "Bình thường") để không đánh lạc hướng.
5. Ưu tiên gợi ý của hệ chuyên gia trừ khi bạn có lý do rõ ràng tốt hơn.

THẺ CẦN ĐẶT DẤU
${tileBlocks}

Trả lời DUY NHẤT bằng JSON theo đúng schema:
{"markers":[{"tileId":"string","optionIndex":0,"reasoning":"1 câu tiếng Việt (tối đa 30 từ) giải thích liên hệ với hung khí/bằng chứng"}]}`;
}

function parseLLMMarkers(text: string): LLMMarker[] {
  const tryParse = (s: string): unknown => {
    try {
      return JSON.parse(s);
    } catch {
      return undefined;
    }
  };
  let data = tryParse(text);
  if (data === undefined) {
    const obj = text.match(/\{[\s\S]*\}/);
    const arr = text.match(/\[[\s\S]*\]/);
    data = (obj && tryParse(obj[0])) ?? (arr && tryParse(arr[0]));
  }
  const list = Array.isArray(data)
    ? data
    : data && typeof data === "object"
      ? (data as Record<string, unknown>).markers || (data as Record<string, unknown>).tiles
      : undefined;
  if (!Array.isArray(list)) return [];
  return list
    .filter((m): m is LLMMarker => !!m && typeof m === "object" && typeof (m as LLMMarker).tileId === "string")
    .map((m) => ({ tileId: m.tileId, optionIndex: Number(m.optionIndex), reasoning: m.reasoning }));
}

async function askGemini(prompt: string, apiKey: string): Promise<LLMMarker[]> {
  const genAI = new GoogleGenAI({ apiKey });
  const response = await genAI.models.generateContent({
    model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
    contents: prompt,
    config: { responseMimeType: "application/json", temperature: 0.2 },
  });
  return parseLLMMarkers(response.text || "");
}

async function askOpenAI(prompt: string, apiKey: string): Promise<LLMMarker[]> {
  const openai = new OpenAI({ apiKey });
  const completion = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL || "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    response_format: { type: "json_object" },
    temperature: 0.2,
  });
  return parseLLMMarkers(completion.choices[0]?.message?.content || "");
}

// ---------------------------------------------------------------------------
// Main entry point
// ---------------------------------------------------------------------------
export async function runAIForensicAnalysis(
  activeTiles: SceneTile[],
  targetMeans: Card,
  targetClue: Card,
  allPlayers: Player[],
  round: number,
  provider: "gemini" | "openai" | "heuristic" = "heuristic",
  apiKey?: string,
  newTileToPlace?: SceneTile,
  tileToDiscardId?: string,
  discardReason?: string
): Promise<AIPlacementResult> {
  const ctx = buildContext(targetMeans, targetClue, allPlayers);

  // Round 2/3: decide which EVENT tile to discard if not provided
  let computedDiscardId = tileToDiscardId;
  let computedDiscardReason = discardReason;
  if (round > 1 && newTileToPlace && !computedDiscardId) {
    const info = findWeakestSceneTileToDiscard(activeTiles, ctx);
    computedDiscardId = info.tileToDiscard.id;
    computedDiscardReason = info.reason;
  }

  const tilesToAnalyze = round === 1 ? activeTiles : newTileToPlace ? [newTileToPlace] : [];

  // 1. Expert-system choice for every tile (always computed: used as fallback and to validate LLM output)
  const expert = new Map<string, OptionEvaluation>();
  for (const tile of tilesToAnalyze) expert.set(tile.id, pickBestOption(tile, ctx));

  // 2. Optional LLM refinement
  let llm: LLMMarker[] = [];
  const key =
    provider === "gemini" ? apiKey || process.env.GEMINI_API_KEY : provider === "openai" ? apiKey || process.env.OPENAI_API_KEY : undefined;
  if (key && tilesToAnalyze.length > 0) {
    try {
      const prompt = buildLLMPrompt(tilesToAnalyze, ctx);
      llm = provider === "gemini" ? await askGemini(prompt, key) : await askOpenAI(prompt, key);
    } catch (err) {
      console.warn(`[AI Forensic] ${provider} failed, using expert system:`, err instanceof Error ? err.message : err);
    }
  }

  const notes: ForensicNote[] = [];
  const decide = (tile: SceneTile): number => {
    const best = expert.get(tile.id)!;
    const evals = evaluateTile(tile, ctx);
    const m = llm.find((x) => x.tileId === tile.id);
    let chosen = best;
    let reasoning = explainChoice(tile, best, ctx);

    if (m && Number.isInteger(m.optionIndex) && m.optionIndex >= 0 && m.optionIndex < tile.options.length) {
      const llmEval = evals[m.optionIndex];
      // Reject LLM picks that have no link to the case while a linked option exists
      // (this is what made hints feel unrelated to the crime).
      const unrelated = llmEval.keyFit <= 0 && best.keyFit > 0;
      // Reject picks that point much more at innocent cards than the expert pick.
      const misleading = llmEval.value < best.value - 8;
      if (!unrelated && !misleading) {
        chosen = llmEval;
        reasoning = (m.reasoning && m.reasoning.trim()) || explainChoice(tile, llmEval, ctx);
      }
    }

    notes.push({
      tileId: tile.id,
      tileTitle: tile.titleVi,
      selectedOption: tile.options[chosen.index].labelVi,
      reasoning,
    });
    return chosen.index;
  };

  let resultTiles: SceneTile[] = activeTiles;
  if (round === 1) {
    resultTiles = activeTiles.map((tile) => ({ ...tile, markerIndex: decide(tile), roundPlaced: 1 }));
  } else if (newTileToPlace) {
    const updatedNewTile: SceneTile = { ...newTileToPlace, markerIndex: decide(newTileToPlace), isNew: true, roundPlaced: round };
    // Replace the discarded tile in place so the board layout stays stable.
    const idx = activeTiles.findIndex((t) => t.id === computedDiscardId);
    resultTiles = activeTiles.map((t) => ({ ...t, isNew: false }));
    if (idx >= 0) resultTiles[idx] = updatedNewTile;
    else resultTiles = resultTiles.concat(updatedNewTile);
  }

  return {
    placedTiles: resultTiles,
    notes,
    discardedTileId: computedDiscardId,
    discardReason: computedDiscardReason,
  };
}
