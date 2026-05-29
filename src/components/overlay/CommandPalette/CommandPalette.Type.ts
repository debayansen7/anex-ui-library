import type { ReactNode } from "react";

export interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  group?: string;
  onSelect?: () => void;
}

export interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  placeholder?: string;
  items?: CommandItem[];
  loading?: boolean;
  onSearch?: (query: string) => void;
  emptyText?: string;
  className?: string;
}
