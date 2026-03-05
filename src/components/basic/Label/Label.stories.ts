import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import type { LabelProps } from "./Label.Type";
import Label from "./Label";

const meta: Meta<typeof Label> = {
  title: "Basic/Label",
  component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: {
    text: "Label",
    className: "text-gray-700 font-bold",
  },
};

export const Secondary: Story = {
  args: {
    text: "Label",
    className: "text-gray-500",
  },
};
