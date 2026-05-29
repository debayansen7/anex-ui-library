import type { ReactNode } from "react";

export interface CodeBlockProps {
  children?: ReactNode;
  /** Language label shown in the header (e.g. "tsx", "bash") */
  language?: string;
  className?: string;
}
