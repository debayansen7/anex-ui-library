import { cn } from "../../../lib/cn";
import type { SpinnerProps } from "./Spinner.Type";
import styles from "./Spinner.module.css";

export default function Spinner({
  size = "md",
  label = "Loading…",
  className,
}: SpinnerProps) {
  return (
    <span role="status" className={cn(styles.spinner, styles[size], className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={styles.svg}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
          strokeOpacity="0.25"
        />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className={styles.srOnly}>{label}</span>
    </span>
  );
}
