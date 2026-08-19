import React, { useState } from "react";
import { useGameStore } from "../../store/gameStore";
import { CardBadge } from "./CardBadge";
import { Moon, ShieldAlert, Eye, Lock, CheckCircle2, Bot } from "lucide-react";

export const NightPhaseModal: React.FC = () => {
  const { gameState, myPlayerId, submitMurderSelection } = useGameStore();

  const [selectedMeansId, setSelectedMeansId] = useState<string | null>(null);
  const [selectedClueId, setSelectedClueId] = useState<string | null>(null);

  if (!gameState || gameState.phase !== "NIGHT") return null;

  const myPlayer = gameState.players.find((p) => p.id === myPlayerId);
  const isMurderer = myPlayer?.role === "MURDERER";
  const isAccomplice = myPlayer?.role === "ACCOMPLICE";
  const isWitness = myPlayer?.role === "WITNESS";

  // Find murderer player if visible to Accomplice / Witness
  const murdererPlayer = gameState.players.find((p) => p.role === "MURDERER");
  const accomplicePlayer = gameState.players.find((p) => p.role === "ACCOMPLICE");

  const handleSubmit = () => {
    if (!selectedMeansId || !selectedClueId) return;
    submitMurderSelection(selectedMeansId, selectedClueId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-950 border border-slate-800 p-6 shadow-2xl text-slate-100 space-y-6">
        {/* Night Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
            <Moon className="w-3.5 h-3.5" /> GIAI ĐOẠN GÂY ÁN (NIGHT PHASE)
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-100 tracking-tight">
            Màn Đêm Buông Xuống Hồng Kông
          </h2>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Tất cả điều tra viên nhắm mắt. Chỉ có kẻ thủ ác và những bóng đen trong đêm đang hành động...
          </p>
        </div>

        {/* Role Specific View */}
        {isMurderer ? (
          <div className="space-y-5">
            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-800/60 flex items-start gap-3">
              <ShieldAlert className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
              <div className="text-xs text-rose-200">
                <span className="font-bold block text-sm text-rose-300 mb-0.5">
                  BẠN LÀ HUNG THỦ (MURDERER)!
                </span>
                Hãy bí mật chọn <strong>1 Thẻ Hung Khí (Xanh)</strong> và <strong>1 Thẻ Bằng Chứng (Đỏ)</strong> từ 8 thẻ bài của bạn. AI Pháp y sẽ dựa vào cặp thẻ này để giám định!
              </div>
            </div>

            {/* Select 1 Means */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                1. Chọn 1 Hung Khí Của Bạn:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {myPlayer?.meansCards.map((card) => (
                  <CardBadge
                    key={card.id}
                    card={card}
                    type="MEANS"
                    isSelected={selectedMeansId === card.id}
                    isClickable={true}
                    onClick={() => setSelectedMeansId(card.id)}
                    lang={gameState.settings.language}
                  />
                ))}
              </div>
            </div>

            {/* Select 1 Clue */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                2. Chọn 1 Bằng Chứng Của Bạn:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {myPlayer?.clueCards.map((card) => (
                  <CardBadge
                    key={card.id}
                    card={card}
                    type="CLUE"
                    isSelected={selectedClueId === card.id}
                    isClickable={true}
                    onClick={() => setSelectedClueId(card.id)}
                    lang={gameState.settings.language}
                  />
                ))}
              </div>
            </div>


            <button
              type="button"
              disabled={!selectedMeansId || !selectedClueId}
              onClick={handleSubmit}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-black text-xs uppercase tracking-widest disabled:opacity-40 shadow-xl shadow-rose-950/50 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              XÁC NHẬN CẶP THẺ TỘI PHẠM
            </button>
          </div>
        ) : isAccomplice ? (
          <div className="p-6 rounded-2xl bg-purple-950/30 border border-purple-800/60 space-y-4 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-purple-300">BẠN LÀ ĐỒNG PHẠM (ACCOMPLICE)</h3>
              <p className="text-xs text-purple-200/80 mt-1 max-w-md mx-auto">
                Bạn thuộc phe Hung thủ! Hãy theo dõi xem ai là Hung thủ và giúp đỡ đánh lạc hướng các Điều tra viên khác trong các vòng thảo luận!
              </p>
            </div>
            {murdererPlayer && (
              <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-800 text-xs font-semibold text-purple-200">
                Hung thủ của ván này là: <strong className="text-white font-black">{murdererPlayer.name}</strong>
              </div>
            )}
            <div className="text-[11px] text-slate-400 italic">
              Đang đợi Hung thủ chọn hung khí & bằng chứng...
            </div>
          </div>
        ) : isWitness ? (
          <div className="p-6 rounded-2xl bg-amber-950/30 border border-amber-800/60 space-y-4 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-amber-300">BẠN LÀ NHÂN CHỨNG (WITNESS)</h3>
              <p className="text-xs text-amber-200/80 mt-1 max-w-md mx-auto">
                Trong bóng đêm, bạn đã thoáng thấy bóng dáng kẻ thủ ác! Hãy dẫn dắt phe Điều tra viên mà không để Hung thủ phát hiện danh tính của bạn!
              </p>
            </div>
            <div className="p-3 rounded-xl bg-amber-900/40 border border-amber-800 text-xs text-amber-200 space-y-1">
              <div>Kẻ tình nghi xuất hiện trong đêm:</div>
              <div className="font-bold text-white">
                {murdererPlayer ? murdererPlayer.name : "..."}
                {accomplicePlayer ? ` & ${accomplicePlayer.name}` : ""}
              </div>
            </div>
            <div className="text-[11px] text-slate-400 italic">
              Đang đợi giai đoạn gây án hoàn tất...
            </div>
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 text-center">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto text-slate-400">
              <Lock className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-200">BẠN LÀ ĐIỀU TRA VIÊN (INVESTIGATOR)</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                Hãy chờ đợi trong tĩnh lặng. Nhà giám định pháp y AI sẽ phân tích và đưa ra các manh mối hiện trường ngay khi ngày mới bắt đầu!
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-emerald-400 font-semibold pt-2">
              <Bot className="w-4 h-4" />
              <span>AI Pháp Y đang chuẩn bị hồ sơ vụ án...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
