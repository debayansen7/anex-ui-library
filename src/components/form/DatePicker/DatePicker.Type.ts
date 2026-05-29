export interface DatePickerProps {
  value?: Date | null;
  onChange?: (date: Date) => void;
  placeholder?: string;
  disabled?: boolean;
  /** Earliest selectable date */
  min?: Date;
  /** Latest selectable date */
  max?: Date;
  className?: string;
  id?: string;
  name?: string;
}
