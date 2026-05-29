import React, { useState } from "react";
import { cn } from "../../../lib/cn";
import type { RatingProps, RatingSize } from "./Rating.Type";
import styles from "./Rating.module.css";

// Standard 5-pointed star path (24x24 viewBox)
const STAR_PATH = "M12 2l2.9 6.3 6.8 1-4.9 4.8 1.2 6.9L12 17.8l-6 3.2 1.2-6.9L2.3 9.3l6.8-1z";

type StarState = "empty" | "half" | "full";

function Star({
  state,
  size,
  readOnly,
  onClick,
  onMouseEnter,
  onMouseMove,
  ariaLabel,
}: {
  state: StarState;
  size: RatingSize;
  readOnly: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseMove?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel: string;
}) {
  const sizeMap: Record<RatingSize, number> = { sm: 16, md: 20, lg: 28 };
  const svgSize = sizeMap[size];

  return (
    <button
      type="button"
      className={cn(
        styles.star,
        state === "full" && styles.starFilled,
        state === "half" && styles.starHalf,
        readOnly && styles.starReadOnly
      )}
      style={{ width: svgSize, height: svgSize }}
      onClick={readOnly ? undefined : onClick}
      onMouseEnter={readOnly ? undefined : onMouseEnter}
      onMouseMove={readOnly ? undefined : onMouseMove}
      tabIndex={readOnly ? -1 : 0}
      aria-label={ariaLabel}
    >
      {state === "half" ? (
        <span style={{ position: "relative", display: "inline-flex", width: svgSize, height: svgSize }}>
          {/* Left half — filled */}
          <svg
            width={svgSize}
            height={svgSize}
            viewBox="0 0 24 24"
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              clipPath: "inset(0 50% 0 0)",
              fill: "currentColor",
            }}
          >
            <path d={STAR_PATH} />
          </svg>
          {/* Right half — outline */}
          <svg
            width={svgSize}
            height={svgSize}
            viewBox="0 0 24 24"
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              clipPath: "inset(0 0 0 50%)",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: 1.5,
            }}
          >
            <path d={STAR_PATH} />
          </svg>
          {/* Full outline for shape reference */}
          <svg
            width={svgSize}
            height={svgSize}
            viewBox="0 0 24 24"
            aria-hidden="true"
            style={{ visibility: "hidden" }}
          >
            <path d={STAR_PATH} />
          </svg>
        </span>
      ) : (
        <svg
          width={svgSize}
          height={svgSize}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill={state === "full" ? "currentColor" : "none"}
          stroke={state === "empty" ? "currentColor" : "none"}
          strokeWidth={state === "empty" ? 1.5 : undefined}
        >
          <path d={STAR_PATH} />
        </svg>
      )}
    </button>
  );
}

export default function Rating({
  value: controlledValue,
  defaultValue = 0,
  onChange,
  max = 5,
  allowHalf = false,
  readOnly = false,
  disabled = false,
  size = "md",
  className,
  label = "Rating",
}: RatingProps) {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hovered, setHovered] = useState<number | null>(null);

  const committed = isControlled ? controlledValue! : internalValue;
  const display = hovered !== null ? hovered : committed;

  const getStarState = (starIndex: number): StarState => {
    // starIndex is 1-based
    if (display >= starIndex) return "full";
    if (allowHalf && display >= starIndex - 0.5) return "half";
    return "empty";
  };

  const handleClick = (val: number) => {
    if (disabled || readOnly) return;
    if (!isControlled) setInternalValue(val);
    onChange?.(val);
  };

  const handleMouseEnter = (val: number) => {
    if (disabled || readOnly) return;
    setHovered(val);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>, starIndex: number) => {
    if (!allowHalf || disabled || readOnly) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const half = x < rect.width / 2;
    setHovered(half ? starIndex - 0.5 : starIndex);
  };

  const handleMouseLeave = () => {
    if (disabled || readOnly) return;
    setHovered(null);
  };

  return (
    <div
      className={cn(
        styles.root,
        styles[size],
        disabled && styles.rootDisabled,
        className
      )}
      role="group"
      aria-label={label}
      onMouseLeave={handleMouseLeave}
    >
      {Array.from({ length: max }, (_, i) => {
        const starIndex = i + 1;
        const state = getStarState(starIndex);
        return (
          <Star
            key={starIndex}
            state={state}
            size={size}
            readOnly={readOnly || disabled}
            onClick={() => handleClick(
              allowHalf && hovered === starIndex - 0.5 ? starIndex - 0.5 : starIndex
            )}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseMove={(e) => handleMouseMove(e, starIndex)}
            ariaLabel={`${starIndex} out of ${max} stars`}
          />
        );
      })}
    </div>
  );
}
