import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import CommandPalette from "./CommandPalette";
import type { CommandItem } from "./CommandPalette.Type";

const meta: Meta<typeof CommandPalette> = {
  title: "Overlay/CommandPalette",
  component: CommandPalette,
};

export default meta;
type Story = StoryObj<typeof CommandPalette>;

const items: CommandItem[] = [
  { id: "button", label: "Button", description: "Trigger an action", group: "Components", onSelect: () => {} },
  { id: "input", label: "Input", description: "Text entry field", group: "Components", onSelect: () => {} },
  { id: "modal", label: "Modal", description: "Dialog overlay", group: "Components", onSelect: () => {} },
  { id: "tooltip", label: "Tooltip", description: "Contextual hint", group: "Components", onSelect: () => {} },
  { id: "docs", label: "Getting Started", description: "Installation guide", group: "Docs", onSelect: () => {} },
  { id: "theming", label: "Theming", description: "Customize colors", group: "Docs", onSelect: () => {} },
];

function Demo() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const filtered = items.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.description?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-2)",
          padding: "var(--space-1-5) var(--space-3)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border)",
          background: "var(--color-surface)",
          color: "var(--color-text-subtle)",
          fontSize: "var(--text-sm)",
          cursor: "pointer",
        }}
      >
        Search components…
        <kbd style={{ fontSize: "0.7rem", border: "1px solid var(--color-border-strong)", borderRadius: "var(--radius-sm)", padding: "1px 4px", fontFamily: "var(--font-mono)" }}>⌘K</kbd>
      </button>
      <CommandPalette
        isOpen={open}
        onClose={() => setOpen(false)}
        placeholder="Search components and docs…"
        items={filtered}
        onSearch={setQuery}
        emptyText={`No results for "${query}"`}
      />
    </>
  );
}

export const Default: Story = {
  render: () => <Demo />,
};
