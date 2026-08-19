"use client";

import React, { useEffect, useState, useRef } from "react";
import { useGameStore } from "../store/gameStore";
import { LobbyView } from "../components/lobby/LobbyView";
import { HeaderNav } from "../components/game/HeaderNav";
import { ForensicBoard } from "../components/game/ForensicBoard";
import { PlayerSeat } from "../components/game/PlayerSeat";
import { NightPhaseModal } from "../components/game/NightPhaseModal";
import { SolveCrimeModal } from "../components/game/SolveCrimeModal";
import { WitnessKillModal } from "../components/game/WitnessKillModal";
import { GameOverModal } from "../components/game/GameOverModal";
import { RulesModal } from "../components/game/RulesModal";
import { RoleCardRevealModal } from "../components/game/RoleCardRevealModal";
import { GameChatLog } from "../components/game/GameChatLog";
import { BotController } from "../components/game/BotController";
import { AlertCircle, Award, Sparkles } from "lucide-react";

export default function Home() {
  const {
    initSocket,
    gameState,
    myPlayerId,
    errorMessage,
    clearError,
    setSolveModalOpen,
    skipBriefing,
  } = useGameStore();

  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [isRoleRevealOpen, setIsRoleRevealOpen] = useState(false);
  const previousRoleRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  const myPlayer = gameState?.players.find((p) => p.id === myPlayerId);

  // Auto-reveal Role Card whenever a role is freshly assigned
  useEffect(() => {
    if (myPlayer?.role && myPlayer.role !== previousRoleRef.current) {
      previousRoleRef.current = myPlayer.role;
      setIsRoleRevealOpen(true);
    } else if (!myPlayer?.role) {
      previousRoleRef.current = undefined;
    }
  }, [myPlayer?.role]);

  // If in Lobby or No Room yet
  if (!gameState || gameState.phase === "LOBBY") {
    return (
      <main className="min-h-screen">
        {errorMessage && (
          <div className="fixed top-4 right-4 z-50 p-4 rounded-2xl bg-rose-950/90 border border-rose-800 text-rose-200 text-xs shadow-2xl flex items-center justify-between gap-3 animate-slide-up">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400" />
              <span>{errorMessage}</span>
            </div>
            <button
              onClick={clearError}
              className="text-rose-400 hover:text-white font-bold"
            >
              ✕
            </button>
          </div>
        )}
        <LobbyView />
      </main>
    );
  }

  const isBriefing = gameState.phase === "BRIEFING";
  const isDayPhase = gameState.phase.startsWith("DAY_ROUND_");
  const isGameOver = gameState.phase === "GAME_OVER";
  const isVietnamese = gameState.settings.language === "vi";

  return (
    <main className="min-h-screen flex flex-col pb-12">
      {/* Error Toast */}
      {errorMessage && (
        <div className="fixed top-4 right-4 z-50 p-4 rounded-2xl bg-rose-950/90 border border-rose-800 text-rose-200 text-xs shadow-2xl flex items-center justify-between gap-3 animate-slide-up">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-400" />
            <span>{errorMessage}</span>
          </div>
          <button
            onClick={clearError}
            className="text-rose-400 hover:text-white font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Top Header Navbar */}
      <HeaderNav
        onOpenRules={() => setIsRulesOpen(true)}
        onOpenRoleCard={() => setIsRoleRevealOpen(true)}
      />

      {/* Main Game Table Container (Fluid Wide for 4 Players per Row) */}
      <div className="max-w-[1700px] w-full mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-5">
        {/* Briefing Phase Callout Banner */}
        {isBriefing && (
          <div className="desk-panel flex flex-col sm:flex-row items-center justify-between gap-3 p-4 sm:p-5 rounded-3xl border-sky-300 shadow-md animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-sky-500/20 text-sky-700 border border-sky-500/40 shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-black text-sky-950 uppercase tracking-wider flex items-center gap-2">
                  <span>{isVietnamese ? "GIAI ĐOẠN XEM THẺ BÀI (BRIEFING PHASE)" : "BRIEFING PHASE"}</span>
                  <span className="px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-black border border-sky-300">
                    ⏱️ {isVietnamese ? `Còn ${gameState.roundTimeRemaining}s` : `${gameState.roundTimeRemaining}s left`}
                  </span>
                </div>
                <div className="text-xs text-stone-600 font-medium mt-0.5">
                  {isVietnamese
                    ? "Tất cả người chơi hãy quan sát kỹ 4 thẻ Hung Khí (Xanh) & 4 thẻ Bằng Chứng (Đỏ) của nhau trên bàn trước khi phân vai và màn đêm buông xuống!"
                    : "Inspect all players' 4 Means (Blue) & 4 Clues (Red) on the table before roles are distributed and night falls!"}
                </div>
              </div>
            </div>

            <button
              onClick={skipBriefing}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 shrink-0"
            >
              <span>{isVietnamese ? "BẮT ĐẦU MÀN ĐÊM NGAY" : "START NIGHT NOW"}</span>
            </button>
          </div>
        )}

        {/* Center Forensic Board (Hình 1) */}
        <section>
          <ForensicBoard
            activeTiles={gameState.activeTiles}
            discardedTiles={gameState.discardedTiles}
            aiProvider={gameState.settings.aiProvider}
            lang={gameState.settings.language}
          />
        </section>

        {/* Action Callout Bar for Day Phase */}
        {isDayPhase && myPlayer?.hasBadge && (
          <div className="desk-panel flex flex-col sm:flex-row items-center justify-between gap-3 p-4 sm:p-5 rounded-3xl border-amber-300 shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-amber-500/20 text-amber-700 border border-amber-500/40">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-black text-amber-900 uppercase tracking-wider">
                  {isVietnamese ? "Bạn Đang Giữ Huy Hiệu Phá Án" : "You Hold a Badge Token"}
                </div>
                <div className="text-xs text-stone-600 font-medium">
                  {isVietnamese
                    ? "Quan sát kỹ các thẻ bài và 6 manh mối của AI Pháp Y để phá án chính xác!"
                    : "Study the clues and identify the Murderer with their Key Means and Key Clue!"}
                </div>
              </div>
            </div>

            <button
              onClick={() => setSolveModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/30 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Award className="w-4 h-4" />
              {isVietnamese ? "BẤM ĐỂ PHÁ ÁN (SOLVE)" : "SOLVE THE CRIME"}
            </button>
          </div>
        )}

        {/* Players Area Grid (Hình 2: 4 Players per row) */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs sm:text-sm font-black text-stone-800 uppercase tracking-wider flex items-center gap-2">
              <span>{isVietnamese ? `Bàn Chơi Của Các Thám Tử (${gameState.players.length} Người)` : `Player Seats (${gameState.players.length} Players)`}</span>
            </h2>
            <div className="text-xs font-bold text-stone-600">
              <span className="text-amber-800 font-black">{isVietnamese ? "Hàng Trên:" : "Top:"}</span> {isVietnamese ? "Manh Mối" : "Clues"} |{" "}
              <span className="text-sky-800 font-black">{isVietnamese ? "Hàng Dưới:" : "Bottom:"}</span> {isVietnamese ? "Hung Khí" : "Means"}
            </div>
          </div>

          {/* 4 Players per row grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
            {gameState.players.map((player) => (
              <PlayerSeat
                key={player.id}
                player={player}
                isCurrentPlayer={player.id === myPlayerId}
                keyMeansId={gameState.murderSelection?.meansCardId}
                keyClueId={gameState.murderSelection?.clueCardId}
                isGameOver={isGameOver}
                lang={gameState.settings.language}
              />
            ))}
          </div>
        </section>

        {/* Bottom Section: Live Log & Chat */}
        <section>
          <GameChatLog />
        </section>
      </div>

      {/* Modals & Overlays */}
      <RoleCardRevealModal
        isOpen={isRoleRevealOpen}
        onClose={() => setIsRoleRevealOpen(false)}
        role={myPlayer?.role}
        lang={gameState.settings.language}
      />
      <NightPhaseModal />
      <SolveCrimeModal />
      <WitnessKillModal />
      <GameOverModal />
      <RulesModal isOpen={isRulesOpen} onClose={() => setIsRulesOpen(false)} />
      <BotController />
    </main>
  );
}
