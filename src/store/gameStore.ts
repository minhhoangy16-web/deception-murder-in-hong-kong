import { create } from "zustand";
import { io, Socket } from "socket.io-client";
import { GameState, RoomSettings } from "../types/game";
import { soundManager } from "../lib/soundFx";

interface GameStore {
  socket: Socket | null;
  connected: boolean;
  gameState: GameState | null;
  myPlayerId: string | null;
  errorMessage: string | null;
  isSoundMuted: boolean;
  
  // Accusation modal state
  isSolveModalOpen: boolean;
  selectedSuspectId: string | null;
  selectedMeansId: string | null;
  selectedClueId: string | null;

  // Actions
  initSocket: () => void;
  createRoom: (hostName: string, settings?: Partial<RoomSettings>) => void;
  joinRoom: (roomId: string, playerName: string) => void;
  addBot: () => void;
  startGame: () => void;
  skipBriefing: () => void;
  submitMurderSelection: (meansCardId: string, clueCardId: string) => void;
  concludeRound: () => void;

  solveCrime: (suspectId: string, meansCardId: string, clueCardId: string) => void;
  submitWitnessKill: (targetId: string) => void;
  sendChat: (message: string) => void;
  updateSettings: (settings: Partial<RoomSettings>) => void;
  resetGame: () => void;
  toggleSound: () => void;
  setSolveModalOpen: (open: boolean) => void;
  setSelectedSuspectId: (id: string | null) => void;
  setSelectedMeansId: (id: string | null) => void;
  setSelectedClueId: (id: string | null) => void;
  clearError: () => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  socket: null,
  connected: false,
  gameState: null,
  myPlayerId: null,
  errorMessage: null,
  isSoundMuted: false,

  isSolveModalOpen: false,
  selectedSuspectId: null,
  selectedMeansId: null,
  selectedClueId: null,

  initSocket: () => {
    if (get().socket) return;

    const socketInstance: Socket = io({
      autoConnect: true,
      reconnection: true,
    });

    socketInstance.on("connect", () => {
      console.log("Connected to server:", socketInstance.id);
      set({ connected: true, myPlayerId: socketInstance.id });
    });

    socketInstance.on("room_created", ({ roomId, playerId }) => {
      set({ myPlayerId: playerId });
      soundManager.playClick();
    });

    socketInstance.on("room_joined", ({ roomId, playerId }) => {
      set({ myPlayerId: playerId });
      soundManager.playClick();
    });

    socketInstance.on("game_state_update", (state: GameState) => {
      const prev = get().gameState;
      set({ gameState: state });

      // Trigger audio cue transitions
      if (prev?.phase !== state.phase) {
        if (state.phase === "NIGHT") {
          soundManager.playAlert();
        } else if (state.phase.startsWith("DAY_ROUND_")) {
          soundManager.playMarkerPlace();
        } else if (state.phase === "GAME_OVER") {
          const myPlayer = state.players.find(p => p.id === get().myPlayerId);
          const isWinner = (
            (state.winner === "INVESTIGATORS" && myPlayer?.role !== "MURDERER" && myPlayer?.role !== "ACCOMPLICE") ||
            (state.winner === "MURDERER" && (myPlayer?.role === "MURDERER" || myPlayer?.role === "ACCOMPLICE"))
          );
          if (isWinner) {
            soundManager.playVictory();
          } else {
            soundManager.playDefeat();
          }
        }
      }
    });

    socketInstance.on("timer_tick", (data: unknown) => {
      const d = data as { timeRemaining?: number; roundTimeRemaining?: number } | number;
      const val = typeof d === "number"
        ? d
        : typeof d?.timeRemaining === "number"
        ? d.timeRemaining
        : typeof d?.roundTimeRemaining === "number"
        ? d.roundTimeRemaining
        : 0;

      const current = get().gameState;
      if (current) {
        set({
          gameState: {
            ...current,
            roundTimeRemaining: val,
          }
        });
      }
    });


    socketInstance.on("solve_result", ({ isCorrect }) => {
      if (isCorrect) {
        soundManager.playBadgeSlam();
      } else {
        soundManager.playAlert();
      }
    });

    socketInstance.on("error_message", ({ message }) => {
      set({ errorMessage: message });
      soundManager.playAlert();
    });

    socketInstance.on("disconnect", () => {
      set({ connected: false });
    });

    set({ socket: socketInstance });
  },

  createRoom: (hostName, settings) => {
    const { socket } = get();
    if (socket) {
      socket.emit("create_room", { hostName, settings });
    }
  },

  joinRoom: (roomId, playerName) => {
    const { socket } = get();
    if (socket) {
      socket.emit("join_room", { roomId, playerName });
    }
  },

  addBot: () => {
    const { socket, gameState } = get();
    if (socket && gameState) {
      socket.emit("add_bot", { roomId: gameState.roomId });
    }
  },

  startGame: () => {
    const { socket, gameState } = get();
    if (socket && gameState) {
      socket.emit("start_game", { roomId: gameState.roomId });
    }
  },

  skipBriefing: () => {
    const { socket, gameState } = get();
    if (socket && gameState) {
      socket.emit("skip_briefing", { roomId: gameState.roomId });
    }
  },


  submitMurderSelection: (meansCardId, clueCardId) => {
    const { socket, gameState } = get();
    if (socket && gameState) {
      socket.emit("submit_murder_selection", {
        roomId: gameState.roomId,
        meansCardId,
        clueCardId,
      });
    }
  },

  concludeRound: () => {
    const { socket, gameState } = get();
    if (socket && gameState) {
      socket.emit("conclude_round", { roomId: gameState.roomId });
    }
  },


  solveCrime: (suspectId, meansCardId, clueCardId) => {
    const { socket, gameState } = get();
    if (socket && gameState) {
      socket.emit("solve_crime", {
        roomId: gameState.roomId,
        suspectId,
        meansCardId,
        clueCardId,
      });
      set({ isSolveModalOpen: false, selectedSuspectId: null, selectedMeansId: null, selectedClueId: null });
    }
  },

  submitWitnessKill: (targetId) => {
    const { socket, gameState } = get();
    if (socket && gameState) {
      socket.emit("witness_kill", {
        roomId: gameState.roomId,
        targetId,
      });
    }
  },

  sendChat: (message) => {
    const { socket, gameState } = get();
    if (socket && gameState && message.trim()) {
      socket.emit("send_chat", {
        roomId: gameState.roomId,
        message: message.trim(),
      });
    }
  },

  updateSettings: (settings) => {
    const { socket, gameState } = get();
    if (socket && gameState) {
      socket.emit("update_settings", {
        roomId: gameState.roomId,
        settings,
      });
    }
  },

  resetGame: () => {
    const { socket, gameState } = get();
    if (socket && gameState) {
      socket.emit("reset_game", { roomId: gameState.roomId });
    }
  },

  toggleSound: () => {
    const current = get().isSoundMuted;
    soundManager.setMuted(!current);
    set({ isSoundMuted: !current });
  },

  setSolveModalOpen: (open) => set({ isSolveModalOpen: open }),
  setSelectedSuspectId: (id) => set({ selectedSuspectId: id }),
  setSelectedMeansId: (id) => set({ selectedMeansId: id }),
  setSelectedClueId: (id) => set({ selectedClueId: id }),
  clearError: () => set({ errorMessage: null }),
}));
