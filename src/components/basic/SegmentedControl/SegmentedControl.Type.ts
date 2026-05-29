import type { ReactNode } from "react";

export interface SegmentedOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export type SegmentedSize = "sm" | "md";

export interface SegmentedControlProps {
  options: SegmentedOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: SegmentedSize;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  name?: string;
}
