import React, { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "../../../lib/cn";
import type { ComboboxProps, ComboboxOption } from "./Combobox.Type";
import styles from "./Combobox.module.css";

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 2l8 8M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Combobox({
  options,
  value,
  onChange,
  placeholder = "Select an option…",
  disabled = false,
  clearable = false,
  emptyText = "No options found",
  className,
  id,
  name,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedOption = options.find((o) => o.value === value);

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    setActiveIdx(0);
  }, [inputValue]);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
        setInputValue("");
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, []);

  const handleInputClick = () => {
    if (disabled) return;
    setOpen(true);
    setInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setOpen(true);
  };

  const handleSelect = useCallback(
    (option: ComboboxOption) => {
      onChange?.(option.value);
      setOpen(false);
      setInputValue("");
    },
    [onChange]
  );

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.("");
    setInputValue("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        setOpen(true);
        setInputValue("");
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const active = filtered[activeIdx];
      if (active && !active.disabled) {
        handleSelect(active);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      setInputValue("");
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (!open || !listRef.current) return;
    const activeEl = listRef.current.querySelectorAll<HTMLButtonElement>("button[role='option']")[activeIdx];
    activeEl?.scrollIntoView({ block: "nearest" });
  }, [activeIdx, open]);

  const displayValue = open ? inputValue : (selectedOption?.label ?? "");

  const showClearBtn = clearable && !!value && !open;

  return (
    <div ref={wrapperRef} className={cn(styles.wrapper, className)}>
      {name && <input type="hidden" name={name} value={value ?? ""} />}

      <div className={styles.inputRow}>
        <input
          ref={inputRef}
          id={id}
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-autocomplete="list"
          aria-haspopup="listbox"
          value={displayValue}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={!open}
          onClick={handleInputClick}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={cn(styles.input, open && styles.inputOpen)}
          autoComplete="off"
        />
        <button
          type="button"
          tabIndex={-1}
          className={styles.iconBtn}
          aria-hidden="true"
          onClick={showClearBtn ? handleClear : handleInputClick}
          disabled={disabled}
        >
          {showClearBtn ? <XIcon /> : <ChevronDown />}
        </button>
      </div>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          className={styles.dropdown}
          aria-label="Options"
        >
          {filtered.length === 0 ? (
            <li className={styles.empty}>{emptyText}</li>
          ) : (
            filtered.map((option, idx) => (
              <li key={option.value} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={option.value === value}
                  disabled={option.disabled}
                  className={cn(
                    styles.option,
                    idx === activeIdx && styles.optionActive,
                    option.value === value && styles.optionSelected
                  )}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => !option.disabled && handleSelect(option)}
                >
                  {option.label}
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
