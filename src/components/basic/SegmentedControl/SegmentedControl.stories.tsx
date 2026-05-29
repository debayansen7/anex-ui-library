import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import SegmentedControl from "./SegmentedControl";

const meta: Meta<typeof SegmentedControl> = {
  title: "Basic/SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "radio", options: ["sm", "md"] },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

const viewOptions = [
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
];

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("week");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <SegmentedControl
          {...args}
          options={viewOptions}
          value={value}
          onChange={setValue}
        />
        <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", margin: 0 }}>
          Selected: <strong style={{ color: "var(--color-text)" }}>{value}</strong>
        </p>
      </div>
    );
  },
};

function ListIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1.5 3.5h11M1.5 7h11M1.5 10.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="8" y="1.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1.5" y="8" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="8" y="8" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 3l4-1.5 4 1.5 4-1.5v9L13 12l-4 1.5-4-1.5L1 13.5V3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M5 1.5v9M9 3v9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export const WithIcons: Story = {
  render: (args) => {
    const [value, setValue] = useState("grid");
    const iconOptions = [
      { value: "list", label: <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><ListIcon /> List</span> },
      { value: "grid", label: <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><GridIcon /> Grid</span> },
      { value: "map", label: <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><MapIcon /> Map</span> },
    ];
    return (
      <SegmentedControl
        {...args}
        options={iconOptions}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const FullWidth: Story = {
  render: (args) => {
    const [value, setValue] = useState("month");
    return (
      <div style={{ width: "360px" }}>
        <SegmentedControl
          {...args}
          options={viewOptions}
          value={value}
          onChange={setValue}
          fullWidth
        />
      </div>
    );
  },
};

export const SmallSize: Story = {
  render: (args) => {
    const [value, setValue] = useState("week");
    return (
      <SegmentedControl
        {...args}
        options={viewOptions}
        value={value}
        onChange={setValue}
        size="sm"
      />
    );
  },
};

export const Disabled: Story = {
  render: (args) => (
    <SegmentedControl
      {...args}
      options={viewOptions}
      value="week"
      disabled
    />
  ),
};
