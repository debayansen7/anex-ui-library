import type { ComponentPropsWithRef } from "react";

export interface SearchInputProps extends Omit<ComponentPropsWithRef<"input">, "type"> {
  /** Called when the clear × button is clicked */
  onClear?: () => void;
}
