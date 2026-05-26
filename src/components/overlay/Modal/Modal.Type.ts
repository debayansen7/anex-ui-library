import type { ReactNode } from "react";

export type ModalSize = "sm" | "md" | "lg" | "full";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Rendered in the header and used as the dialog's accessible name */
  title?: string;
  /** Rendered below the title and used as the dialog's accessible description */
  description?: string;
  size?: ModalSize;
  className?: string;
  children?: ReactNode;
}
