export type RatingSize = "sm" | "md" | "lg";

export interface RatingProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  max?: number;
  /** Allow .5 increments */
  allowHalf?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  size?: RatingSize;
  className?: string;
  /** Screen reader label */
  label?: string;
}
