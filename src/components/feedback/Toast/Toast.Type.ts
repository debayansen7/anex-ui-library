import type { ReactNode } from "react";

export type ToastType = "default" | "success" | "error" | "warning" | "info";

export interface ToastItem {
  id: string;
  message: string;
  type?: ToastType;
  /** Auto-dismiss delay in ms. Pass 0 to disable auto-dismiss. */
  duration?: number;
}

export interface ToastContextValue {
  /** Show a toast. Returns the generated id. */
  toast: (options: Omit<ToastItem, "id"> | string) => string;
  dismiss: (id: string) => void;
}

export interface ToastProviderProps {
  children: ReactNode;
}
