import React from "react";
import { cn } from "../../../lib/cn";
import type { TableProps, TableHeaderProps, TableCellProps } from "./Table.Type";
import styles from "./Table.module.css";

export function Table({ ref, caption, className, children, ...rest }: TableProps) {
  return (
    <div className={styles.wrapper}>
      <table ref={ref} className={cn(styles.table, className)} {...rest}>
        {caption && <caption className={styles.caption}>{caption}</caption>}
        {children}
      </table>
    </div>
  );
}

export function TableHead({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <thead className={cn(styles.thead, className)}>{children}</thead>;
}

export function TableBody({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <tbody className={cn(styles.tbody, className)}>{children}</tbody>;
}

export function TableRow({ className, children }: { className?: string; children?: React.ReactNode }) {
  return <tr className={cn(styles.row, className)}>{children}</tr>;
}

export function TableHeader({ scope = "col", className, children, ...rest }: TableHeaderProps) {
  return (
    <th scope={scope} className={cn(styles.th, className)} {...rest}>
      {children}
    </th>
  );
}

export function TableCell({ className, children, ...rest }: TableCellProps) {
  return (
    <td className={cn(styles.td, className)} {...rest}>
      {children}
    </td>
  );
}
