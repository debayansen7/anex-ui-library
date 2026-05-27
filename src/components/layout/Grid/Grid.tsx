import { cn } from "../../../lib/cn";
import type { GridProps } from "./Grid.Type";
import styles from "./Grid.module.css";

export default function Grid({
  ref,
  cols = 1,
  gap,
  rowGap,
  colGap,
  style,
  className,
  children,
  ...rest
}: GridProps) {
  return (
    <div
      ref={ref}
      className={cn(styles.grid, className)}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: gap !== undefined ? `var(--space-${gap})` : undefined,
        rowGap: rowGap !== undefined ? `var(--space-${rowGap})` : undefined,
        columnGap: colGap !== undefined ? `var(--space-${colGap})` : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
