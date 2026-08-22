import { Card, GamePhase, GameState, MurderSelection, Player, Role, RoomSettings, SceneTile, SolveAttempt } from "../types/game";
import meansData from "../data/means.json";
import cluesData from "../data/clues.json";
import sceneTilesData from "../data/sceneTiles.json";
import { runAIForensicAnalysis } from "./aiForensicService";

const AVATARS = [
  "senior_inspector",
  "forensic_specialist",
  "undercover_agent",
  "femme_fatale",
  "triad_boss",
  "tactical_officer",
  "medical_examiner",
  "crime_journalist"
];


const BOT_NAMES = [
  "Thanh Tra Trần", "Detective Wong", "Cảnh Sát Lý", "Bác Sĩ Trương", "Thám Tử Mai", "Sĩ Quan Lâm"
];

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export class GameManager {
  private rooms: Map<string, GameState> = new Map();
  private timers: Map<string, NodeJS.Timeout> = new Map();
  private ioEmitCallback?: (roomId: string, event: string, data: unknown) => void;

  public setEmitCallback(cb: (roomId: string, event: string, data: unknown) => void) {
    this.ioEmitCallback = cb;
  }

  private broadcast(roomId: string, event: string, data: unknown) {
    if (this.ioEmitCallback) {
      this.ioEmitCallback(roomId, event, data);
    }
  }

  public getRoom(roomId: string): GameState | undefined {
    return this.rooms.get(roomId);
  }

  public createRoom(hostId: string, hostName: string, settings?: Partial<RoomSettings>): GameState {
    const roomId = "HK-" + Math.floor(1000 + Math.random() * 9000);
    const defaultSettings: RoomSettings = {
      briefingDurationSeconds: 60, // 30s / 60s / 120s inspection before night
      roundDurationSeconds: 90,
      enableAccomplice: false,
      enableWitness: false,
      aiProvider: "gemini",
      language: "vi",
      ...settings,
    };


    const hostPlayer: Player = {
      id: hostId,
      name: hostName.trim() || "Thám tử trưởng",
      avatar: AVATARS[0],
      isHost: true,
      isBot: false,
      meansCards: [],
      clueCards: [],
      hasBadge: true,
      isOnline: true,
    };

    const gameState: GameState = {
      roomId,
      phase: "LOBBY",
      currentRound: 1,
      roundTimeRemaining: defaultSettings.roundDurationSeconds,
      settings: defaultSettings,
      players: [hostPlayer],
      activeTiles: [],
      tileDeck: [],
      discardedTiles: [],
      solveAttempts: [],
      logs: [
        {
          id: "log_" + Date.now(),
          type: "SYSTEM",
          messageVi: `Phòng ${roomId} đã được tạo bởi ${hostPlayer.name}.`,
          messageEn: `Room ${roomId} was created by ${hostPlayer.name}.`,
          timestamp: Date.now(),
        }
      ],
    };

    this.rooms.set(roomId, gameState);
    return gameState;
  }

  public joinRoom(roomId: string, playerId: string, playerName: string): { success: boolean; error?: string; state?: GameState } {
    const room = this.rooms.get(roomId);
    if (!room) {
      return { success: false, error: "Phòng không tồn tại hoặc đã bị hủy." };
    }
    if (room.phase !== "LOBBY") {
      // Reconnection check
      const existing = room.players.find(p => p.id === playerId || p.name === playerName);
      if (existing) {
        existing.id = playerId;
        existing.isOnline = true;
        return { success: true, state: room };
      }
      return { success: false, error: "Ván chơi đang diễn ra, không thể tham gia." };
    }
    if (room.players.length >= 8) {
      return { success: false, error: "Phòng đã đủ 8 người chơi." };
    }

    const newPlayer: Player = {
      id: playerId,
      name: playerName.trim() || `Thám tử ${room.players.length + 1}`,
      avatar: AVATARS[room.players.length % AVATARS.length],
      isHost: false,
      isBot: false,
      meansCards: [],
      clueCards: [],
      hasBadge: true,
      isOnline: true,
    };

    room.players.push(newPlayer);
    room.logs.push({
      id: "log_" + Date.now(),
      type: "SYSTEM",
      messageVi: `${newPlayer.name} đã tham gia phòng.`,
      messageEn: `${newPlayer.name} joined the room.`,
      timestamp: Date.now(),
    });

    return { success: true, state: room };
  }

  public addBotPlayer(roomId: string): GameState | undefined {
    const room = this.rooms.get(roomId);
    if (!room || room.phase !== "LOBBY" || room.players.length >= 8) return undefined;

    const botIndex = room.players.length;
    const botName = BOT_NAMES[botIndex % BOT_NAMES.length] + ` [BOT]`;
    const botPlayer: Player = {
      id: "bot_" + Math.random().toString(36).substring(2, 9),
      name: botName,
      avatar: AVATARS[botIndex % AVATARS.length],
      isHost: false,
      isBot: true,
      meansCards: [],
      clueCards: [],
      hasBadge: true,
      isOnline: true,
    };

    room.players.push(botPlayer);
    room.logs.push({
      id: "log_" + Date.now(),
      type: "SYSTEM",
      messageVi: `${botPlayer.name} (AI Điều tra viên) đã vào bàn.`,
      messageEn: `${botPlayer.name} joined the table.`,
      timestamp: Date.now(),
    });

    return room;
  }

  public removePlayer(roomId: string, playerId: string): GameState | undefined {
    const room = this.rooms.get(roomId);
    if (!room) return undefined;

    const idx = room.players.findIndex(p => p.id === playerId);
    if (idx === -1) return room;

    const removed = room.players[idx];
    if (room.phase === "LOBBY") {
      room.players.splice(idx, 1);
      if (room.players.length === 0) {
        this.clearRoomTimer(roomId);
        this.rooms.delete(roomId);
        return undefined;
      }
      if (removed.isHost && room.players.length > 0) {
        room.players[0].isHost = true;
      }
    } else {
      removed.isOnline = false;
    }

    return room;
  }

  public updateSettings(roomId: string, newSettings: Partial<RoomSettings>): GameState | undefined {
    const room = this.rooms.get(roomId);
    if (!room || room.phase !== "LOBBY") return undefined;

    room.settings = { ...room.settings, ...newSettings };
    return room;
  }

  public async startGame(roomId: string): Promise<GameState | undefined> {
    const room = this.rooms.get(roomId);
    if (!room || room.players.length < 4) return undefined;

    // 1. Deal 4 Means & 4 Clues to each player
    const shuffledMeans: Card[] = shuffleArray(meansData as Card[]);
    const shuffledClues: Card[] = shuffleArray(cluesData as Card[]);

    room.players.forEach((player, i) => {
      player.meansCards = shuffledMeans.slice(i * 4, (i + 1) * 4);
      player.clueCards = shuffledClues.slice(i * 4, (i + 1) * 4);
      player.hasBadge = true;
      player.role = undefined; // Roles are hidden/unassigned until Night
    });

    // 2. Prepare Scene Tiles (Tiles remain undealt until Murderer picks cards after Night)
    room.activeTiles = [];
    room.tileDeck = [];
    room.discardedTiles = [];
    room.currentRound = 1;
    room.solveAttempts = [];
    room.murderSelection = undefined;
    room.winner = undefined;


    const briefingSeconds = room.settings.briefingDurationSeconds ?? 60;

    if (briefingSeconds > 0) {
      room.phase = "BRIEFING";
      room.roundTimeRemaining = briefingSeconds;

      room.logs.push({
        id: "log_" + Date.now(),
        type: "SYSTEM",
        messageVi: `🔍 XEM XÉT THẺ BÀI (BRIEFING): Mọi người có ${briefingSeconds}s để quan sát tất cả Hung Khí & Bằng Chứng trên bàn trước khi phân vai và màn đêm buông xuống!`,
        messageEn: `🔍 BRIEFING PHASE: You have ${briefingSeconds}s to inspect everyone's Means and Clues before night falls!`,
        timestamp: Date.now(),
      });

      this.startBriefingTimer(roomId);
      return room;
    }

    return this.startNightPhase(roomId);
  }

  private startBriefingTimer(roomId: string) {
    this.clearRoomTimer(roomId);

    const timer = setInterval(async () => {
      const room = this.rooms.get(roomId);
      if (!room || room.phase !== "BRIEFING") {
        this.clearRoomTimer(roomId);
        return;
      }

      room.roundTimeRemaining -= 1;
      this.broadcast(roomId, "timer_tick", { timeRemaining: room.roundTimeRemaining });

      if (room.roundTimeRemaining <= 0) {
        this.clearRoomTimer(roomId);
        await this.startNightPhase(roomId);
      }
    }, 1000);

    this.timers.set(roomId, timer);
  }

  public async skipBriefing(roomId: string, playerId: string): Promise<GameState | undefined> {
    const room = this.rooms.get(roomId);
    if (!room || room.phase !== "BRIEFING") return undefined;

    // Any player or host can trigger skip to night if ready
    this.clearRoomTimer(roomId);
    return this.startNightPhase(roomId);
  }

  public async startNightPhase(roomId: string): Promise<GameState | undefined> {
    const room = this.rooms.get(roomId);
    if (!room) return undefined;

    this.clearRoomTimer(roomId);

    // Assign Roles Secretly
    const rolesPool: Role[] = ["MURDERER"];
    if (room.settings.enableAccomplice && room.players.length >= 4) {
      rolesPool.push("ACCOMPLICE");
    }
    if (room.settings.enableWitness && room.players.length >= 4) {
      rolesPool.push("WITNESS");
    }
    while (rolesPool.length < room.players.length) {
      rolesPool.push("INVESTIGATOR");
    }

    const shuffledRoles = shuffleArray(rolesPool);
    room.players.forEach((player, i) => {
      player.role = shuffledRoles[i];
    });

    room.phase = "NIGHT";
    room.roundTimeRemaining = 0;

    room.logs.push({
      id: "log_" + Date.now(),
      type: "ALERT",
      messageVi: "🌙 ĐÊM ĐEN BUÔNG XUỐNG: Các vai trò đã được bí mật phân phát! Hung thủ đang chọn 1 Hung Khí và 1 Bằng Chứng...",
      messageEn: "🌙 NIGHT FALLS: Roles have been distributed. The Murderer is secretly selecting the Means and Clue...",
      timestamp: Date.now(),
    });

    this.broadcast(roomId, "game_state_update", this.getSanitizedState(room));

    // If Murderer is a Bot, auto-select after 2 seconds
    const murderer = room.players.find(p => p.role === "MURDERER");
    if (murderer && murderer.isBot) {
      setTimeout(() => {
        const randomMeans = murderer.meansCards[Math.floor(Math.random() * murderer.meansCards.length)];
        const randomClue = murderer.clueCards[Math.floor(Math.random() * murderer.clueCards.length)];
        this.submitMurderSelection(roomId, murderer.id, randomMeans.id, randomClue.id);
      }, 2000);
    }

    return room;
  }


  public async submitMurderSelection(
    roomId: string,
    murdererId: string,
    meansCardId: string,
    clueCardId: string
  ): Promise<GameState | undefined> {
    const room = this.rooms.get(roomId);
    if (!room || room.phase !== "NIGHT") return undefined;

    const murderer = room.players.find(p => p.id === murdererId && p.role === "MURDERER");
    if (!murderer) return undefined;

    const means = murderer.meansCards.find(m => m.id === meansCardId);
    const clue = murderer.clueCards.find(c => c.id === clueCardId);
    if (!means || !clue) return undefined;

    room.murderSelection = {
      murdererId,
      meansCardId,
      clueCardId,
    };

    room.phase = "AI_ANALYZING";
    room.logs.push({
      id: "log_" + Date.now(),
      type: "FORENSIC",
      messageVi: "Pháp y AI đang giám định hiện trường và lựa chọn các dấu vết manh mối tối ưu nhất...",
      messageEn: "AI Forensic Scientist is analyzing the crime scene and placing forensic markers...",
      timestamp: Date.now(),
    });

    this.broadcast(roomId, "game_state_update", this.getSanitizedState(room));

    // Draw 6 Scene Tiles for the first time (Forensic Scientist deals cards only after murder selection)
    const allSceneTiles = shuffleArray(sceneTilesData as SceneTile[]);
    const causeOfDeathTile = allSceneTiles.find(t => t.type === "CAUSE_OF_DEATH")!;
    const locationTile = allSceneTiles.find(t => t.type === "LOCATION")!;
    const eventTiles = allSceneTiles.filter(t => t.type === "EVENT");

    const initial4Events = eventTiles.slice(0, 4);
    const initial6Tiles: SceneTile[] = [causeOfDeathTile, locationTile, ...initial4Events];
    room.tileDeck = eventTiles.slice(4);
    room.discardedTiles = [];

    // Run AI Forensic Placement
    try {
      const aiResult = await runAIForensicAnalysis(
        initial6Tiles,
        means,
        clue,
        room.players,
        1,
        room.settings.aiProvider,
        room.settings.apiKey
      );

      room.activeTiles = aiResult.placedTiles;
      room.forensicNotes = aiResult.notes;
    } catch (err) {
      console.error("AI Forensic Error:", err);
      room.activeTiles = initial6Tiles;
    }


    // Move to Day Round 1
    room.phase = "DAY_ROUND_1";
    room.currentRound = 1;
    room.roundTimeRemaining = room.settings.roundDurationSeconds || 90;

    room.logs.push({
      id: "log_" + Date.now(),
      type: "SYSTEM",
      messageVi: `VÒNG 1 BẮT ĐẦU: Pháp y đã ghim 6 dấu vết lên bảng. Mọi người có ${room.roundTimeRemaining}s để thảo luận và phá án!`,
      messageEn: `ROUND 1 STARTED: Forensic markers placed. You have ${room.roundTimeRemaining}s to discuss and solve!`,
      timestamp: Date.now(),
    });

    this.startRoundTimer(roomId);
    return room;
  }

  private startRoundTimer(roomId: string) {
    this.clearRoomTimer(roomId);

    if (this.rooms.get(roomId)?.settings.roundDurationSeconds === 0) {
      // Unlimited timer
      return;
    }

    const timer = setInterval(async () => {
      const room = this.rooms.get(roomId);
      if (!room || !room.phase.startsWith("DAY_ROUND_")) {
        this.clearRoomTimer(roomId);
        return;
      }

      room.roundTimeRemaining -= 1;
      this.broadcast(roomId, "timer_tick", { timeRemaining: room.roundTimeRemaining });

      if (room.roundTimeRemaining <= 0) {
        this.clearRoomTimer(roomId);
        await this.advanceRound(roomId);
      }
    }, 1000);

    this.timers.set(roomId, timer);
  }

  private clearRoomTimer(roomId: string) {
    const timer = this.timers.get(roomId);
    if (timer) {
      clearInterval(timer);
      this.timers.delete(roomId);
    }
  }

  public async advanceRound(roomId: string): Promise<GameState | undefined> {
    const room = this.rooms.get(roomId);
    if (!room) return undefined;

    this.clearRoomTimer(roomId);

    if (room.currentRound === 1) {
      room.phase = "ROUND_TRANSITION_2";
      room.currentRound = 2;
      this.broadcast(roomId, "game_state_update", this.getSanitizedState(room));

      // Draw 1 new tile from deck
      if (room.tileDeck.length > 0 && room.murderSelection) {
        const newTile = room.tileDeck.pop()!;
        const murderer = room.players.find(p => p.id === room.murderSelection!.murdererId)!;
        const means = murderer.meansCards.find(m => m.id === room.murderSelection!.meansCardId)!;
        const clue = murderer.clueCards.find(c => c.id === room.murderSelection!.clueCardId)!;

        const aiResult = await runAIForensicAnalysis(
          room.activeTiles,
          means,
          clue,
          room.players,
          2,
          room.settings.aiProvider,
          room.settings.apiKey,
          newTile
        );

        let discardedTileName = "";
        if (aiResult.discardedTileId) {
          const disc = room.activeTiles.find(t => t.id === aiResult.discardedTileId);
          if (disc) {
            discardedTileName = disc.titleVi;
            room.discardedTiles.push(disc);
          }
        }
        room.activeTiles = aiResult.placedTiles;
        if (aiResult.notes) {
          room.forensicNotes = [...(room.forensicNotes || []), ...aiResult.notes];
        }

        const newTileNote = aiResult.notes?.find(n => n.tileId === newTile.id);
        const markedOption = newTileNote ? `[${newTileNote.selectedOption}]` : "";

        room.logs.push({
          id: "log_" + Date.now(),
          type: "FORENSIC",
          messageVi: `VÒNG 2 BẮT ĐẦU: Pháp y đã BỎ thẻ "${discardedTileName || "ít liên quan"}" và THAY THẾ bằng thẻ mới "${newTile.titleVi}" -> Ghim dấu vết: ${markedOption}!`,
          messageEn: `ROUND 2 STARTED: Forensic Scientist discarded "${discardedTileName || "old tile"}" and replaced it with "${newTile.titleEn}" -> Marker: ${markedOption}!`,
          timestamp: Date.now(),
        });
      } else {
        room.logs.push({
          id: "log_" + Date.now(),
          type: "FORENSIC",
          messageVi: `VÒNG 2 BẮT ĐẦU: Tiếp tục thảo luận các manh mối trên bàn!`,
          messageEn: `ROUND 2 STARTED: Continue discussing the clues on the board!`,
          timestamp: Date.now(),
        });
      }

      room.phase = "DAY_ROUND_2";
      room.roundTimeRemaining = room.settings.roundDurationSeconds || 90;
      this.startRoundTimer(roomId);
      this.broadcast(roomId, "game_state_update", this.getSanitizedState(room));
      return room;
    }

    if (room.currentRound === 2) {
      room.phase = "ROUND_TRANSITION_3";
      room.currentRound = 3;
      this.broadcast(roomId, "game_state_update", this.getSanitizedState(room));

      // Draw 1 new tile from deck
      if (room.tileDeck.length > 0 && room.murderSelection) {
        const newTile = room.tileDeck.pop()!;
        const murderer = room.players.find(p => p.id === room.murderSelection!.murdererId)!;
        const means = murderer.meansCards.find(m => m.id === room.murderSelection!.meansCardId)!;
        const clue = murderer.clueCards.find(c => c.id === room.murderSelection!.clueCardId)!;

        const aiResult = await runAIForensicAnalysis(
          room.activeTiles,
          means,
          clue,
          room.players,
          3,
          room.settings.aiProvider,
          room.settings.apiKey,
          newTile
        );

        let discardedTileName = "";
        if (aiResult.discardedTileId) {
          const disc = room.activeTiles.find(t => t.id === aiResult.discardedTileId);
          if (disc) {
            discardedTileName = disc.titleVi;
            room.discardedTiles.push(disc);
          }
        }
        room.activeTiles = aiResult.placedTiles;
        if (aiResult.notes) {
          room.forensicNotes = [...(room.forensicNotes || []), ...aiResult.notes];
        }

        const newTileNote = aiResult.notes?.find(n => n.tileId === newTile.id);
        const markedOption = newTileNote ? `[${newTileNote.selectedOption}]` : "";

        room.logs.push({
          id: "log_" + Date.now(),
          type: "FORENSIC",
          messageVi: `VÒNG 3 (VÒNG CUỐI): Pháp y đã BỎ thẻ "${discardedTileName || "ít liên quan"}" và THAY THẾ bằng thẻ quyết định "${newTile.titleVi}" -> Ghim: ${markedOption}! Hãy tận dụng lượt phá án!`,
          messageEn: `ROUND 3 (FINAL ROUND): Discarded "${discardedTileName || "old tile"}" and replaced with "${newTile.titleEn}" -> Marker: ${markedOption}! Make your solve count!`,
          timestamp: Date.now(),
        });
      } else {
        room.logs.push({
          id: "log_" + Date.now(),
          type: "FORENSIC",
          messageVi: `VÒNG 3 (VÒNG CUỐI): Hãy tận dụng lượt phá án cuối cùng!`,
          messageEn: `ROUND 3 (FINAL ROUND): Make your final solve count!`,
          timestamp: Date.now(),
        });
      }
      this.startRoundTimer(roomId);
      this.broadcast(roomId, "game_state_update", this.getSanitizedState(room));
      return room;
    }

    // If Round 3 ends without solution -> Murderer Wins
    return this.endGameWithWinner(roomId, "MURDERER", "Hết 3 vòng thảo luận mà Điều tra viên chưa phá được án. Hung thủ tẩu thoát thành công!");
  }

  public async concludeRound(roomId: string, requesterId: string): Promise<GameState | undefined> {
    const room = this.rooms.get(roomId);
    if (!room || !room.phase.startsWith("DAY_ROUND_")) return undefined;

    const requester = room.players.find(p => p.id === requesterId);
    const requesterName = requester ? requester.name : "Người chơi";

    room.logs.push({
      id: "log_" + Date.now(),
      type: "SYSTEM",
      messageVi: `🔔 ${requesterName} đã bấm "KẾT LUẬN" - Kết thúc sớm thời gian thảo luận để chuyển sang vòng mới!`,
      messageEn: `🔔 ${requesterName} clicked "CONCLUDE" - Ending discussion early and advancing to next round!`,
      timestamp: Date.now(),
    });

    return await this.advanceRound(roomId);
  }


  public solveCrime(
    roomId: string,
    solverId: string,
    suspectId: string,
    meansCardId: string,
    clueCardId: string
  ): { success: boolean; isCorrect: boolean; state?: GameState } {
    const room = this.rooms.get(roomId);
    if (!room || !room.phase.startsWith("DAY_ROUND_") || !room.murderSelection) {
      return { success: false, isCorrect: false };
    }

    const solver = room.players.find(p => p.id === solverId);
    const suspect = room.players.find(p => p.id === suspectId);
    if (!solver || !suspect || !solver.hasBadge) {
      return { success: false, isCorrect: false };
    }

    const suspectMeans = suspect.meansCards.find(m => m.id === meansCardId);
    const suspectClue = suspect.clueCards.find(c => c.id === clueCardId);
    if (!suspectMeans || !suspectClue) {
      return { success: false, isCorrect: false };
    }

    const isCorrect = (
      suspectId === room.murderSelection.murdererId &&
      meansCardId === room.murderSelection.meansCardId &&
      clueCardId === room.murderSelection.clueCardId
    );

    const attempt: SolveAttempt = {
      solverId,
      solverName: solver.name,
      suspectId,
      suspectName: suspect.name,
      meansCardId,
      meansCardName: suspectMeans.nameVi,
      clueCardId,
      clueCardName: suspectClue.nameVi,
      isCorrect,
      timestamp: Date.now(),
    };
    room.solveAttempts.push(attempt);

    if (isCorrect) {
      room.logs.push({
        id: "log_" + Date.now(),
        type: "ALERT",
        messageVi: `🌟 ${solver.name} ĐÃ PHÁ ÁN CHÍNH XÁC! Nghi phạm: ${suspect.name}, Hung khí: ${suspectMeans.nameVi}, Bằng chứng: ${suspectClue.nameVi}!`,
        messageEn: `🌟 ${solver.name} SOLVED THE CRIME CORRECTLY! Murderer: ${suspect.name}, Means: ${suspectMeans.nameEn}, Clue: ${suspectClue.nameEn}!`,
        timestamp: Date.now(),
      });

      // Check Witness assassination
      const witnessPlayer = room.players.find(p => p.role === "WITNESS");
      if (room.settings.enableWitness && witnessPlayer) {
        this.clearRoomTimer(roomId);
        room.phase = "WITNESS_ASSASSINATION";
        room.logs.push({
          id: "log_" + Date.now(),
          type: "ALERT",
          messageVi: `⚔️ CƠ HỘI ÁM SÁT: Vụ án đã bị giải mã, nhưng Hung thủ có 1 cơ hội cuối cùng để ám sát Nhân chứng (Witness). Nếu chọn đúng, Hung thủ sẽ lật ngược thế cờ!`,
          messageEn: `⚔️ WITNESS ASSASSINATION: Crime was solved, but the Murderer can guess the Witness to steal victory!`,
          timestamp: Date.now(),
        });

        // If Murderer is a Bot, auto guess
        const murderer = room.players.find(p => p.role === "MURDERER");
        if (murderer && murderer.isBot) {
          setTimeout(() => {
            const possibleWitnesses = room.players.filter(p => p.id !== murderer.id && p.role !== "ACCOMPLICE");
            const botTarget = possibleWitnesses[Math.floor(Math.random() * possibleWitnesses.length)];
            if (botTarget) this.submitWitnessKill(roomId, murderer.id, botTarget.id);
          }, 3000);
        }

        return { success: true, isCorrect: true, state: room };
      }

      // No Witness -> Investigators Win immediately
      this.endGameWithWinner(roomId, "INVESTIGATORS", `${solver.name} đã giải mã chính xác toàn bộ hiện trường và vạch mặt Hung thủ!`);
      return { success: true, isCorrect: true, state: room };
    } else {
      // Wrong guess -> Lost Badge
      solver.hasBadge = false;
      room.logs.push({
        id: "log_" + Date.now(),
        type: "ACTION",
        messageVi: `❌ ${solver.name} đã Phá Án SAI (Nghi can: ${suspect.name}, ${suspectMeans.nameVi} & ${suspectClue.nameVi}) và bị mất Huy hiệu phá án!`,
        messageEn: `❌ ${solver.name} made an INCORRECT accusation and lost their badge!`,
        timestamp: Date.now(),
      });

      // Check if any badges left
      const remainingBadges = room.players.filter(p => p.hasBadge && p.role !== "MURDERER" && p.role !== "ACCOMPLICE");
      if (remainingBadges.length === 0) {
        this.endGameWithWinner(roomId, "MURDERER", "Tất cả các Điều tra viên đều đã sử dụng hết Huy hiệu phá án mà không tìm ra hung thủ!");
      }

      return { success: true, isCorrect: false, state: room };
    }
  }

  public submitWitnessKill(roomId: string, murdererId: string, targetId: string): GameState | undefined {
    const room = this.rooms.get(roomId);
    if (!room || room.phase !== "WITNESS_ASSASSINATION") return undefined;

    const murderer = room.players.find(p => p.id === murdererId && p.role === "MURDERER");
    const target = room.players.find(p => p.id === targetId);
    if (!murderer || !target) return undefined;

    room.assassinationTargetId = targetId;

    if (target.role === "WITNESS") {
      room.logs.push({
        id: "log_" + Date.now(),
        type: "ALERT",
        messageVi: `🎯 HUNG THỦ ÁM SÁT THÀNH CÔNG! ${target.name} chính là Nhân Chứng (Witness). Phe Hung thủ đã lật ngược thế cờ và chiến thắng chung cuộc!`,
        messageEn: `🎯 WITNESS ASSASSINATED! ${target.name} was the Witness. The Murderer steals the victory!`,
        timestamp: Date.now(),
      });
      return this.endGameWithWinner(roomId, "MURDERER", `Hung thủ đã ám sát chính xác Nhân chứng (${target.name}) và tẩu thoát thành công!`);
    } else {
      room.logs.push({
        id: "log_" + Date.now(),
        type: "ALERT",
        messageVi: `🛡️ ÁM SÁT THẤT BẠI! ${target.name} không phải là Nhân Chứng (Người này là ${target.role}). Phe Điều tra viên toàn thắng!`,
        messageEn: `🛡️ ASSASSINATION FAILED! ${target.name} was not the Witness. Investigators win!`,
        timestamp: Date.now(),
      });
      return this.endGameWithWinner(roomId, "INVESTIGATORS", `Hung thủ đã ám sát nhầm người vô tội. Phe Điều tra viên toàn thắng!`);
    }
  }

  public endGameWithWinner(roomId: string, winner: "INVESTIGATORS" | "MURDERER", reason: string): GameState | undefined {
    const room = this.rooms.get(roomId);
    if (!room) return undefined;

    this.clearRoomTimer(roomId);
    room.phase = "GAME_OVER";
    room.winner = winner;
    room.winReasonVi = reason;
    room.winReasonEn = winner === "INVESTIGATORS" ? "Investigators solved the crime!" : "Murderer escaped!";

    room.logs.push({
      id: "log_" + Date.now(),
      type: "ALERT",
      messageVi: `🏆 TRẬN ĐẤU KẾT THÚC: Phe ${winner === "INVESTIGATORS" ? "ĐIỀU TRA VIÊN" : "HUNG THỦ"} CHIẾN THẮNG!`,
      messageEn: `🏆 GAME OVER: ${winner} WIN!`,
      timestamp: Date.now(),
    });

    this.broadcast(roomId, "game_state_update", this.getSanitizedState(room));
    return room;
  }

  public resetGameToLobby(roomId: string): GameState | undefined {
    const room = this.rooms.get(roomId);
    if (!room) return undefined;

    this.clearRoomTimer(roomId);
    room.phase = "LOBBY";
    room.currentRound = 1;
    room.roundTimeRemaining = room.settings.roundDurationSeconds;
    room.activeTiles = [];
    room.tileDeck = [];
    room.discardedTiles = [];
    room.murderSelection = undefined;
    room.solveAttempts = [];
    room.winner = undefined;
    room.winReasonVi = undefined;
    room.winReasonEn = undefined;
    room.assassinationTargetId = undefined;
    room.forensicNotes = undefined;

    room.players.forEach(p => {
      p.role = undefined;
      p.meansCards = [];
      p.clueCards = [];
      p.hasBadge = true;
    });

    room.logs.push({
      id: "log_" + Date.now(),
      type: "SYSTEM",
      messageVi: "Bàn chơi đã được thiết lập lại. Sẵn sàng cho vụ án mới!",
      messageEn: "Game has been reset to lobby. Ready for a new case!",
      timestamp: Date.now(),
    });

    return room;
  }

  public addChatMessage(roomId: string, playerId: string, text: string): GameState | undefined {
    const room = this.rooms.get(roomId);
    if (!room || !text.trim()) return undefined;

    const sender = room.players.find(p => p.id === playerId);
    const senderName = sender ? sender.name : "Ẩn danh";

    room.logs.push({
      id: "chat_" + Date.now(),
      type: "CHAT",
      senderName,
      messageVi: text.trim(),
      messageEn: text.trim(),
      timestamp: Date.now(),
    });

    return room;
  }

  /**
   * Sanitizes private info depending on user role or phase.
   * During non-GAME_OVER phases, murderSelection and other player roles are hidden unless specific role permissions apply.
   */
  public getSanitizedStateForPlayer(room: GameState, playerId: string): GameState {
    const player = room.players.find(p => p.id === playerId);
    const isGameOver = room.phase === "GAME_OVER";

    // Clone state
    const sanitized: GameState = JSON.parse(JSON.stringify(room));

    if (!isGameOver) {
      // Hide other players' roles unless permitted
      sanitized.players = sanitized.players.map(p => {
        if (p.id === playerId) return p; // own role is visible

        // Accomplice can see who Murderer is
        if (player?.role === "ACCOMPLICE" && p.role === "MURDERER") {
          return { ...p, role: "MURDERER" };
        }

        // Witness can see who the culprits are (Murderer & Accomplice), but does NOT know which role each has!
        if (player?.role === "WITNESS" && (p.role === "MURDERER" || p.role === "ACCOMPLICE")) {
          return { ...p, role: undefined, isWitnessSuspect: true };
        }


        return { ...p, role: undefined };
      });

      // MurderSelection is only visible to Murderer and Accomplice
      if (player?.role !== "MURDERER" && player?.role !== "ACCOMPLICE") {
        delete sanitized.murderSelection;
      }
    }

    return sanitized;
  }

  public getSanitizedState(room: GameState): GameState {
    return room;
  }
}

export const gameManager = new GameManager();
