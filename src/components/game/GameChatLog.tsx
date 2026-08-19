import React, { useState, useRef, useEffect } from "react";
import { useGameStore } from "../../store/gameStore";
import { MessageSquare, ScrollText, Send, Sparkles, AlertCircle, Award } from "lucide-react";

export const GameChatLog: React.FC = () => {
  const { gameState, myPlayerId, sendChat } = useGameStore();
  const [activeTab, setActiveTab] = useState<"LOGS" | "CHAT">("LOGS");
  const [chatInput, setChatInput] = useState("");
  const endOfLogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfLogRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [gameState?.logs]);

  if (!gameState) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    sendChat(chatInput.trim());
    setChatInput("");
  };

  const isLogsTab = activeTab === "LOGS";
  const chatMessages = gameState.logs.filter((l) => l.type === "CHAT");
  const systemLogs = gameState.logs.filter((l) => l.type !== "CHAT");

  return (
    <div className="desk-panel rounded-3xl p-4 sm:p-5 flex flex-col h-[320px]">
      {/* Header Tabs */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("LOGS")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all ${
              isLogsTab
                ? "bg-rose-100 text-rose-800 border border-rose-300 shadow-sm"
                : "text-stone-500 hover:text-stone-900"
            }`}
          >
            <ScrollText className="w-3.5 h-3.5" />
            Nhật Ký Hiện Trường ({systemLogs.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("CHAT")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all ${
              !isLogsTab
                ? "bg-sky-100 text-sky-800 border border-sky-300 shadow-sm"
                : "text-stone-500 hover:text-stone-900"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Thảo Luận ({chatMessages.length})
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1 text-xs">
        {isLogsTab ? (
          systemLogs.map((log) => {
            const isAlert = log.type === "ALERT";
            const isForensic = log.type === "FORENSIC";
            const isAction = log.type === "ACTION";

            return (
              <div
                key={log.id}
                className={`p-2.5 rounded-xl border leading-relaxed ${
                  isAlert
                    ? "bg-rose-50 border-rose-200 text-rose-900 font-semibold"
                    : isForensic
                    ? "bg-emerald-50 border-emerald-200 text-emerald-900 font-medium"
                    : isAction
                    ? "bg-amber-50 border-amber-200 text-amber-900 font-medium"
                    : "bg-white border-stone-200 text-stone-700"
                }`}
              >
                <div className="flex items-start gap-2">
                  {isAlert && <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />}
                  {isForensic && <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />}
                  {isAction && <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />}
                  <div>{log.messageVi}</div>
                </div>
              </div>
            );
          })
        ) : chatMessages.length === 0 ? (
          <div className="py-8 text-center text-stone-400 italic">
            Chưa có tin nhắn thảo luận nào. Hãy trao đổi với mọi người!
          </div>
        ) : (
          chatMessages.map((chat) => (
            <div
              key={chat.id}
              className="p-2.5 rounded-xl bg-white border border-stone-200 flex items-start gap-2 shadow-sm"
            >
              <strong className="text-sky-800 font-black shrink-0">
                {chat.senderName}:
              </strong>
              <span className="text-stone-800 break-words">{chat.messageVi}</span>
            </div>
          ))
        )}
        <div ref={endOfLogRef} />
      </div>

      {/* Chat Input */}
      {!isLogsTab && (
        <form onSubmit={handleSend} className="pt-3 flex items-center gap-2 border-t border-stone-200">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Nhập suy luận, trao đổi với thám tử..."
            className="flex-1 px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-sky-600 shadow-inner"
          />
          <button
            type="submit"
            disabled={!chatInput.trim()}
            className="p-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white disabled:opacity-50 transition-colors shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      )}
    </div>
  );
};
