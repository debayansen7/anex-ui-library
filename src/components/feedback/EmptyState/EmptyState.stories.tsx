import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import EmptyState from "./EmptyState";

const meta: Meta<typeof EmptyState> = {
  title: "Feedback/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

function InboxIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M6 28h9l3 4h12l3-4h9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="21" cy="21" r="13" stroke="currentColor" strokeWidth="2" />
      <path d="M30.5 30.5L42 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ActionButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "8px 16px",
        background: "var(--color-primary)",
        color: "var(--color-primary-foreground)",
        border: "none",
        borderRadius: "var(--radius-md)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--font-medium)",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export const Default: Story = {
  render: (args) => (
    <EmptyState
      {...args}
      icon={<InboxIcon />}
      title="No messages yet"
      description="When you receive messages, they'll show up here. Start a conversation to get going."
      action={<ActionButton>Compose message</ActionButton>}
    />
  ),
};

export const NoResults: Story = {
  render: (args) => (
    <EmptyState
      {...args}
      icon={<SearchIcon />}
      title="No results found"
      description="Try adjusting your search or filter criteria to find what you're looking for."
      action={<ActionButton>Clear filters</ActionButton>}
    />
  ),
};

export const NoIcon: Story = {
  render: (args) => (
    <EmptyState
      {...args}
      title="No items yet"
      description="Add your first item to get started."
      action={<ActionButton>Add item</ActionButton>}
    />
  ),
};

export const Minimal: Story = {
  render: (args) => (
    <EmptyState
      {...args}
      title="Nothing to show"
    />
  ),
};
