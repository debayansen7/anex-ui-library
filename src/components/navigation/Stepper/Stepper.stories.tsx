import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Stepper from "./Stepper";

const meta: Meta<typeof Stepper> = {
  title: "Navigation/Stepper",
  component: Stepper,
  argTypes: {
    activeStep: { control: { type: "number", min: 0 } },
    orientation: { control: "radio", options: ["horizontal", "vertical"] },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = [
  { id: "account", label: "Account", description: "Create your account" },
  { id: "profile", label: "Profile", description: "Add your details" },
  { id: "confirm", label: "Confirm", description: "Review and submit" },
];

export const Horizontal: Story = {
  args: { steps, activeStep: 1, orientation: "horizontal" },
};

export const Vertical: Story = {
  args: { steps, activeStep: 1, orientation: "vertical" },
  render: (args) => (
    <div style={{ width: 280 }}>
      <Stepper {...args} />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [active, setActive] = React.useState(0);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        <Stepper steps={steps} activeStep={active} />
        <div style={{ display: "flex", gap: "var(--space-2)" }}>
          <button
            onClick={() => setActive((a) => Math.max(0, a - 1))}
            disabled={active === 0}
            style={{
              padding: "var(--space-2) var(--space-4)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-border)",
              background: "var(--color-surface-raised)",
              color: "var(--color-text)",
              cursor: active === 0 ? "not-allowed" : "pointer",
              opacity: active === 0 ? 0.4 : 1,
            }}
          >
            Back
          </button>
          <button
            onClick={() => setActive((a) => Math.min(steps.length - 1, a + 1))}
            disabled={active === steps.length - 1}
            style={{
              padding: "var(--space-2) var(--space-4)",
              borderRadius: "var(--radius-md)",
              border: "none",
              background: "var(--color-primary)",
              color: "var(--color-primary-foreground)",
              cursor: active === steps.length - 1 ? "not-allowed" : "pointer",
              opacity: active === steps.length - 1 ? 0.4 : 1,
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  },
};

export const AllCompleted: Story = {
  args: { steps, activeStep: 3, orientation: "horizontal" },
};
