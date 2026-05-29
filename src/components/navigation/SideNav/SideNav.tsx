import { cn } from "../../../lib/cn";
import type { SideNavProps, SideNavGroupProps, SideNavItemProps } from "./SideNav.Type";
import styles from "./SideNav.module.css";

export function SideNav({ className, children }: SideNavProps) {
  return (
    <nav className={cn(styles.nav, className)}>
      {children}
    </nav>
  );
}

export function SideNavGroup({ label, className, children }: SideNavGroupProps) {
  return (
    <div className={cn(styles.group, className)}>
      {label && <p className={styles.groupLabel}>{label}</p>}
      <ul className={styles.groupList}>
        {children}
      </ul>
    </div>
  );
}

export function SideNavItem(props: SideNavItemProps) {
  const { active, className, children } = props;
  const classes = cn(styles.item, active && styles.itemActive, className);

  if ("href" in props) {
    const { active: _a, className: _c, children: _ch, ...anchorProps } = props as Extract<SideNavItemProps, { href: string }>;
    return (
      <li>
        <a className={classes} {...anchorProps}>
          {children}
        </a>
      </li>
    );
  }

  const { active: _a, className: _c, children: _ch, ...buttonProps } = props as Extract<SideNavItemProps, { href?: never }>;
  return (
    <li>
      <button type="button" className={classes} {...buttonProps}>
        {children}
      </button>
    </li>
  );
}
