import React from "react";
import { cn } from "../../../lib/cn";
import type { DatePickerProps } from "./DatePicker.Type";
import styles from "./DatePicker.module.css";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function formatDisplay(date: Date): string {
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${m}/${d}/${date.getFullYear()}`;
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
  );
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function buildCalendar(year: number, month: number): Array<Date | null> {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: Array<Date | null> = [];

  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(new Date(year, month, d));
  while (days.length % 7 !== 0) days.push(null);

  return days;
}

const CalendarIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function DatePicker({
  value,
  onChange,
  placeholder = "MM/DD/YYYY",
  disabled = false,
  min,
  max,
  className,
  id,
  name,
}: DatePickerProps) {
  const today = new Date();
  const [open, setOpen] = React.useState(false);
  const [viewYear, setViewYear] = React.useState(value?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = React.useState(value?.getMonth() ?? today.getMonth());
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  // Sync view to value changes
  React.useEffect(() => {
    if (value) {
      setViewYear(value.getFullYear());
      setViewMonth(value.getMonth());
    }
  }, [value]);

  // Close on outside click
  React.useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape
  React.useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1); }
    else setViewMonth((m) => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1); }
    else setViewMonth((m) => m + 1);
  };

  const handleDayClick = (day: Date) => {
    onChange?.(day);
    setOpen(false);
  };

  const isDayDisabled = (day: Date): boolean => {
    const d = startOfDay(day);
    if (min && d < startOfDay(min)) return true;
    if (max && d > startOfDay(max)) return true;
    return false;
  };

  const days = buildCalendar(viewYear, viewMonth);

  // Hidden input for form integration
  const hiddenValue = value
    ? `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, "0")}-${String(value.getDate()).padStart(2, "0")}`
    : "";

  return (
    <div ref={wrapperRef} className={cn(styles.wrapper, className)}>
      {name && <input type="hidden" name={name} value={hiddenValue} />}

      <button
        type="button"
        id={id}
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={cn(styles.trigger, open && styles.triggerOpen)}
      >
        <span className={cn(!value && styles.placeholder)}>
          {value ? formatDisplay(value) : placeholder}
        </span>
        <span className={styles.calendarIcon}>
          <CalendarIcon />
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Choose date"
          aria-modal="false"
          className={styles.calendar}
        >
          {/* Header */}
          <div className={styles.calHeader}>
            <button
              type="button"
              onClick={prevMonth}
              aria-label="Previous month"
              className={styles.calNavBtn}
            >
              <ChevronLeft />
            </button>
            <span className={styles.calMonthYear}>
              {MONTHS[viewMonth]} {viewYear}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              aria-label="Next month"
              className={styles.calNavBtn}
            >
              <ChevronRight />
            </button>
          </div>

          {/* Weekday labels */}
          <div className={styles.weekdays} aria-hidden="true">
            {WEEKDAYS.map((wd) => (
              <span key={wd} className={styles.weekday}>{wd}</span>
            ))}
          </div>

          {/* Day grid */}
          <div className={styles.days}>
            {days.map((day, i) => {
              if (!day) {
                return <span key={i} className={styles.dayEmpty} aria-hidden="true" />;
              }
              const selected = value ? isSameDay(day, value) : false;
              const todayDay = isSameDay(day, today);
              const dis = isDayDisabled(day);
              return (
                <button
                  key={i}
                  type="button"
                  disabled={dis}
                  aria-label={day.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                  aria-pressed={selected}
                  onClick={() => handleDayClick(day)}
                  className={cn(
                    styles.day,
                    todayDay && !selected && styles.dayToday,
                    selected && styles.daySelected,
                  )}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
