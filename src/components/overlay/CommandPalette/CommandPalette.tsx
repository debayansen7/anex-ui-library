import React from "react";
import { cn } from "../../../lib/cn";
import type { CommandPaletteProps, CommandItem } from "./CommandPalette.Type";
import styles from "./CommandPalette.module.css";

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const SpinnerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={styles.spinnerIcon}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
    <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function CommandPalette({
  isOpen,
  onClose,
  placeholder = "Search...",
  items = [],
  loading = false,
  onSearch,
  emptyText = "No results found.",
  className,
}: CommandPaletteProps) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [query, setQuery] = React.useState("");
  const [activeIdx, setActiveIdx] = React.useState(0);

  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
      setTimeout(() => inputRef.current?.focus(), 30);
      setQuery("");
      setActiveIdx(0);
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const handleSearch = (value: string) => {
    setQuery(value);
    setActiveIdx(0);
    onSearch?.(value);
  };

  const handleSelect = (item: CommandItem) => {
    item.onSelect?.();
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, items.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && items[activeIdx]) {
      handleSelect(items[activeIdx]);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Group items
  const grouped = React.useMemo(() => {
    const map = new Map<string, CommandItem[]>();
    for (const item of items) {
      const group = item.group ?? "";
      if (!map.has(group)) map.set(group, []);
      map.get(group)!.push(item);
    }
    return map;
  }, [items]);

  // Flat index for keyboard navigation
  const flatItems = items;

  return (
    <dialog
      ref={dialogRef}
      className={cn(styles.dialog, className)}
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        {/* Input row */}
        <div className={styles.inputRow}>
          <span className={styles.searchIcon}>{loading ? <SpinnerIcon /> : <SearchIcon />}</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            autoComplete="off"
            spellCheck={false}
            className={styles.input}
            aria-label={placeholder}
            role="combobox"
            aria-expanded={items.length > 0}
            aria-autocomplete="list"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className={styles.closeBtn}
          >
            <XIcon />
          </button>
        </div>

        {/* Results */}
        <div className={styles.results} role="listbox">
          {!loading && query && items.length === 0 && (
            <p className={styles.empty}>{emptyText}</p>
          )}
          {!loading && !query && items.length === 0 && (
            <p className={styles.empty}>Type to search…</p>
          )}
          {!loading && items.length > 0 && (
            <>
              {Array.from(grouped.entries()).map(([group, groupItems]) => (
                <div key={group}>
                  {group && <p className={styles.groupLabel}>{group}</p>}
                  {groupItems.map((item) => {
                    const idx = flatItems.indexOf(item);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        role="option"
                        aria-selected={activeIdx === idx}
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setActiveIdx(idx)}
                        className={cn(styles.item, activeIdx === idx && styles.itemActive)}
                      >
                        {item.icon && <span className={styles.itemIcon}>{item.icon}</span>}
                        <span className={styles.itemContent}>
                          <span className={styles.itemLabel}>{item.label}</span>
                          {item.description && (
                            <span className={styles.itemDescription}>{item.description}</span>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <span><kbd className={styles.kbd}>↑↓</kbd> navigate</span>
          <span><kbd className={styles.kbd}>↵</kbd> select</span>
          <span><kbd className={styles.kbd}>Esc</kbd> close</span>
        </div>
      </div>
    </dialog>
  );
}
