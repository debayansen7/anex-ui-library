export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface TableOfContentsProps {
  items: TocItem[];
  activeId?: string;
  label?: string;
  className?: string;
}
