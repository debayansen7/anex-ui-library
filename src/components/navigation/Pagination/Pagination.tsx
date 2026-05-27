import { cn } from "../../../lib/cn";
import type { PaginationProps } from "./Pagination.Type";
import styles from "./Pagination.module.css";

function getPageRange(current: number, total: number, siblings: number): (number | "...")[] {
  if (total <= 1) return [1];

  const totalShown = 5 + siblings * 2;
  if (total <= totalShown) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(current - siblings, 2);
  const rightSibling = Math.min(current + siblings, total - 1);
  const showLeft = leftSibling > 2;
  const showRight = rightSibling < total - 1;

  const pages: (number | "...")[] = [1];
  if (showLeft) pages.push("...");
  for (let i = leftSibling; i <= rightSibling; i++) pages.push(i);
  if (showRight) pages.push("...");
  pages.push(total);
  return pages;
}

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Pagination({
  ref,
  total,
  page,
  onChange,
  siblings = 1,
  className,
  ...rest
}: PaginationProps) {
  const pages = getPageRange(page, total, siblings);

  return (
    <nav
      ref={ref}
      aria-label="Pagination"
      className={cn(styles.nav, className)}
      {...rest}
    >
      <button
        className={cn(styles.item, styles.arrow)}
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        <ChevronLeft />
      </button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} className={styles.ellipsis} aria-hidden="true">
            …
          </span>
        ) : (
          <button
            key={p}
            className={cn(styles.item, p === page && styles.active)}
            onClick={() => onChange(p as number)}
            aria-label={`Page ${p}`}
            aria-current={p === page ? "page" : undefined}
          >
            {p}
          </button>
        )
      )}

      <button
        className={cn(styles.item, styles.arrow)}
        onClick={() => onChange(page + 1)}
        disabled={page >= total}
        aria-label="Next page"
      >
        <ChevronRight />
      </button>
    </nav>
  );
}
