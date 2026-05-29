import type { ReactNode } from "react";

export type CalloutVariant = "info" | "warning" | "success" | "danger" | "neutral";

export interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}
