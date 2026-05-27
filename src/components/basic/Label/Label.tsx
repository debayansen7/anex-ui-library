import { cn } from "../../../lib/cn";
import type { LabelProps } from "./Label.Type";
import styles from "./Label.module.css";

export default function Label({ ref, required, className, children, ...rest }: LabelProps) {
  return (
    <label ref={ref} className={cn(styles.label, className)} {...rest}>
      {children}
      {required && (
        <span className={styles.required} aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}
