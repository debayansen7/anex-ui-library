import { cn } from "../../../lib/cn";
import type { DividerProps } from "./Divider.Type";
import styles from "./Divider.module.css";

export default function Divider({
  ref,
  orientation = "horizontal",
  label,
  className,
  ...rest
}: DividerProps) {
  if (label) {
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        aria-label={label}
        className={cn(
          styles.divider,
          styles[orientation],
          styles.withLabel,
          className
        )}
        {...rest}
      >
        <span className={styles.line} aria-hidden="true" />
        <span className={styles.labelText}>{label}</span>
        <span className={styles.line} aria-hidden="true" />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={cn(styles.divider, styles[orientation], className)}
      {...rest}
    />
  );
}
