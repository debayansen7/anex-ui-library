import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Carousel from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Data Display/Carousel",
  component: Carousel,
  argTypes: {
    autoPlay: { control: "boolean" },
    loop: { control: "boolean" },
    showArrows: { control: "boolean" },
    showDots: { control: "boolean" },
    interval: { control: { type: "number", min: 500, max: 10000, step: 500 } },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const colors = ["#2563eb", "#7c3aed", "#059669", "#d97706", "#dc2626"];
const labels = ["Ocean Blue", "Royal Purple", "Emerald", "Amber", "Crimson"];

export const Default: Story = {
  args: { loop: true, showArrows: true, showDots: true },
  render: (args) => (
    <div style={{ maxWidth: 600 }}>
      <Carousel {...args}>
        {colors.map((color, i) => (
          <div
            key={i}
            style={{
              height: 240,
              background: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "var(--text-xl)",
              fontWeight: 600,
            }}
          >
            {labels[i]}
          </div>
        ))}
      </Carousel>
    </div>
  ),
};

export const AutoPlay: Story = {
  args: { autoPlay: true, interval: 2500, loop: true, showDots: true },
  render: (args) => (
    <div style={{ maxWidth: 600 }}>
      <Carousel {...args} label="Auto-playing carousel">
        {colors.map((color, i) => (
          <div
            key={i}
            style={{
              height: 200,
              background: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "var(--text-lg)",
              fontWeight: 600,
            }}
          >
            {labels[i]}
          </div>
        ))}
      </Carousel>
      <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)", marginTop: "var(--space-2)" }}>
        Hover to pause · Arrow keys to navigate
      </p>
    </div>
  ),
};

export const SingleSlide: Story = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <Carousel showArrows showDots>
        <div style={{ height: 160, background: "var(--color-surface)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text)" }}>
          Only one slide — arrows hidden automatically
        </div>
      </Carousel>
    </div>
  ),
};
