import { cn } from "../../../lib/cn";
import type { InputProps } from "./Input.Type";
import styles from "./Input.module.css";

export default function Input({ ref, error, type = "text", className, ...rest }: InputProps) {
  return (
    <input
      ref={ref}
      type={type}
      aria-invalid={error ? true : undefined}
      className={cn(styles.input, className)}
      {...rest}
    />
  );
}
