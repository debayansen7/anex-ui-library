export interface Step {
  id: string;
  label: string;
  description?: string;
}

export type StepperOrientation = "horizontal" | "vertical";

export interface StepperProps {
  steps: Step[];
  /** 0-based index of the active step */
  activeStep?: number;
  orientation?: StepperOrientation;
  className?: string;
}
