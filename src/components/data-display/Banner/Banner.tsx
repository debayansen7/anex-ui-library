import React from "react";
import { cn } from "../../../lib/cn";
import type { BannerProps, BannerVariant } from "./Banner.Type";
import styles from "./Banner.module.css";

const icons: Record<BannerVariant, React.ReactNode> = {
  info: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 8.5v5M9 5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  success: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 9l3 3 4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  warning: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 2L1.5 16h15L9 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 7.5v4M9 13v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  error: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 6.5l5 5M11.5 6.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  promo: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 2l1.9 4 4.4.6-3.2 3 .8 4.4L9 12l-3.9 2 .8-4.4L2.7 6.6l4.4-.6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
};

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Banner({
  ref,
  variant = "info",
  title,
  description,
  action,
  onDismiss,
  className,
  ...rest
}: BannerProps) {
  return (
    <div
      ref={ref}
      role={variant === "error" || variant === "warning" ? "alert" : "status"}
      aria-live={variant === "error" ? "assertive" : "polite"}
      className={cn(styles.banner, styles[variant], className)}
      {...rest}
    >
      <div className={styles.inner}>
        <span className={styles.icon}>{icons[variant]}</span>
        <div className={styles.content}>
          <span className={styles.title}>{title}</span>
          {description && <span className={styles.description}>{description}</span>}
        </div>
        <div className={styles.actions}>
          {action && (
            <button
              type="button"
              onClick={action.onClick}
              className={styles.actionBtn}
            >
              {action.label}
            </button>
          )}
          {onDismiss && (
            <button
              type="button"
              onClick={onDismiss}
              aria-label="Dismiss"
              className={styles.dismissBtn}
            >
              <XIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
