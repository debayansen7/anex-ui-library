import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Combobox from "./Combobox";

const meta: Meta<typeof Combobox> = {
  title: "Form/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    clearable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const fruitOptions = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "dragonfruit", label: "Dragon Fruit" },
  { value: "elderberry", label: "Elderberry" },
  { value: "fig", label: "Fig" },
  { value: "grape", label: "Grape" },
  { value: "honeydew", label: "Honeydew" },
];

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <div style={{ width: "280px" }}>
        <Combobox
          {...args}
          options={fruitOptions}
          value={value}
          onChange={setValue}
          placeholder="Select a fruit…"
        />
        {value && (
          <p style={{ marginTop: "8px", fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>
            Selected: <strong style={{ color: "var(--color-text)" }}>{value}</strong>
          </p>
        )}
      </div>
    );
  },
};

export const Clearable: Story = {
  render: (args) => {
    const [value, setValue] = useState("banana");
    return (
      <div style={{ width: "280px" }}>
        <Combobox
          {...args}
          options={fruitOptions}
          value={value}
          onChange={setValue}
          placeholder="Select a fruit…"
          clearable
        />
      </div>
    );
  },
};

export const WithDisabledOption: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    const options = [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry (unavailable)", disabled: true },
      { value: "dragonfruit", label: "Dragon Fruit" },
      { value: "elderberry", label: "Elderberry" },
      { value: "fig", label: "Fig" },
    ];
    return (
      <div style={{ width: "280px" }}>
        <Combobox
          {...args}
          options={options}
          value={value}
          onChange={setValue}
          placeholder="Select a fruit…"
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div style={{ width: "280px" }}>
      <Combobox
        {...args}
        options={fruitOptions}
        value="apple"
        placeholder="Select a fruit…"
        disabled
      />
    </div>
  ),
};
