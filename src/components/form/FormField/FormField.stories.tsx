import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import FormField from "./FormField";
import Input from "../../basic/Input/Input";
import Textarea from "../../basic/Textarea/Textarea";

const meta: Meta<typeof FormField> = {
  title: "Form/FormField",
  component: FormField,
  argTypes: {
    error: { control: "boolean" },
    required: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <FormField label="Email address" helperText="We'll never share your email.">
        <Input type="email" placeholder="you@example.com" />
      </FormField>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <FormField label="Full name" required>
        <Input type="text" placeholder="Jane Smith" />
      </FormField>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <FormField
        label="Password"
        required
        error
        errorText="Password must be at least 8 characters."
      >
        <Input type="password" defaultValue="short" />
      </FormField>
    </div>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <FormField label="Bio" helperText="Tell us a bit about yourself." required>
        <Textarea placeholder="I'm a developer…" rows={4} />
      </FormField>
    </div>
  ),
};
