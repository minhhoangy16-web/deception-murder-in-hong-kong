"use client";

import React, { useState } from "react";
import { useGameStore } from "../../store/gameStore";
import { MusicSelectModal } from "./MusicSelectModal";
import bgmTracksData from "../../data/bgmTracks.json";
import { MusicTrack } from "../../types/game";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  ListMusic,
  Disc,
} from "lucide-react";

export const MusicControlBar: React.FC = () => {
  const {
    gameState,
    myPlayerId,
    bgmVolume,
    setBgmVolume,
    isSoundMuted,
    toggleSound,
    toggleBgmPlayback,
    changeBgmTrack,
  } = useGameStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!gameState) return null;

  const myPlayer = gameState.players.find((p) => p.id === myPlayerId);
  const isHost = myPlayer?.isHost ?? false;
  const currentTrack = gameState.currentTrack;
  const isPlaying = gameState.isBgmPlaying ?? true;

  const handleNextTrack = () => {
    if (!isHost) return;
    const allTracks = bgmTracksData as MusicTrack[];
    let phaseFilter = "LOBBY";
    if (gameState.phase === "BRIEFING") phaseFilter = "BRIEFING";
    else if (gameState.phase === "DAY_ROUND_3" || gameState.phase === "WITNESS_ASSASSINATION") phaseFilter = "ROUND_3";
    else if (gameState.phase !== "LOBBY") phaseFilter = "ROUND_1_2";

    const pool = allTracks.filter((t) => t.phase === phaseFilter);
    if (pool.length > 0) {
      const currentIdx = pool.findIndex((t) => t.id === currentTrack?.id);
      const nextIdx = (currentIdx + 1) % pool.length;
      changeBgmTrack(pool[nextIdx].id);
    }
  };

  return (
    <>
      <div className="flex items-center gap-2 sm:gap-3 bg-slate-900/90 border border-slate-800/80 rounded-2xl px-3 py-1.5 shadow-lg backdrop-blur-md">
        {/* Track Info */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 max-w-[130px] sm:max-w-[200px] md:max-w-[240px] text-left hover:opacity-85 transition-opacity group cursor-pointer"
          title="Bấm để xem danh sách bài hát"
        >
          <div className="p-1.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 shrink-0">
            <Disc className={`w-3.5 h-3.5 ${isPlaying && !isSoundMuted ? "animate-spin-slow" : ""}`} />
          </div>
          <div className="min-w-0">
            <div className="text-[11px] sm:text-xs font-bold text-slate-200 truncate group-hover:text-rose-300 transition-colors">
              {currentTrack?.title || "Nhạc nền Hồng Kông"}
            </div>
            <div className="text-[9px] sm:text-[10px] text-slate-400 truncate">
              {currentTrack?.artist || "Deception Soundtrack"}
            </div>
          </div>
        </button>

        {/* Host Playback Controls */}
        {isHost && (
          <div className="flex items-center gap-1 border-l border-slate-800 pl-2">
            <button
              type="button"
              onClick={() => toggleBgmPlayback(!isPlaying)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              title={isPlaying ? "Tạm dừng phát nhạc cho phòng" : "Phát nhạc cho phòng"}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current" />
              )}
            </button>

            <button
              type="button"
              onClick={handleNextTrack}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              title="Chuyển bài tiếp theo trong vòng"
            >
              <SkipForward className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="p-1.5 rounded-lg bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-600/30 transition-colors flex items-center gap-1 text-[10px] font-bold px-2"
              title="Đổi bài hát (Chủ phòng)"
            >
              <ListMusic className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Chọn Bài</span>
            </button>
          </div>
        )}

        {/* Individual Player Volume Slider & Mute Toggle */}
        <div className="flex items-center gap-1.5 border-l border-slate-800 pl-2">
          <button
            type="button"
            onClick={toggleSound}
            className={`p-1.5 rounded-lg transition-colors ${
              isSoundMuted
                ? "bg-rose-500/20 text-rose-400 hover:bg-rose-500/30"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
            title={isSoundMuted ? "Bật âm thanh" : "Tắt âm thanh"}
          >
            {isSoundMuted ? (
              <VolumeX className="w-3.5 h-3.5" />
            ) : (
              <Volume2 className="w-3.5 h-3.5" />
            )}
          </button>

          <input
            type="range"
            min="0"
            max="100"
            value={isSoundMuted ? 0 : bgmVolume}
            onChange={(e) => {
              if (isSoundMuted) toggleSound();
              setBgmVolume(Number(e.target.value));
            }}
            className="w-12 sm:w-16 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
            title={`Âm lượng: ${bgmVolume}%`}
          />

          <span className="text-[10px] text-slate-400 font-mono w-6 text-right hidden sm:inline">
            {isSoundMuted ? "0%" : `${bgmVolume}%`}
          </span>
        </div>
      </div>

      <MusicSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
