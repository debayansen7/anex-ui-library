import type { ReactNode } from "react";

export type TooltipSide = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  /** Tooltip text */
  content: ReactNode;
  side?: TooltipSide;
  className?: string;
  children: ReactNode;
}
