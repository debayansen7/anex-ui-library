import type { Meta, StoryObj } from "@storybook/react-vite";
import Grid from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
  argTypes: {
    cols: { control: "select", options: [1, 2, 3, 4, 5, 6, 8, 10, 12] },
    gap: {
      control: "select",
      options: [undefined, "0", "1", "2", "3", "4", "5", "6", "8", "10", "12", "16"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const Cell = ({ label }: { label: string }) => (
  <div
    style={{
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-4)",
      textAlign: "center",
      color: "var(--color-text-subtle)",
      fontSize: "var(--text-sm)",
    }}
  >
    {label}
  </div>
);

export const ThreeColumns: Story = {
  args: { cols: 3, gap: "4" },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 6 }, (_, i) => (
        <Cell key={i} label={`Cell ${i + 1}`} />
      ))}
    </Grid>
  ),
};

export const TwoColumns: Story = {
  args: { cols: 2, gap: "6" },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 4 }, (_, i) => (
        <Cell key={i} label={`Cell ${i + 1}`} />
      ))}
    </Grid>
  ),
};

export const AsymmetricGap: Story = {
  args: { cols: 3, colGap: "6", rowGap: "2" },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 9 }, (_, i) => (
        <Cell key={i} label={`Cell ${i + 1}`} />
      ))}
    </Grid>
  ),
};
