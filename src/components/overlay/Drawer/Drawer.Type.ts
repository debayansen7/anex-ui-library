import type { ReactNode } from "react";

export type DrawerSide = "right" | "left" | "bottom";
export type DrawerSize = "sm" | "md" | "lg";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  side?: DrawerSide;
  size?: DrawerSize;
  title?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}
