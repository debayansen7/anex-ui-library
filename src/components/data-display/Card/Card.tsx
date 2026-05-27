import { cn } from "../../../lib/cn";
import type { CardProps, CardSectionProps } from "./Card.Type";
import styles from "./Card.module.css";

export function Card({ ref, className, children, ...rest }: CardProps) {
  return (
    <div ref={ref} className={cn(styles.card, className)} {...rest}>
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
