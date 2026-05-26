import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  argTypes: {
    direction: { control: "select", options: ["row", "column", "row-reverse", "column-reverse"] },
    gap: {
      control: "select",
      options: ["0", "1", "2", "3", "4", "5", "6", "8", "10", "12", "16"],
    },
    align: { control: "select", options: [undefined, "start", "center", "end", "stretch", "baseline"] },
    justify: {
      control: "select",
      options: [undefined, "start", "center", "end", "between", "around", "evenly"],
    },
    wrap: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const Box = ({ label }: { label: string }) => (
  <div
    style={{
      background: "var(--color-primary)",
      color: "var(--color-primary-foreground)",
      padding: "var(--space-2) var(--space-4)",
      borderRadius: "var(--radius-md)",
      fontSize: "var(--text-sm)",
      fontWeight: 500,
    }}
  >
    {label}
  </div>
);

export const Vertical: Story = {
  args: { direction: "column", gap: "4" },
  render: (args) => (
    <Stack {...args}>
      <Box label="Item 1" />
      <Box label="Item 2" />
      <Box label="Item 3" />
    </Stack>
  ),
};

export const Horizontal: Story = {
  args: { direction: "row", gap: "4", align: "center" },
  render: (args) => (
    <Stack {...args}>
      <Box label="Item 1" />
      <Box label="Item 2" />
      <Box label="Item 3" />
    </Stack>
  ),
};

export const SpaceBetween: Story = {
  args: { direction: "row", gap: "4", justify: "between", align: "center" },
  render: (args) => (
    <Stack {...args} style={{ width: "100%" }}>
      <Box label="Left" />
      <Box label="Center" />
      <Box label="Right" />
    </Stack>
  ),
};

export const Wrapping: Story = {
  args: { direction: "row", gap: "3", wrap: true },
  render: (args) => (
    <Stack {...args} style={{ maxWidth: 300 }}>
      {Array.from({ length: 8 }, (_, i) => (
        <Box key={i} label={`Item ${i + 1}`} />
      ))}
    </Stack>
  ),
};
