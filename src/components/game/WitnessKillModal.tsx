import React, { useState } from "react";
import { useGameStore } from "../../store/gameStore";
import { CharacterAvatar } from "./CharacterAvatar";
import { Crosshair, Skull, ShieldAlert, AlertCircle } from "lucide-react";


export const WitnessKillModal: React.FC = () => {
  const { gameState, myPlayerId, submitWitnessKill } = useGameStore();
  const [targetId, setTargetId] = useState<string | null>(null);

  if (!gameState || gameState.phase !== "WITNESS_ASSASSINATION") return null;

  const myPlayer = gameState.players.find((p) => p.id === myPlayerId);
  const isMurderer = myPlayer?.role === "MURDERER";

  const potentialTargets = gameState.players.filter(
    (p) => p.id !== myPlayerId && p.role !== "ACCOMPLICE"
  );

  const handleConfirm = () => {
    if (!targetId) return;
    submitWitnessKill(targetId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
      <div className="relative w-full max-w-xl rounded-3xl bg-slate-950 border border-rose-900/60 p-6 shadow-2xl text-slate-100 space-y-5">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-widest">
            <Skull className="w-3.5 h-3.5" /> CƠ HỘI ÁM SÁT CUỐI CÙNG
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-rose-400">
            Truy Tìm Nhân Chứng (Witness)
          </h2>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Vụ án đã bị giải mã! Tuy nhiên, Hung thủ có 1 phát súng cuối cùng để tiêu diệt Nhân Chứng. Nếu bắn trúng, phe Hung thủ sẽ chiến thắng ngoạn mục!
          </p>
        </div>

        {isMurderer ? (
          <div className="space-y-4">
            <div className="p-3.5 rounded-2xl bg-rose-950/40 border border-rose-800/80 text-xs text-rose-200">
              <span className="font-bold block text-sm text-rose-300 mb-1">
                🎯 LỰA CHỌN MỤC TIÊU ÁM SÁT:
              </span>
              Ai trong số các thám tử dưới đây chính là Nhân Chứng đã ngầm chỉ điểm bạn?
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {potentialTargets.map((p) => {
                const isSelected = targetId === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setTargetId(p.id)}
                    className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                      isSelected
                        ? "bg-rose-600/30 border-rose-400 ring-2 ring-rose-400 text-white shadow-lg"
                        : "bg-slate-900/70 border-slate-800 hover:border-slate-700 text-slate-300"
                    }`}
                  >
                    <CharacterAvatar avatarId={p.avatar} size="sm" />
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate">{p.name}</div>
                      <div className="text-[10px] text-slate-500">

                        {p.isBot ? "AI Bot" : "Người chơi"}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              disabled={!targetId}
              onClick={handleConfirm}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-black text-xs uppercase tracking-wider disabled:opacity-40 shadow-xl shadow-rose-950/50 transition-all flex items-center justify-center gap-2"
            >
              <Crosshair className="w-4 h-4 stroke-[3]" />
              BẮN HẠ MỤC TIÊU NÀY
            </button>
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-950/40 border border-rose-800/60 flex items-center justify-center mx-auto text-rose-400">
              <Crosshair className="w-6 h-6 animate-spin" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-200">HUNG THỦ ĐANG NHẮM BẮN...</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Hãy nín thở cầu nguyện! Nếu hung thủ đoán sai Nhân chứng, phe Điều tra viên sẽ chiến thắng!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
