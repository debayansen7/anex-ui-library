import type { Meta, StoryObj } from "@storybook/react-vite";
import Divider from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Layout/Divider",
  component: Divider,
  argTypes: {
    orientation: { control: "radio", options: ["horizontal", "vertical"] },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: { orientation: "horizontal" },
  render: (args) => (
    <div style={{ padding: "var(--space-4)" }}>
      <p style={{ color: "var(--color-text)", marginBottom: "var(--space-4)" }}>Above</p>
      <Divider {...args} />
      <p style={{ color: "var(--color-text)", marginTop: "var(--space-4)" }}>Below</p>
    </div>
  ),
};

export const WithLabel: Story = {
  args: { orientation: "horizontal", label: "OR" },
  render: (args) => (
    <div style={{ padding: "var(--space-4)" }}>
      <p style={{ color: "var(--color-text)", marginBottom: "var(--space-4)" }}>Section A</p>
      <Divider {...args} />
      <p style={{ color: "var(--color-text)", marginTop: "var(--space-4)" }}>Section B</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <div style={{ display: "flex", alignItems: "stretch", height: 80, gap: "var(--space-4)", padding: "var(--space-4)" }}>
      <span style={{ color: "var(--color-text)" }}>Left</span>
      <Divider {...args} />
      <span style={{ color: "var(--color-text)" }}>Right</span>
    </div>
  ),
};

export const VerticalWithLabel: Story = {
  args: { orientation: "vertical", label: "or" },
  render: (args) => (
    <div style={{ display: "flex", alignItems: "stretch", height: 120, gap: "var(--space-4)", padding: "var(--space-4)" }}>
      <span style={{ color: "var(--color-text)" }}>Left</span>
      <Divider {...args} />
      <span style={{ color: "var(--color-text)" }}>Right</span>
    </div>
  ),
};
