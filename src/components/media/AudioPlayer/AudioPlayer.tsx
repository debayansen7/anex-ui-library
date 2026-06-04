import React, { useRef, useState, useCallback, useEffect } from "react";
import { cn } from "../../../lib/cn";
import type { AudioPlayerProps } from "./AudioPlayer.Type";
import styles from "./AudioPlayer.module.css";

// ── Icons ──────────────────────────────────────────────────────────────────

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3.5 2.5L13.5 8L3.5 13.5V2.5Z" fill="currentColor" />
  </svg>
);

const PauseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="3" y="2" width="3.5" height="12" rx="1" fill="currentColor" />
    <rect x="9.5" y="2" width="3.5" height="12" rx="1" fill="currentColor" />
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

const MusicNoteIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M9 17V5l11-2v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="6" cy="17" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="15" r="3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// ── Helpers ────────────────────────────────────────────────────────────────

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return "--:--";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// ── Shared seek/volume range input ────────────────────────────────────────

interface TrackInputProps {
  value: number;
  max: number;
  step?: number;
  label: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TrackInput = ({ value, max, step = 0.1, label, className, onChange }: TrackInputProps) => {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <input
      type="range"
      min={0}
      max={max || 0}
      value={value}
      step={step}
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={max || 0}
      aria-valuenow={value}
      onChange={onChange}
      className={cn(styles.track, className)}
      style={{ "--pct": `${pct}%` } as React.CSSProperties}
    />
  );
};

// ── Component ──────────────────────────────────────────────────────────────

export default function AudioPlayer({
  src,
  title,
  artist,
  variant = "default",
  autoPlay = false,
  loop = false,
  className,
  onPlay,
  onPause,
  onEnded,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => { setIsPlaying(true); onPlay?.(); };
    const handlePause = () => { setIsPlaying(false); onPause?.(); };
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleMetadata = () => setDuration(audio.duration);
    const handleEnded = () => { setIsPlaying(false); onEnded?.(); };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [onPlay, onPause, onEnded]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play().catch(() => {});
  }, [isPlaying]);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const t = Number(e.target.value);
    audio.currentTime = t;
    setCurrentTime(t);
  }, []);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const v = Number(e.target.value);
    audio.volume = v;
    audio.muted = v === 0;
    setVolume(v);
    setIsMuted(v === 0);
  }, []);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !isMuted;
    audio.muted = next;
    setIsMuted(next);
  }, [isMuted]);

  const playPauseBtn = (size: "sm" | "lg" = "sm") => (
    <button
      type="button"
      onClick={togglePlay}
      aria-label={isPlaying ? "Pause" : "Play"}
      className={cn(styles.playBtn, size === "lg" && styles.playBtnLg)}
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  );

  const muteBtn = (
    <button
      type="button"
      onClick={toggleMute}
      aria-label={isMuted ? "Unmute" : "Mute"}
      className={styles.muteBtn}
    >
      {isMuted ? <VolumeMutedIcon /> : <VolumeHighIcon />}
    </button>
  );

  const audioEl = (
    <audio ref={audioRef} src={src} autoPlay={autoPlay} loop={loop} preload="metadata" />
  );

  // ── controls-only ─────────────────────────────────────────────────────────
  if (variant === "controls") {
    return (
      <div
        className={cn(styles.controlsOnly, className)}
        role="group"
        aria-label={title ?? "Audio controls"}
      >
        {audioEl}
        {playPauseBtn("sm")}
        <TrackInput value={currentTime} max={duration} label="Seek" onChange={handleSeek} className={styles.trackFlex} />
        <span className={styles.time} aria-live="off">
          {formatTime(currentTime)}&thinsp;/&thinsp;{formatTime(duration)}
        </span>
        {muteBtn}
      </div>
    );
  }

  // ── minimal ───────────────────────────────────────────────────────────────
  if (variant === "minimal") {
    return (
      <div
        className={cn(styles.minimal, className)}
        role="region"
        aria-label={title ?? "Audio player"}
      >
        {audioEl}
        {playPauseBtn("lg")}
        <div className={styles.minimalBody}>
          {title && <p className={styles.minimalTitle}>{title}</p>}
          <TrackInput value={currentTime} max={duration} label="Seek" onChange={handleSeek} />
          <span className={styles.time} aria-live="off">
            {formatTime(currentTime)}&thinsp;/&thinsp;{formatTime(duration)}
          </span>
        </div>
        {muteBtn}
      </div>
    );
  }

  // ── default ───────────────────────────────────────────────────────────────
  return (
    <div
      className={cn(styles.player, className)}
      role="region"
      aria-label={title ?? "Audio player"}
    >
      {audioEl}

      <div className={styles.playerHeader}>
        <div className={styles.artwork} aria-hidden="true">
          <MusicNoteIcon />
        </div>
        <div className={styles.info}>
          {title && <p className={styles.title}>{title}</p>}
          {artist && <p className={styles.artist}>{artist}</p>}
          {!title && !artist && (
            <p className={styles.artist}>Audio track</p>
          )}
        </div>
        {playPauseBtn("lg")}
      </div>

      <div className={styles.seekRow}>
        <span className={styles.time} aria-live="off">{formatTime(currentTime)}</span>
        <TrackInput value={currentTime} max={duration} label="Seek" onChange={handleSeek} className={styles.trackFlex} />
        <span className={styles.time} aria-live="off">{formatTime(duration)}</span>
      </div>

      <div className={styles.volumeRow}>
        {muteBtn}
        <TrackInput
          value={isMuted ? 0 : volume}
          max={1}
          step={0.02}
          label="Volume"
          onChange={handleVolumeChange}
          className={styles.trackFlex}
        />
      </div>
    </div>
  );
}
