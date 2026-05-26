import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Overlay/Modal",
  component: Modal,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "full"] },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

function ModalDemo({ size }: { size?: "sm" | "md" | "lg" | "full" }) {
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
        Open modal
      </button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Dialog title"
        description="This is an optional description providing more context."
        size={size}
      >
        <p style={{ margin: 0, color: "var(--color-text)", fontSize: "var(--text-sm)" }}>
          Modal body content goes here. The dialog traps focus and closes on Escape or backdrop click.
        </p>
        <div style={{ display: "flex", gap: "var(--space-2)", marginTop: "var(--space-4)", justifyContent: "flex-end" }}>
          <button
            onClick={() => setOpen(false)}
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
            Cancel
          </button>
          <button
            onClick={() => setOpen(false)}
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
            Confirm
          </button>
        </div>
      </Modal>
    </>
  );
}

export const Default: Story = {
  render: () => <ModalDemo size="md" />,
};

export const Small: Story = {
  render: () => <ModalDemo size="sm" />,
};

export const Large: Story = {
  render: () => <ModalDemo size="lg" />,
};
