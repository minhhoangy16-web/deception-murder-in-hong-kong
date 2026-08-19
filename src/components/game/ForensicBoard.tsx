import React, { useState } from "react";
import { SceneTile } from "../../types/game";
import { SceneTileCard } from "./SceneTileCard";
import { Bot, History, Sparkles, AlertCircle } from "lucide-react";

interface ForensicBoardProps {
  activeTiles: SceneTile[];
  discardedTiles: SceneTile[];
  aiProvider: string;
  lang?: "vi" | "en";
}

export const ForensicBoard: React.FC<ForensicBoardProps> = ({
  activeTiles,
  discardedTiles,
  aiProvider,
  lang = "vi",
}) => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="desk-panel rounded-3xl p-4 sm:p-5 space-y-4">
      {/* Board Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-stone-300 pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-black text-stone-900 uppercase tracking-wider flex items-center gap-2">
              Bảng Giám Định Pháp Y (Forensic Bulletin Board)
            </h2>
            <p className="text-xs text-stone-500">
              Nhà giám định pháp y AI ghim các đầu mối quan trọng. Hãy liên kết các dấu vết trên thẻ bài để phá án!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 border border-stone-300 text-xs font-black text-emerald-800">
            <Bot className="w-3.5 h-3.5 text-emerald-600" />
            <span>AI: {aiProvider.toUpperCase()}</span>
          </div>

          {discardedTiles.length > 0 && (
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 border border-purple-300 text-xs font-black text-purple-900 transition-colors"
            >
              <History className="w-3.5 h-3.5" />
              Lịch sử thẻ cũ ({discardedTiles.length})
            </button>
          )}
        </div>
      </div>

      {/* Discarded Tiles Tray Modal / Collapsible */}
      {showHistory && discardedTiles.length > 0 && (
        <div className="p-4 rounded-2xl bg-stone-100 border border-purple-300 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between text-xs text-purple-900 font-black">
            <span className="flex items-center gap-1">
              <History className="w-3.5 h-3.5 text-purple-700" /> Thẻ đã bị thay thế ở các vòng trước:
            </span>
            <button
              onClick={() => setShowHistory(false)}
              className="text-[11px] text-stone-600 hover:text-stone-900 underline font-bold"
            >
              Thu gọn
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {discardedTiles.map((tile) => (
              <div key={tile.id} className="opacity-80 hover:opacity-100 transition-opacity">
                <SceneTileCard tile={tile} lang={lang} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6 Active Scene Tiles Grid */}
      {activeTiles.length === 0 ? (
        <div className="py-8 px-4 text-center rounded-2xl bg-stone-100/70 border border-dashed border-stone-300 text-stone-600 flex flex-col items-center justify-center gap-2">
          <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-700 border border-amber-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-xs font-black text-stone-800 uppercase tracking-wider">
            Bảng Giám Định Đang Chờ Màn Đêm Kết Thúc
          </span>
          <p className="text-[11px] text-stone-500 max-w-md">
            Nhân viên pháp y AI sẽ bắt đầu rút bài và ghim các dấu vết hiện trường lên bảng ngay sau khi Hung thủ hoàn tất chọn Hung Khí & Bằng Chứng trong màn đêm!
          </p>
        </div>
      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
          {activeTiles.map((tile) => (
            <SceneTileCard key={tile.id} tile={tile} lang={lang} />
          ))}
        </div>
      )}
    </div>
  );
};
