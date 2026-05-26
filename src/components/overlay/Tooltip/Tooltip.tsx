import React from "react";
import { cn } from "../../../lib/cn";
import type { TooltipProps } from "./Tooltip.Type";
import styles from "./Tooltip.module.css";

export default function Tooltip({
  content,
  side = "top",
  className,
  children,
}: TooltipProps) {
  const tooltipId = React.useId();

  return (
    <span className={cn(styles.wrapper, className)}>
      <span className={styles.trigger} aria-describedby={tooltipId}>
        {children}
      </span>
      <span
        role="tooltip"
        id={tooltipId}
        className={cn(styles.tooltip, styles[side])}
      >
        {content}
      </span>
    </span>
  );
}
