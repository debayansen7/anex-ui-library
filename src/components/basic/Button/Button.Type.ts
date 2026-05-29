import type { ComponentPropsWithRef, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "outline";
export type ButtonSize = "xs" | "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: ReactNode;
};

type AsButton = ButtonBaseProps & ComponentPropsWithRef<"button"> & {
  href?: never;
  /** Shows a spinner and sets aria-busy; also disables interaction */
  loading?: boolean;
};

type AsAnchor = ButtonBaseProps & Omit<ComponentPropsWithRef<"a">, "href"> & {
  href: string;
  loading?: never;
};

export type ButtonProps = AsButton | AsAnchor;
