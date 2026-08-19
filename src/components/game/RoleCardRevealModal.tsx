import React from "react";
import { Role } from "../../types/game";
import { Shield, ShieldAlert, Eye, Search, Lock, X, Sparkles } from "lucide-react";

interface RoleCardRevealModalProps {
  isOpen: boolean;
  onClose: () => void;
  role?: Role;
  lang?: "vi" | "en";
}

export const RoleCardRevealModal: React.FC<RoleCardRevealModalProps> = ({
  isOpen,
  onClose,
  role,
  lang = "vi",
}) => {
  if (!isOpen || !role) return null;

  const isVietnamese = lang === "vi";

  const getRoleDetails = () => {
    switch (role) {
      case "MURDERER":
        return {
          titleVi: "HUNG THỦ",
          titleEn: "MURDERER",
          teamVi: "Phe Tội Phạm (Culprit Team)",
          teamEn: "Culprit Team",
          accentColor: "from-rose-600 via-rose-700 to-rose-950",
          borderColor: "border-rose-500",
          glowColor: "shadow-rose-900/60",
          badgeBg: "bg-rose-500/20 text-rose-300 border-rose-500/40",
          icon: ShieldAlert,
          descVi:
            "Bạn là kẻ gây ra án mạng! Trong màn đêm, hãy bí mật chọn 1 Hung Khí và 1 Bằng Chứng từ bộ bài của mình. Hãy giả vờ như một điều tra viên vô tội và đánh lạc hướng mọi người.",
          descEn:
            "You committed the crime! During the night, secretly select 1 Means and 1 Clue from your cards. Blend in as an innocent detective and mislead the investigation.",
          specialNoteVi:
            "⚡ Nếu bị phát hiện, bạn vẫn còn 1 cơ hội cuối: Đoán đúng danh tính của Nhân Chứng (Witness) để sát hại và lật ngược tình thế giành chiến thắng!",
          specialNoteEn:
            "⚡ If accused, you have one last chance: Correctly identify and assassinate the Witness to steal the victory!",
        };

      case "ACCOMPLICE":
        return {
          titleVi: "ĐỒNG PHẠM",
          titleEn: "ACCOMPLICE",
          teamVi: "Phe Tội Phạm (Culprit Team)",
          teamEn: "Culprit Team",
          accentColor: "from-purple-600 via-purple-700 to-purple-950",
          borderColor: "border-purple-500",
          glowColor: "shadow-purple-900/60",
          badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40",
          icon: Shield,
          descVi:
            "Bạn là trợ thủ đắc lực của Hung Thủ! Bạn biết chính xác ai là Hung Thủ cũng như Hung Khí & Bằng Chứng mà hắn chọn. Nhiệm vụ của bạn là bảo vệ Hung thủ và tung hỏa mù dẫn dắt các điều tra viên sang hướng khác.",
          descEn:
            "You are the Murderer's accomplice! You know who the Murderer is and which cards were chosen. Mislead the investigators to protect your partner.",
          specialNoteVi:
            "⚡ Bạn và Hung Thủ cùng chung mục tiêu: Không để các Điều Tra Viên đoán đúng vụ án trong 3 vòng!",
          specialNoteEn:
            "⚡ You share victory with the Murderer if the investigators fail to solve the crime within 3 rounds.",
        };

      case "WITNESS":
        return {
          titleVi: "NHÂN CHỨNG",
          titleEn: "WITNESS",
          teamVi: "Phe Điều Tra Viên (Investigator Team)",
          teamEn: "Investigator Team",
          accentColor: "from-amber-600 via-amber-700 to-amber-950",
          borderColor: "border-amber-500",
          glowColor: "shadow-amber-900/60",
          badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40",
          icon: Eye,
          descVi:
            "Bạn là người đã nhìn thấy 2 kẻ rời khỏi hiện trường trong đêm (Hung Thủ & Đồng Phạm). Bạn biết danh tính 2 kẻ này (được đánh dấu 'NGHI CAN' trên bàn), NHƯNG KHÔNG BIẾT ai là Hung Thủ và ai là Đồng Phạm!",
          descEn:
            "You saw the 2 culprits leaving the crime scene (Murderer & Accomplice). You see them tagged as 'SUSPECT', but do NOT know which is which!",
          specialNoteVi:
            "⚠️ NGUY HIỂM: Hãy kín đáo hướng đồng đội phá án! Nếu để lộ thân phận, Hung Thủ sẽ ám sát bạn ở cuối trận để lật ngược ván cờ!",
          specialNoteEn:
            "⚠️ DANGER: Guide your team subtly! If you reveal your identity, the Murderer will assassinate you at the end of the game to win!",
        };

      case "INVESTIGATOR":
      default:
        return {
          titleVi: "ĐIỀU TRA VIÊN",
          titleEn: "INVESTIGATOR",
          teamVi: "Phe Điều Tra Viên (Investigator Team)",
          teamEn: "Investigator Team",
          accentColor: "from-sky-600 via-sky-700 to-sky-950",
          borderColor: "border-sky-500",
          glowColor: "shadow-sky-900/60",
          badgeBg: "bg-sky-500/20 text-sky-300 border-sky-500/40",
          icon: Search,
          descVi:
            "Bạn là cảnh sát điều tra tinh nhuệ của Hong Kong. Hãy phân tích kỹ lưỡng các gợi ý do Pháp Y AI ghim trên Bảng Hiện Trường, tranh luận và sử dụng Huy Hiệu để chỉ ra chính xác Hung Thủ cùng Hung Khí & Bằng Chứng!",
          descEn:
            "You are an elite detective. Analyze the clues pinned by the AI Forensic Scientist, discuss with your peers, and use your Badge to solve the crime!",
          specialNoteVi:
            "💡 Mỗi người chơi có 1 lần nộp Huy Hiệu duy nhất để Phá Án. Hãy bàn bạc kỹ trước khi hành động!",
          specialNoteEn:
            "💡 You have 1 Badge token to attempt to Solve the Crime. Cooperate closely with your team!",
        };
    }
  };

  const details = getRoleDetails();
  const IconComponent = details.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in select-none">
      <div
        className={`relative w-full max-w-md rounded-3xl bg-gradient-to-b from-[#181a24] via-[#10121a] to-[#0a0c12] border-2 ${details.borderColor} shadow-2xl ${details.glowColor} overflow-hidden p-6 sm:p-7 text-center`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Tag */}
        <div className="flex items-center justify-center gap-1.5 text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-3">
          <Lock className="w-3.5 h-3.5" />
          <span>{isVietnamese ? "THẺ VAI TRÒ BÍ MẬT" : "SECRET ROLE CARD"}</span>
        </div>

        {/* Center Role Badge Graphic */}
        <div className="my-4 flex flex-col items-center justify-center">
          <div
            className={`w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br ${details.accentColor} border-2 ${details.borderColor} flex items-center justify-center shadow-2xl ${details.glowColor} relative`}
          >
            <div className="absolute inset-0 bg-radial from-white/20 to-transparent rounded-3xl" />
            <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] relative z-10" />
            <div className="absolute -bottom-2 px-3 py-0.5 rounded-full bg-slate-950 border border-white/20 text-[9px] font-mono font-black text-amber-300">
              DECEPTION HK
            </div>
          </div>

          <h2 className="mt-5 text-2xl sm:text-3xl font-black uppercase tracking-wider text-white font-sans">
            {isVietnamese ? details.titleVi : details.titleEn}
          </h2>

          <div
            className={`mt-2 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase border ${details.badgeBg}`}
          >
            {isVietnamese ? details.teamVi : details.teamEn}
          </div>
        </div>

        {/* Role Objective Description */}
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-left text-xs sm:text-sm text-slate-200 leading-relaxed space-y-2.5">
          <p>{isVietnamese ? details.descVi : details.descEn}</p>
          <div className="pt-2 border-t border-white/10 text-[11px] sm:text-xs font-semibold text-amber-300/90">
            {isVietnamese ? details.specialNoteVi : details.specialNoteEn}
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={onClose}
          className={`mt-6 w-full py-3.5 rounded-2xl bg-gradient-to-r ${details.accentColor} hover:brightness-110 text-white font-black text-xs uppercase tracking-widest shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2`}
        >
          <Sparkles className="w-4 h-4" />
          <span>{isVietnamese ? "ĐÃ HIỂU NHIỆM VỤ • BẮT ĐẦU" : "CONFIRM & PROCEED"}</span>
        </button>
      </div>
    </div>
  );
};
