import { cn } from "../../../lib/cn";
import type { SelectProps } from "./Select.Type";
import styles from "./Select.module.css";

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Select({ ref, error, placeholder, className, children, ...rest }: SelectProps) {
  return (
    <div className={styles.wrapper}>
      <select
        ref={ref}
        aria-invalid={error ? true : undefined}
        className={cn(styles.select, className)}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <span className={styles.chevron}>
        <ChevronDown />
      </span>
    </div>
  );
}
