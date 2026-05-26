import type { ComponentPropsWithRef } from "react";

export type StackGap =
  | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16";

export interface StackProps extends ComponentPropsWithRef<"div"> {
  /** Flex direction */
  direction?: "row" | "column";
  /** Gap between children — maps to spacing token */
  gap?: StackGap;
  /** align-items */
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  /** justify-content */
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  /** Allows children to wrap to the next line */
  wrap?: boolean;
}
