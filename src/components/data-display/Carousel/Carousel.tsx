import React from "react";
import { cn } from "../../../lib/cn";
import type { CarouselProps } from "./Carousel.Type";
import styles from "./Carousel.module.css";

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Carousel({
  children,
  autoPlay = false,
  interval = 4000,
  loop = true,
  showArrows = true,
  showDots = true,
  label = "Carousel",
  className,
}: CarouselProps) {
  const slides = React.Children.toArray(children);
  const total = slides.length;
  const [current, setCurrent] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const prev = React.useCallback(() => {
    setCurrent((i) => (loop ? (i - 1 + total) % total : Math.max(0, i - 1)));
  }, [loop, total]);

  const next = React.useCallback(() => {
    setCurrent((i) => (loop ? (i + 1) % total : Math.min(total - 1, i + 1)));
  }, [loop, total]);

  React.useEffect(() => {
    if (!autoPlay || paused || total <= 1) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, paused, interval, total, next]);

  // Keyboard navigation on the container
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
  };

  return (
    <section
      className={cn(styles.carousel, className)}
      aria-label={label}
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={handleKeyDown}
    >
      {/* Slide track */}
      <div
        className={styles.track}
        aria-live={autoPlay ? "off" : "polite"}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${total}`}
            aria-hidden={i !== current}
            className={styles.slide}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Arrows */}
      {showArrows && total > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            disabled={!loop && current === 0}
            className={cn(styles.arrow, styles.arrowPrev)}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            disabled={!loop && current === total - 1}
            className={cn(styles.arrow, styles.arrowNext)}
          >
            <ChevronRight />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && total > 1 && (
        <div className={styles.dots} role="group" aria-label="Slide navigation">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
              className={cn(styles.dot, i === current && styles.dotActive)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
