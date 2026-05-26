import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Basic/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: { "aria-label": "Enable notifications" },
};

export const On: Story = {
  args: { defaultChecked: true, "aria-label": "Enable notifications" },
};

export const WithLabel: Story = {
  args: { label: "Enable notifications" },
};

export const WithLabelOn: Story = {
  args: { label: "Dark mode", defaultChecked: true },
};

export const Disabled: Story = {
  args: { label: "Disabled toggle", disabled: true },
};

export const Controlled: Story = {
  render: () => {
    const [on, setOn] = useState(false);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Switch
          label={`Notifications: ${on ? "On" : "Off"}`}
          checked={on}
          onChange={(e) => setOn(e.target.checked)}
        />
        <Switch
          label="Dark mode"
          checked={false}
          disabled
          onChange={() => {}}
        />
      </div>
    );
  },
};
