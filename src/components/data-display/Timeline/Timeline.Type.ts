import type { ReactNode } from "react";

export type TimelineItemStatus = "completed" | "current" | "upcoming";

export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  /** Display label for the timestamp */
  time?: string;
  /** Machine-readable date for the <time> element */
  dateTime?: string;
  status?: TimelineItemStatus;
  /** Custom icon inside the dot */
  icon?: ReactNode;
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}
