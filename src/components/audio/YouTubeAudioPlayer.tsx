"use client";

import React, { useEffect, useRef, useState } from "react";
import { useGameStore } from "../../store/gameStore";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const YouTubeAudioPlayer: React.FC = () => {
  const { gameState, bgmVolume, isSoundMuted } = useGameStore();
  const playerRef = useRef<any>(null);
  const [isApiReady, setIsApiReady] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const currentVideoIdRef = useRef<string | null>(null);

  const currentYoutubeId = gameState?.currentTrack?.youtubeId || "1qZAb0_fGgM";
  const isPlaying = gameState?.isBgmPlaying ?? true;

  // 1. Load YouTube IFrame API Script
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.YT && window.YT.Player) {
      setIsApiReady(true);
      return;
    }

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      setIsApiReady(true);
    };
  }, []);

  // 2. Track user interaction to unlock audio on modern browsers
  useEffect(() => {
    const handleInteraction = () => {
      setHasUserInteracted(true);
      if (playerRef.current && typeof playerRef.current.playVideo === "function") {
        if (isPlaying && !isSoundMuted) {
          playerRef.current.playVideo();
        }
      }
    };

    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("keydown", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [isPlaying, isSoundMuted]);

  // 3. Initialize YouTube Player instance
  useEffect(() => {
    if (!isApiReady || typeof window === "undefined" || !window.YT) return;

    if (!playerRef.current) {
      try {
        playerRef.current = new window.YT.Player("youtube-bgm-container", {
          height: "1",
          width: "1",
          videoId: currentYoutubeId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            origin: typeof window !== "undefined" ? window.location.origin : undefined,
          },
          events: {
            onReady: (event: any) => {
              currentVideoIdRef.current = currentYoutubeId;
              const target = event.target;
              if (isSoundMuted) {
                target.mute();
              } else {
                target.unMute();
                target.setVolume(bgmVolume);
              }
              if (isPlaying) {
                target.playVideo();
              }
            },
            onStateChange: (event: any) => {
              // If video ended (YT.PlayerState.ENDED === 0), replay automatically
              if (event.data === 0) {
                event.target.playVideo();
              }
            },
            onError: (err: any) => {
              console.warn("[YouTube Audio] Player error code:", err.data);
            },
          },
        });
      } catch (e) {
        console.error("[YouTube Audio] Error initializing YT.Player:", e);
      }
    }
  }, [isApiReady]);

  // 4. Update track when currentYoutubeId changes
  useEffect(() => {
    if (!playerRef.current || !currentYoutubeId) return;

    if (currentVideoIdRef.current !== currentYoutubeId) {
      currentVideoIdRef.current = currentYoutubeId;
      try {
        if (typeof playerRef.current.loadVideoById === "function") {
          playerRef.current.loadVideoById({
            videoId: currentYoutubeId,
            startSeconds: 0,
          });
          if (isSoundMuted) {
            playerRef.current.mute();
          } else {
            playerRef.current.unMute();
            playerRef.current.setVolume(bgmVolume);
          }
          if (isPlaying) {
            playerRef.current.playVideo();
          }
        }
      } catch (err) {
        console.warn("[YouTube Audio] Error loading video:", err);
      }
    }
  }, [currentYoutubeId, isPlaying, bgmVolume, isSoundMuted]);

  // 5. Update Volume and Mute
  useEffect(() => {
    if (!playerRef.current) return;
    try {
      if (isSoundMuted) {
        if (typeof playerRef.current.mute === "function") {
          playerRef.current.mute();
        }
      } else {
        if (typeof playerRef.current.unMute === "function") {
          playerRef.current.unMute();
        }
        if (typeof playerRef.current.setVolume === "function") {
          playerRef.current.setVolume(bgmVolume);
        }
      }
    } catch (err) {
      console.warn("[YouTube Audio] Error updating volume:", err);
    }
  }, [bgmVolume, isSoundMuted]);

  // 6. Update Play / Pause state
  useEffect(() => {
    if (!playerRef.current) return;
    try {
      if (isPlaying) {
        if (typeof playerRef.current.playVideo === "function") {
          playerRef.current.playVideo();
        }
      } else {
        if (typeof playerRef.current.pauseVideo === "function") {
          playerRef.current.pauseVideo();
        }
      }
    } catch (err) {
      console.warn("[YouTube Audio] Error updating playback state:", err);
    }
  }, [isPlaying]);

  return (
    <div className="fixed -bottom-10 -left-10 w-1 h-1 opacity-0 pointer-events-none overflow-hidden z-0">
      <div id="youtube-bgm-container" />
    </div>
  );
};
