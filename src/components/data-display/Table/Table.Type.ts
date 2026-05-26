import type { ComponentPropsWithRef, ThHTMLAttributes, TdHTMLAttributes } from "react";

export interface TableProps extends ComponentPropsWithRef<"table"> {
  /** Accessible table caption */
  caption?: string;
}

export interface TableHeaderProps extends ThHTMLAttributes<HTMLTableCellElement> {
  scope?: "col" | "row" | "colgroup" | "rowgroup";
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {}
