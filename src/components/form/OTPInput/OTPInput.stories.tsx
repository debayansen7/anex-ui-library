import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import OTPInput from "./OTPInput";

const meta: Meta<typeof OTPInput> = {
  title: "Form/OTPInput",
  component: OTPInput,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    length: { control: "number" },
    type: { control: "radio", options: ["number", "text"] },
  },
};

export default meta;
type Story = StoryObj<typeof OTPInput>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <OTPInput
          {...args}
          length={6}
          type="number"
          value={value}
          onChange={setValue}
          onComplete={(v) => alert(`Complete: ${v}`)}
        />
        {value && (
          <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", margin: 0 }}>
            Value: <strong style={{ color: "var(--color-text)", fontFamily: "var(--font-mono)" }}>{value}</strong>
          </p>
        )}
      </div>
    );
  },
};

export const TextMode: Story = {
  name: "Text Mode (length=4)",
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <OTPInput
          {...args}
          length={4}
          type="text"
          value={value}
          onChange={setValue}
        />
        {value && (
          <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", margin: 0 }}>
            Value: <strong style={{ color: "var(--color-text)", fontFamily: "var(--font-mono)" }}>{value}</strong>
          </p>
        )}
      </div>
    );
  },
};

export const Disabled: Story = {
  render: (args) => (
    <OTPInput
      {...args}
      length={6}
      type="number"
      value="123456"
      disabled
    />
  ),
};
