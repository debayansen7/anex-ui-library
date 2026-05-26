import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Skeleton from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  argTypes: {
    variant: { control: "select", options: ["text", "circle", "rect"] },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {
  args: { variant: "text", width: 200 },
};

export const Circle: Story = {
  args: { variant: "circle", width: 48, height: 48 },
};

export const Rect: Story = {
  args: { variant: "rect", width: 300, height: 120 },
};

export const CardLoader: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start", maxWidth: 320 }}>
      <Skeleton variant="circle" width={40} height={40} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="90%" />
        <Skeleton variant="text" width="75%" />
      </div>
    </div>
  ),
};
