import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import NumberInput from "./NumberInput";

const meta: Meta<typeof NumberInput> = {
  title: "Form/NumberInput",
  component: NumberInput,
  argTypes: {
    disabled: { control: "boolean" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState(5);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <NumberInput value={value} onChange={setValue} min={0} max={20} />
        <p style={{ margin: 0, fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>
          Value: <strong style={{ color: "var(--color-text)" }}>{value}</strong>
        </p>
      </div>
    );
  },
};

export const WithStep: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    return <NumberInput value={value} onChange={setValue} min={0} max={100} step={10} />;
  },
};

export const Disabled: Story = {
  args: { defaultValue: 3, disabled: true },
};
