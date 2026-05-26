import type { ReactNode } from "react";

export interface AccordionContextValue {
  openItems: Set<string>;
  toggleItem: (id: string) => void;
}

export interface AccordionItemContextValue {
  itemId: string;
  isOpen: boolean;
}

export interface AccordionProps {
  /** Allow multiple items open at once */
  multiple?: boolean;
  /** Item id(s) open by default */
  defaultOpen?: string | string[];
  className?: string;
  children?: ReactNode;
}

export interface AccordionItemProps {
  id: string;
  className?: string;
  children?: ReactNode;
}

export interface AccordionTriggerProps {
  className?: string;
  children?: ReactNode;
}

export interface AccordionPanelProps {
  className?: string;
  children?: ReactNode;
}
