import React, { useState, useEffect } from "react";
import { useGameStore } from "../../store/gameStore";
import { CardBadge } from "./CardBadge";
import { CharacterAvatar } from "./CharacterAvatar";
import { X, Award, AlertTriangle, Crosshair } from "lucide-react";


export const SolveCrimeModal: React.FC = () => {
  const {
    isSolveModalOpen,
    setSolveModalOpen,
    gameState,
    myPlayerId,
    solveCrime,
  } = useGameStore();

  const [suspectId, setSuspectId] = useState<string | null>(null);
  const [meansId, setMeansId] = useState<string | null>(null);
  const [clueId, setClueId] = useState<string | null>(null);

  useEffect(() => {
    if (isSolveModalOpen) {
      setSuspectId(null);
      setMeansId(null);
      setClueId(null);
    }
  }, [isSolveModalOpen]);

  if (!isSolveModalOpen || !gameState) return null;

  const myPlayer = gameState.players.find((p) => p.id === myPlayerId);
  const suspect = gameState.players.find((p) => p.id === suspectId);

  const handleConfirm = () => {
    if (!suspectId || !meansId || !clueId) return;
    solveCrime(suspectId, meansId, clueId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl text-slate-100 space-y-5 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-100 uppercase tracking-wider flex items-center gap-2">
                Quyết Định Phá Án (Solve The Crime)
              </h2>
              <p className="text-xs text-slate-400">
                Hãy lựa chọn chính xác Nghi phạm, Hung khí và Bằng chứng của người đó!
              </p>
            </div>
          </div>
          <button
            onClick={() => setSolveModalOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Warning Alert */}
        <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-800/60 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-200">
            <strong>CẢNH BÁO:</strong> Bạn chỉ có duy nhất <strong>1 Huy hiệu phá án</strong> trong cả trận đấu. Nếu bạn đoán sai dù chỉ 1 thẻ, bạn sẽ <strong>mất vĩnh viễn quyền phá án</strong> trong các vòng còn lại!
          </div>
        </div>

        {/* Step 1: Select Suspect */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
            Bước 1: Chọn Nghi Phạm (Suspect)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {gameState.players.map((p) => {
              const isSelected = suspectId === p.id;
              const isSelf = p.id === myPlayerId;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setSuspectId(p.id);
                    setMeansId(null);
                    setClueId(null);
                  }}
                  className={`p-3 rounded-2xl border text-left flex items-center gap-2.5 transition-all ${
                    isSelected
                      ? "bg-amber-500/20 border-amber-400 ring-2 ring-amber-400 text-amber-200 shadow-md"
                      : "bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-300"
                  }`}
                >
                  <CharacterAvatar avatarId={p.avatar} size="sm" />
                  <div className="min-w-0">
                    <div className="text-xs font-bold truncate">
                      {p.name} {isSelf ? "(Bạn)" : ""}
                    </div>

                    <div className="text-[10px] text-slate-500">
                      {p.isBot ? "AI Bot" : "Người chơi"}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2 & 3: Select Means & Clue of Selected Suspect */}
        {suspect ? (
          <div className="space-y-4 pt-2 border-t border-slate-800/80">
            <div className="text-xs font-semibold text-slate-400">
              Đang xem 8 thẻ bài của nghi phạm:{" "}
              <strong className="text-slate-100 font-bold">{suspect.name}</strong>
            </div>

            {/* Step 2: Means */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                Bước 2: Chọn Hung Khí (1 trong 4 thẻ Xanh)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {suspect.meansCards.map((card) => (
                  <CardBadge
                    key={card.id}
                    card={card}
                    type="MEANS"
                    isSelected={meansId === card.id}
                    isClickable={true}
                    onClick={() => setMeansId(card.id)}
                    lang={gameState.settings.language}
                  />
                ))}
              </div>
            </div>

            {/* Step 3: Clue */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-rose-400 uppercase tracking-wider block">
                Bước 3: Chọn Bằng Chứng (1 trong 4 thẻ Đỏ)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {suspect.clueCards.map((card) => (
                  <CardBadge
                    key={card.id}
                    card={card}
                    type="CLUE"
                    isSelected={clueId === card.id}
                    isClickable={true}
                    onClick={() => setClueId(card.id)}
                    lang={gameState.settings.language}
                  />
                ))}
              </div>
            </div>

          </div>
        ) : (
          <div className="py-6 text-center text-xs text-slate-500 italic bg-slate-950/40 rounded-2xl border border-slate-800">
            Vui lòng chọn 1 nghi phạm ở Bước 1 trước để hiển thị danh sách thẻ bài...
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => setSolveModalOpen(false)}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
          >
            Hủy Bỏ
          </button>

          <button
            type="button"
            disabled={!suspectId || !meansId || !clueId}
            onClick={handleConfirm}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed shadow-xl shadow-amber-500/20 transition-all active:scale-[0.98] flex items-center gap-2"
          >
            <Crosshair className="w-4 h-4 stroke-[3]" />
            XÁC NHẬN PHÁ ÁN
          </button>
        </div>
      </div>
    </div>
  );
};
