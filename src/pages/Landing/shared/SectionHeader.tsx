import React, { type ReactNode } from "react";

interface SectionHeaderProps {
  id: string;
  title: string;
  description: string;
  count: number;
  icon: ReactNode;
}

const SectionHeader = ({ id, title, description, count, icon }: SectionHeaderProps) => (
  <div id={id} style={{ marginBottom: "var(--space-8)", scrollMarginTop: 72 }}>
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-2)" }}>
      <span style={{ fontSize: "var(--text-2xl)" }}>{icon}</span>
      <h2
        style={{
          margin: 0,
          fontSize: "var(--text-2xl)",
          fontWeight: 700,
          color: "var(--color-text)",
          fontFamily: "var(--font-sans)",
        }}
      >
        {title}
      </h2>
      <span
        style={{
          fontSize: "var(--text-xs)",
          fontWeight: 500,
          color: "var(--color-text-subtle)",
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-full)",
          padding: "2px 10px",
          fontFamily: "var(--font-sans)",
        }}
      >
        {count} {count === 1 ? "component" : "components"}
      </span>
    </div>
    <p
      style={{
        margin: 0,
        fontSize: "var(--text-sm)",
        color: "var(--color-text-subtle)",
        fontFamily: "var(--font-sans)",
      }}
    >
      {description}
    </p>
  </div>
);

export default SectionHeader;
