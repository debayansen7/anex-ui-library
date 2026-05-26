import type { ComponentPropsWithRef } from "react";

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
export type GridGap =
  | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16";

export interface GridProps extends ComponentPropsWithRef<"div"> {
  /** Number of equal-width columns */
  cols?: GridCols;
  /** Shorthand gap (row + column) */
  gap?: GridGap;
  /** Row gap only — overrides gap for rows */
  rowGap?: GridGap;
  /** Column gap only — overrides gap for columns */
  colGap?: GridGap;
}
