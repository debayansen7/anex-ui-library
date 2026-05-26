import React from "react";
import { cn } from "../../../lib/cn";
import type { SwitchProps } from "./Switch.Type";
import styles from "./Switch.module.css";

export default function Switch({ ref, label, id, className, ...rest }: SwitchProps) {
  const innerId = React.useId();
  const switchId = id ?? innerId;

  return (
    <div className={cn(styles.wrapper, className)}>
      {/* label wraps input + track so the whole toggle area is clickable */}
      <label className={styles.toggle} htmlFor={switchId}>
        <input
          ref={ref}
          id={switchId}
          type="checkbox"
          role="switch"
          className={styles.input}
          {...rest}
        />
        <span className={styles.track} aria-hidden="true">
          <span className={styles.thumb} />
        </span>
      </label>
      {label && (
        <label htmlFor={switchId} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
}
