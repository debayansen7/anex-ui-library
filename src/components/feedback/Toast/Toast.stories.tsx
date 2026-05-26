import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToastProvider, useToast } from "./Toast";

const meta: Meta = {
  title: "Feedback/Toast",
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

function ToastTrigger({ type, label }: { type: "default" | "success" | "error" | "warning" | "info"; label: string }) {
  const { toast } = useToast();
  return (
    <button
      onClick={() => toast({ message: `This is a ${type} toast notification.`, type })}
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
      {label}
    </button>
  );
}

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
      <ToastTrigger type="default" label="Default toast" />
      <ToastTrigger type="success" label="Success toast" />
      <ToastTrigger type="error" label="Error toast" />
      <ToastTrigger type="warning" label="Warning toast" />
      <ToastTrigger type="info" label="Info toast" />
    </div>
  ),
};

export const Persistent: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <button
        onClick={() => toast({ message: "This toast won't auto-dismiss.", type: "info", duration: 0 })}
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
        Show persistent toast
      </button>
    );
  },
};
