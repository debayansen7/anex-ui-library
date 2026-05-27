import { cn } from "../../../lib/cn";
import type { BadgeProps } from "./Badge.Type";
import styles from "./Badge.module.css";

export default function Badge({
  ref,
  variant = "default",
  size = "md",
  dot = false,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      ref={ref}
      className={cn(
        styles.badge,
        styles[variant],
        styles[size],
        dot && styles.dot,
        className
      )}
      {...rest}
    >
      {!dot && children}
    </span>
  );
}
