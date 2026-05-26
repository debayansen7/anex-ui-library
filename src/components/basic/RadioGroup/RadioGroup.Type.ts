import type { ComponentPropsWithRef } from "react";

export interface RadioGroupProps {
  /** Visible group label — rendered as <legend>, required for a11y */
  legend: string;
  /** Shared name attribute that groups the radios — required for a11y */
  name: string;
  children: React.ReactNode;
  direction?: "vertical" | "horizontal";
  className?: string;
}

export interface RadioProps extends Omit<ComponentPropsWithRef<"input">, "type" | "name"> {
  /** Visible label next to the radio — required for a11y */
  label: string;
}
