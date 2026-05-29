import type { ReactNode } from "react";

export type SidebarSide = "left" | "right";

export interface SidebarProps {
  /** Controlled open state */
  isOpen?: boolean;
  /** Uncontrolled default */
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  side?: SidebarSide;
  /** Width when expanded — default 240px */
  width?: string | number;
  /** Width when collapsed — default "3.5rem". Set to 0 to fully hide. */
  collapsedWidth?: string | number;
  /** Slot rendered above the scrollable body */
  header?: ReactNode;
  /** Slot rendered below the scrollable body */
  footer?: ReactNode;
  className?: string;
  children?: ReactNode;
}
