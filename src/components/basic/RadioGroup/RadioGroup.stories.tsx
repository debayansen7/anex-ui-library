import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, Radio } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Basic/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    direction: { control: "select", options: ["vertical", "horizontal"] },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup legend="Notification preference" name="notify" {...args}>
      <Radio label="Email" value="email" defaultChecked />
      <Radio label="SMS" value="sms" />
      <Radio label="Push notification" value="push" />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup legend="Size" name="size" direction="horizontal">
      <Radio label="Small" value="sm" defaultChecked />
      <Radio label="Medium" value="md" />
      <Radio label="Large" value="lg" />
    </RadioGroup>
  ),
};

export const WithDisabledOption: Story = {
  render: () => (
    <RadioGroup legend="Shipping method" name="shipping">
      <Radio label="Standard (3–5 days)" value="standard" defaultChecked />
      <Radio label="Express (1–2 days)" value="express" />
      <Radio label="Same-day (unavailable)" value="sameday" disabled />
    </RadioGroup>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("email");
    return (
      <>
        <RadioGroup
          legend="Contact method"
          name="contact-controlled"
          onChange={(e) => setValue((e.target as HTMLInputElement).value)}
        >
          <Radio label="Email" value="email" checked={value === "email"} onChange={() => setValue("email")} />
          <Radio label="Phone" value="phone" checked={value === "phone"} onChange={() => setValue("phone")} />
          <Radio label="Post" value="post" checked={value === "post"} onChange={() => setValue("post")} />
        </RadioGroup>
        <p style={{ marginTop: "12px", fontSize: "14px", color: "var(--color-text-subtle)" }}>
          Selected: <strong>{value}</strong>
        </p>
      </>
    );
  },
};
