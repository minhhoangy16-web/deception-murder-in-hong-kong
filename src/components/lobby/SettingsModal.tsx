import React, { useState } from "react";
import { RoomSettings } from "../../types/game";
import { X, Settings, Shield, Eye, Bot, Clock, Key, EyeOff, Search } from "lucide-react";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: RoomSettings;
  onSave: (newSettings: Partial<RoomSettings>) => void;
  isHost: boolean;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSave,
  isHost,
}) => {
  const [briefingDuration, setBriefingDuration] = useState(
    settings.briefingDurationSeconds ?? 60
  );
  const [duration, setDuration] = useState(settings.roundDurationSeconds);
  const [accomplice, setAccomplice] = useState(settings.enableAccomplice);
  const [witness, setWitness] = useState(settings.enableWitness);
  const [provider, setProvider] = useState(settings.aiProvider);
  const [apiKey, setApiKey] = useState(settings.apiKey || "");
  const [lang, setLang] = useState(settings.language);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({
      briefingDurationSeconds: briefingDuration,
      roundDurationSeconds: duration,
      enableAccomplice: accomplice,
      enableWitness: witness,
      aiProvider: provider,
      apiKey: apiKey.trim(),
      language: lang,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl text-slate-100">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">Cài Đặt Ván Đấu (Room Settings)</h2>
              <p className="text-xs text-slate-400">Tùy chỉnh thời gian xem bài, thảo luận và AI Pháp Y</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5 max-h-[70vh] overflow-y-auto pr-1">
          {/* Briefing Duration (Before Night) */}
          <div className="p-3.5 rounded-2xl bg-slate-800/40 border border-slate-800">
            <label className="flex items-center gap-2 text-xs font-black text-amber-300 uppercase tracking-wider mb-2">
              <Search className="w-4 h-4 text-amber-400" />
              Thời Gian Xem Thẻ Đầu Trận (Briefing Phase)
            </label>
            <p className="text-[11px] text-slate-400 mb-2.5">
              Thời gian để tất cả người chơi quan sát 4 thẻ Hung khí & 4 Bằng chứng của nhau trước khi phân vai và màn đêm buông xuống.
            </p>
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "30 giây", val: 30 },
                { label: "60 giây", val: 60 },
                { label: "120 giây", val: 120 },
                { label: "Bỏ qua (0s)", val: 0 },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  disabled={!isHost}
                  onClick={() => setBriefingDuration(opt.val)}
                  className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                    briefingDuration === opt.val
                      ? "bg-amber-500/20 border-amber-400 text-amber-300 shadow-sm ring-1 ring-amber-400/50"
                      : "bg-slate-900/80 border-slate-700 text-slate-400 hover:border-slate-600"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Discussion Duration */}
          <div>
            <label className="flex items-center gap-2 text-xs font-black text-slate-300 uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4 text-sky-400" />
              Thời Gian Thảo Luận Mỗi Vòng (Round Timer)
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {[
                { label: "60s (1p)", val: 60 },
                { label: "90s (1.5p)", val: 90 },
                { label: "120s (2p)", val: 120 },
                { label: "180s (3p)", val: 180 },
                { label: "300s (5p)", val: 300 },
                { label: "Vô hạn", val: 0 },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  disabled={!isHost}
                  onClick={() => setDuration(opt.val)}
                  className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all text-center ${
                    duration === opt.val
                      ? "bg-sky-500/20 border-sky-500 text-sky-300 shadow-sm ring-1 ring-sky-500/50"
                      : "bg-slate-800/60 border-slate-700 text-slate-400 hover:border-slate-600"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Optional Roles */}
          <div>
            <label className="text-xs font-black text-slate-300 uppercase tracking-wider mb-2 block">
              Vai Trò Mở Rộng (Optional Roles - Khuyên Dùng 5+ Người)
            </label>
            <div className="space-y-2.5">
              <label
                className={`flex items-center justify-between p-3 rounded-2xl border transition-colors cursor-pointer ${
                  accomplice
                    ? "bg-purple-950/30 border-purple-800/50"
                    : "bg-slate-800/40 border-slate-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-200 block">Đồng Phạm (Accomplice)</span>
                    <span className="text-[11px] text-slate-400">Biết hung thủ và thẻ bài, giúp đánh lạc hướng điều tra</span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  disabled={!isHost}
                  checked={accomplice}
                  onChange={(e) => setAccomplice(e.target.checked)}
                  className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 bg-slate-800 border-slate-700"
                />
              </label>

              <label
                className={`flex items-center justify-between p-3 rounded-2xl border transition-colors cursor-pointer ${
                  witness
                    ? "bg-amber-950/30 border-amber-800/50"
                    : "bg-slate-800/40 border-slate-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-200 block">Nhân Chứng (Witness)</span>
                    <span className="text-[11px] text-slate-400">Biết ai là phe xấu, nhưng nếu bị ám sát cuối trận sẽ thua</span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  disabled={!isHost}
                  checked={witness}
                  onChange={(e) => setWitness(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 bg-slate-800 border-slate-700"
                />
              </label>
            </div>
          </div>

          {/* AI Forensic Provider */}
          <div>
            <label className="flex items-center gap-2 text-xs font-black text-slate-300 uppercase tracking-wider mb-2">
              <Bot className="w-4 h-4 text-emerald-400" />
              Công Nghệ AI Pháp Y (Forensic AI Engine)
            </label>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {[
                { id: "gemini", name: "Gemini 3.6", sub: "Google GenAI" },
                { id: "openai", name: "GPT-4o Mini", sub: "OpenAI JSON" },
                { id: "heuristic", name: "Smart Heuristic", sub: "Offline 0ms" },
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  disabled={!isHost}
                  onClick={() => setProvider(p.id as RoomSettings["aiProvider"])}
                  className={`p-2.5 rounded-2xl border text-left transition-all ${
                    provider === p.id
                      ? "bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-sm"
                      : "bg-slate-800/60 border-slate-700 text-slate-400 hover:border-slate-600"
                  }`}
                >
                  <div className="text-xs font-bold">{p.name}</div>
                  <div className="text-[10px] text-slate-400">{p.sub}</div>
                </button>
              ))}
            </div>

            {provider !== "heuristic" && isHost && (
              <div>
                <label className="flex items-center gap-1 text-[11px] text-slate-400 mb-1">
                  <Key className="w-3 h-3 text-amber-400" />
                  API Key (Tùy chọn - nếu để trống sẽ dùng key hệ thống hoặc Heuristic AI):
                </label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder={provider === "gemini" ? "AIzaSy..." : "sk-..."}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:border-emerald-500"
                />
              </div>
            )}
          </div>

          {/* Language selection */}
          <div>
            <label className="text-xs font-black text-slate-300 uppercase tracking-wider mb-2 block">
              Ngôn Ngữ Thẻ Bài (Card Language)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setLang("vi")}
                className={`py-2.5 px-3 text-xs font-bold rounded-2xl border transition-all ${
                  lang === "vi"
                    ? "bg-rose-500/20 border-rose-500 text-rose-300"
                    : "bg-slate-800/60 border-slate-700 text-slate-400"
                }`}
              >
                🇻🇳 Tiếng Việt (Song ngữ)
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`py-2.5 px-3 text-xs font-bold rounded-2xl border transition-all ${
                  lang === "en"
                    ? "bg-rose-500/20 border-rose-500 text-rose-300"
                    : "bg-slate-800/60 border-slate-700 text-slate-400"
                }`}
              >
                🇬🇧 English First
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
          >
            Đóng
          </button>
          {isHost && (
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 text-xs font-black rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all"
            >
              Lưu Cài Đặt
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
