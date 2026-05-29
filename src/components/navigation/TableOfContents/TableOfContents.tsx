import { cn } from "../../../lib/cn";
import type { TableOfContentsProps } from "./TableOfContents.Type";
import styles from "./TableOfContents.module.css";

export default function TableOfContents({
  items,
  activeId,
  label = "On this page",
  className,
}: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label={label} className={cn(styles.nav, className)}>
      <p className={styles.label}>{label}</p>
      <ul className={styles.list}>
        {items.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                styles.link,
                level === 3 && styles.linkIndented,
                activeId === id && styles.linkActive,
              )}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
