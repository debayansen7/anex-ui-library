import React from "react";
import { AudioPlayer } from "../../../components/media";
import { VideoPlayer } from "../../../components/media";
import DemoCard from "../shared/DemoCard";
import SectionHeader from "../shared/SectionHeader";

const AUDIO_SRC = "/assets/audio/audio1.mp3";
const VIDEO_SRC = "/assets/video/video1.mp4";

const MediaSection = () => {
  return (
    <section>
      <SectionHeader
        id="media"
        title="Media"
        description="Audio and video player components with custom controls, multiple layout variants, and full keyboard support."
        count={2}
        icon="🎬"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "var(--space-4)",
        }}
      >
        {/* ── Audio: default ─────────────────────────────────────────────── */}
        <DemoCard
          title="AudioPlayer — default"
          description="Full card player with artwork, title, artist, seek bar, and volume control."
          code={`import { AudioPlayer } from "anexui";

<AudioPlayer
  src="/assets/audio/audio1.mp3"
  title="Audio Sample"
  artist="Local Asset"
  variant="default"
/>`}
        >
          <div style={{ width: "100%" }}>
            <AudioPlayer
              src={AUDIO_SRC}
              title="Audio Sample"
              artist="Local Asset"
              variant="default"
            />
          </div>
        </DemoCard>

        {/* ── Audio: minimal ─────────────────────────────────────────────── */}
        <DemoCard
          title="AudioPlayer — minimal"
          description="Compact horizontal bar: play button, seek bar, and elapsed/total time."
          code={`import { AudioPlayer } from "anexui";

<AudioPlayer
  src="/assets/audio/audio1.mp3"
  title="Audio Sample"
  variant="minimal"
/>`}
        >
          <div style={{ width: "100%" }}>
            <AudioPlayer
              src={AUDIO_SRC}
              title="Audio Sample"
              variant="minimal"
            />
          </div>
        </DemoCard>

        {/* ── Audio: controls-only ───────────────────────────────────────── */}
        <DemoCard
          title="AudioPlayer — controls only"
          description="Bare transport unit — play/pause, seek, time, and mute. No container chrome."
          code={`import { AudioPlayer } from "anexui";

<AudioPlayer
  src="/assets/audio/audio1.mp3"
  variant="controls"
/>`}
        >
          <div style={{ width: "100%", padding: "var(--space-2) 0" }}>
            <AudioPlayer
              src={AUDIO_SRC}
              variant="controls"
            />
          </div>
        </DemoCard>

        {/* ── Video: default ─────────────────────────────────────────────── */}
        <DemoCard
          title="VideoPlayer — default"
          description="16:9 video with a custom controls overlay: seek, play/pause, volume, and fullscreen."
          code={`import { VideoPlayer } from "anexui";

<VideoPlayer
  src="/assets/video/video1.mp4"
  title="Sample Video"
  variant="default"
  aspectRatio="16/9"
/>`}
        >
          <div style={{ width: "100%" }}>
            <VideoPlayer
              src={VIDEO_SRC}
              title="Sample Video"
              variant="default"
              aspectRatio="16/9"
            />
          </div>
        </DemoCard>

        {/* ── Video: minimal ─────────────────────────────────────────────── */}
        <DemoCard
          title="VideoPlayer — minimal"
          description="Native browser controls — lets the browser handle playback UI."
          code={`import { VideoPlayer } from "anexui";

<VideoPlayer
  src="/assets/video/video1.mp4"
  title="Sample Video"
  variant="minimal"
  aspectRatio="16/9"
/>`}
        >
          <div style={{ width: "100%" }}>
            <VideoPlayer
              src={VIDEO_SRC}
              title="Sample Video"
              variant="minimal"
              aspectRatio="16/9"
            />
          </div>
        </DemoCard>
      </div>
    </section>
  );
};

export default MediaSection;
