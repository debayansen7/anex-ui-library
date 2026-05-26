import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Alert from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Feedback/Alert",
  component: Alert,
  argTypes: {
    variant: { control: "select", options: ["success", "error", "warning", "info"] },
    title: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: { variant: "success", title: "Changes saved", children: "Your profile has been updated successfully." },
};

export const Error: Story = {
  args: { variant: "error", title: "Something went wrong", children: "Unable to process your request. Please try again." },
};

export const Warning: Story = {
  args: { variant: "warning", title: "Heads up", children: "This action cannot be undone once confirmed." },
};

export const Info: Story = {
  args: { variant: "info", title: "New update available", children: "Refresh the page to get the latest features." },
};

export const Dismissible: Story = {
  render: () => {
    const [visible, setVisible] = React.useState(true);
    return visible ? (
      <Alert variant="info" title="Dismissible alert" onDismiss={() => setVisible(false)}>
        Click the × to dismiss this alert.
      </Alert>
    ) : (
      <button onClick={() => setVisible(true)} style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>
        Show again
      </button>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
      <Alert variant="success">Operation completed successfully.</Alert>
      <Alert variant="error">Failed to load data.</Alert>
      <Alert variant="warning">Your session expires in 5 minutes.</Alert>
      <Alert variant="info">Read-only mode is active.</Alert>
    </div>
  ),
};
