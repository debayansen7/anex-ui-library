import type { ComponentPropsWithRef } from "react";

export interface PaginationProps extends Omit<ComponentPropsWithRef<"nav">, "onChange"> {
  /** Total number of pages */
  total: number;
  /** Current active page (1-based) */
  page: number;
  onChange: (page: number) => void;
  /** Number of sibling pages shown on each side of the current page */
  siblings?: number;
}
