import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Popover from "./Popover";

const meta: Meta<typeof Popover> = {
  title: "Overlay/Popover",
  component: Popover,
  argTypes: {
    side: { control: "select", options: ["top", "bottom", "left", "right"] },
    align: { control: "radio", options: ["start", "center", "end"] },
  },
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Popover>;

const Btn = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
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

const PopoverContent = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
    <p style={{ margin: 0, fontWeight: 600, color: "var(--color-text)", fontSize: "var(--text-sm)" }}>Popover title</p>
    <p style={{ margin: 0, color: "var(--color-text-subtle)", fontSize: "var(--text-xs)" }}>
      This is some helpful content shown inside the popover panel.
    </p>
  </div>
);

export const Default: Story = {
  args: { side: "bottom", align: "start" },
  render: (args) => (
    <Popover {...args} content={<PopoverContent />}>
      <Btn>Open popover</Btn>
    </Popover>
  ),
};

export const TopCenter: Story = {
  render: () => (
    <Popover side="top" align="center" content={<PopoverContent />}>
      <Btn>Top center</Btn>
    </Popover>
  ),
};
