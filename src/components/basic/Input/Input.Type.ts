import type { ComponentPropsWithRef } from "react";

export interface InputProps extends ComponentPropsWithRef<"input"> {
  /** Marks the field as invalid — sets aria-invalid and applies error styling */
  error?: boolean;
}
