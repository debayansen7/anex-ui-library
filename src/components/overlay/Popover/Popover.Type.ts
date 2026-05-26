import type { ReactNode } from "react";

export type PopoverSide = "top" | "bottom" | "left" | "right";
export type PopoverAlign = "start" | "center" | "end";

export interface PopoverProps {
  /** Content shown inside the popover panel */
  content: ReactNode;
  side?: PopoverSide;
  align?: PopoverAlign;
  /** Controlled open state */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  /** The trigger element — should be an interactive element */
  children: ReactNode;
}
