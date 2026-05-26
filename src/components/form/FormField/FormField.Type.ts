import type { ReactNode } from "react";

export interface FormFieldProps {
  label?: string;
  required?: boolean;
  helperText?: string;
  errorText?: string;
  error?: boolean;
  className?: string;
  /** Single form control child (Input, Textarea, Select, etc.) */
  children: ReactNode;
}
