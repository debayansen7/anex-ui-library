import type { ComponentPropsWithRef, ReactNode } from "react";

export interface CardProps extends ComponentPropsWithRef<"div"> {}

export interface CardSectionProps {
  className?: string;
  children?: ReactNode;
}
