import type { Meta, StoryObj } from "@storybook/react";
import VideoPlayer from "./VideoPlayer";

const DEMO_SRC = "/assets/video/video1.mp4";

const meta: Meta<typeof VideoPlayer> = {
  title: "Media/VideoPlayer",
  component: VideoPlayer,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    src: DEMO_SRC,
    title: "Sample Video",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: "default", aspectRatio: "16/9" },
};

export const Minimal: Story = {
  args: { variant: "minimal", aspectRatio: "16/9" },
};

export const Aspect4x3: Story = {
  args: { variant: "default", aspectRatio: "4/3" },
};

export const Square: Story = {
  args: { variant: "default", aspectRatio: "1/1" },
};

