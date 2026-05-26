import type { ComponentPropsWithRef } from "react";

export interface TextareaProps extends ComponentPropsWithRef<"textarea"> {
  /** Marks the field as invalid — sets aria-invalid and applies error styling */
  error?: boolean;
  /** CSS resize behaviour */
  resize?: "none" | "vertical" | "horizontal" | "both";
}
