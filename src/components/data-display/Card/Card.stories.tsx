import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Data Display/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: 360 }}>
      <CardHeader>Card Title</CardHeader>
      <CardBody>
        <p style={{ margin: 0 }}>
          This is the card body. It can contain any content — text, images, form controls, or other components.
        </p>
      </CardBody>
      <CardFooter>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "var(--space-2)" }}>
          <button
            style={{
              padding: "var(--space-2) var(--space-3)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-border)",
              background: "transparent",
              color: "var(--color-text)",
              cursor: "pointer",
              fontSize: "var(--text-sm)",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              padding: "var(--space-2) var(--space-3)",
              borderRadius: "var(--radius-md)",
              border: "none",
              background: "var(--color-primary)",
              color: "var(--color-primary-foreground)",
              cursor: "pointer",
              fontSize: "var(--text-sm)",
            }}
          >
            Save
          </button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const BodyOnly: Story = {
  render: () => (
    <Card style={{ maxWidth: 320 }}>
      <CardBody>
        <p style={{ margin: 0 }}>A minimal card with no header or footer.</p>
      </CardBody>
    </Card>
  ),
};
