import type { ComponentPropsWithRef } from "react";

export type TagVariant = "default" | "primary" | "success" | "warning" | "error" | "info";

export interface TagProps extends ComponentPropsWithRef<"span"> {
  variant?: TagVariant;
  /** Renders a dismiss × button */
  onRemove?: () => void;
  /** Accessible label for the remove button */
  removeLabel?: string;
}
