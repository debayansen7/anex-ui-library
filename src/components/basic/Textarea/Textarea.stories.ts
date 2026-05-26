import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Basic/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter your message…",
    rows: 3,
    disabled: false,
    error: false,
    resize: "vertical",
  },
  argTypes: {
    resize: { control: "select", options: ["none", "vertical", "horizontal", "both"] },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const Taller: Story = {
  args: { rows: 6, placeholder: "Write something longer…" },
};

export const NoResize: Story = {
  args: { resize: "none" },
};

export const Error: Story = {
  args: { error: true, defaultValue: "Something went wrong here" },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Cannot edit this" },
};
