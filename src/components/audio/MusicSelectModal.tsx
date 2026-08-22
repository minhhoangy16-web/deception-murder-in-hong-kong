"use client";

import React, { useState } from "react";
import { useGameStore } from "../../store/gameStore";
import bgmTracksData from "../../data/bgmTracks.json";
import { MusicTrack } from "../../types/game";
import { X, Music, Play, Check, Disc, Volume2 } from "lucide-react";

interface MusicSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MusicSelectModal: React.FC<MusicSelectModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { gameState, myPlayerId, changeBgmTrack } = useGameStore();
  const [selectedPhase, setSelectedPhase] = useState<string>("ALL");

  if (!isOpen || !gameState) return null;

  const myPlayer = gameState.players.find((p) => p.id === myPlayerId);
  const isHost = myPlayer?.isHost ?? false;
  const currentTrackId = gameState.currentTrack?.id;

  const tracks = bgmTracksData as MusicTrack[];

  const filteredTracks = selectedPhase === "ALL"
    ? tracks
    : tracks.filter((t) => t.phase === selectedPhase);

  const handleSelectTrack = (track: MusicTrack) => {
    if (!isHost) return;
    changeBgmTrack(track.id);
  };

  const getPhaseBadge = (phase: string) => {
    switch (phase) {
      case "LOBBY":
        return <span className="px-2 py-0.5 rounded-md bg-stone-700 text-stone-300 text-[10px] font-bold">Sảnh Chờ</span>;
      case "BRIEFING":
        return <span className="px-2 py-0.5 rounded-md bg-sky-900/60 text-sky-300 border border-sky-700/50 text-[10px] font-bold">Xem Thẻ</span>;
      case "ROUND_1_2":
        return <span className="px-2 py-0.5 rounded-md bg-amber-900/60 text-amber-300 border border-amber-700/50 text-[10px] font-bold">Vòng 1 & 2</span>;
      case "ROUND_3":
        return <span className="px-2 py-0.5 rounded-md bg-rose-900/60 text-rose-300 border border-rose-700/50 text-[10px] font-bold">Vòng 3 (Cuối)</span>;
      case "SOLVE_CRIME":
        return <span className="px-2 py-0.5 rounded-md bg-purple-900/60 text-purple-300 border border-purple-700/50 text-[10px] font-bold">Phá Án</span>;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl text-slate-100 space-y-5 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3.5 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
              <Disc className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-100 uppercase tracking-wider flex items-center gap-2">
                Danh Sách Nhạc Phòng Chơi (BGM Playlist)
              </h2>
              <p className="text-xs text-slate-400">
                {isHost ? "Chủ phòng có thể bấm chọn để phát đồng bộ cho tất cả người chơi trong phòng" : "Xem danh sách các bản nhạc đang phát trong phòng"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Phase Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 shrink-0 no-scrollbar">
          {[
            { id: "ALL", label: "Tất Cả" },
            { id: "LOBBY", label: "☕ Sảnh Chờ" },
            { id: "BRIEFING", label: "🔍 Xem Thẻ" },
            { id: "ROUND_1_2", label: "🕵️ Vòng 1 & 2" },
            { id: "ROUND_3", label: "⚡ Vòng 3" },
            { id: "SOLVE_CRIME", label: "⚖️ Phá Án" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedPhase(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all ${
                selectedPhase === tab.id
                  ? "bg-rose-600 text-white shadow-md shadow-rose-600/30"
                  : "bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tracks List */}
        <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
          {filteredTracks.map((track) => {
            const isCurrent = currentTrackId === track.id || gameState.currentTrack?.youtubeId === track.youtubeId;
            return (
              <div
                key={track.id}
                onClick={() => isHost && handleSelectTrack(track)}
                className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                  isCurrent
                    ? "bg-rose-950/40 border-rose-600/70 shadow-lg shadow-rose-950/50"
                    : isHost
                    ? "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/40 cursor-pointer"
                    : "bg-slate-950/60 border-slate-800/80"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`p-2 rounded-xl shrink-0 ${
                    isCurrent ? "bg-rose-500 text-white animate-pulse" : "bg-slate-800 text-slate-400"
                  }`}>
                    {isCurrent ? <Volume2 className="w-4 h-4" /> : <Music className="w-4 h-4" />}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs sm:text-sm font-bold truncate ${
                        isCurrent ? "text-rose-200 font-black" : "text-slate-200"
                      }`}>
                        {track.title}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 truncate mt-0.5">
                      {track.artist}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {getPhaseBadge(track.phase)}

                  {isHost && (
                    <button
                      type="button"
                      disabled={isCurrent}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectTrack(track);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase transition-all flex items-center gap-1 ${
                        isCurrent
                          ? "bg-rose-600/20 text-rose-300 border border-rose-600/40 cursor-default"
                          : "bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/20 active:scale-95"
                      }`}
                    >
                      {isCurrent ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Đang Phát</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Chọn Phát</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <div>
            Đang phát: <strong className="text-rose-300">{gameState.currentTrack?.title || "Mặc định"}</strong>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
