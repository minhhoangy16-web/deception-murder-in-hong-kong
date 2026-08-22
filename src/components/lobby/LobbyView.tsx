import React, { useState, useEffect } from "react";
import { useGameStore } from "../../store/gameStore";
import { SettingsModal } from "./SettingsModal";
import { QRCodeModal } from "./QRCodeModal";
import { CharacterAvatar } from "../game/CharacterAvatar";
import { MusicControlBar } from "../audio/MusicControlBar";
import { Copy, Plus, Play, Settings, Users, Sparkles, AlertCircle, ShieldAlert, Check, Share2, QrCode } from "lucide-react";



export const LobbyView: React.FC = () => {
  const {
    gameState,
    myPlayerId,
    createRoom,
    joinRoom,
    addBot,
    startGame,
    updateSettings,
  } = useGameStore();

  const [nickname, setNickname] = useState("");
  const [joinRoomId, setJoinRoomId] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Auto-detect room parameter from URL: e.g. http://localhost:3000/?room=HK-1234
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const roomParam = params.get("room");
      if (roomParam) {
        setJoinRoomId(roomParam.trim().toUpperCase());
      }
    }
  }, []);

  const myPlayer = gameState?.players.find((p) => p.id === myPlayerId);
  const isHost = myPlayer?.isHost ?? false;

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim()) return;
    createRoom(nickname.trim());
  };

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim() || !joinRoomId.trim()) return;
    joinRoom(joinRoomId.trim().toUpperCase(), nickname.trim());
  };

  const copyInviteLink = async () => {
    if (gameState?.roomId && typeof window !== "undefined") {
      let baseOrigin = window.location.origin;

      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        try {
          const res = await fetch("/api/network-ip");
          const data = await res.json();
          if (data?.ip && data.ip !== "localhost") {
            baseOrigin = `http://${data.ip}:${window.location.port || 3000}`;
          }
        } catch {
          // fallback to origin
        }
      }

      const inviteUrl = `${baseOrigin}/?room=${gameState.roomId}`;
      navigator.clipboard.writeText(inviteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };


  // Screen 1: Not in room yet (Enter Nickname + Create/Join)
  if (!gameState) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[90vh] px-4 py-8">
        <div className="w-full max-w-md space-y-6 text-center">
          {/* Logo & Headline */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              AI Forensic Scientist Edition
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 drop-shadow-sm font-sans">
              DECEPTION
            </h1>
            <h2 className="text-base font-black text-rose-700 tracking-widest uppercase">
              Murder in Hong Kong
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto">
              Vụ án mạng bí ẩn tại Hương Cảng. Hung thủ lẩn trốn giữa các điều tra viên. Nhà giám định pháp y AI sẽ hé lộ từng dấu vết hiện trường!
            </p>
          </div>

          {/* Form Card */}
          <div className="desk-panel p-6 sm:p-7 rounded-3xl shadow-xl text-left space-y-4">
            <div>
              <label className="block text-xs font-black text-stone-700 uppercase tracking-wider mb-1.5">
                Biệt Danh Thám Tử (Your Nickname)
              </label>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="Ví dụ: Thám tử Lừng Danh..."
                maxLength={20}
                className="w-full px-4 py-3 rounded-2xl bg-stone-50 border border-stone-300 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-colors shadow-inner"
              />
            </div>

            <div className="pt-2 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleCreate}
                disabled={!nickname.trim()}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-black text-xs uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-rose-900/20 transition-all active:scale-[0.98]"
              >
                Tạo Phòng Mới
              </button>

              <div className="relative">
                <input
                  type="text"
                  value={joinRoomId}
                  onChange={(e) => setJoinRoomId(e.target.value)}
                  placeholder="Mã: HK-xxxx"
                  className="w-full px-3 py-3.5 rounded-2xl bg-stone-50 border border-stone-300 text-xs text-center uppercase tracking-widest text-stone-900 placeholder-stone-400 focus:outline-none focus:border-sky-600 shadow-inner"
                />
              </div>
            </div>

            {joinRoomId.trim() && (
              <button
                type="button"
                onClick={handleJoin}
                disabled={!nickname.trim()}
                className="w-full py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-black text-xs uppercase tracking-wider shadow-md transition-colors"
              >
                Tham Gia Phòng {joinRoomId.toUpperCase()}
              </button>
            )}
          </div>

          {/* Quick Features overview */}
          <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-stone-600">
            <div className="p-3 rounded-2xl bg-white/70 border border-stone-200 shadow-sm">
              <div className="font-bold text-stone-800 mb-0.5">🧠 AI Pháp Y</div>
              <div>Gemini & GPT tự động giám định thẻ</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/70 border border-stone-200 shadow-sm">
              <div className="font-bold text-stone-800 mb-0.5">⏱️ 3 Vòng Chơi</div>
              <div>Thảo luận & đổi manh mối realtime</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/70 border border-stone-200 shadow-sm">
              <div className="font-bold text-stone-800 mb-0.5">👥 4-8 Người</div>
              <div>Hỗ trợ Bot test solo tức thì</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Screen 2: In-Room Lobby (Waiting for players & settings)
  const playerCount = gameState.players.length;
  const canStart = playerCount >= 4;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 animate-fade-in">
      {/* Header with Room Info & Settings */}
      <div className="desk-panel p-5 sm:p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-700 font-black text-2xl">
            🇭🇰
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-stone-500">PHÒNG CHƠI:</span>
              <span className="text-xl font-mono font-black text-rose-700 tracking-wider">
                {gameState.roomId}
              </span>

              <button
                onClick={copyInviteLink}
                title="Sao chép toàn bộ link mời bạn bè"
                className="flex items-center gap-1 px-3 py-1 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-xs font-black transition-all active:scale-95 shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Đã chép link!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-rose-600" />
                    <span>Sao chép Link</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsQrOpen(true)}
                title="Hiện mã QR để quét bằng điện thoại"
                className="flex items-center gap-1 px-3 py-1 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 text-xs font-black transition-all active:scale-95 shadow-sm"
              >
                <QrCode className="w-3.5 h-3.5 text-sky-600" />
                <span>Mã QR</span>
              </button>
            </div>
            <p className="text-xs text-stone-500 mt-1">
              Gửi link hoặc mở Mã QR để người chơi khác dùng điện thoại quét vào phòng!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <MusicControlBar />

          <button
            type="button"
            onClick={() => setIsSettingsOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-stone-50 border border-stone-300 text-xs font-bold text-stone-800 transition-colors shadow-sm"
          >
            <Settings className="w-4 h-4 text-amber-600" />
            Cài Đặt
          </button>

          {isHost && playerCount < 8 && (
            <button
              type="button"
              onClick={addBot}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-xs font-bold text-emerald-800 transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" />
              Thêm Bot ({playerCount}/8)
            </button>
          )}
        </div>
      </div>


      {/* Players List Grid */}
      <div className="desk-panel p-6 sm:p-7 rounded-3xl space-y-4">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-rose-600" />
            <h2 className="text-sm font-black text-stone-900 uppercase tracking-wider">
              Danh Sách Điều Tra Viên ({playerCount}/8)
            </h2>
          </div>
          <div className="text-xs text-stone-500">
            {playerCount < 4 ? (
              <span className="text-amber-700 font-bold flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                Cần tối thiểu 4 người để bắt đầu
              </span>
            ) : (
              <span className="text-emerald-700 font-black">Đã sẵn sàng khai cuộc!</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {gameState.players.map((p, idx) => (
            <div
              key={p.id}
              className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all ${
                p.id === myPlayerId
                  ? "bg-rose-50/80 border-rose-300 shadow-sm"
                  : "bg-white border-stone-200"
              }`}
            >
              <CharacterAvatar avatarId={p.avatar} size="md" />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-black text-stone-900 truncate">
                    {p.name}
                  </span>
                  {p.id === myPlayerId && (
                    <span className="text-[10px] px-2 py-0.2 rounded-full bg-rose-600 text-white font-black">
                      Bạn
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-stone-500 mt-0.5 font-medium">
                  {p.isHost && (
                    <span className="text-amber-700 font-bold">👑 Chủ phòng</span>
                  )}
                  {p.isBot && (
                    <span className="text-emerald-700 font-bold">🤖 AI Bot</span>
                  )}
                  {!p.isHost && !p.isBot && <span>Thám tử #{idx + 1}</span>}
                </div>
              </div>
            </div>
          ))}

          {/* Empty slot placeholders */}
          {Array.from({ length: Math.max(0, 4 - playerCount) }).map((_, i) => (
            <div
              key={`empty_${i}`}
              className="flex items-center justify-center p-4 rounded-2xl border border-dashed border-stone-300 text-stone-400 text-xs font-bold"
            >
              + Đang chờ người chơi...
            </div>
          ))}
        </div>

        {/* Start Game Action Bar */}
        <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-stone-600 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-purple-700" />
            <span>
              Cài đặt: Xem bài {gameState.settings.briefingDurationSeconds ?? 60}s | Thảo luận {gameState.settings.roundDurationSeconds}s | AI:{" "}
              <strong className="text-stone-900">{gameState.settings.aiProvider.toUpperCase()}</strong>
              {gameState.settings.enableAccomplice && " | Có Đồng phạm"}
              {gameState.settings.enableWitness && " | Có Nhân chứng"}
            </span>

          </div>

          {isHost ? (
            <button
              type="button"
              onClick={startGame}
              disabled={!canStart}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-black text-xs uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed shadow-xl shadow-rose-900/20 transition-all active:scale-[0.98]"
            >
              <Play className="w-4 h-4 fill-white" />
              BẮT ĐẦU VỤ ÁN ({playerCount}/8)
            </button>
          ) : (
            <div className="text-xs text-stone-500 italic font-medium">
              Đang chờ chủ phòng bắt đầu trận đấu...
            </div>
          )}
        </div>
      </div>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={gameState.settings}
        onSave={(newSettings) => updateSettings(newSettings)}
        isHost={isHost}
      />

      {/* QR Code Modal for Phone Joining */}
      <QRCodeModal
        isOpen={isQrOpen}
        onClose={() => setIsQrOpen(false)}
        roomId={gameState.roomId}
      />
    </div>
  );
};
