import type { ComponentPropsWithRef, ReactNode } from "react";

export interface NavbarProps extends ComponentPropsWithRef<"header"> {
  /** Sticks to the top of the viewport — default true */
  sticky?: boolean;
}

export interface NavbarBrandProps {
  href?: string;
  className?: string;
  children?: ReactNode;
}

export interface NavbarNavProps {
  className?: string;
  children?: ReactNode;
}

export interface NavbarActionsProps {
  className?: string;
  children?: ReactNode;
}
