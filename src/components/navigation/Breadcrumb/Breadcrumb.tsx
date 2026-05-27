import { cn } from "../../../lib/cn";
import type { BreadcrumbProps } from "./Breadcrumb.Type";
import styles from "./Breadcrumb.module.css";

export default function Breadcrumb({
  ref,
  items,
  separator = "/",
  className,
  ...rest
}: BreadcrumbProps) {
  return (
    <nav ref={ref} aria-label="Breadcrumb" className={cn(styles.nav, className)} {...rest}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className={styles.item}>
              {index > 0 && (
                <span className={styles.separator} aria-hidden="true">
                  {separator}
                </span>
              )}
              {isLast ? (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              ) : item.href ? (
                <a
                  href={item.href}
                  onClick={item.onClick}
                  className={styles.link}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  role="link"
                  tabIndex={item.onClick ? 0 : undefined}
                  onClick={item.onClick}
                  onKeyDown={
                    item.onClick
                      ? (e) => e.key === "Enter" && item.onClick?.(e as never)
                      : undefined
                  }
                  className={cn(styles.link, item.onClick && styles.linkButton)}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
