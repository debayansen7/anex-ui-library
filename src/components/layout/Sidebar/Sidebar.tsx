import React from "react";
import { cn } from "../../../lib/cn";
import type { SidebarProps } from "./Sidebar.Type";
import styles from "./Sidebar.module.css";

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

function toCSSValue(v: string | number): string {
  return typeof v === "number" ? `${v}px` : v;
}

export function Sidebar({
  isOpen: controlledOpen,
  defaultOpen = true,
  onToggle,
  side = "left",
  width = 240,
  collapsedWidth = "3.5rem",
  header,
  footer,
  className,
  children,
}: SidebarProps) {
  const isControlled = controlledOpen !== undefined;
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const open = isControlled ? controlledOpen! : internalOpen;

  const toggle = () => {
    const next = !open;
    if (!isControlled) setInternalOpen(next);
    onToggle?.(next);
  };

  const expandedW = toCSSValue(width);
  const collapsedW = toCSSValue(collapsedWidth);
  const currentWidth = open ? expandedW : collapsedW;

  const showLeftToggle  = side === "left";
  const showRightToggle = side === "right";

  return (
    <aside
      className={cn(styles.sidebar, styles[side], !open && styles.collapsed, className)}
      style={{ width: currentWidth }}
      aria-expanded={open}
      aria-label="Sidebar"
    >
      {header && (
        <div className={cn(styles.header, !open && styles.contentHidden)}>
          {header}
        </div>
      )}

      <div className={cn(styles.body, !open && styles.contentHidden)}>
        {children}
      </div>

      {footer && (
        <div className={cn(styles.footer, !open && styles.contentHidden)}>
          {footer}
        </div>
      )}

      <button
        type="button"
        onClick={toggle}
        aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
        className={cn(styles.toggleBtn, styles[`toggle_${side}`])}
      >
        {showLeftToggle  && (open ? <ChevronLeft /> : <ChevronRight />)}
        {showRightToggle && (open ? <ChevronRight /> : <ChevronLeft />)}
      </button>
    </aside>
  );
}
