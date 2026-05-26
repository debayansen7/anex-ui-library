import type { ComponentPropsWithRef } from "react";

export type AlertVariant = "success" | "error" | "warning" | "info";

export interface AlertProps extends ComponentPropsWithRef<"div"> {
  variant?: AlertVariant;
  title?: string;
  onDismiss?: () => void;
}
