import React from "react";
import { cn } from "../../../lib/cn";
import type { AvatarProps } from "./Avatar.Type";
import styles from "./Avatar.module.css";

const UserIcon = () => (
  <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const statusLabels = { online: "Online", offline: "Offline", away: "Away", busy: "Busy" } as const;

export default function Avatar({
  ref,
  src,
  alt,
  initials,
  size = "md",
  status,
  className,
  ...rest
}: AvatarProps) {
  const [imgError, setImgError] = React.useState(false);
  const showImg = !!src && !imgError;

  return (
    <span
      ref={ref}
      className={cn(styles.avatar, styles[size], className)}
      role={!showImg ? "img" : undefined}
      aria-label={!showImg ? (alt ?? initials ?? "Avatar") : undefined}
      {...rest}
    >
      {showImg && (
        <img
          src={src}
          alt={alt ?? ""}
          className={styles.img}
          onError={() => setImgError(true)}
        />
      )}
      {!showImg && initials && (
        <span className={styles.initials} aria-hidden="true">
          {initials.slice(0, 2).toUpperCase()}
        </span>
      )}
      {!showImg && !initials && <UserIcon />}
      {status && (
        <span
          className={cn(styles.statusDot, styles[status])}
          aria-label={statusLabels[status]}
        />
      )}
    </span>
  );
}
