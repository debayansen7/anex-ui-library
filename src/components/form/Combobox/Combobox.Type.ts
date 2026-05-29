import type { ReactNode } from "react";

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  /** Shows a clear (×) button when a value is selected */
  clearable?: boolean;
  /** Text shown when no options match */
  emptyText?: string;
  className?: string;
  id?: string;
  name?: string;
}

// Suppress unused import warning
export type _ReactNode = ReactNode;
