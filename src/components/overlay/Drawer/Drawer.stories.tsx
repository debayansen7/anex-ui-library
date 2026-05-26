import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Drawer from "./Drawer";

const meta: Meta<typeof Drawer> = {
  title: "Overlay/Drawer",
  component: Drawer,
  argTypes: {
    side: { control: "radio", options: ["right", "left", "bottom"] },
    size: { control: "radio", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

function DrawerDemo({ side, size }: { side?: "right" | "left" | "bottom"; size?: "sm" | "md" | "lg" }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "var(--space-2) var(--space-4)",
          borderRadius: "var(--radius-md)",
          border: "none",
          background: "var(--color-primary)",
          color: "var(--color-primary-foreground)",
          cursor: "pointer",
          fontSize: "var(--text-sm)",
        }}
      >
        Open {side ?? "right"} drawer
      </button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        side={side}
        size={size}
        title="Drawer title"
        description="Slide-in panel for supplementary content."
      >
        <p style={{ margin: 0, color: "var(--color-text)", fontSize: "var(--text-sm)" }}>
          Drawer content goes here. Closes on Escape, backdrop click, or the × button.
        </p>
      </Drawer>
    </>
  );
}

export const Right: Story = {
  render: () => <DrawerDemo side="right" size="md" />,
};

export const Left: Story = {
  render: () => <DrawerDemo side="left" size="md" />,
};

export const Bottom: Story = {
  render: () => <DrawerDemo side="bottom" size="md" />,
};
