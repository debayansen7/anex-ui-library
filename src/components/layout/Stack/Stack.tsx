import { cn } from "../../../lib/cn";
import type { StackProps } from "./Stack.Type";
import styles from "./Stack.module.css";

const alignMap: Record<string, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline",
};

const justifyMap: Record<string, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

export default function Stack({
  ref,
  direction = "column",
  gap = "4",
  align,
  justify,
  wrap = false,
  style,
  className,
  children,
  ...rest
}: StackProps) {
  return (
    <div
      ref={ref}
      className={cn(styles.stack, className)}
      style={{
        flexDirection: direction,
        gap: `var(--space-${gap})`,
        alignItems: align ? alignMap[align] : undefined,
        justifyContent: justify ? justifyMap[justify] : undefined,
        flexWrap: wrap ? "wrap" : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
