import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Callout from "./Callout";

const meta: Meta<typeof Callout> = {
  title: "Feedback/Callout",
  component: Callout,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["info", "warning", "success", "danger", "neutral"] },
  },
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Info: Story = {
  args: {
    variant: "info",
    title: "Did you know?",
    children: "You can drag and drop items to reorder them in the list.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Proceeding will overwrite existing data",
    children: "Make sure you have a backup before continuing with this operation.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Payment successful",
    children: "Your subscription has been activated. A receipt has been sent to your email.",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    title: "Deletion is permanent",
    children: "Once deleted, your account and all associated data cannot be recovered.",
  },
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
    title: "Note",
    children: "This feature is available on all plans.",
  },
};

export const WithoutTitle: Story = {
  args: {
    variant: "info",
    children: "Your session will expire in 5 minutes. Save your work to avoid losing changes.",
  },
};
