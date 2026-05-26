import React from "react";
import { cn } from "../../../lib/cn";
import type {
  TabsContextValue,
  TabsProps,
  TabListProps,
  TabProps,
  TabPanelProps,
} from "./Tabs.Type";
import styles from "./Tabs.module.css";

const TabsContext = React.createContext<TabsContextValue>({
  activeId: "",
  setActiveId: () => {},
  variant: "line",
});

export function Tabs({
  defaultActiveId = "",
  activeId: controlledId,
  onChange,
  variant = "line",
  className,
  children,
}: TabsProps) {
  const isControlled = controlledId !== undefined;
  const [internalId, setInternalId] = React.useState(defaultActiveId);
  const activeId = isControlled ? controlledId : internalId;

  const setActiveId = React.useCallback(
    (id: string) => {
      if (!isControlled) setInternalId(id);
      onChange?.(id);
    },
    [isControlled, onChange]
  );

  return (
    <TabsContext.Provider value={{ activeId, setActiveId, variant }}>
      <div className={cn(styles.tabs, className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabList({ className, children }: TabListProps) {
  const { variant } = React.useContext(TabsContext);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const list = e.currentTarget;
    const tabs = Array.from(
      list.querySelectorAll<HTMLButtonElement>('[role="tab"]:not([disabled])')
    );
    const idx = tabs.indexOf(document.activeElement as HTMLButtonElement);
    if (idx === -1) return;

    let next = idx;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      next = (idx + 1) % tabs.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      next = (idx - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      next = 0;
    } else if (e.key === "End") {
      next = tabs.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    tabs[next].focus();
    tabs[next].click();
  };

  return (
    <div
      role="tablist"
      onKeyDown={handleKeyDown}
      className={cn(
        styles.tabList,
        variant === "pill" ? styles.tabListPill : styles.tabListLine,
        className
      )}
    >
      {children}
    </div>
  );
}

export function Tab({ id, disabled, className, children }: TabProps) {
  const { activeId, setActiveId, variant } = React.useContext(TabsContext);
  const isSelected = activeId === id;

  return (
    <button
      role="tab"
      id={`tab-${id}`}
      aria-selected={isSelected}
      aria-controls={`panel-${id}`}
      tabIndex={isSelected ? 0 : -1}
      disabled={disabled}
      onClick={() => setActiveId(id)}
      className={cn(
        styles.tab,
        variant === "pill" ? styles.tabPill : styles.tabLine,
        isSelected && (variant === "pill" ? styles.tabActivePill : styles.tabActiveLine),
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabPanel({ id, className, children }: TabPanelProps) {
  const { activeId } = React.useContext(TabsContext);

  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      hidden={activeId !== id}
      tabIndex={0}
      className={cn(styles.tabPanel, className)}
    >
      {children}
    </div>
  );
}
