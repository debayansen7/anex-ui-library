import { cn } from "../../../lib/cn";
import type { StepperProps } from "./Stepper.Type";
import styles from "./Stepper.module.css";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M2.5 7l3.5 3.5 5.5-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type StepStatus = "completed" | "current" | "upcoming";

export default function Stepper({
  steps,
  activeStep = 0,
  orientation = "horizontal",
  className,
}: StepperProps) {
  const getStatus = (index: number): StepStatus => {
    if (index < activeStep) return "completed";
    if (index === activeStep) return "current";
    return "upcoming";
  };

  return (
    <ol
      aria-label="Progress"
      className={cn(styles.stepper, styles[orientation], className)}
    >
      {steps.map((step, index) => {
        const status = getStatus(index);
        const isLast = index === steps.length - 1;

        return (
          <li
            key={step.id}
            className={cn(styles.step, styles[status])}
            aria-current={status === "current" ? "step" : undefined}
          >
            <div className={styles.track}>
              <div className={styles.indicator} aria-hidden="true">
                {status === "completed" ? <CheckIcon /> : <span>{index + 1}</span>}
              </div>
              {!isLast && (
                <div
                  className={cn(
                    styles.connector,
                    status === "completed" && styles.connectorFilled
                  )}
                  aria-hidden="true"
                />
              )}
            </div>
            <div className={styles.content}>
              <span className={styles.label}>{step.label}</span>
              {step.description && (
                <span className={styles.description}>{step.description}</span>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
