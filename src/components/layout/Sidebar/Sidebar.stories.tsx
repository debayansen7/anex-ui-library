import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Layout/Sidebar",
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const NavLinks = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-0-5)", padding: "0 var(--space-3)" }}>
    {["Dashboard", "Projects", "Team", "Settings", "Help"].map((item) => (
      <button key={item} style={{
        display: "block", width: "100%", textAlign: "left",
        padding: "var(--space-1-5) var(--space-3)", borderRadius: "var(--radius-lg)",
        border: "none", background: "transparent", cursor: "pointer",
        fontSize: "var(--text-sm)", color: "var(--color-text-subtle)",
        fontFamily: "var(--font-sans)",
      }}>
        {item}
      </button>
    ))}
  </div>
);

export const Default: Story = {
  render: () => (
    <div style={{ display: "flex", height: 400, border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", overflow: "hidden" }}>
      <Sidebar
        header={<span style={{ fontWeight: 600, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>Anex UI</span>}
      >
        <NavLinks />
      </Sidebar>
      <main style={{ flex: 1, padding: "var(--space-6)", color: "var(--color-text)", fontSize: "var(--text-sm)" }}>
        Main content area
      </main>
    </div>
  ),
};

export const RightSide: Story = {
  render: () => (
    <div style={{ display: "flex", height: 400, border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", overflow: "hidden" }}>
      <main style={{ flex: 1, padding: "var(--space-6)", color: "var(--color-text)", fontSize: "var(--text-sm)" }}>
        Main content area
      </main>
      <Sidebar side="right">
        <NavLinks />
      </Sidebar>
    </div>
  ),
};

export const DefaultClosed: Story = {
  render: () => (
    <div style={{ display: "flex", height: 400, border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", overflow: "hidden" }}>
      <Sidebar defaultOpen={false}
        header={<span style={{ fontWeight: 600, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>Anex UI</span>}
      >
        <NavLinks />
      </Sidebar>
      <main style={{ flex: 1, padding: "var(--space-6)", color: "var(--color-text)", fontSize: "var(--text-sm)" }}>
        Toggle the sidebar with the chevron button.
      </main>
    </div>
  ),
};
