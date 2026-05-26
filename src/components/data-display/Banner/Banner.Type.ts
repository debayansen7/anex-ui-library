import type { ComponentPropsWithRef } from "react";

export type BannerVariant = "info" | "success" | "warning" | "error" | "promo";

export interface BannerAction {
  label: string;
  onClick: () => void;
}

export interface BannerProps extends ComponentPropsWithRef<"div"> {
  variant?: BannerVariant;
  title: string;
  description?: string;
  action?: BannerAction;
  onDismiss?: () => void;
}
