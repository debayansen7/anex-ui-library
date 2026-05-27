import { cn } from "../../../lib/cn";
import type { TimelineProps, TimelineItemStatus } from "./Timeline.Type";
import styles from "./Timeline.module.css";

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const statusLabel: Record<TimelineItemStatus, string> = {
  completed: "Completed",
  current: "In progress",
  upcoming: "Upcoming",
};

export default function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn(styles.timeline, className)}>
      {items.map((item, index) => {
        const status = item.status ?? "upcoming";
        const isLast = index === items.length - 1;

        return (
          <li
            key={item.id}
            className={cn(styles.item, styles[status])}
            aria-current={status === "current" ? "step" : undefined}
          >
            {/* Left column: dot + connector */}
            <div className={styles.indicator}>
              <div
                className={styles.dot}
                aria-label={statusLabel[status]}
              >
                {item.icon ?? (status === "completed" ? <CheckIcon /> : null)}
              </div>
              {!isLast && <div className={styles.connector} aria-hidden="true" />}
            </div>

            {/* Right column: content */}
            <div className={cn(styles.content, !isLast && styles.contentSpaced)}>
              {item.time && (
                <time
                  className={styles.time}
                  dateTime={item.dateTime ?? item.time}
                >
                  {item.time}
                </time>
              )}
              <p className={styles.title}>{item.title}</p>
              {item.description && (
                <p className={styles.description}>{item.description}</p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
