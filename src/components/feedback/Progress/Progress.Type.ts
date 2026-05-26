import type { ComponentPropsWithRef } from "react";

export type ProgressVariant = "default" | "success" | "warning" | "error";

export interface ProgressProps extends Omit<ComponentPropsWithRef<"div">, "children"> {
  /** Current value */
  value: number;
  /** Maximum value (default 100) */
  max?: number;
  /** Accessible label */
  label?: string;
  /** Show numeric percentage next to the bar */
  showValue?: boolean;
  variant?: ProgressVariant;
}
