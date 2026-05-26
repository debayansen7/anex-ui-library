import type { ComponentPropsWithRef } from "react";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarStatus = "online" | "offline" | "away" | "busy";

export interface AvatarProps extends Omit<ComponentPropsWithRef<"span">, "children"> {
  src?: string;
  alt?: string;
  /** Shown when src is absent or fails to load */
  initials?: string;
  size?: AvatarSize;
  status?: AvatarStatus;
}
