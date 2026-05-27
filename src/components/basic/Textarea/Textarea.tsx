import { cn } from "../../../lib/cn";
import type { TextareaProps } from "./Textarea.Type";
import styles from "./Textarea.module.css";

export default function Textarea({
  ref,
  error,
  resize = "vertical",
  style,
  className,
  ...rest
}: TextareaProps) {
  return (
    <textarea
      ref={ref}
      aria-invalid={error ? true : undefined}
      style={{ resize, ...style }}
      className={cn(styles.textarea, className)}
      {...rest}
    />
  );
}
