import React from "react";
import { Card } from "../../types/game";
import { CardIllustration } from "./CardIllustration";
import { Crosshair } from "lucide-react";

interface CardBadgeProps {
  card: Card;
  type: "MEANS" | "CLUE";
  isSelected?: boolean;
  isKeyCard?: boolean; // Highlighted if revealed at end game
  onClick?: () => void;
  isClickable?: boolean;
  lang?: "vi" | "en";
}

export const CardBadge: React.FC<CardBadgeProps> = ({
  card,
  type,
  isSelected = false,
  isKeyCard = false,
  onClick,
  isClickable = false,
  lang = "vi",
}) => {
  const isMeans = type === "MEANS";
  const isVietnamese = lang === "vi";

  const title = isVietnamese ? card.nameVi : card.nameEn;

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={`rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-200 select-none relative ${
        isMeans
          ? "bg-[#0b1016] border border-[#1e2e3f] shadow-md shadow-black/60"
          : "bg-[#180e11] border border-[#4d1f28] shadow-md shadow-black/60"
      } ${
        isSelected
          ? isMeans
            ? "ring-2 ring-sky-400 scale-[1.02] shadow-xl shadow-sky-500/30"
            : "ring-2 ring-rose-400 scale-[1.02] shadow-xl shadow-rose-500/30"
          : "hover:translate-y-[-2px]"
      } ${isClickable ? "cursor-pointer active:scale-95" : "cursor-default"} ${
        isKeyCard ? "ring-4 ring-amber-400 animate-pulse-glow" : ""
      }`}
    >
      {/* Top Header Box matching Hình 2 */}
      <div
        className={`px-1.5 py-1 sm:py-1.5 flex items-center justify-between gap-1 border-b ${
          isMeans
            ? "bg-[#1a2533] border-[#293c52] text-slate-100"
            : "bg-[#3d1c22] border-[#5e2730] text-amber-100"
        }`}
      >
        <h4 className="text-[10px] sm:text-[11.5px] font-black uppercase tracking-tight truncate leading-tight font-sans mx-auto text-center w-full">
          {title}
        </h4>
        {isSelected && (
          <span className="p-0.5 rounded-full bg-amber-400 text-slate-950 shrink-0 absolute right-1">
            <Crosshair className="w-2.5 h-2.5 stroke-[3]" />
          </span>
        )}
      </div>

      {/* Center Artwork Canvas with Maximum Area */}
      <div className="flex-1 w-full flex items-center justify-center p-1">
        <CardIllustration
          cardId={card.id}
          cardNameEn={card.nameEn}
          type={type}
          lang={lang}
        />
      </div>

      {/* Target Marker Badge for End Game */}
      {isKeyCard && (
        <div className="absolute -top-1 -right-1 bg-amber-400 text-slate-950 font-black text-[8px] px-1.5 py-0.2 rounded-full shadow-lg border border-slate-900 z-20">
          {isVietnamese ? "ĐÁP ÁN" : "KEY"}
        </div>
      )}
    </div>
  );
};
