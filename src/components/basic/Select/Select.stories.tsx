import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  title: "Basic/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const countryOptions = (
  <>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="in">India</option>
    <option value="au">Australia</option>
    <option value="ca">Canada</option>
  </>
);

export const Default: Story = {
  render: (args) => <Select {...args}>{countryOptions}</Select>,
  args: { "aria-label": "Country" },
};

export const WithPlaceholder: Story = {
  render: (args) => <Select {...args}>{countryOptions}</Select>,
  args: { placeholder: "Select a country…", "aria-label": "Country" },
};

export const Error: Story = {
  render: (args) => <Select {...args}>{countryOptions}</Select>,
  args: { error: true, "aria-label": "Country", "aria-invalid": true },
};

export const Disabled: Story = {
  render: (args) => <Select {...args}>{countryOptions}</Select>,
  args: { disabled: true, "aria-label": "Country" },
};
