export type VideoPlayerVariant = "default" | "minimal";
export type VideoAspectRatio = "16/9" | "4/3" | "1/1";

export interface VideoPlayerProps {
  /** URL of the video file */
  src: string;
  /** Poster image shown before playback begins */
  poster?: string;
  /** Accessible label for the video region */
  title?: string;
  /** Player layout variant */
  variant?: VideoPlayerVariant;
  /** Autoplay on mount — browsers require muted for this to work reliably */
  autoPlay?: boolean;
  /** Loop the video when it ends */
  loop?: boolean;
  /** Start the video muted */
  muted?: boolean;
  /** Aspect ratio of the video frame */
  aspectRatio?: VideoAspectRatio;
  /** Additional CSS class applied to the root wrapper */
  className?: string;
  /** Fired when playback starts */
  onPlay?: () => void;
  /** Fired when playback is paused */
  onPause?: () => void;
  /** Fired when the video ends */
  onEnded?: () => void;
}
