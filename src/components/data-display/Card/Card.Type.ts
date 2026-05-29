import type { ComponentPropsWithRef, ReactNode } from "react";

export type CardRounded = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
export type CardShadow = "none" | "sm" | "md" | "lg" | "xl";

export interface CardProps extends ComponentPropsWithRef<"div"> {
  /** Border-radius preset — defaults to "xl" */
  rounded?: CardRounded;
  /**
   * Inline padding override. Accepts any CSS value ("2rem", "16px") or a pixel number.
   * For standalone cards (no sub-components) a default of 2rem is recommended.
   * When using CardHeader / CardBody / CardFooter, leave this unset.
   */
  padding?: string | number;
  /** Inline margin override — e.g. "2rem" or 32 */
  margin?: string | number;
  /** Box-shadow preset */
  shadow?: CardShadow;
  /** Lifts the card on hover with a smooth translateY + shadow animation */
  hoverable?: boolean;
}

export interface CardSectionProps {
  className?: string;
  children?: ReactNode;
}
