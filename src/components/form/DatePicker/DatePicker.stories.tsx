import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import DatePicker from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Form/DatePicker",
  component: DatePicker,
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | null>(null);
    return (
      <div style={{ width: 280 }}>
        <DatePicker value={date} onChange={setDate} placeholder="Pick a date" />
        {date && (
          <p style={{ marginTop: "var(--space-3)", fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>
            Selected: {date.toDateString()}
          </p>
        )}
      </div>
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | null>(new Date(2025, 3, 15));
    return (
      <div style={{ width: 280 }}>
        <DatePicker value={date} onChange={setDate} />
      </div>
    );
  },
};

export const WithMinMax: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | null>(null);
    const today = new Date();
    const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    return (
      <div style={{ width: 280 }}>
        <DatePicker
          value={date}
          onChange={setDate}
          min={today}
          max={nextWeek}
          placeholder="Next 7 days only"
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ width: 280 }}>
      <DatePicker value={new Date(2025, 0, 1)} disabled />
    </div>
  ),
};
