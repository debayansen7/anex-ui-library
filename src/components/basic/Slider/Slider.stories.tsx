import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Slider from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Basic/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    showValue: { control: "boolean" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: { defaultValue: 40, "aria-label": "Volume" },
};

export const WithValue: Story = {
  args: { defaultValue: 60, showValue: true, "aria-label": "Brightness" },
};

export const CustomRange: Story = {
  args: { min: 0, max: 10, step: 1, defaultValue: 5, showValue: true, "aria-label": "Rating" },
};

export const Disabled: Story = {
  args: { defaultValue: 30, disabled: true, "aria-label": "Volume (disabled)" },
};

export const Controlled: Story = {
  render: () => {
    const [volume, setVolume] = useState(50);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "300px" }}>
        <label
          htmlFor="volume"
          style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-label)" }}
        >
          Volume: {volume}%
        </label>
        <Slider
          id="volume"
          min={0}
          max={100}
          step={5}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label={`Volume: ${volume} percent`}
        />
      </div>
    );
  },
};
