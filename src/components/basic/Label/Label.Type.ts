import type { ComponentPropsWithRef } from "react";

export interface LabelProps extends ComponentPropsWithRef<"label"> {
  /** Renders a visible * indicator; aria-hidden so screen readers use the input's required attr */
  required?: boolean;
}
