import type { Meta, StoryObj } from "@storybook/react-vite";
import Container from "./Container";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  parameters: { layout: "fullscreen" },
  argTypes: {
    maxWidth: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: { maxWidth: "lg" },
  render: (args) => (
    <Container {...args} style={{ background: "var(--color-surface)", padding: "var(--space-4)" }}>
      <p style={{ color: "var(--color-text)", margin: 0 }}>
        Container with <strong>maxWidth="{args.maxWidth}"</strong> — centered, with horizontal
        padding.
      </p>
    </Container>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
      {(["sm", "md", "lg", "xl", "2xl", "full"] as const).map((size) => (
        <Container
          key={size}
          maxWidth={size}
          style={{
            background: "var(--color-surface)",
            padding: "var(--space-2) var(--space-4)",
            outline: "1px dashed var(--color-border)",
          }}
        >
          <span style={{ color: "var(--color-text-subtle)", fontSize: "var(--text-sm)" }}>
            maxWidth="{size}"
          </span>
        </Container>
      ))}
    </div>
  ),
};
