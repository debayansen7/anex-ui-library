import { cn } from "../../../lib/cn";
import type { TagProps } from "./Tag.Type";
import styles from "./Tag.module.css";

const XIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Tag({
  ref,
  variant = "default",
  onRemove,
  removeLabel,
  className,
  children,
  ...rest
}: TagProps) {
  return (
    <span ref={ref} className={cn(styles.tag, styles[variant], className)} {...rest}>
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={removeLabel ?? `Remove`}
          className={styles.removeBtn}
        >
          <XIcon />
        </button>
      )}
    </span>
  );
}
