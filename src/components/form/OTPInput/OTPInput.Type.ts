export interface OTPInputProps {
  /** Number of boxes — default 6 */
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  /** Input character type — default "number" */
  type?: "text" | "number";
  className?: string;
  id?: string;
  name?: string;
}
