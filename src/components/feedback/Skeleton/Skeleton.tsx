import { cn } from "../../../lib/cn";
import type { SkeletonProps } from "./Skeleton.Type";
import styles from "./Skeleton.module.css";

export default function Skeleton({
  variant = "rect",
  width,
  height,
  className,
  style,
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(styles.skeleton, styles[variant], className)}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        ...style,
      }}
    />
  );
}
