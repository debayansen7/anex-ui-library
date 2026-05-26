import React from "react";
import { cn } from "../../../lib/cn";
import type {
  AccordionContextValue,
  AccordionItemContextValue,
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionPanelProps,
} from "./Accordion.Type";
import styles from "./Accordion.module.css";

const AccordionCtx = React.createContext<AccordionContextValue>({
  openItems: new Set(),
  toggleItem: () => {},
});

const AccordionItemCtx = React.createContext<AccordionItemContextValue>({
  itemId: "",
  isOpen: false,
});

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Accordion({ multiple, defaultOpen, className, children }: AccordionProps) {
  const initial = new Set<string>(
    defaultOpen ? (Array.isArray(defaultOpen) ? defaultOpen : [defaultOpen]) : []
  );
  const [openItems, setOpenItems] = React.useState(initial);

  const toggleItem = React.useCallback(
    (id: string) => {
      setOpenItems((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          if (!multiple) next.clear();
          next.add(id);
        }
        return next;
      });
    },
    [multiple]
  );

  return (
    <AccordionCtx.Provider value={{ openItems, toggleItem }}>
      <div className={cn(styles.accordion, className)}>{children}</div>
    </AccordionCtx.Provider>
  );
}

export function AccordionItem({ id, className, children }: AccordionItemProps) {
  const { openItems } = React.useContext(AccordionCtx);
  const isOpen = openItems.has(id);

  return (
    <AccordionItemCtx.Provider value={{ itemId: id, isOpen }}>
      <div className={cn(styles.item, isOpen && styles.itemOpen, className)}>{children}</div>
    </AccordionItemCtx.Provider>
  );
}

export function AccordionTrigger({ className, children }: AccordionTriggerProps) {
  const { toggleItem } = React.useContext(AccordionCtx);
  const { itemId, isOpen } = React.useContext(AccordionItemCtx);

  return (
    <h3 className={styles.heading}>
      <button
        type="button"
        id={`trigger-${itemId}`}
        aria-expanded={isOpen}
        aria-controls={`panel-${itemId}`}
        onClick={() => toggleItem(itemId)}
        className={cn(styles.trigger, className)}
      >
        <span>{children}</span>
        <span className={cn(styles.chevron, isOpen && styles.chevronOpen)}>
          <ChevronIcon />
        </span>
      </button>
    </h3>
  );
}

export function AccordionPanel({ className, children }: AccordionPanelProps) {
  const { itemId, isOpen } = React.useContext(AccordionItemCtx);

  return (
    <div
      id={`panel-${itemId}`}
      role="region"
      aria-labelledby={`trigger-${itemId}`}
      hidden={!isOpen}
      className={cn(styles.panel, className)}
    >
      <div className={styles.panelContent}>{children}</div>
    </div>
  );
}
