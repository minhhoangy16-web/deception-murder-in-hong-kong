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
}) => {
  const isMeans = type === "MEANS";

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={`rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 select-none relative group ${
        isMeans
          ? "bg-[#090e15] border border-slate-700/60 shadow-lg shadow-black/80 hover:border-sky-500/50"
          : "bg-[#18070a] border border-rose-950/80 shadow-lg shadow-black/80 hover:border-rose-600/50"
      } ${
        isSelected
          ? isMeans
            ? "ring-2 ring-sky-400 scale-[1.03] shadow-xl shadow-sky-500/40"
            : "ring-2 ring-rose-400 scale-[1.03] shadow-xl shadow-rose-500/40"
          : "hover:translate-y-[-2px]"
      } ${isClickable ? "cursor-pointer active:scale-95" : "cursor-default"} ${
        isKeyCard ? "ring-4 ring-amber-400 animate-pulse-glow" : ""
      }`}
    >
      {/* Top Header Information: Line 1 English Underlined + Line 2 Vietnamese */}
      <div className="pt-2 px-2 pb-0.5 flex items-start justify-between gap-1 z-10">
        <div className="min-w-0 text-left w-full">
          <div
            className={`font-black text-[10px] sm:text-[11px] tracking-wider uppercase truncate underline decoration-1 underline-offset-2 ${
              isMeans ? "text-slate-100 decoration-slate-500" : "text-amber-100 decoration-amber-700"
            }`}
          >
            {card.nameEn}
          </div>
          <div
            className={`text-[8.5px] sm:text-[9.5px] font-medium leading-tight truncate mt-0.5 ${
              isMeans ? "text-slate-400" : "text-amber-200/70"
            }`}
          >
            {card.nameVi}
          </div>
        </div>

        {isSelected && (
          <span className="p-0.5 rounded-full bg-amber-400 text-slate-950 shrink-0 shadow-md">
            <Crosshair className="w-3 h-3 stroke-[3]" />
          </span>
        )}
      </div>

      {/* Center Artwork Canvas with Concentric Radial Oval Glow matching user image */}
      <div className="relative flex-1 w-full flex items-center justify-center p-1 sm:p-2 min-h-[75px] sm:min-h-[85px] overflow-hidden">
        {/* Concentric Elliptical Glow Aura */}
        <div
          className={`absolute inset-0 m-auto w-3/4 h-3/4 rounded-full blur-sm opacity-60 pointer-events-none transition-all duration-300 group-hover:scale-110 ${
            isMeans
              ? "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-700/40 via-cyan-900/20 to-transparent"
              : "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/35 via-rose-900/25 to-transparent"
          }`}
        />

        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <CardIllustration
            cardId={card.id}
            cardNameEn={card.nameEn}
            type={type}
          />
        </div>
      </div>

      {/* Target Marker Badge for End Game */}
      {isKeyCard && (
        <div className="absolute -top-1 -right-1 bg-amber-400 text-slate-950 font-black text-[8px] px-1.5 py-0.5 rounded-full shadow-lg border border-slate-900 z-20">
          ĐÁP ÁN
        </div>
      )}
    </div>
  );
};
