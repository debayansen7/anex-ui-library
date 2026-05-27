import { cn } from "../../../lib/cn";
import type { ContainerProps, ContainerMaxWidth } from "./Container.Type";
import styles from "./Container.module.css";

const maxWidthMap: Record<ContainerMaxWidth, string> = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
  full: "100%",
};

export default function Container({
  ref,
  maxWidth = "lg",
  style,
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      ref={ref}
      className={cn(styles.container, className)}
      style={{ maxWidth: maxWidthMap[maxWidth], ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
