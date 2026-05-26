import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import SearchInput from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Form/SearchInput",
  component: SearchInput,
  argTypes: {
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Uncontrolled: Story = {
  args: { placeholder: "Search…" },
  render: (args) => (
    <div style={{ maxWidth: 320 }}>
      <SearchInput {...args} />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState("");
    return (
      <div style={{ maxWidth: 320, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <SearchInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue("")}
        />
        <p style={{ margin: 0, fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>
          Query: <strong style={{ color: "var(--color-text)" }}>{value || "(empty)"}</strong>
        </p>
      </div>
    );
  },
};
