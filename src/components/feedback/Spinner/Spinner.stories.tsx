import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Spinner from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Feedback/Spinner",
  component: Spinner,
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: { size: "md", label: "Loading…" },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-6)", alignItems: "center" }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};
