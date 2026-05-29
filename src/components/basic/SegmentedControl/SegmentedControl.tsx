import React, { useState, useRef } from "react";
import { cn } from "../../../lib/cn";
import type { SegmentedControlProps } from "./SegmentedControl.Type";
import styles from "./SegmentedControl.module.css";

export default function SegmentedControl({
  options,
  value: controlledValue,
  defaultValue,
  onChange,
  size = "md",
  fullWidth = false,
  disabled = false,
  className,
  name,
}: SegmentedControlProps) {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState<string>(
    defaultValue ?? options[0]?.value ?? ""
  );

  const activeValue = isControlled ? controlledValue : internalValue;
  const groupRef = useRef<HTMLDivElement>(null);

  const handleSelect = (val: string) => {
    if (disabled) return;
    if (!isControlled) setInternalValue(val);
    onChange?.(val);
  };

  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    const enabledOptions = options.filter((o) => !o.disabled);
    const currentEnabled = enabledOptions.findIndex(
      (o) => o.value === options[currentIndex].value
    );

    let nextEnabled: number | null = null;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      nextEnabled = (currentEnabled + 1) % enabledOptions.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      nextEnabled = (currentEnabled - 1 + enabledOptions.length) % enabledOptions.length;
    }

    if (nextEnabled !== null) {
      const targetOption = enabledOptions[nextEnabled];
      handleSelect(targetOption.value);
      // Focus the target button
      const buttons = groupRef.current?.querySelectorAll<HTMLButtonElement>("button[role='radio']");
      const targetIdx = options.findIndex((o) => o.value === targetOption.value);
      buttons?.[targetIdx]?.focus();
    }
  };

  return (
    <div
      ref={groupRef}
      role="radiogroup"
      aria-disabled={disabled}
      className={cn(
        styles.root,
        fullWidth && styles.rootFull,
        disabled && styles.rootDisabled,
        className
      )}
    >
      {name && <input type="hidden" name={name} value={activeValue} />}

      {options.map((option, idx) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={option.value === activeValue}
          disabled={option.disabled || disabled}
          tabIndex={option.value === activeValue ? 0 : -1}
          className={cn(
            styles.segment,
            styles[size],
            fullWidth && styles.segmentFull,
            option.value === activeValue && styles.segmentActive
          )}
          onClick={() => !option.disabled && handleSelect(option.value)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
