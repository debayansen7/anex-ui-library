import type { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta: Meta<typeof Label> = {
  title: "Basic/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    children: "Email address",
    required: false,
  },
  argTypes: {
    required: { control: "boolean" },
    htmlFor: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { children: "Email address" },
};

export const Required: Story = {
  args: { children: "Email address", required: true },
};

export const WithHtmlFor: Story = {
  name: "Linked to input (htmlFor)",
  args: { children: "Username", htmlFor: "username-input" },
};
