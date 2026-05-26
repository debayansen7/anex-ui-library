import type { ComponentPropsWithRef } from "react";

export interface SwitchProps extends Omit<ComponentPropsWithRef<"input">, "type"> {
  /** Visible label rendered next to the toggle */
  label?: string;
}
