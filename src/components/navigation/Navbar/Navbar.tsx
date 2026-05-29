import { cn } from "../../../lib/cn";
import type { NavbarProps, NavbarBrandProps, NavbarNavProps, NavbarActionsProps } from "./Navbar.Type";
import styles from "./Navbar.module.css";

export function Navbar({ sticky = true, className, children, ...rest }: NavbarProps) {
  return (
    <header
      className={cn(styles.navbar, sticky && styles.sticky, className)}
      {...rest}
    >
      <div className={styles.inner}>
        {children}
      </div>
    </header>
  );
}

export function NavbarBrand({ href, className, children }: NavbarBrandProps) {
  const classes = cn(styles.brand, className);
  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }
  return <div className={classes}>{children}</div>;
}

export function NavbarNav({ className, children }: NavbarNavProps) {
  return (
    <nav className={cn(styles.nav, className)}>
      {children}
    </nav>
  );
}

export function NavbarActions({ className, children }: NavbarActionsProps) {
  return (
    <div className={cn(styles.actions, className)}>
      {children}
    </div>
  );
}
