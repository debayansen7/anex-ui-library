import type { ComponentPropsWithRef } from "react";

export interface CheckboxProps extends Omit<ComponentPropsWithRef<"input">, "type"> {
  /** Renders text next to the checkbox — wraps in an accessible label */
  label?: string;
  /** Sets the indeterminate (mixed) state programmatically */
  indeterminate?: boolean;
}
