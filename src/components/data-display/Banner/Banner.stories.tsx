import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Banner from "./Banner";

const meta: Meta<typeof Banner> = {
  title: "Data Display/Banner",
  component: Banner,
  argTypes: {
    variant: { control: "select", options: ["info", "success", "warning", "error", "promo"] },
    title: { control: "text" },
    description: { control: "text" },
  },
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Info: Story = {
  args: {
    variant: "info",
    title: "Scheduled maintenance",
    description: "The service will be unavailable on Saturday from 2–4 AM UTC.",
  },
};

export const Promo: Story = {
  args: {
    variant: "promo",
    title: "🎉 New: Phase 6 & 7 components are live!",
    description: "Explore Carousel, Banner, Timeline and more.",
    action: { label: "See what's new", onClick: () => alert("Navigating…") },
  },
};

export const Dismissible: Story = {
  render: () => {
    const [visible, setVisible] = React.useState(true);
    return visible ? (
      <Banner
        variant="warning"
        title="Your trial ends in 3 days."
        description="Upgrade now to keep access to all features."
        action={{ label: "Upgrade", onClick: () => alert("Upgrade clicked") }}
        onDismiss={() => setVisible(false)}
      />
    ) : (
      <div style={{ padding: "var(--space-4)" }}>
        <button onClick={() => setVisible(true)} style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", background: "none", border: "none", cursor: "pointer" }}>
          Show banner again
        </button>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <Banner variant="info"    title="Informational banner" description="Something you should know." />
      <Banner variant="success" title="Action completed"     description="Everything went smoothly." />
      <Banner variant="warning" title="Attention required"   description="Please review before continuing." />
      <Banner variant="error"   title="Service disruption"   description="We're working to fix this." />
      <Banner variant="promo"   title="Upgrade to Pro"       description="Unlock advanced features." action={{ label: "Learn more", onClick: () => {} }} />
    </div>
  ),
};
