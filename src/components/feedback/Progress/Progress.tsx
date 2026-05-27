import { cn } from "../../../lib/cn";
import type { ProgressProps } from "./Progress.Type";
import styles from "./Progress.module.css";

export default function Progress({
  ref,
  value,
  max = 100,
  label,
  showValue = false,
  variant = "default",
  className,
  ...rest
}: ProgressProps) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div ref={ref} className={cn(styles.wrapper, className)} {...rest}>
      {(label || showValue) && (
        <div className={styles.header}>
          {label && <span className={styles.label}>{label}</span>}
          {showValue && (
            <span className={styles.value} aria-hidden="true">
              {Math.round(percent)}%
            </span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label ?? `${Math.round(percent)}%`}
        className={cn(styles.track, styles[variant])}
      >
        <div className={styles.fill} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
