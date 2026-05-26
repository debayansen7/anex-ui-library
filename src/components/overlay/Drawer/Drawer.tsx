import React from "react";
import { cn } from "../../../lib/cn";
import type { DrawerProps } from "./Drawer.Type";
import styles from "./Drawer.module.css";

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Drawer({
  isOpen,
  onClose,
  side = "right",
  size = "md",
  title,
  description,
  className,
  children,
}: DrawerProps) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const titleId = React.useId();
  const descId = React.useId();

  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className={cn(styles.dialog, styles[side], className)}
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={description ? descId : undefined}
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      <div
        className={cn(styles.panel, styles[`panel_${side}`], styles[`size_${size}`])}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          {title ? (
            <h2 id={titleId} className={styles.title}>
              {title}
            </h2>
          ) : (
            <span />
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className={styles.closeBtn}
          >
            <XIcon />
          </button>
        </div>
        {description && (
          <p id={descId} className={styles.description}>
            {description}
          </p>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </dialog>
  );
}
