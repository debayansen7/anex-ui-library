export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export type GalleryCols = 2 | 3 | 4;
export type GalleryGap = "sm" | "md" | "lg";

export interface ImageGalleryProps {
  images: GalleryImage[];
  /** Number of columns — default 3 */
  cols?: GalleryCols;
  gap?: GalleryGap;
  /** Click image to open fullscreen lightbox — default true */
  lightbox?: boolean;
  /** Aspect ratio for thumbnails — default "square" */
  aspectRatio?: "square" | "video" | "portrait" | "auto";
  className?: string;
}
