import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import TableOfContents from "./TableOfContents";

const meta: Meta<typeof TableOfContents> = {
  title: "Navigation/TableOfContents",
  component: TableOfContents,
};

export default meta;
type Story = StoryObj<typeof TableOfContents>;

const items = [
  { id: "overview", text: "Overview", level: 2 as const },
  { id: "installation", text: "Installation", level: 2 as const },
  { id: "npm", text: "npm", level: 3 as const },
  { id: "yarn", text: "Yarn", level: 3 as const },
  { id: "usage", text: "Usage", level: 2 as const },
  { id: "api", text: "API Reference", level: 2 as const },
  { id: "props", text: "Props", level: 3 as const },
];

export const Default: Story = {
  render: () => (
    <div style={{ width: 200 }}>
      <TableOfContents items={items} activeId="installation" />
    </div>
  ),
};

export const AllActive: Story = {
  render: () => {
    const [activeId, setActiveId] = React.useState("overview");
    return (
      <div style={{ width: 200 }}>
        <TableOfContents
          items={items}
          activeId={activeId}
        />
        <div style={{ marginTop: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              style={{ fontSize: "var(--text-xs)", padding: "var(--space-1)", background: "transparent", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", cursor: "pointer", color: "var(--color-text)" }}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
    );
  },
};
