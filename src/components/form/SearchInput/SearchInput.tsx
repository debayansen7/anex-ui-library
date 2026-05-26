import React from "react";
import { cn } from "../../../lib/cn";
import type { SearchInputProps } from "./SearchInput.Type";
import styles from "./SearchInput.module.css";

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function SearchInput({
  ref,
  value,
  defaultValue,
  onChange,
  onClear,
  placeholder = "Search…",
  className,
  ...rest
}: SearchInputProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
  const displayValue = isControlled ? (value as string) : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    if (!isControlled) setInternalValue("");
    onClear?.();
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <span className={styles.searchIcon}>
        <SearchIcon />
      </span>
      <input
        ref={ref}
        type="search"
        value={displayValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.input}
        {...rest}
      />
      {displayValue && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className={styles.clearBtn}
        >
          <XIcon />
        </button>
      )}
    </div>
  );
}
