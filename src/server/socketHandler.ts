import { Server as SocketIOServer, Socket } from "socket.io";
import { gameManager } from "./gameEngine";

export function setupSocketHandlers(io: SocketIOServer) {
  gameManager.setEmitCallback((roomId: string, event: string, data: unknown) => {
    const room = gameManager.getRoom(roomId);
    if (!room) return;

    if (event === "timer_tick") {
      io.in(roomId).emit("timer_tick", data);
      return;
    }

    io.in(roomId).fetchSockets().then(sockets => {
      sockets.forEach(socket => {
        const sanitized = gameManager.getSanitizedStateForPlayer(room, socket.id);
        socket.emit(event, sanitized);
      });
    }).catch(err => {
      console.error("Error broadcasting to room:", err);
    });
  });


  io.on("connection", (socket: Socket) => {
    console.log(`[Socket] Connected: ${socket.id}`);

    const syncRoom = (roomId: string) => {
      const room = gameManager.getRoom(roomId);
      if (!room) return;

      io.in(roomId).fetchSockets().then(sockets => {
        sockets.forEach(s => {
          const sanitized = gameManager.getSanitizedStateForPlayer(room, s.id);
          s.emit("game_state_update", sanitized);
        });
      });
    };

    socket.on("create_room", ({ hostName, settings }) => {
      const state = gameManager.createRoom(socket.id, hostName, settings);
      socket.join(state.roomId);
      socket.emit("room_created", { roomId: state.roomId, playerId: socket.id });
      socket.emit("game_state_update", state);
    });

    socket.on("join_room", ({ roomId, playerName }) => {
      const result = gameManager.joinRoom(roomId, socket.id, playerName);
      if (result.success && result.state) {
        socket.join(roomId);
        socket.emit("room_joined", { roomId, playerId: socket.id });
        syncRoom(roomId);
      } else {
        socket.emit("error_message", { message: result.error || "Không thể tham gia phòng." });
      }
    });

    socket.on("add_bot", ({ roomId }) => {
      const state = gameManager.addBotPlayer(roomId);
      if (state) syncRoom(roomId);
    });

    socket.on("update_settings", ({ roomId, settings }) => {
      const state = gameManager.updateSettings(roomId, settings);
      if (state) syncRoom(roomId);
    });

    socket.on("start_game", async ({ roomId }) => {
      const state = await gameManager.startGame(roomId);
      if (state) syncRoom(roomId);
    });

    socket.on("skip_briefing", async ({ roomId }) => {
      const state = await gameManager.skipBriefing(roomId, socket.id);
      if (state) syncRoom(roomId);
    });


    socket.on("submit_murder_selection", async ({ roomId, meansCardId, clueCardId }) => {
      const state = await gameManager.submitMurderSelection(roomId, socket.id, meansCardId, clueCardId);
      if (state) syncRoom(roomId);
    });

    socket.on("conclude_round", async ({ roomId }) => {
      const state = await gameManager.concludeRound(roomId, socket.id);
      if (state) syncRoom(roomId);
    });


    socket.on("solve_crime", ({ roomId, suspectId, meansCardId, clueCardId }) => {
      const result = gameManager.solveCrime(roomId, socket.id, suspectId, meansCardId, clueCardId);
      if (result.state) syncRoom(roomId);
      socket.emit("solve_result", { isCorrect: result.isCorrect });
    });

    socket.on("witness_kill", ({ roomId, targetId }) => {
      const state = gameManager.submitWitnessKill(roomId, socket.id, targetId);
      if (state) syncRoom(roomId);
    });

    socket.on("send_chat", ({ roomId, message }) => {
      const state = gameManager.addChatMessage(roomId, socket.id, message);
      if (state) syncRoom(roomId);
    });

    socket.on("change_bgm_track", ({ roomId, trackId }) => {
      const state = gameManager.setMusicTrack(roomId, trackId);
      if (state) syncRoom(roomId);
    });

    socket.on("toggle_bgm_playback", ({ roomId, isPlaying }) => {
      const state = gameManager.toggleBgmPlayback(roomId, isPlaying);
      if (state) syncRoom(roomId);
    });

    socket.on("trigger_sfx", ({ roomId, sfxType }) => {
      io.in(roomId).emit("play_sfx", { sfxType });
    });

    socket.on("reset_game", ({ roomId }) => {
      const state = gameManager.resetGameToLobby(roomId);
      if (state) syncRoom(roomId);
    });


    socket.on("disconnect", () => {
      console.log(`[Socket] Disconnected: ${socket.id}`);
      // Find which room this socket belonged to
      // GameManager will mark player offline
    });
  });
}
