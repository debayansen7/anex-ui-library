import React from "react";
import { cn } from "../../../lib/cn";
import type { CheckboxProps } from "./Checkbox.Type";
import styles from "./Checkbox.module.css";

export default function Checkbox({ ref, label, indeterminate, className, ...rest }: CheckboxProps) {
  const innerRef = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(ref, () => innerRef.current!);

  React.useEffect(() => {
    if (innerRef.current) {
      innerRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);

  const inputEl = (
    <>
      <input ref={innerRef} type="checkbox" className={styles.input} {...rest} />
      <span className={styles.box} aria-hidden="true">
        <svg className={styles.checkIcon} width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg className={styles.dashIcon} width="10" height="2" viewBox="0 0 10 2" fill="none">
          <path d="M1 1H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
    </>
  );

  if (label) {
    return (
      <label className={cn(styles.wrapper, className)}>
        {inputEl}
        <span className={styles.label}>{label}</span>
      </label>
    );
  }

  return <span className={cn(styles.wrapper, className)}>{inputEl}</span>;
}
