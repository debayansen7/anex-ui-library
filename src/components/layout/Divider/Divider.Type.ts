import type { ComponentPropsWithRef } from "react";

export interface DividerProps extends ComponentPropsWithRef<"div"> {
  /** Stack direction of the surrounding content */
  orientation?: "horizontal" | "vertical";
  /** Optional text rendered in the centre of the line */
  label?: string;
}
