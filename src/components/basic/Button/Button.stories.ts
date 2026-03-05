import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import type { ButtonProps } from "./Button.Type";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Basic/Button",
  component: Button,
  args: {
    text: "Click me",
    className: "",
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    // className: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    text: "Click me",
  },
};

export const Secondary: Story = {
  args: {
    // className: 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
    text: "Click me",
  },
};

export const Large: Story = {
  args: {
    // className: 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded',
    text: "Click me",
    size: "lg",
  },
};
