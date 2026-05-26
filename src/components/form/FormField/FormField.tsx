import React from "react";
import { cn } from "../../../lib/cn";
import type { FormFieldProps } from "./FormField.Type";
import styles from "./FormField.module.css";

export default function FormField({
  label,
  required,
  helperText,
  errorText,
  error,
  className,
  children,
}: FormFieldProps) {
  const inputId = React.useId();
  const helperId = helperText ? `${inputId}-helper` : undefined;
  const errorId = error && errorText ? `${inputId}-error` : undefined;
  const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

  const child = React.Children.only(children) as React.ReactElement<Record<string, unknown>>;
  const childId = (child.props as { id?: string }).id ?? inputId;

  const enhanced = React.cloneElement(child, {
    id: childId,
    "aria-describedby": describedBy,
    "aria-invalid": error ? true : undefined,
    "aria-required": required ? true : undefined,
  });

  return (
    <div className={cn(styles.field, className)}>
      {label && (
        <label htmlFor={childId} className={cn(styles.label, required && styles.required)}>
          {label}
        </label>
      )}
      {enhanced}
      {helperText && !error && (
        <span id={helperId} className={styles.helperText}>
          {helperText}
        </span>
      )}
      {error && errorText && (
        <span id={errorId} className={styles.errorText} role="alert">
          {errorText}
        </span>
      )}
    </div>
  );
}
