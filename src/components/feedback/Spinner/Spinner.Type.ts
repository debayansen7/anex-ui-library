export type SpinnerSize = "sm" | "md" | "lg";

export interface SpinnerProps {
  size?: SpinnerSize;
  /** Accessible label announced by screen readers */
  label?: string;
  className?: string;
}
