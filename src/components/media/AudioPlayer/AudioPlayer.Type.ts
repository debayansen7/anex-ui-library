export type AudioPlayerVariant = "default" | "minimal" | "controls";

export interface AudioPlayerProps {
  /** URL of the audio file */
  src: string;
  /** Track title shown in default and minimal variants */
  title?: string;
  /** Artist/author name shown in default variant */
  artist?: string;
  /** Player layout variant */
  variant?: AudioPlayerVariant;
  /** Autoplay on mount — browsers may block unless muted */
  autoPlay?: boolean;
  /** Loop the track when it ends */
  loop?: boolean;
  /** Additional CSS class applied to the root element */
  className?: string;
  /** Fired when playback starts */
  onPlay?: () => void;
  /** Fired when playback is paused */
  onPause?: () => void;
  /** Fired when the track ends */
  onEnded?: () => void;
}
