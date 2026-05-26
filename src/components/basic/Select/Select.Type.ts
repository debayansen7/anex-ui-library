import type { ComponentPropsWithRef } from "react";

export interface SelectProps extends ComponentPropsWithRef<"select"> {
  /** Marks the field as invalid — sets aria-invalid and applies error styling */
  error?: boolean;
  /** Renders a disabled placeholder as the first option */
  placeholder?: string;
}
