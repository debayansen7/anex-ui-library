import React from "react";
import { cn } from "../../../lib/cn";
import type { ImageGalleryProps, GalleryImage } from "./ImageGallery.Type";
import styles from "./ImageGallery.module.css";

const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export default function ImageGallery({
  images,
  cols = 3,
  gap = "md",
  lightbox = true,
  aspectRatio = "square",
  className,
}: ImageGalleryProps) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const [activeIdx, setActiveIdx] = React.useState(0);

  const openLightbox = (idx: number) => {
    setActiveIdx(idx);
    dialogRef.current?.showModal();
  };

  const closeLightbox = () => dialogRef.current?.close();

  const prev = () => setActiveIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIdx((i) => (i + 1) % images.length);

  const handleDialogKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft")  prev();
    if (e.key === "ArrowRight") next();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) closeLightbox();
  };

  const active: GalleryImage | undefined = images[activeIdx];

  return (
    <>
      <div
        className={cn(
          styles.grid,
          styles[`cols${cols}`],
          styles[`gap_${gap}`],
          className,
        )}
        role="list"
      >
        {images.map((img, idx) => (
          <div key={idx} className={cn(styles.item, styles[aspectRatio])} role="listitem">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className={cn(styles.thumb, lightbox && styles.thumbClickable)}
              onClick={lightbox ? () => openLightbox(idx) : undefined}
            />
            {img.caption && <p className={styles.thumbCaption}>{img.caption}</p>}
          </div>
        ))}
      </div>

      {lightbox && (
        <dialog
          ref={dialogRef}
          className={styles.dialog}
          onKeyDown={handleDialogKeyDown}
          onClick={handleBackdropClick}
          aria-label={active?.alt ?? "Image viewer"}
        >
          <div className={styles.lightbox} onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button type="button" onClick={closeLightbox} aria-label="Close" className={styles.closeBtn}>
              <XIcon />
            </button>

            {/* Counter */}
            <span className={styles.counter}>{activeIdx + 1} / {images.length}</span>

            {/* Image */}
            <div className={styles.imgWrap}>
              {active && (
                <img
                  src={active.src}
                  alt={active.alt}
                  className={styles.fullImg}
                />
              )}
            </div>

            {/* Caption */}
            {active?.caption && (
              <p className={styles.caption}>{active.caption}</p>
            )}

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <button type="button" onClick={prev} aria-label="Previous image" className={cn(styles.navBtn, styles.navPrev)}>
                  <ChevronLeft />
                </button>
                <button type="button" onClick={next} aria-label="Next image" className={cn(styles.navBtn, styles.navNext)}>
                  <ChevronRight />
                </button>
              </>
            )}
          </div>
        </dialog>
      )}
    </>
  );
}
