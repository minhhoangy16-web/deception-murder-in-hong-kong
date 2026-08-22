import React from "react";
import { Player } from "../../types/game";
import { CardBadge } from "./CardBadge";
import { CharacterAvatar } from "./CharacterAvatar";
import { Shield, ShieldAlert, Award, Bot, Eye } from "lucide-react";

interface PlayerSeatProps {
  player: Player;
  seatIndex?: number;
  isCurrentPlayer: boolean;
  selectedMeansId?: string | null;
  selectedClueId?: string | null;
  selectedSuspectId?: string | null;
  onSelectMeans?: (cardId: string) => void;
  onSelectClue?: (cardId: string) => void;
  onSelectSuspect?: (playerId: string) => void;
  isSolveMode?: boolean;
  keyMeansId?: string;
  keyClueId?: string;
  isGameOver?: boolean;
  lang?: "vi" | "en";
}

export const PlayerSeat: React.FC<PlayerSeatProps> = ({
  player,
  seatIndex = 1,
  isCurrentPlayer,
  selectedMeansId,
  selectedClueId,
  selectedSuspectId,
  onSelectMeans,
  onSelectClue,
  onSelectSuspect,
  isSolveMode = false,
  keyMeansId,
  keyClueId,
  isGameOver = false,
  lang = "vi",
}) => {
  const isSuspectSelected = selectedSuspectId === player.id;
  const isVietnamese = lang === "vi";

  const getRoleBadge = () => {
    if (player.isWitnessSuspect) {
      return (
        <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-800 border border-rose-500/40 text-[9.5px] font-black tracking-wider uppercase flex items-center gap-1 animate-pulse">
          <ShieldAlert className="w-3 h-3 text-rose-600" />
          {isVietnamese ? "⚠️ NGHI CAN" : "⚠️ SUSPECT"}
        </span>
      );
    }

    if (!player.role) return null;
    switch (player.role) {
      case "MURDERER":
        return (
          <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-700 border border-rose-500/40 text-[9.5px] font-black tracking-wider uppercase flex items-center gap-1">
            <ShieldAlert className="w-3 h-3" /> {isVietnamese ? "HUNG THỦ" : "MURDERER"}
          </span>
        );
      case "ACCOMPLICE":
        return (
          <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-700 border border-purple-500/40 text-[9.5px] font-black tracking-wider uppercase flex items-center gap-1">
            <Shield className="w-3 h-3" /> {isVietnamese ? "ĐỒNG PHẠM" : "ACCOMPLICE"}
          </span>
        );
      case "WITNESS":
        return (
          <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-800 border border-amber-500/40 text-[9.5px] font-black tracking-wider uppercase flex items-center gap-1">
            <Eye className="w-3 h-3 text-amber-600" /> {isVietnamese ? "NHÂN CHỨNG" : "WITNESS"}
          </span>
        );
      case "INVESTIGATOR":
        return (
          <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-800 border border-sky-500/40 text-[9.5px] font-bold tracking-wider uppercase">
            🔍 {isVietnamese ? "ĐIỀU TRA VIÊN" : "INVESTIGATOR"}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`desk-panel rounded-3xl p-3 sm:p-3.5 transition-all duration-300 flex flex-col justify-between shadow-md ${
        isCurrentPlayer
          ? "ring-2 ring-rose-500/70 shadow-xl shadow-rose-900/10 bg-gradient-to-b from-[#faf5ee] to-[#f4ebe1]"
          : isSuspectSelected
          ? "ring-2 ring-amber-500 shadow-xl"
          : ""
      }`}
    >
      {/* 1. Header: Avatar, Name + Tag, Badge Shield */}
      <div className="flex items-center justify-between gap-1.5 border-b border-stone-300/80 pb-2 mb-2.5">
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            onClick={isSolveMode && onSelectSuspect ? () => onSelectSuspect(player.id) : undefined}
            className={`rounded-2xl shrink-0 ${
              isSolveMode ? "cursor-pointer hover:ring-2 hover:ring-amber-500" : ""
            }`}
          >
            <CharacterAvatar avatarId={player.avatar} size="sm" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-[13.5px] font-black text-stone-900 truncate">
                {player.name}
              </span>
              {isCurrentPlayer && (
                <span className="px-1.5 py-0.5 rounded-md bg-rose-600 text-white text-[8.5px] font-black tracking-wider shrink-0 shadow-xs">
                  {isVietnamese ? "BẠN" : "YOU"}
                </span>
              )}
              {player.isBot && (
                <span className="px-1.5 py-0.5 rounded-md bg-stone-300 text-stone-700 text-[8.5px] font-black tracking-wider flex items-center gap-0.5 shrink-0">
                  <Bot className="w-2.5 h-2.5" /> BOT
                </span>
              )}
            </div>

            <div className="flex items-center gap-1 mt-0.5">
              {getRoleBadge()}
            </div>
          </div>
        </div>

        {/* Badge Token & Solve Selection */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div
            title={player.hasBadge ? "Còn Huy Hiệu Phá Án" : "Đã sử dụng Huy Hiệu"}
            className={`px-2 py-1 rounded-xl border text-[9.5px] font-black flex items-center gap-1 shadow-xs ${
              player.hasBadge
                ? "bg-amber-100 border-amber-400 text-amber-900"
                : "bg-stone-200 border-stone-300 text-stone-400 opacity-60"
            }`}
          >
            <Award className={`w-3.5 h-3.5 ${player.hasBadge ? "text-amber-600" : "text-stone-400"}`} />
            <span>{player.hasBadge ? "Huy hiệu" : "Hết"}</span>
          </div>

          {isSolveMode && !isCurrentPlayer && (
            <button
              onClick={() => onSelectSuspect && onSelectSuspect(player.id)}
              className={`px-2.5 py-1 rounded-xl text-[10px] font-black uppercase transition-colors shadow-sm ${
                isSuspectSelected
                  ? "bg-amber-500 text-slate-950 shadow-md"
                  : "bg-stone-200 hover:bg-stone-300 text-stone-800"
              }`}
            >
              {isSuspectSelected ? "ĐÃ CHỌN" : "CHỌN"}
            </button>
          )}
        </div>
      </div>

      {/* 2. Top Row: 4 Clues (Manh Mối - Crimson Glow) */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-2">
        {player.clueCards.map((card) => (
          <CardBadge
            key={card.id}
            card={card}
            type="CLUE"
            isSelected={selectedClueId === card.id}
            isKeyCard={isGameOver && card.id === keyClueId}
            isClickable={isSolveMode && !!onSelectClue}
            onClick={() => onSelectClue && onSelectClue(card.id)}
            lang={lang}
          />
        ))}
      </div>

      {/* 3. Bottom Row: 4 Means (Hung Khí - Slate Teal Glow) */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-2.5">
        {player.meansCards.map((card) => (
          <CardBadge
            key={card.id}
            card={card}
            type="MEANS"
            isSelected={selectedMeansId === card.id}
            isKeyCard={isGameOver && card.id === keyMeansId}
            isClickable={isSolveMode && !!onSelectMeans}
            onClick={() => onSelectMeans && onSelectMeans(card.id)}
            lang={lang}
          />
        ))}
      </div>

      {/* 4. Footer Bàn: Tên bàn */}
      <div className="border-t border-stone-200/90 pt-1.5 flex items-center justify-between text-[10px] font-bold text-stone-500 uppercase tracking-wider">
        <span className="text-stone-700 font-black">
          BÀN {seatIndex} - {player.name.toUpperCase()}
        </span>
        <span className="text-[9px] text-stone-400">
          4 CLUES / 4 MEANS
        </span>
      </div>
    </div>
  );
};
