import React from "react";
import { X, BookOpen, ShieldAlert, Award, Bot, Skull, Eye } from "lucide-react";

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl text-slate-100 space-y-5 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">
                Luật Chơi Deception: Murder in Hong Kong
              </h2>
              <p className="text-xs text-slate-400">
                Cẩm nang dành cho Điều Tra Viên & Kẻ Thủ Ác
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs leading-relaxed text-slate-300">
          {/* Section 1 */}
          <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <h3 className="font-bold text-sm text-sky-400 flex items-center gap-1.5">
              <Bot className="w-4 h-4" /> 1. Vai Trò AI Pháp Y (Forensic Scientist)
            </h3>
            <p>
              Nhà Giám Định Pháp Y hoàn toàn do <strong>AI (Gemini / OpenAI / Heuristic)</strong> đảm nhiệm. AI biết rõ ai là Hung thủ và cặp thẻ nào là chìa khóa tội ác. AI sẽ phân tích và ghim 6 dấu vết lên các Thẻ Hiện Trường (Scene Tiles) để ngầm dẫn dắt Điều tra viên mà không được nói bất cứ lời nào!
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <h3 className="font-bold text-sm text-rose-400 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" /> 2. Phe Hung Thủ (Murderer & Accomplice)
            </h3>
            <p>
              Vào ban đêm, <strong>Hung thủ</strong> bí mật chọn 1 thẻ <strong>Hung Khí (Xanh)</strong> và 1 thẻ <strong>Bằng Chứng (Đỏ)</strong> từ 8 thẻ của mình.
            </p>
            <p>
              Nếu có <strong>Đồng phạm</strong>, đồng phạm sẽ biết ai là Hung thủ và chọn thẻ gì để hỗ trợ cãi bẫy, gieo rắc nghi ngờ sang người vô tội.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <h3 className="font-bold text-sm text-amber-400 flex items-center gap-1.5">
              <Award className="w-4 h-4" /> 3. Cơ Chế Phá Án (Solve The Crime)
            </h3>
            <p>
              Mỗi người chơi có <strong>1 Huy Hiệu Phá Án</strong> duy nhất trong suốt ván đấu. Khi bấm &ldquo;Phá Án&rdquo;, bạn phải chỉ định đúng cả 3 yếu tố:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-200">
              <li>Chính xác người là Hung Thủ</li>
              <li>Chính xác thẻ Hung Khí (Xanh) của người đó</li>
              <li>Chính xác thẻ Bằng Chứng (Đỏ) của người đó</li>
            </ul>
            <p className="text-rose-400 font-semibold mt-1">
              ⚠️ Nếu đoán sai bất kỳ thẻ nào, bạn sẽ bị tước Huy Hiệu và không thể phá án nữa!
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <h3 className="font-bold text-sm text-purple-400 flex items-center gap-1.5">
              <Eye className="w-4 h-4" /> 4. Tiến Trình 3 Vòng & Đổi Manh Mối
            </h3>
            <p>
              Ván đấu kéo dài tối đa <strong>3 Vòng</strong>. Đầu Vòng 2 và Vòng 3, AI Pháp Y sẽ rút 1 Thẻ Hiện Trường mới, loại bỏ 1 thẻ cũ ít liên quan và đánh dấu gợi ý mới để cung cấp thêm bằng chứng cho Điều tra viên.
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200"
          >
            Đã Hiểu
          </button>
        </div>
      </div>
    </div>
  );
};
