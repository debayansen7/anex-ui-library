import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Tooltip from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Overlay/Tooltip",
  component: Tooltip,
  argTypes: {
    side: { control: "radio", options: ["top", "bottom", "left", "right"] },
    content: { control: "text" },
  },
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const Btn = ({ children }: { children: React.ReactNode }) => (
  <button
    style={{
      padding: "var(--space-2) var(--space-4)",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--color-border)",
      background: "var(--color-surface-raised)",
      color: "var(--color-text)",
      cursor: "pointer",
      fontSize: "var(--text-sm)",
    }}
  >
    {children}
  </button>
);

export const Top: Story = {
  args: { content: "Tooltip on top", side: "top" },
  render: (args) => <Tooltip {...args}><Btn>Hover me</Btn></Tooltip>,
};

export const Bottom: Story = {
  args: { content: "Tooltip on bottom", side: "bottom" },
  render: (args) => <Tooltip {...args}><Btn>Hover me</Btn></Tooltip>,
};

export const Left: Story = {
  args: { content: "Tooltip on left", side: "left" },
  render: (args) => <Tooltip {...args}><Btn>Hover me</Btn></Tooltip>,
};

export const Right: Story = {
  args: { content: "Tooltip on right", side: "right" },
  render: (args) => <Tooltip {...args}><Btn>Hover me</Btn></Tooltip>,
};
