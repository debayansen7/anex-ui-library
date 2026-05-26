export type TabsVariant = "line" | "pill";

export interface TabsContextValue {
  activeId: string;
  setActiveId: (id: string) => void;
  variant: TabsVariant;
}

export interface TabsProps {
  /** Initially active tab id (uncontrolled) */
  defaultActiveId?: string;
  /** Active tab id (controlled) */
  activeId?: string;
  onChange?: (id: string) => void;
  variant?: TabsVariant;
  className?: string;
  children?: React.ReactNode;
}

export interface TabListProps {
  className?: string;
  children?: React.ReactNode;
}

export interface TabProps {
  /** Must match a TabPanel id */
  id: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export interface TabPanelProps {
  /** Must match a Tab id */
  id: string;
  className?: string;
  children?: React.ReactNode;
}
