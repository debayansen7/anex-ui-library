import type { ComponentPropsWithRef } from "react";

export interface NumberInputProps
  extends Omit<ComponentPropsWithRef<"input">, "type" | "onChange" | "value" | "defaultValue"> {
  value?: number;
  defaultValue?: number;
  /** Receives the parsed numeric value directly */
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}
