import type { ReactNode } from "react";

export interface CarouselProps {
  /** Each child is treated as one slide */
  children: ReactNode;
  /** Auto-advance slides */
  autoPlay?: boolean;
  /** Auto-advance interval in ms */
  interval?: number;
  /** Wrap around at first/last slide */
  loop?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  /** Accessible label for the carousel region */
  label?: string;
  className?: string;
}
