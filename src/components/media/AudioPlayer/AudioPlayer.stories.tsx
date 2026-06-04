import type { Meta, StoryObj } from "@storybook/react";
import AudioPlayer from "./AudioPlayer";

const DEMO_SRC = "/assets/audio/audio1.mp3";

const meta: Meta<typeof AudioPlayer> = {
  title: "Media/AudioPlayer",
  component: AudioPlayer,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    src: DEMO_SRC,
    title: "Audio Sample",
    artist: "Local Asset",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: "default" },
};

export const Minimal: Story = {
  args: { variant: "minimal" },
};

export const ControlsOnly: Story = {
  args: { variant: "controls" },
};

export const NoMetadata: Story = {
  args: { variant: "default", title: undefined, artist: undefined },
};
