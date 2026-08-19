import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { X, QrCode, Smartphone, Copy, Check, Wifi, Globe } from "lucide-react";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomId: string;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({
  isOpen,
  onClose,
  roomId,
}) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [inviteUrl, setInviteUrl] = useState<string>("");
  const [networkIp, setNetworkIp] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      let baseOrigin = window.location.origin;
      
      // If host is on localhost, fetch real Wi-Fi network IP
      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        fetch("/api/network-ip")
          .then((res) => res.json())
          .then((data) => {
            if (data?.ip && data.ip !== "localhost") {
              setNetworkIp(data.ip);
              const netOrigin = `http://${data.ip}:${window.location.port || 3000}`;
              setInviteUrl(`${netOrigin}/?room=${roomId}`);
            } else {
              setInviteUrl(`${baseOrigin}/?room=${roomId}`);
            }
          })
          .catch(() => setInviteUrl(`${baseOrigin}/?room=${roomId}`));
      } else {
        setInviteUrl(`${baseOrigin}/?room=${roomId}`);
      }
    }
  }, [roomId]);

  useEffect(() => {
    if (isOpen && inviteUrl) {
      QRCode.toDataURL(inviteUrl, {
        width: 280,
        margin: 2,
        color: {
          dark: "#0f172a",
          light: "#ffffff",
        },
      })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error("QR Code generation error:", err));
    }
  }, [isOpen, inviteUrl]);

  if (!isOpen) return null;

  const copyUrl = () => {
    if (!inviteUrl) return;
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative w-full max-w-sm rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl text-slate-100 text-center space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400">
              <QrCode className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
              Quét Mã Vào Phòng
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* QR Code Frame */}
        <div className="p-3 bg-white rounded-2xl inline-block shadow-inner">
          {qrDataUrl ? (
            <img
              src={qrDataUrl}
              alt={`QR Code for room ${roomId}`}
              className="w-56 h-56 object-contain rounded-lg"
            />
          ) : (
            <div className="w-56 h-56 flex items-center justify-center text-slate-400 text-xs">
              Đang tạo mã QR...
            </div>
          )}
        </div>

        {/* Room Info */}
        <div className="space-y-1.5">
          <div className="text-xs font-medium text-slate-400 flex items-center justify-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-rose-400" />
            Mã Phòng: <span className="font-black text-rose-400 text-sm tracking-wider">{roomId}</span>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
            <Wifi className="w-3 h-3 text-emerald-400" />
            <span>Mở camera điện thoại quét để vào bàn</span>
          </div>
        </div>

        {/* Copy Link Button */}
        <div className="pt-2 border-t border-slate-800 space-y-2">
          <button
            onClick={copyUrl}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors flex items-center justify-center gap-2 border border-slate-700"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Đã sao chép link mạng LAN!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Sao chép Link mời ({networkIp || "Wi-Fi"})</span>
              </>
            )}
          </button>

          <div className="text-[10px] text-slate-500 italic">
            * Bạn bè ở xa khác Wi-Fi: Dùng lệnh <code className="text-amber-300">npx localtunnel --port 3000</code>
          </div>
        </div>
      </div>
    </div>
  );
};
