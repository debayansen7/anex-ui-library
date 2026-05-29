import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
import { Avatar } from "../Avatar/Avatar";
import { Badge } from "../../feedback/Badge/Badge";
import { Button } from "../../basic/Button/Button";
import { Stack } from "../../layout/Stack/Stack";

const meta: Meta<typeof Card> = {
  title: "Data Display/Card",
  component: Card,
  argTypes: {
    rounded:   { control: "select", options: ["none", "sm", "md", "lg", "xl", "2xl", "full"] },
    shadow:    { control: "select", options: ["none", "sm", "md", "lg", "xl"] },
    hoverable: { control: "boolean" },
    padding:   { control: "text" },
    margin:    { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

/* ── Default compound card ────────────────────────────────────────────────── */
export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: 360 }}>
      <CardHeader>Card Title</CardHeader>
      <CardBody>
        This is the card body. It can contain text, images, form controls, or other components.
      </CardBody>
      <CardFooter>
        <Stack direction="row" gap="2" justify="end">
          <Button variant="ghost" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Save</Button>
        </Stack>
      </CardFooter>
    </Card>
  ),
};

/* ── Product card ─────────────────────────────────────────────────────────── */
export const ProductCard: Story = {
  render: () => (
    <Card style={{ maxWidth: 280 }} shadow="md" hoverable rounded="xl">
      {/* Image placeholder */}
      <div
        style={{
          height: 160,
          background: "var(--color-primary-subtle)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-text-subtle)",
          fontSize: "var(--text-sm)",
        }}
      >
        Product image
      </div>
      <CardBody>
        <Stack direction="column" gap="2">
          <Stack direction="row" gap="2" align="center" justify="between">
            <span style={{ fontWeight: 600, fontSize: "var(--text-base)" }}>Wireless Headphones</span>
            <Badge variant="success" size="sm">In stock</Badge>
          </Stack>
          <span style={{ color: "var(--color-text-subtle)", fontSize: "var(--text-xs)" }}>
            Noise-cancelling · 30 hr battery
          </span>
          <Stack direction="row" gap="2" align="center" justify="between" style={{ marginTop: "var(--space-2)" }}>
            <span style={{ fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--color-text)" }}>
              $129.99
            </span>
            <Button variant="primary" size="sm">Add to cart</Button>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  ),
};

/* ── Profile / avatar card ────────────────────────────────────────────────── */
export const ProfileCard: Story = {
  render: () => (
    <Card style={{ maxWidth: 300 }} shadow="sm" rounded="xl">
      <CardBody>
        <Stack direction="column" gap="4" align="center">
          <Avatar initials="DS" size="xl" status="online" />
          <Stack direction="column" gap="1" align="center">
            <span style={{ fontWeight: 700, fontSize: "var(--text-base)", color: "var(--color-text)" }}>
              Debayan Sen
            </span>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>
              Frontend Engineer
            </span>
            <Badge variant="primary" size="sm">Pro</Badge>
          </Stack>
        </Stack>
      </CardBody>
      <CardFooter>
        <Stack direction="row" gap="2" justify="center">
          <Button variant="outline" size="sm">Message</Button>
          <Button variant="primary" size="sm">Follow</Button>
        </Stack>
      </CardFooter>
    </Card>
  ),
};

/* ── Empty / standalone card ──────────────────────────────────────────────── */
export const StandaloneCard: Story = {
  name: "Standalone (no sub-components)",
  render: () => (
    <Card padding="2rem" rounded="lg" shadow="md" style={{ maxWidth: 320 }}>
      <p style={{ margin: 0, color: "var(--color-text)", fontSize: "var(--text-sm)" }}>
        A standalone card with <code>padding="2rem"</code>. No CardHeader / CardBody / CardFooter
        — just your own content inside.
      </p>
    </Card>
  ),
};

/* ── Rounded variants ─────────────────────────────────────────────────────── */
export const RoundedVariants: Story = {
  render: () => (
    <Stack direction="row" gap="4" wrap align="start">
      {(["none", "sm", "md", "lg", "xl", "2xl", "full"] as const).map((r) => (
        <Card key={r} rounded={r} padding="var(--space-5)" style={{ width: 120, textAlign: "center" }}>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>{r}</span>
        </Card>
      ))}
    </Stack>
  ),
};

/* ── Shadow variants ──────────────────────────────────────────────────────── */
export const ShadowVariants: Story = {
  render: () => (
    <Stack direction="row" gap="8" wrap align="start">
      {(["sm", "md", "lg", "xl"] as const).map((s) => (
        <Card key={s} shadow={s} rounded="xl" padding="var(--space-5)" style={{ width: 130, textAlign: "center" }}>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>shadow="{s}"</span>
        </Card>
      ))}
    </Stack>
  ),
};

/* ── Hoverable ────────────────────────────────────────────────────────────── */
export const Hoverable: Story = {
  render: () => (
    <Stack direction="row" gap="6" wrap>
      {["Static card", "Hover me →"].map((label, i) => (
        <Card
          key={label}
          hoverable={i === 1}
          shadow={i === 1 ? "sm" : undefined}
          rounded="xl"
          style={{ maxWidth: 200 }}
        >
          <CardBody>
            <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--color-text-subtle)" }}>
              {label}
            </p>
            {i === 1 && (
              <p style={{ margin: "var(--space-2) 0 0", fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>
                hoverable + shadow="sm"
              </p>
            )}
          </CardBody>
        </Card>
      ))}
    </Stack>
  ),
};
