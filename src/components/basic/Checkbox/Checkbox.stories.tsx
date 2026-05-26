import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Basic/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    indeterminate: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { label: "Accept terms and conditions" },
};

export const Checked: Story = {
  args: { label: "Already checked", defaultChecked: true },
};

export const Indeterminate: Story = {
  args: { label: "Select all", indeterminate: true },
};

export const Disabled: Story = {
  args: { label: "Disabled option", disabled: true },
};

export const DisabledChecked: Story = {
  args: { label: "Disabled and checked", disabled: true, defaultChecked: true },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label={checked ? "Subscribed" : "Subscribe to newsletter"}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const SelectAllGroup: Story = {
  name: "Select-all / indeterminate pattern",
  render: () => {
    const [items, setItems] = useState([false, false, false]);
    const allChecked = items.every(Boolean);
    const someChecked = items.some(Boolean) && !allChecked;

    const toggle = (i: number) =>
      setItems((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Checkbox
          label="Select all"
          checked={allChecked}
          indeterminate={someChecked}
          onChange={() => setItems(items.map(() => !allChecked))}
        />
        <div style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {["Option A", "Option B", "Option C"].map((opt, i) => (
            <Checkbox
              key={opt}
              label={opt}
              checked={items[i]}
              onChange={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    );
  },
};
