export type Role = "MURDERER" | "ACCOMPLICE" | "WITNESS" | "INVESTIGATOR";

export type GamePhase = 
  | "LOBBY"
  | "BRIEFING"
  | "NIGHT"
  | "AI_ANALYZING"
  | "DAY_ROUND_1"
  | "ROUND_TRANSITION_2"
  | "DAY_ROUND_2"
  | "ROUND_TRANSITION_3"
  | "DAY_ROUND_3"
  | "WITNESS_ASSASSINATION"
  | "GAME_OVER";

export interface Card {
  id: string;
  nameVi: string;
  nameEn: string;
  category?: string;
  descriptionVi?: string;
  descriptionEn?: string;
}

export interface SceneTileOption {
  index: number;
  labelVi: string;
  labelEn: string;
}

export interface SceneTile {
  id: string;
  titleVi: string;
  titleEn: string;
  type: "CAUSE_OF_DEATH" | "LOCATION" | "EVENT";
  options: SceneTileOption[];
  markerIndex?: number; // 0 to 5
  isNew?: boolean;      // Highlight if just drawn in Round 2/3
  roundPlaced?: number; // 1, 2, or 3
}

export interface Player {
  id: string;             // Socket ID or Unique ID
  name: string;
  avatar: string;
  isHost: boolean;
  isBot: boolean;
  role?: Role;
  isWitnessSuspect?: boolean; // For Witness view: true if player is Murderer or Accomplice (exact role unknown)
  meansCards: Card[];     // 4 blue cards
  clueCards: Card[];      // 4 red cards
  hasBadge: boolean;      // Badge for "Solve the Crime"
  isOnline: boolean;
}


export interface RoomSettings {
  briefingDurationSeconds: number; // 30, 60, 120 (time to inspect all cards before night)
  roundDurationSeconds: number;    // e.g. 60, 90, 120, 180, 0 = unlimited
  enableAccomplice: boolean;
  enableWitness: boolean;
  aiProvider: "gemini" | "openai" | "heuristic";
  apiKey?: string;
  language: "vi" | "en";
}

export interface MurderSelection {
  murdererId: string;
  meansCardId: string;
  clueCardId: string;
}

export interface ForensicNote {
  tileId: string;
  tileTitle: string;
  selectedOption: string;
  reasoning: string;
}

export interface SolveAttempt {
  solverId: string;
  solverName: string;
  suspectId: string;
  suspectName: string;
  meansCardId: string;
  meansCardName: string;
  clueCardId: string;
  clueCardName: string;
  isCorrect: boolean;
  timestamp: number;
}

export interface GameLogEntry {
  id: string;
  type: "SYSTEM" | "FORENSIC" | "ACTION" | "CHAT" | "ALERT";
  senderName?: string;
  messageVi: string;
  messageEn: string;
  timestamp: number;
}

export interface MusicTrack {
  id: string;
  phase: "LOBBY" | "BRIEFING" | "ROUND_1_2" | "ROUND_3" | "SOLVE_CRIME";
  title: string;
  artist: string;
  youtubeId: string;
}

export interface GameState {
  roomId: string;
  phase: GamePhase;
  currentRound: number; // 1, 2, 3
  roundTimeRemaining: number;
  settings: RoomSettings;
  players: Player[];
  activeTiles: SceneTile[];       // 6 active tiles on the Forensic Board
  tileDeck: SceneTile[];          // Remaining tiles in deck
  discardedTiles: SceneTile[];    // Replaced tiles
  murderSelection?: MurderSelection; // Kept private on server!
  solveAttempts: SolveAttempt[];
  winner?: "INVESTIGATORS" | "MURDERER";
  winReasonVi?: string;
  winReasonEn?: string;
  assassinationTargetId?: string;
  forensicNotes?: ForensicNote[]; // AI explanation displayed at end game or logs
  logs: GameLogEntry[];
  currentTrack?: MusicTrack;
  previousTrack?: MusicTrack;
  isBgmPlaying?: boolean;
}


