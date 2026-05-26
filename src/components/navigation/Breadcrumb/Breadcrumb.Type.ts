import type { ComponentPropsWithRef } from "react";

export interface BreadcrumbItem {
  label: string;
  /** Provide href for anchor links or onClick for SPA navigation */
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement>) => void;
}

export interface BreadcrumbProps extends ComponentPropsWithRef<"nav"> {
  items: BreadcrumbItem[];
  /** Character or node rendered between items */
  separator?: React.ReactNode;
}
