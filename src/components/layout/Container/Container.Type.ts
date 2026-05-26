import type { ComponentPropsWithRef } from "react";

export type ContainerMaxWidth = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

export interface ContainerProps extends ComponentPropsWithRef<"div"> {
  /** Max-width breakpoint of the container */
  maxWidth?: ContainerMaxWidth;
}
