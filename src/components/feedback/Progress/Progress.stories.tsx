import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Progress from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "Feedback/Progress",
  component: Progress,
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    variant: { control: "select", options: ["default", "success", "warning", "error"] },
    showValue: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: { value: 60, label: "Uploading…", showValue: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", width: "100%", maxWidth: 400 }}>
      <Progress value={75} variant="default" label="Default" showValue />
      <Progress value={100} variant="success" label="Success" showValue />
      <Progress value={45} variant="warning" label="Warning" showValue />
      <Progress value={20} variant="error" label="Error" showValue />
    </div>
  ),
};

export const Animated: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    React.useEffect(() => {
      const interval = setInterval(() => {
        setValue((v) => (v >= 100 ? 0 : v + 5));
      }, 300);
      return () => clearInterval(interval);
    }, []);
    return (
      <div style={{ width: "100%", maxWidth: 400 }}>
        <Progress value={value} label="Processing" showValue />
      </div>
    );
  },
};
