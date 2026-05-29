import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Rating from "./Rating";

const meta: Meta<typeof Rating> = {
  title: "Data Display/Rating",
  component: Rating,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    max: { control: "number" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    allowHalf: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(3);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Rating {...args} value={value} onChange={setValue} />
        <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", margin: 0 }}>
          Rating: <strong style={{ color: "var(--color-text)" }}>{value}</strong>
        </p>
      </div>
    );
  },
};

export const ReadOnly: Story = {
  name: "Read Only (3.5 stars)",
  render: (args) => (
    <Rating {...args} value={3.5} readOnly allowHalf />
  ),
};

export const AllowHalf: Story = {
  render: (args) => {
    const [value, setValue] = useState(2.5);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Rating {...args} value={value} onChange={setValue} allowHalf />
        <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", margin: 0 }}>
          Rating: <strong style={{ color: "var(--color-text)" }}>{value}</strong>
        </p>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)", width: "24px" }}>sm</span>
        <Rating {...args} value={4} readOnly size="sm" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)", width: "24px" }}>md</span>
        <Rating {...args} value={4} readOnly size="md" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)", width: "24px" }}>lg</span>
        <Rating {...args} value={4} readOnly size="lg" />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Rating {...args} value={3} disabled />
  ),
};
