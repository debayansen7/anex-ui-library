import type { ComponentPropsWithRef } from "react";

export interface SliderProps extends Omit<ComponentPropsWithRef<"input">, "type"> {
  min?: number;
  max?: number;
  step?: number;
  /** Displays the current numeric value next to the track */
  showValue?: boolean;
}
