import React from "react";
import { cn } from "../../../lib/cn";
import type { RadioGroupProps, RadioProps } from "./RadioGroup.Type";
import styles from "./RadioGroup.module.css";

const RadioGroupContext = React.createContext<string>("");

export function RadioGroup({
  legend,
  name,
  direction = "vertical",
  className,
  children,
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={name}>
      <fieldset className={cn(styles.group, styles[direction], className)}>
        <legend className={styles.legend}>{legend}</legend>
        {children}
      </fieldset>
    </RadioGroupContext.Provider>
  );
}

export function Radio({ ref, label, className, ...rest }: RadioProps) {
  const name = React.useContext(RadioGroupContext);
  return (
    <label className={cn(styles.radioWrapper, className)}>
      <input
        ref={ref}
        type="radio"
        name={name}
        className={styles.radioInput}
        {...rest}
      />
      <span className={styles.radioDot} aria-hidden="true" />
      <span className={styles.radioLabel}>{label}</span>
    </label>
  );
}
