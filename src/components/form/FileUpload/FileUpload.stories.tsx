import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import FileUpload from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
  title: "Form/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    multiple: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    hint: "Any file up to 10 MB",
    maxSize: 10 * 1024 * 1024,
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
    hint: "You can select multiple files",
    maxSize: 5 * 1024 * 1024,
  },
};

export const WithAccept: Story = {
  name: "Images Only",
  args: {
    accept: "image/*",
    hint: "PNG, JPG, GIF, WebP supported",
    maxSize: 2 * 1024 * 1024,
  },
};

export const Disabled: Story = {
  args: {
    label: "Upload disabled",
    hint: "File uploads are currently unavailable",
    disabled: true,
  },
};
