import { cn } from "../../../lib/cn";
import type { CardProps, CardSectionProps, CardRounded, CardShadow } from "./Card.Type";
import styles from "./Card.module.css";

const ROUNDED: Record<CardRounded, string> = {
  none: styles.roundedNone,
  sm:   styles.roundedSm,
  md:   styles.roundedMd,
  lg:   styles.roundedLg,
  xl:   styles.roundedXl,
  "2xl": styles.rounded2xl,
  full: styles.roundedFull,
};

const SHADOW: Record<CardShadow, string | undefined> = {
  none: undefined,
  sm:   styles.shadowSm,
  md:   styles.shadowMd,
  lg:   styles.shadowLg,
  xl:   styles.shadowXl,
};

function toCSSValue(v: string | number): string {
  return typeof v === "number" ? `${v}px` : v;
}

export function Card({
  ref,
  className,
  children,
  rounded = "xl",
  padding,
  margin,
  shadow,
  hoverable = false,
  style,
  ...rest
}: CardProps) {
  const inlineStyle = {
    ...(padding !== undefined && { padding: toCSSValue(padding) }),
    ...(margin  !== undefined && { margin:  toCSSValue(margin)  }),
    ...style,
  };

  return (
    <div
      ref={ref}
      className={cn(
        styles.card,
        ROUNDED[rounded],
        shadow ? SHADOW[shadow] : undefined,
        hoverable && styles.hoverable,
        className,
      )}
      style={Object.keys(inlineStyle).length > 0 ? inlineStyle : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: CardSectionProps) {
  return <div className={cn(styles.header, className)}>{children}</div>;
}

export function CardBody({ className, children }: CardSectionProps) {
  return <div className={cn(styles.body, className)}>{children}</div>;
}

export function CardFooter({ className, children }: CardSectionProps) {
  return <div className={cn(styles.footer, className)}>{children}</div>;
}
