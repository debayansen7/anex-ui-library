import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Basic/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter text…",
    disabled: false,
    readOnly: false,
    error: false,
  },
  argTypes: {
    type: { control: "select", options: ["text", "email", "password", "number", "search", "tel", "url"] },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Email: Story = {
  args: { type: "email", placeholder: "you@example.com" },
};

export const Password: Story = {
  args: { type: "password", placeholder: "Enter password" },
};

export const Search: Story = {
  args: { type: "search", placeholder: "Search…" },
};

export const WithValue: Story = {
  args: { defaultValue: "Hello, world" },
};

export const Error: Story = {
  args: { error: true, defaultValue: "invalid@", "aria-describedby": "email-error" },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Cannot edit" },
};

export const ReadOnly: Story = {
  args: { readOnly: true, defaultValue: "Read only value" },
};
