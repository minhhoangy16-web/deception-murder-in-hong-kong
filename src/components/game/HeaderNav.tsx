import React, { useState } from "react";
import { useGameStore } from "../../store/gameStore";
import { formatTime } from "../../lib/utils";
import { MusicControlBar } from "../audio/MusicControlBar";
import { Volume2, VolumeX, HelpCircle, Award, RotateCcw, Copy, Check, Clock, ShieldAlert, Shield, Eye, Search, FastForward } from "lucide-react";


interface HeaderNavProps {
  onOpenRules: () => void;
  onOpenRoleCard?: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenRules, onOpenRoleCard }) => {
  const {
    gameState,
    myPlayerId,
    isSoundMuted,
    toggleSound,
    setSolveModalOpen,
    resetGame,
    concludeRound,
  } = useGameStore();


  const [copied, setCopied] = useState(false);

  if (!gameState) return null;

  const myPlayer = gameState.players.find((p) => p.id === myPlayerId);
  const isHost = myPlayer?.isHost ?? false;
  const isBriefing = gameState.phase === "BRIEFING";
  const isDayPhase = gameState.phase.startsWith("DAY_ROUND_");
  const canSolve = isDayPhase && (myPlayer?.hasBadge ?? false);
  const showTimer = isDayPhase || isBriefing;
  const isVietnamese = gameState.settings.language === "vi";

  const copyInviteLink = async () => {
    if (typeof window !== "undefined") {
      let baseOrigin = window.location.origin;

      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        try {
          const res = await fetch("/api/network-ip");
          const data = await res.json();
          if (data?.ip && data.ip !== "localhost") {
            baseOrigin = `http://${data.ip}:${window.location.port || 3000}`;
          }
        } catch {
          // fallback to origin
        }
      }

      const inviteUrl = `${baseOrigin}/?room=${gameState.roomId}`;
      navigator.clipboard.writeText(inviteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };


  const timeRemaining = gameState.roundTimeRemaining;
  const isTimeLow = timeRemaining <= 15 && timeRemaining > 0;

  const getRoleHeaderBadge = () => {
    if (!myPlayer?.role) return null;
    switch (myPlayer.role) {
      case "MURDERER":
        return {
          label: isVietnamese ? "HUNG THỦ" : "MURDERER",
          bg: "bg-rose-100 hover:bg-rose-200 border-rose-400 text-rose-800",
          icon: ShieldAlert,
        };
      case "ACCOMPLICE":
        return {
          label: isVietnamese ? "ĐỒNG PHẠM" : "ACCOMPLICE",
          bg: "bg-purple-100 hover:bg-purple-200 border-purple-400 text-purple-800",
          icon: Shield,
        };
      case "WITNESS":
        return {
          label: isVietnamese ? "NHÂN CHỨNG" : "WITNESS",
          bg: "bg-amber-100 hover:bg-amber-200 border-amber-400 text-amber-800",
          icon: Eye,
        };
      case "INVESTIGATOR":
      default:
        return {
          label: isVietnamese ? "ĐIỀU TRA VIÊN" : "INVESTIGATOR",
          bg: "bg-sky-100 hover:bg-sky-200 border-sky-400 text-sky-800",
          icon: Search,
        };
    }
  };

  const roleBadge = getRoleHeaderBadge();

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-100/90 border-b border-stone-300/80 backdrop-blur-md px-3 sm:px-4 py-2.5 shadow-sm">
      <div className="max-w-[1700px] mx-auto flex items-center justify-between gap-2 sm:gap-3">
        {/* Left: Brand & Room */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-xl">🇭🇰</span>
            <div className="hidden sm:block">
              <div className="text-xs font-black tracking-widest text-rose-700 uppercase font-sans">
                DECEPTION
              </div>
              <div className="text-[10px] text-stone-500 font-semibold leading-none">
                Murder in Hong Kong
              </div>
            </div>
          </div>

          <div className="h-6 w-px bg-stone-300 hidden sm:block" />

          <button
            onClick={copyInviteLink}
            title="Nhấp để sao chép link mời phòng này"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white border border-stone-300 hover:border-stone-400 text-xs font-mono text-stone-800 transition-colors shadow-sm"
          >
            <span className="font-black text-rose-700">{gameState.roomId}</span>
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-400" />}
          </button>
        </div>

        {/* Center: Round & Timer & Role Badge */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Round / Phase Indicator Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-stone-300 shadow-sm">
            <span className="text-[10px] uppercase font-bold text-stone-500">
              {isBriefing ? "Giai đoạn:" : "Vòng:"}
            </span>
            <span className="text-xs font-black text-rose-700">
              {isBriefing ? "Xem Thẻ" : `${gameState.currentRound}/3`}
            </span>
          </div>

          {/* Countdown Timer */}
          {showTimer && (
            <div
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl border font-mono font-black text-xs sm:text-sm transition-all shadow-sm ${
                isTimeLow
                  ? "bg-rose-100 border-rose-500 text-rose-700 animate-pulse"
                  : isBriefing
                  ? "bg-sky-50 border-sky-300 text-sky-800"
                  : "bg-white border-stone-300 text-stone-800"
              }`}
            >
              <Clock className={`w-3.5 h-3.5 ${isTimeLow ? "text-rose-600" : isBriefing ? "text-sky-600" : "text-sky-600"}`} />
              <span>{formatTime(timeRemaining)}</span>
            </div>
          )}

          {/* My Role Card Access Button */}
          {roleBadge && onOpenRoleCard && (
            <button
              onClick={onOpenRoleCard}
              title="Bấm để xem lại Thẻ Vai Trò bí mật của bạn"
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl border text-xs font-black uppercase transition-all shadow-sm active:scale-95 ${roleBadge.bg}`}
            >
              <roleBadge.icon className="w-3.5 h-3.5" />
              <span>{roleBadge.label}</span>
            </button>
          )}
        </div>

        {/* Right: Actions (Solve Button, Conclude Round, Rules, Sound, Reset) */}
        <div className="flex items-center gap-2">
          {/* Conclude Round Button (Active during discussion) */}
          {isDayPhase && (
            <button
              type="button"
              onClick={concludeRound}
              title="Chủ động kết thúc sớm thời gian thảo luận để chuyển sang vòng tiếp theo"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/20 border border-emerald-500/30"
            >
              <FastForward className="w-3.5 h-3.5" />
              <span>Kết Luận ({gameState.currentRound < 3 ? `Qua Vòng ${gameState.currentRound + 1}` : "Hết Giờ"})</span>
            </button>
          )}

          {/* Solve the Crime Button */}
          {isDayPhase && (
            <button
              type="button"
              disabled={!canSolve}
              onClick={() => setSolveModalOpen(true)}
              className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 ${
                canSolve
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/30 ring-1 ring-amber-400"
                  : "bg-stone-200 text-stone-400 border border-stone-300 cursor-not-allowed opacity-70"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>{canSolve ? "Phá Án" : "Hết Huy Hiệu"}</span>
            </button>
          )}


          {/* Music Control Bar (Track info + Volume + Host song selector) */}
          <MusicControlBar />

          {/* Rules Guide Button */}
          <button
            onClick={onOpenRules}
            title="Xem Luật Chơi"
            className="p-2 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-stone-600 hover:text-stone-900 transition-colors shadow-sm"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Host Reset Game */}
          {isHost && (
            <button
              onClick={resetGame}
              title="Thiết lập lại ván đấu (Về Lobby)"
              className="p-2 rounded-xl bg-white border border-stone-300 hover:bg-stone-50 text-stone-500 hover:text-rose-600 transition-colors shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

        </div>
      </div>
    </header>
  );
};
