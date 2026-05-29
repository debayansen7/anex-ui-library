import { cn } from "../../../lib/cn";
import type { ButtonProps } from "./Button.Type";
import styles from "./Button.module.css";

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(styles.button, styles[variant], styles[size], className);

  if ("href" in props && props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, ...anchorProps } = props as Extract<ButtonProps, { href: string }>;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    variant: _v, size: _s, className: _c, children: _ch,
    loading = false, disabled, type = "button", ref, ...buttonProps
  } = props as Extract<ButtonProps, { href?: never }>;

  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      className={classes}
      {...buttonProps}
    >
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {children}
    </button>
  );
}
