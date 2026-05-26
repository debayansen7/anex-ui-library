import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Data Display/Avatar",
  component: Avatar,
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    status: { control: "select", options: [undefined, "online", "offline", "away", "busy"] },
  },
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: { src: "https://i.pravatar.cc/150?img=3", alt: "Jane Smith", size: "md" },
};

export const WithInitials: Story = {
  args: { initials: "DS", size: "md" },
};

export const Fallback: Story = {
  args: { src: "broken-url", initials: "FB", size: "md" },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
      <Avatar initials="XS" size="xs" />
      <Avatar initials="SM" size="sm" />
      <Avatar initials="MD" size="md" />
      <Avatar initials="LG" size="lg" />
      <Avatar initials="XL" size="xl" />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
      <Avatar initials="ON" size="md" status="online" />
      <Avatar initials="AW" size="md" status="away" />
      <Avatar initials="BS" size="md" status="busy" />
      <Avatar initials="OF" size="md" status="offline" />
    </div>
  ),
};
