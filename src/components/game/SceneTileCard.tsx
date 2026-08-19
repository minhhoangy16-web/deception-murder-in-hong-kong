import React from "react";
import { SceneTile } from "../../types/game";
import { Sparkles } from "lucide-react";

interface SceneTileCardProps {
  tile: SceneTile;
  lang?: "vi" | "en";
}

export const SceneTileCard: React.FC<SceneTileCardProps> = ({ tile, lang = "vi" }) => {
  const isCauseOfDeath = tile.type === "CAUSE_OF_DEATH";
  const isLocation = tile.type === "LOCATION";
  const isVietnamese = lang === "vi";

  // Split title into 2 parts for vintage styling (like in Hình 1: "Nguyên nhân" + "Chết", "Hiện trường" + "Vụ án")
  const getHeaderStyling = () => {
    if (isCauseOfDeath) {
      return {
        bg: "bg-[#2c1318]",
        textAccent: "text-[#f43f5e]",
        border: "border-[#7f1d1d]",
      };
    }
    if (isLocation) {
      return {
        bg: "bg-[#18232c]",
        textAccent: "text-[#38bdf8]",
        border: "border-[#0369a1]",
      };
    }
    return {
      bg: "bg-[#2a1b10]",
      textAccent: "text-[#fbbf24]",
      border: "border-[#b45309]",
    };
  };

  const styling = getHeaderStyling();
  const title = isVietnamese ? tile.titleVi : tile.titleEn;

  return (
    <div
      className={`rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 bg-[#12151b] border-1.5 border-stone-800 shadow-xl ${
        tile.isNew ? "ring-2 ring-amber-400 animate-pulse-glow" : ""
      }`}
    >
      {/* Top Header matching Hình 1 */}
      <div className={`p-2.5 sm:p-3 ${styling.bg} border-b ${styling.border} flex items-center justify-between gap-1.5`}>
        <div className="min-w-0">
          <h3 className={`text-xs sm:text-[13px] font-black uppercase tracking-wider ${styling.textAccent} truncate font-sans`}>
            {title}
          </h3>
        </div>

        {/* Round or New Indicator */}
        <div className="flex items-center gap-1 shrink-0">
          {tile.isNew && (
            <span className="flex items-center gap-0.5 text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950 shadow-md">
              <Sparkles className="w-2.5 h-2.5" /> {isVietnamese ? "MỚI" : "NEW"}
            </span>
          )}
          {tile.roundPlaced && (
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/40 text-slate-300 border border-white/10">
              R{tile.roundPlaced}
            </span>
          )}
        </div>
      </div>

      {/* 6 Options Grid with White Box Highlight matching Hình 1 */}
      <div className="p-2 sm:p-2.5 space-y-1.5 flex-1 bg-[#101319]">
        {tile.options.map((opt) => {
          const isMarked = tile.markerIndex === opt.index;
          const displayLabel = isVietnamese ? opt.labelVi : opt.labelEn;

          return (
            <div
              key={opt.index}
              className={`relative flex items-center justify-center p-2 rounded-lg text-xs transition-all duration-200 text-center ${
                isMarked
                  ? "border-2 border-white bg-white/10 text-white font-black shadow-lg shadow-black/80 marker-pin ring-1 ring-white/40"
                  : "bg-black/30 hover:bg-black/50 border border-white/5 text-slate-300"
              }`}
            >
              <span className="truncate text-[11px] sm:text-xs font-semibold leading-tight">
                {displayLabel}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
