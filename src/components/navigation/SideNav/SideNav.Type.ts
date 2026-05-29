import type { ComponentPropsWithRef, ReactNode } from "react";

export interface SideNavProps {
  className?: string;
  children?: ReactNode;
}

export interface SideNavGroupProps {
  label?: string;
  className?: string;
  children?: ReactNode;
}

type SideNavItemBase = {
  active?: boolean;
  className?: string;
  children?: ReactNode;
};

type SideNavItemAsAnchor = SideNavItemBase & Omit<ComponentPropsWithRef<"a">, "href"> & { href: string };
type SideNavItemAsButton = SideNavItemBase & ComponentPropsWithRef<"button"> & { href?: never };

export type SideNavItemProps = SideNavItemAsAnchor | SideNavItemAsButton;
