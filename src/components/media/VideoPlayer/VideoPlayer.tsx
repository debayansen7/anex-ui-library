import React, { useRef, useState, useCallback, useEffect } from "react";
import { cn } from "../../../lib/cn";
import type { VideoPlayerProps } from "./VideoPlayer.Type";
import styles from "./VideoPlayer.module.css";

// ── Icons ──────────────────────────────────────────────────────────────────

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4.5 3L16.5 10L4.5 17V3Z" fill="currentColor" />
  </svg>
);

const PauseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="4" y="3" width="4" height="14" rx="1.5" fill="currentColor" />
    <rect x="12" y="3" width="4" height="14" rx="1.5" fill="currentColor" />
  </svg>
);

const VolumeHighIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M7.5 2L4 5.5H1.5a.5.5 0 00-.5.5v4a.5.5 0 00.5.5H4L7.5 14V2z" fill="currentColor" />
    <path d="M10.5 5a3.5 3.5 0 010 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12.5 3a6.5 6.5 0 010 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const VolumeMutedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M7.5 2L4 5.5H1.5a.5.5 0 00-.5.5v4a.5.5 0 00.5.5H4L7.5 14V2z" fill="currentColor" />
    <path d="M11 6.5L14 9.5M14 6.5L11 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const FullscreenEnterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 6V2h4M10 2h4v4M14 10v4h-4M6 14H2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FullscreenExitIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 2v4H2M14 6h-4V2M10 14v-4h4M2 10h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Helpers ────────────────────────────────────────────────────────────────

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return "--:--";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const ASPECT_CLASS: Record<string, string> = {
  "16/9": styles.aspect16x9,
  "4/3": styles.aspect4x3,
  "1/1": styles.aspect1x1,
};

// ── Component ──────────────────────────────────────────────────────────────

export default function VideoPlayer({
  src,
  poster,
  title,
  variant = "default",
  autoPlay = false,
  loop = false,
  muted: initialMuted = false,
  aspectRatio = "16/9",
  className,
  onPlay,
  onPause,
  onEnded,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(initialMuted);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  // ── Auto-hide controls during playback ───────────────────────────────────
  const scheduleHide = useCallback(() => {
    clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) setShowControls(false);
    }, 3000);
  }, []);

  const revealControls = useCallback(() => {
    setShowControls(true);
    scheduleHide();
  }, [scheduleHide]);

  useEffect(() => () => clearTimeout(hideTimeout.current), []);

  // ── Video event listeners ─────────────────────────────────────────────────
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const handlePlay = () => { setIsPlaying(true); scheduleHide(); onPlay?.(); };
    const handlePause = () => { setIsPlaying(false); setShowControls(true); onPause?.(); };
    const handleTimeUpdate = () => setCurrentTime(v.currentTime);
    const handleMetadata = () => setDuration(v.duration);
    const handleEnded = () => { setIsPlaying(false); setShowControls(true); onEnded?.(); };

    v.addEventListener("play", handlePlay);
    v.addEventListener("pause", handlePause);
    v.addEventListener("timeupdate", handleTimeUpdate);
    v.addEventListener("loadedmetadata", handleMetadata);
    v.addEventListener("ended", handleEnded);

    return () => {
      v.removeEventListener("play", handlePlay);
      v.removeEventListener("pause", handlePause);
      v.removeEventListener("timeupdate", handleTimeUpdate);
      v.removeEventListener("loadedmetadata", handleMetadata);
      v.removeEventListener("ended", handleEnded);
    };
  }, [onPlay, onPause, onEnded, scheduleHide]);

  // ── Fullscreen change listener ────────────────────────────────────────────
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  // ── Handlers ─────────────────────────────────────────────────────────────
  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) v.pause();
    else v.play().catch(() => {});
  }, [isPlaying]);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const t = Number(e.target.value);
    v.currentTime = t;
    setCurrentTime(t);
  }, []);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const val = Number(e.target.value);
    v.volume = val;
    v.muted = val === 0;
    setVolume(val);
    setIsMuted(val === 0);
  }, []);

  const toggleMute = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    const next = !isMuted;
    v.muted = next;
    setIsMuted(next);
  }, [isMuted]);

  const toggleFullscreen = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    try {
      if (document.fullscreenElement) document.exitFullscreen();
      else el.requestFullscreen();
    } catch {
      // fullscreen not supported
    }
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const volumePct = isMuted ? 0 : volume * 100;

  const aspectClass = ASPECT_CLASS[aspectRatio] ?? styles.aspect16x9;

  // ── Minimal variant ───────────────────────────────────────────────────────
  if (variant === "minimal") {
    return (
      <div
        className={cn(styles.wrapper, className)}
        role="region"
        aria-label={title ?? "Video player"}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={initialMuted}
          controls
          playsInline
          className={cn(styles.video, aspectClass)}
          title={title}
        />
      </div>
    );
  }

  // ── Default variant (custom controls) ─────────────────────────────────────
  return (
    <div
      ref={containerRef}
      className={cn(styles.wrapper, className)}
      role="region"
      aria-label={title ?? "Video player"}
      onMouseMove={revealControls}
      onMouseEnter={revealControls}
      onMouseLeave={() => { if (isPlaying) setShowControls(false); }}
      onFocus={revealControls}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "k") { e.preventDefault(); togglePlay(); }
        if (e.key === "f" || e.key === "F") { e.preventDefault(); toggleFullscreen(); }
        if (e.key === "m" || e.key === "M") { e.preventDefault(); toggleMute(); }
      }}
      tabIndex={0}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={initialMuted}
        playsInline
        className={cn(styles.video, aspectClass)}
        title={title}
        onClick={togglePlay}
        aria-label={title ?? "Video"}
      />

      {/* Big play/pause overlay hit area */}
      <div
        className={cn(styles.centerPlay, isPlaying && showControls && styles.hidden)}
        onClick={togglePlay}
        aria-hidden="true"
      >
        {!isPlaying && (
          <div className={styles.bigPlayBtn}>
            <PlayIcon />
          </div>
        )}
      </div>

      {/* Controls overlay */}
      <div className={cn(styles.controls, showControls && styles.controlsVisible)}>
        {/* Progress bar */}
        <div className={styles.progressRow}>
          <input
            type="range"
            min={0}
            max={duration || 0}
            value={currentTime}
            step={0.1}
            aria-label="Seek"
            aria-valuemin={0}
            aria-valuemax={duration || 0}
            aria-valuenow={currentTime}
            onChange={handleSeek}
            className={styles.seekBar}
            style={{ "--pct": `${progress}%` } as React.CSSProperties}
          />
        </div>

        {/* Bottom row */}
        <div className={styles.bottomRow}>
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            className={styles.ctrlBtn}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>

          <div className={styles.volumeGroup}>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute" : "Mute"}
              className={styles.ctrlBtn}
            >
              {isMuted ? <VolumeMutedIcon /> : <VolumeHighIcon />}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              value={isMuted ? 0 : volume}
              step={0.02}
              aria-label="Volume"
              onChange={handleVolumeChange}
              className={cn(styles.seekBar, styles.volumeBar)}
              style={{ "--pct": `${volumePct}%` } as React.CSSProperties}
            />
          </div>

          <span className={styles.timeDisplay} aria-live="off">
            {formatTime(currentTime)}&thinsp;/&thinsp;{formatTime(duration)}
          </span>

          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            className={cn(styles.ctrlBtn, styles.ctrlBtnRight)}
          >
            {isFullscreen ? <FullscreenExitIcon /> : <FullscreenEnterIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}
