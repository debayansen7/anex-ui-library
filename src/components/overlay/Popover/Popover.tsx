import React from "react";
import { cn } from "../../../lib/cn";
import type { PopoverProps } from "./Popover.Type";
import styles from "./Popover.module.css";

export default function Popover({
  content,
  side = "bottom",
  align = "start",
  open: controlledOpen,
  onOpenChange,
  className,
  children,
}: PopoverProps) {
  const isControlled = controlledOpen !== undefined;
  const [internalOpen, setInternalOpen] = React.useState(false);
  const open = isControlled ? controlledOpen : internalOpen;
  const wrapperRef = React.useRef<HTMLSpanElement>(null);
  const contentId = React.useId();

  const setOpen = React.useCallback(
    (val: boolean) => {
      if (!isControlled) setInternalOpen(val);
      onOpenChange?.(val);
    },
    [isControlled, onOpenChange]
  );

  React.useEffect(() => {
    if (!open) return;
    const onMouseDown = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, setOpen]);

  const trigger = React.Children.only(children) as React.ReactElement<Record<string, unknown>>;
  const cloned = React.cloneElement(trigger, {
    onClick: (e: React.MouseEvent) => {
      (trigger.props.onClick as React.MouseEventHandler | undefined)?.(e);
      setOpen(!open);
    },
    "aria-expanded": open,
    "aria-haspopup": "dialog",
    "aria-controls": open ? contentId : undefined,
  });

  return (
    <span ref={wrapperRef} className={cn(styles.wrapper, className)}>
      {cloned}
      {open && (
        <div
          id={contentId}
          role="dialog"
          className={cn(styles.content, styles[side], styles[align])}
        >
          {content}
        </div>
      )}
    </span>
  );
}
