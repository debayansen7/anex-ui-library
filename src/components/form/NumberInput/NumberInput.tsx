import React from "react";
import { cn } from "../../../lib/cn";
import type { NumberInputProps } from "./NumberInput.Type";
import styles from "./NumberInput.module.css";

export default function NumberInput({
  ref,
  value,
  defaultValue,
  onChange,
  min,
  max,
  step = 1,
  disabled,
  className,
  ...rest
}: NumberInputProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? 0);
  const displayValue = isControlled ? value! : internalValue;

  const update = (next: number) => {
    if (min !== undefined) next = Math.max(next, min);
    if (max !== undefined) next = Math.min(next, max);
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = e.target.valueAsNumber;
    if (!isNaN(parsed)) update(parsed);
  };

  const atMin = min !== undefined && displayValue <= min;
  const atMax = max !== undefined && displayValue >= max;

  return (
    <div className={cn(styles.wrapper, disabled && styles.disabled, className)}>
      <button
        type="button"
        onClick={() => update(displayValue - step)}
        disabled={disabled || atMin}
        aria-label="Decrease"
        className={styles.btn}
      >
        −
      </button>
      <input
        ref={ref}
        type="number"
        value={displayValue}
        onChange={handleInputChange}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className={styles.input}
        {...rest}
      />
      <button
        type="button"
        onClick={() => update(displayValue + step)}
        disabled={disabled || atMax}
        aria-label="Increase"
        className={styles.btn}
      >
        +
      </button>
    </div>
  );
}
