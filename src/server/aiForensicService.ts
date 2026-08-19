import { Card, ForensicNote, Player, SceneTile } from "../types/game";
import { GoogleGenAI } from "@google/genai";
import OpenAI from "openai";

interface AIPlacementResult {
  placedTiles: SceneTile[];
  notes: ForensicNote[];
  discardedTileId?: string;
  discardReason?: string;
}

// Local Semantic Matcher for Heuristic Engine & Fallback
export function heuristicScoreOption(
  tile: SceneTile,
  optionIndex: number,
  means: Card,
  clue: Card,
  innocentMeans: Card[],
  innocentClues: Card[]
): { score: number; reason: string } {
  const opt = tile.options[optionIndex];
  const optLabelVi = opt.labelVi.toLowerCase();
  const optLabelEn = opt.labelEn.toLowerCase();
  const tileTitleVi = tile.titleVi.toLowerCase();
  
  const mVi = (means.nameVi + " " + (means.category || "")).toLowerCase();
  const mEn = means.nameEn.toLowerCase();
  const cVi = (clue.nameVi + " " + (clue.category || "")).toLowerCase();
  const cEn = clue.nameEn.toLowerCase();

  let score = 10;
  let reason = `AI liên kết với "${means.nameVi}" và "${clue.nameVi}"`;

  // --- 1. CAUSE OF DEATH (Nguyên Nhân Tử Vong) ---
  if (tile.type === "CAUSE_OF_DEATH" || tile.id === "tile_cause_of_death") {
    if (mVi.includes("độc") || mVi.includes("thuốc") || mVi.includes("xyanua") || mVi.includes("poison") || mVi.includes("axit") || mVi.includes("tiêm") || mVi.includes("nấm") || mVi.includes("nhiễm")) {
      if (optLabelEn.includes("poison") || optLabelVi.includes("độc")) {
        score += 150;
        reason = `Hung khí dạng độc dược/hóa chất (${means.nameVi}) dẫn đến trúng độc`;
      }
    } else if (mVi.includes("ngạt") || mVi.includes("thừng") || mVi.includes("gối") || mVi.includes("túi") || mVi.includes("nilon") || mVi.includes("khăn") || mVi.includes("ga độc") || mVi.includes("đuối") || mVi.includes("bọc")) {
      if (optLabelEn.includes("suffocation") || optLabelVi.includes("ngạt")) {
        score += 150;
        reason = `Hung khí gây bít đường thở/ngạt khí (${means.nameVi})`;
      }
    } else if (mVi.includes("dao") || mVi.includes("găm") || mVi.includes("kiếm") || mVi.includes("rựa") || mVi.includes("cắt") || mVi.includes("cổ") || mVi.includes("chặt") || mVi.includes("kéo")) {
      if (optLabelEn.includes("blood") || optLabelVi.includes("mất máu")) {
        score += 140;
        reason = `Vũ khí sắc bén gây vết thương hở và mất máu cấp (${means.nameVi})`;
      } else if (optLabelEn.includes("injury") || optLabelVi.includes("thương")) {
        score += 120;
        reason = `Vũ khí sắc nhọn gây chấn thương nặng (${means.nameVi})`;
      }
    } else if (mVi.includes("búa") || mVi.includes("gậy") || mVi.includes("gạch") || mVi.includes("súng") || mVi.includes("bắn") || mVi.includes("xe") || mVi.includes("lu") || mVi.includes("vực") || mVi.includes("tạ") || mVi.includes("ống thép") || mVi.includes("bê tông")) {
      if (optLabelEn.includes("injury") || optLabelVi.includes("chấn thương") || optLabelVi.includes("vết rách")) {
        score += 140;
        reason = `Lực tác động vật lý cực mạnh gây chấn thương nghiêm trọng (${means.nameVi})`;
      }
    } else if (mVi.includes("điện") || mVi.includes("lửa") || mVi.includes("nổ") || mVi.includes("nước sôi") || mVi.includes("dầu") || mVi.includes("xăng") || mVi.includes("lò")) {
      if (optLabelEn.includes("accident") || optLabelVi.includes("tai nạn") || optLabelEn.includes("injury")) {
        score += 130;
        reason = `Tai nạn do nhiệt/điện giật/bỏng nặng (${means.nameVi})`;
      }
    }
  }

  // --- 2. LOCATION OF CRIME (Hiện Trường Vụ Án - Phải dung hòa CẢ Means & Clue) ---
  if (tile.type === "LOCATION" || tile.id === "tile_location") {
    if (mVi.includes("bếp") || mVi.includes("nước sôi") || mVi.includes("lò") || cVi.includes("cà phê") || cVi.includes("đồ ăn") || cVi.includes("bánh") || cVi.includes("trứng") || cVi.includes("bát") || cVi.includes("đũa") || cVi.includes("rượu")) {
      if (optLabelEn.includes("kitchen") || optLabelVi.includes("bếp") || optLabelEn.includes("restaurant") || optLabelVi.includes("nhà hàng") || optLabelVi.includes("quán")) {
        score += 150;
        reason = `Địa điểm phù hợp với thực phẩm và đồ gia dụng bếp (${means.nameVi} + ${clue.nameVi})`;
      }
    } else if (cVi.includes("gối") || cVi.includes("quần") || cVi.includes("ảnh") || cVi.includes("nhẫn") || cVi.includes("chậu cây") || cVi.includes("cây cảnh") || mVi.includes("gậy bóng chày") || cVi.includes("tạp dề") || cVi.includes("ủi") || cVi.includes("quạt") || cVi.includes("lò xo")) {
      if (optLabelEn.includes("living") || optLabelVi.includes("phòng khách") || optLabelVi.includes("nhà riêng") || optLabelEn.includes("bedroom") || optLabelVi.includes("phòng ngủ")) {
        score += 145;
        reason = `Địa điểm sinh hoạt tại gia nơi có cả ${means.nameVi} và ${clue.nameVi}`;
      }
    } else if (cVi.includes("thẻ") || cVi.includes("khách sạn") || cVi.includes("keycard") || cVi.includes("son") || cVi.includes("gạt tàn") || cVi.includes("thuốc lá") || cVi.includes("rượu") || cVi.includes("băng") || cVi.includes("vé")) {
      if (optLabelEn.includes("hotel") || optLabelVi.includes("khách sạn") || optLabelEn.includes("pub") || optLabelVi.includes("quán bar") || optLabelVi.includes("phòng trọ")) {
        score += 145;
        reason = `Địa điểm lưu trú hoặc tụ tập giải trí (${clue.nameVi})`;
      }
    } else if (cVi.includes("máy tính") || cVi.includes("bàn phím") || cVi.includes("usb") || cVi.includes("tài liệu") || cVi.includes("chữ kí") || cVi.includes("chứng chỉ") || cVi.includes("tiền") || cVi.includes("kho") || cVi.includes("từ điển") || cVi.includes("ghim")) {
      if (optLabelEn.includes("workplace") || optLabelVi.includes("văn phòng") || optLabelEn.includes("bank") || optLabelVi.includes("ngân hàng") || optLabelEn.includes("school") || optLabelVi.includes("trường")) {
        score += 145;
        reason = `Không gian làm việc/hành chính liên quan đến ${clue.nameVi}`;
      }
    } else if (mVi.includes("neo") || mVi.includes("cần câu") || mVi.includes("cát") || mVi.includes("biển") || mVi.includes("gạch") || mVi.includes("xi măng") || mVi.includes("búa") || mVi.includes("xe lu") || mVi.includes("khoan") || mVi.includes("dầu hỏa")) {
      if (optLabelEn.includes("construction") || optLabelVi.includes("công trường") || optLabelEn.includes("alley") || optLabelVi.includes("hẻm") || optLabelEn.includes("harbor") || optLabelVi.includes("bến tàu") || optLabelEn.includes("park") || optLabelVi.includes("công viên")) {
        score += 140;
        reason = `Hiện trường thi công hoặc khu vực ngoài trời gắn liền ${means.nameVi}`;
      }
    }
  }

  // --- 3. DẤU VẾT ĐỂ LẠI (Trace Left Behind) ---
  if (tileTitleVi.includes("dấu vết") || tile.id.includes("trace") || tile.id.includes("evidence_left")) {
    if (cVi.includes("máu") || cVi.includes("vân tay") || cVi.includes("tóc") || cVi.includes("mẫu") || cVi.includes("móng") || cVi.includes("ong") || cVi.includes("mốc") || cVi.includes("mận")) {
      if (optLabelVi.includes("sinh học") || optLabelEn.includes("biological") || optLabelVi.includes("vân tay") || optLabelEn.includes("fingerprint")) {
        score += 150;
        reason = `Bằng chứng để lại dấu vết sinh học/vân tay (${clue.nameVi})`;
      }
    } else if (cVi.includes("vé") || cVi.includes("chứng chỉ") || cVi.includes("tiền") || cVi.includes("từ điển") || cVi.includes("chữ kí") || cVi.includes("giấy")) {
      if (optLabelVi.includes("giấy") || optLabelEn.includes("paper") || optLabelVi.includes("văn bản") || optLabelEn.includes("document")) {
        score += 150;
        reason = `Dấu vết để lại là giấy tờ/văn bản (${clue.nameVi})`;
      }
    } else if (cVi.includes("son") || cVi.includes("dầu") || cVi.includes("bùn") || cVi.includes("sơn") || cVi.includes("nước") || cVi.includes("chất lỏng")) {
      if (optLabelVi.includes("chất lỏng") || optLabelEn.includes("fluid") || optLabelVi.includes("vết bẩn") || optLabelEn.includes("stain")) {
        score += 140;
        reason = `Dấu vết chất lỏng/vết màu sót lại (${clue.nameVi})`;
      }
    } else if (cVi.includes("áo") || cVi.includes("quần") || cVi.includes("vải") || cVi.includes("khăn") || cVi.includes("giày") || cVi.includes("tất")) {
      if (optLabelVi.includes("sợi vải") || optLabelEn.includes("fabric") || optLabelVi.includes("trang phục") || optLabelEn.includes("clothes")) {
        score += 140;
        reason = `Dấu vết rơi rụng sợi vải từ đồ dùng cá nhân (${clue.nameVi})`;
      }
    }
  }

  // --- 4. BIỂU CẢM / TÌNH TRẠNG NẠN NHÂN (Victim's Expression / State) ---
  if (tileTitleVi.includes("biểu cảm") || tileTitleVi.includes("tình trạng") || tile.id.includes("expression") || tile.id.includes("state")) {
    if (mVi.includes("độc") || mVi.includes("ngủ") || mVi.includes("bịt") || mVi.includes("gối")) {
      if (optLabelVi.includes("thanh thản") || optLabelEn.includes("peaceful") || optLabelVi.includes("nguyên vẹn") || optLabelEn.includes("calm")) {
        score += 130;
        reason = `Tử vong do ngộ độc/trong giấc ngủ không kịp phản ứng (${means.nameVi})`;
      }
    } else if (mVi.includes("chém") || mVi.includes("cắt") || mVi.includes("khoan") || mVi.includes("búa") || mVi.includes("súng") || mVi.includes("rựa")) {
      if (optLabelVi.includes("hãi hùng") || optLabelEn.includes("frightened") || optLabelVi.includes("đau đớn") || optLabelEn.includes("pain") || optLabelVi.includes("chật vật") || optLabelEn.includes("struggle")) {
        score += 135;
        reason = `Bị tấn công trực diện gây kinh hoàng và giằng co (${means.nameVi})`;
      }
    }
  }

  // --- 5. ĐỘNG CƠ GÂY ÁN (Motive of Crime) ---
  if (tileTitleVi.includes("động cơ") || tile.id.includes("motive")) {
    if (cVi.includes("nhẫn") || cVi.includes("son") || cVi.includes("ảnh") || cVi.includes("quà") || cVi.includes("hình xăm")) {
      if (optLabelVi.includes("tình ái") || optLabelEn.includes("jealousy") || optLabelVi.includes("thù hằn") || optLabelEn.includes("revenge")) {
        score += 140;
        reason = `Mối quan hệ cá nhân/tình cảm dẫn đến án mạng (${clue.nameVi})`;
      }
    } else if (cVi.includes("tiền") || cVi.includes("kho") || cVi.includes("ngân hàng") || cVi.includes("vé số") || cVi.includes("chứng chỉ") || cVi.includes("hộp dụng cụ")) {
      if (optLabelVi.includes("tiền bạc") || optLabelEn.includes("money") || optLabelVi.includes("tống tiền") || optLabelEn.includes("blackmail")) {
        score += 140;
        reason = `Động cơ tranh chấp tài sản/tiền bạc (${clue.nameVi})`;
      }
    }
  }

  // Deduct points if this option also matches innocent players' cards
  innocentMeans.forEach(im => {
    if (im.nameVi && optLabelVi.includes(im.nameVi.toLowerCase())) {
      score -= 15;
    }
  });

  return { score, reason };
}

// Find the weakest EVENT scene tile to discard in Round 2 and Round 3
export function findWeakestSceneTileToDiscard(
  activeTiles: SceneTile[],
  means: Card,
  clue: Card,
  innocentMeans: Card[],
  innocentClues: Card[]
): { tileToDiscard: SceneTile; reason: string } {
  // Only EVENT tiles can be discarded (CAUSE_OF_DEATH and LOCATION are permanent)
  const replaceableTiles = activeTiles.filter(t => t.type === "EVENT");

  if (replaceableTiles.length === 0) {
    return { tileToDiscard: activeTiles[2] || activeTiles[0], reason: "Thay thế manh mối cũ" };
  }

  let lowestScore = 999999;
  let weakestTile = replaceableTiles[0];
  let discardReason = `Thẻ "${weakestTile.titleVi}" ít liên quan nhất đến vụ án`;

  replaceableTiles.forEach(tile => {
    const currentMarkerIdx = tile.markerIndex ?? 0;
    const scoreResult = heuristicScoreOption(tile, currentMarkerIdx, means, clue, innocentMeans, innocentClues);

    if (scoreResult.score < lowestScore) {
      lowestScore = scoreResult.score;
      weakestTile = tile;
      discardReason = `AI loại bỏ thẻ "${tile.titleVi}" vì ít liên quan nhất đến hung khí & bằng chứng`;
    }
  });

  return { tileToDiscard: weakestTile, reason: discardReason };
}

// AI Placement Analysis
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
  const innocentMeans = allPlayers.flatMap(p => p.meansCards).filter(m => m.id !== targetMeans.id);
  const innocentClues = allPlayers.flatMap(p => p.clueCards).filter(c => c.id !== targetClue.id);

  // For Round 2/3: Determine which EVENT tile to discard if not provided
  let computedDiscardId = tileToDiscardId;
  let computedDiscardReason = discardReason;

  if (round > 1 && newTileToPlace && !computedDiscardId) {
    const discardInfo = findWeakestSceneTileToDiscard(activeTiles, targetMeans, targetClue, innocentMeans, innocentClues);
    computedDiscardId = discardInfo.tileToDiscard.id;
    computedDiscardReason = discardInfo.reason;
  }

  const tilesToAnalyze = round === 1 ? activeTiles : (newTileToPlace ? [newTileToPlace] : []);

  // 1. Google Gemini Provider
  if (provider === "gemini") {
    try {
      const genAI = new GoogleGenAI({ apiKey: apiKey || process.env.GEMINI_API_KEY || "" });
      const prompt = `You are the master Forensic Scientist in the game Deception: Murder in Hong Kong.
Your sole goal is to place forensic markers (0-5) on scene tiles to guide detectives to the EXACT combination of Key Means and Key Clue.

SECRET MURDER COMBINATION:
- Key Means (Hung Khí): ${targetMeans.nameVi} (${targetMeans.nameEn})
- Key Clue (Bằng Chứng): ${targetClue.nameVi} (${targetClue.nameEn})

CRITICAL LOGIC RULES:
1. ALWAYS cross-correlate BOTH items together!
2. For LOCATION OF CRIME: Choose a location where BOTH items naturally coexist.
3. For CAUSE OF DEATH: Accurately match the physical mechanism of the Key Means (${targetMeans.nameVi}).
4. For EVENT TILES: Pick the option that uniquely describes a prominent attribute of the Key Clue (${targetClue.nameVi}) or Key Means (${targetMeans.nameVi}).

Tiles to mark:
${tilesToAnalyze.map(t => `
Tile ID: "${t.id}" (${t.titleVi} / ${t.titleEn})
Options:
${t.options.map(o => `  [${o.index}] ${o.labelVi} / ${o.labelEn}`).join("\n")}
`).join("\n")}

Respond ONLY with a valid JSON array in this exact schema:
[
  {
    "tileId": "string",
    "optionIndex": number,
    "reasoning": "Detailed sentence in Vietnamese explaining how this choice connects BOTH Key Means and Key Clue"
  }
]`;

      const response = await genAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const text = response.text || "";
      const jsonMatch = text.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]) as Array<{ tileId: string; optionIndex: number; reasoning: string }>;
        const notes: ForensicNote[] = [];
        let resultTiles: SceneTile[] = [];

        if (round === 1) {
          resultTiles = activeTiles.map(tile => {
            const match = parsed.find(p => p.tileId === tile.id);
            const markerIdx = (match && match.optionIndex >= 0 && match.optionIndex < tile.options.length)
              ? match.optionIndex
              : 0;
            const chosenOpt = tile.options[markerIdx];
            notes.push({
              tileId: tile.id,
              tileTitle: tile.titleVi,
              selectedOption: chosenOpt.labelVi,
              reasoning: match?.reasoning || `AI phân tích dấu vết phù hợp nhất với ${chosenOpt.labelVi}`,
            });
            return { ...tile, markerIndex: markerIdx, roundPlaced: 1 };
          });
        } else if (newTileToPlace) {
          const match = parsed.find(p => p.tileId === newTileToPlace.id);
          const markerIdx = (match && match.optionIndex >= 0 && match.optionIndex < newTileToPlace.options.length)
            ? match.optionIndex
            : 0;
          const chosenOpt = newTileToPlace.options[markerIdx];
          const updatedNewTile = { ...newTileToPlace, markerIndex: markerIdx, isNew: true, roundPlaced: round };
          notes.push({
            tileId: newTileToPlace.id,
            tileTitle: newTileToPlace.titleVi,
            selectedOption: chosenOpt.labelVi,
            reasoning: match?.reasoning || `AI bổ sung manh mối mới: ${chosenOpt.labelVi}`,
          });
          // Exactly replace the computedDiscardId tile so active tiles remain at 6
          resultTiles = activeTiles.filter(t => t.id !== computedDiscardId).concat(updatedNewTile);
        }

        return { placedTiles: resultTiles, notes, discardedTileId: computedDiscardId, discardReason: computedDiscardReason };
      }
    } catch (err) {
      console.warn("Gemini API call fell back to local Heuristic Engine:", err);
    }
  }

  // 2. OpenAI Provider
  if (provider === "openai" && apiKey) {
    try {
      const openai = new OpenAI({ apiKey });
      const prompt = `You are the master Forensic Scientist in Hong Kong.
Key Means: ${targetMeans.nameVi} (${targetMeans.nameEn})
Key Clue: ${targetClue.nameVi} (${targetClue.nameEn})

Tiles to mark:
${tilesToAnalyze.map(t => `Tile ID: ${t.id} (${t.titleVi}):\n${t.options.map(o => `[${o.index}] ${o.labelVi}`).join("\n")}`).join("\n\n")}

Return a JSON array of { tileId: string, optionIndex: number, reasoning: string } that connects BOTH items seamlessly.`;

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" },
      });

      const content = completion.choices[0]?.message?.content || "{}";
      const parsedData = JSON.parse(content);
      const parsed = Array.isArray(parsedData) ? parsedData : (parsedData.markers || parsedData.tiles || []);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const notes: ForensicNote[] = [];
        let resultTiles: SceneTile[] = [];

        if (round === 1) {
          resultTiles = activeTiles.map(tile => {
            const match = parsed.find((p: { tileId: string; optionIndex: number; reasoning: string }) => p.tileId === tile.id);
            const markerIdx = (match && match.optionIndex >= 0 && match.optionIndex < tile.options.length) ? match.optionIndex : 0;
            const chosenOpt = tile.options[markerIdx];
            notes.push({
              tileId: tile.id,
              tileTitle: tile.titleVi,
              selectedOption: chosenOpt.labelVi,
              reasoning: match?.reasoning || `AI phân tích dấu vết phù hợp nhất với ${chosenOpt.labelVi}`,
            });
            return { ...tile, markerIndex: markerIdx, roundPlaced: 1 };
          });
        } else if (newTileToPlace) {
          const match = parsed.find((p: { tileId: string; optionIndex: number; reasoning: string }) => p.tileId === newTileToPlace.id);
          const markerIdx = (match && match.optionIndex >= 0 && match.optionIndex < newTileToPlace.options.length) ? match.optionIndex : 0;
          const chosenOpt = newTileToPlace.options[markerIdx];
          const updatedNewTile = { ...newTileToPlace, markerIndex: markerIdx, isNew: true, roundPlaced: round };
          notes.push({
            tileId: newTileToPlace.id,
            tileTitle: newTileToPlace.titleVi,
            selectedOption: chosenOpt.labelVi,
            reasoning: match?.reasoning || `AI bổ sung manh mối mới: ${chosenOpt.labelVi}`,
          });
          // Exactly replace the computedDiscardId tile so active tiles remain at 6
          resultTiles = activeTiles.filter(t => t.id !== computedDiscardId).concat(updatedNewTile);
        }

        return { placedTiles: resultTiles, notes, discardedTileId: computedDiscardId, discardReason: computedDiscardReason };
      }
    } catch (err) {
      console.warn("OpenAI API call fell back to local Heuristic Engine:", err);
    }
  }

  // 3. Smart Enhanced Heuristic Engine (Cross-correlation of Means & Clues)
  const notes: ForensicNote[] = [];
  let resultTiles: SceneTile[] = [];

  if (round === 1) {
    resultTiles = activeTiles.map(tile => {
      let bestIndex = 0;
      let highestScore = -999;
      let bestReason = "";

      tile.options.forEach((_, idx) => {
        const result = heuristicScoreOption(tile, idx, targetMeans, targetClue, innocentMeans, innocentClues);
        if (result.score > highestScore) {
          highestScore = result.score;
          bestIndex = idx;
          bestReason = result.reason;
        }
      });

      const selectedOpt = tile.options[bestIndex];
      notes.push({
        tileId: tile.id,
        tileTitle: tile.titleVi,
        selectedOption: selectedOpt.labelVi,
        reasoning: bestReason || `AI ghim dấu vết liên kết giữa ${targetMeans.nameVi} và ${targetClue.nameVi}`,
      });

      return {
        ...tile,
        markerIndex: bestIndex,
        roundPlaced: 1,
      };
    });
  } else if (newTileToPlace) {
    let bestIndex = 0;
    let highestScore = -999;
    let bestReason = "";

    newTileToPlace.options.forEach((_, idx) => {
      const result = heuristicScoreOption(newTileToPlace, idx, targetMeans, targetClue, innocentMeans, innocentClues);
      if (result.score > highestScore) {
        highestScore = result.score;
        bestIndex = idx;
        bestReason = result.reason;
      }
    });

    const selectedOpt = newTileToPlace.options[bestIndex];
    const updatedNewTile: SceneTile = {
      ...newTileToPlace,
      markerIndex: bestIndex,
      isNew: true,
      roundPlaced: round,
    };

    notes.push({
      tileId: newTileToPlace.id,
      tileTitle: newTileToPlace.titleVi,
      selectedOption: selectedOpt.labelVi,
      reasoning: bestReason || `AI bổ sung gợi ý mới thu hẹp nghi phạm`,
    });

    // Exactly replace the computedDiscardId tile so active tiles remain at 6
    resultTiles = activeTiles.filter(t => t.id !== computedDiscardId).concat(updatedNewTile);
  }

  return {
    placedTiles: resultTiles,
    notes,
    discardedTileId: computedDiscardId,
    discardReason: computedDiscardReason,
  };
}
