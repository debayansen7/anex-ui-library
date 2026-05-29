import React, { useState, type ReactNode } from "react";
import CodeBlock from "./CodeBlock";

interface DemoCardProps {
  title: string;
  description: string;
  code: string;
  children: ReactNode;
}

const DemoCard = ({ title, description, code, children }: DemoCardProps) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: "var(--color-surface)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ padding: "var(--space-4)", borderBottom: "1px solid var(--color-border)" }}>
        <h3
          style={{
            margin: 0,
            fontSize: "var(--text-sm)",
            fontWeight: 600,
            color: "var(--color-text)",
            fontFamily: "var(--font-sans)",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            margin: "var(--space-1) 0 0",
            fontSize: "var(--text-xs)",
            color: "var(--color-text-subtle)",
            fontFamily: "var(--font-sans)",
          }}
        >
          {description}
        </p>
      </div>

      <div
        style={{
          padding: "var(--space-6) var(--space-4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "var(--space-3)",
          minHeight: 96,
          background: "var(--color-background)",
          flex: 1,
        }}
      >
        {children}
      </div>

      <div style={{ borderTop: "1px solid var(--color-border)" }}>
        <button
          onClick={() => setShowCode((v) => !v)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2)",
            padding: "var(--space-2) var(--space-4)",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "var(--text-xs)",
            color: "var(--color-text-subtle)",
            fontFamily: "var(--font-sans)",
            width: "100%",
            textAlign: "left",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)" }}>{showCode ? "▾" : "▸"}</span>
          {showCode ? "Hide code" : "Show code"}
        </button>
        {showCode && (
          <div style={{ padding: "0 var(--space-4) var(--space-4)" }}>
            <CodeBlock code={code} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoCard;
