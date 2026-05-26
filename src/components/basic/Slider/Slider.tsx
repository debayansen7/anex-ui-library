import React from "react";
import { cn } from "../../../lib/cn";
import type { SliderProps } from "./Slider.Type";
import styles from "./Slider.module.css";

export default function Slider({
  ref,
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  onChange,
  showValue = false,
  className,
  id,
  ...rest
}: SliderProps) {
  const isControlled = value !== undefined;

  const [displayValue, setDisplayValue] = React.useState(
    isControlled ? Number(value) : Number(defaultValue ?? min)
  );

  React.useEffect(() => {
    if (isControlled) setDisplayValue(Number(value));
  }, [isControlled, value]);

  const fillPercent = max === min ? 0 : ((displayValue - min) / (max - min)) * 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setDisplayValue(Number(e.target.value));
    onChange?.(e);
  };

  return (
    <div
      className={cn(styles.wrapper, className)}
      style={{ "--slider-fill": `${fillPercent}%` } as React.CSSProperties}
    >
      <input
        ref={ref}
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        {...(isControlled ? { value } : { defaultValue: defaultValue ?? min })}
        onChange={handleChange}
        className={styles.slider}
        {...rest}
      />
      {showValue && (
        <output htmlFor={id} className={styles.output} aria-live="polite">
          {displayValue}
        </output>
      )}
    </div>
  );
}
