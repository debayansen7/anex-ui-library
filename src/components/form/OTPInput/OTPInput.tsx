import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../../lib/cn";
import type { OTPInputProps } from "./OTPInput.Type";
import styles from "./OTPInput.module.css";

export default function OTPInput({
  length = 6,
  value = "",
  onChange,
  onComplete,
  disabled = false,
  type = "number",
  className,
  id,
  name,
}: OTPInputProps) {
  const [chars, setChars] = useState<string[]>(() => {
    const arr = Array.from({ length }, (_, i) => value[i] ?? "");
    return arr;
  });

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  // Sync internal state when value prop changes
  useEffect(() => {
    setChars(Array.from({ length }, (_, i) => value[i] ?? ""));
  }, [value, length]);

  const commitChange = (updated: string[]) => {
    const joined = updated.join("");
    onChange?.(joined);
    if (joined.length === length && updated.every((c) => c !== "")) {
      onComplete?.(joined);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const raw = e.target.value;
    // Only take the last character typed
    const char = raw.slice(-1);

    if (type === "number" && char !== "" && !/\d/.test(char)) return;

    const updated = [...chars];
    updated[index] = char;
    setChars(updated);
    commitChange(updated);

    // Advance focus
    if (char !== "" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (chars[index] !== "") {
        // Clear current box
        const updated = [...chars];
        updated[index] = "";
        setChars(updated);
        commitChange(updated);
      } else if (index > 0) {
        // Move to previous and clear it
        const updated = [...chars];
        updated[index - 1] = "";
        setChars(updated);
        commitChange(updated);
        inputRefs.current[index - 1]?.focus();
      }
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (index > 0) inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      if (index < length - 1) inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").trim();
    const filtered = type === "number" ? pasted.replace(/\D/g, "") : pasted;

    const updated = [...chars];
    let lastFilled = index;

    for (let i = 0; i < filtered.length && index + i < length; i++) {
      updated[index + i] = filtered[i];
      lastFilled = index + i;
    }

    setChars(updated);
    commitChange(updated);

    // Focus next empty or last filled
    const nextEmpty = updated.findIndex((c, i) => i > lastFilled && c === "");
    const focusIdx = nextEmpty !== -1 ? nextEmpty : Math.min(lastFilled + 1, length - 1);
    inputRefs.current[focusIdx]?.focus();
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const showSeparator = length === 6;

  return (
    <div
      className={cn(styles.root, className)}
      role="group"
      aria-label="One-time password input"
    >
      {name && <input type="hidden" name={name} value={chars.join("")} />}

      {Array.from({ length }, (_, i) => (
        <React.Fragment key={i}>
          {showSeparator && i === 3 && (
            <span className={styles.separator} aria-hidden="true">—</span>
          )}
          <input
            ref={(el) => { inputRefs.current[i] = el; }}
            id={i === 0 ? id : undefined}
            type={type === "number" ? "tel" : "text"}
            inputMode={type === "number" ? "numeric" : undefined}
            pattern={type === "number" ? "[0-9]*" : undefined}
            maxLength={1}
            value={chars[i]}
            disabled={disabled}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onPaste={(e) => handlePaste(e, i)}
            onFocus={handleFocus}
            className={cn(styles.box, chars[i] !== "" && styles.boxFilled)}
            aria-label={`Digit ${i + 1} of ${length}`}
            autoComplete={i === 0 ? "one-time-code" : "off"}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
