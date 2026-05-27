import { cn } from "../../../lib/cn";
import type { ButtonProps } from "./Button.Type";
import styles from "./Button.module.css";

export default function Button({
  ref,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  type = "button",
  className,
  children,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;
  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      className={cn(styles.button, styles[variant], styles[size], className)}
      {...rest}
    >
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {children}
    </button>
  );
}
