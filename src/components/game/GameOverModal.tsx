import React, { useEffect } from "react";
import { useGameStore } from "../../store/gameStore";
import confetti from "canvas-confetti";
import { CharacterAvatar } from "./CharacterAvatar";
import { Trophy, Skull, RotateCcw, Bot, Shield, CheckCircle2, ChevronRight } from "lucide-react";


export const GameOverModal: React.FC = () => {
  const { gameState, myPlayerId, resetGame } = useGameStore();

  useEffect(() => {
    if (gameState?.phase === "GAME_OVER") {
      const myPlayer = gameState.players.find((p) => p.id === myPlayerId);
      const isWinner =
        (gameState.winner === "INVESTIGATORS" &&
          myPlayer?.role !== "MURDERER" &&
          myPlayer?.role !== "ACCOMPLICE") ||
        (gameState.winner === "MURDERER" &&
          (myPlayer?.role === "MURDERER" || myPlayer?.role === "ACCOMPLICE"));

      if (isWinner) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      }
    }
  }, [gameState?.phase, gameState?.winner, myPlayerId, gameState?.players]);

  if (!gameState || gameState.phase !== "GAME_OVER") return null;

  const myPlayer = gameState.players.find((p) => p.id === myPlayerId);
  const isHost = myPlayer?.isHost ?? false;
  const isInvestigatorWin = gameState.winner === "INVESTIGATORS";

  // Find murderer player & crime details
  const murderer = gameState.players.find((p) => p.role === "MURDERER");
  const keyMeans = murderer?.meansCards.find(
    (m) => m.id === gameState.murderSelection?.meansCardId
  );
  const keyClue = murderer?.clueCards.find(
    (c) => c.id === gameState.murderSelection?.clueCardId
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl text-slate-100 space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Banner */}
        <div className="text-center space-y-2">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${
              isInvestigatorWin
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
            }`}
          >
            {isInvestigatorWin ? (
              <Trophy className="w-4 h-4" />
            ) : (
              <Skull className="w-4 h-4" />
            )}
            KẾT QUẢ VỤ ÁN HỒNG KÔNG
          </div>

          <h2
            className={`text-2xl sm:text-3xl font-black uppercase tracking-tight ${
              isInvestigatorWin ? "text-emerald-400" : "text-rose-500"
            }`}
          >
            {isInvestigatorWin
              ? "Phe Điều Tra Viên Toàn Thắng!"
              : "Phe Hung Thủ Tẩu Thoát Thành Công!"}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            {gameState.winReasonVi || "Vụ án đã kết thúc."}
          </p>
        </div>

        {/* The Truth Reveal Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> TOÀN BỘ SỰ THẬT VỤ ÁN (THE CRIME)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center justify-center">
              <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">
                Hung Thủ (Murderer)
              </div>
              <div className="my-1">
                <CharacterAvatar avatarId={murderer?.avatar} size="md" />
              </div>
              <div className="text-xs font-black text-rose-400 truncate mt-1">
                {murderer?.name || "Không rõ"}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-800/60 text-center flex flex-col justify-center">
              <div className="text-[10px] text-sky-400 uppercase font-bold mb-1">
                {gameState.settings.language === "vi" ? "Hung Khí" : "Key Means"}
              </div>
              <div className="text-xs font-black text-sky-200 truncate">
                {gameState.settings.language === "vi" ? (keyMeans?.nameVi || "...") : (keyMeans?.nameEn || "...")}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/60 text-center flex flex-col justify-center">
              <div className="text-[10px] text-rose-400 uppercase font-bold mb-1">
                {gameState.settings.language === "vi" ? "Bằng Chứng" : "Key Clue"}
              </div>
              <div className="text-xs font-black text-rose-200 truncate">
                {gameState.settings.language === "vi" ? (keyClue?.nameVi || "...") : (keyClue?.nameEn || "...")}
              </div>
            </div>
          </div>
        </div>


        {/* All Players Roles Reveal */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Danh Tính Tất Cả Người Chơi Trong Bàn:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {gameState.players.map((p) => {
              const isM = p.role === "MURDERER";
              const isA = p.role === "ACCOMPLICE";
              const isW = p.role === "WITNESS";

              return (
                <div
                  key={p.id}
                  className={`p-2.5 rounded-xl border flex items-center gap-2.5 ${
                    isM
                      ? "bg-rose-950/30 border-rose-800/60 text-rose-300"
                      : isA
                      ? "bg-purple-950/30 border-purple-800/60 text-purple-300"
                      : isW
                      ? "bg-amber-950/30 border-amber-800/60 text-amber-300"
                      : "bg-slate-950/60 border-slate-800 text-slate-300"
                  }`}
                >
                  <CharacterAvatar avatarId={p.avatar} size="sm" />
                  <div className="min-w-0">
                    <div className="text-xs font-bold truncate">{p.name}</div>
                    <div className="text-[9px] uppercase font-black tracking-wider opacity-80">
                      {isM
                        ? "Hung Thủ"
                        : isA
                        ? "Đồng Phạm"
                        : isW
                        ? "Nhân Chứng"
                        : "Điều Tra Viên"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* AI Forensic Reasoning Debrief */}
        {gameState.forensicNotes && gameState.forensicNotes.length > 0 && (
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Bot className="w-4 h-4" /> Nhật Ký Phân Tích Logic Của AI Pháp Y:
            </div>
            <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
              {gameState.forensicNotes.map((note, i) => (
                <div
                  key={i}
                  className="text-[11px] p-2 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-2"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200">{note.tileTitle}:</strong>{" "}
                    Đã chọn <span className="text-rose-400 font-bold">{note.selectedOption}</span> —{" "}
                    <span className="text-slate-400 italic">{note.reasoning}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Play Again Action */}
        <div className="pt-2 flex justify-center">
          {isHost ? (
            <button
              type="button"
              onClick={resetGame}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-rose-950/50 transition-all flex items-center gap-2 active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              CHƠI VỤ ÁN MỚI (VỀ LOBBY)
            </button>
          ) : (
            <div className="text-xs text-slate-400 italic">
              Đang đợi chủ phòng khởi tạo ván đấu mới...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
