import React from "react";

interface CodeBlockProps {
  code: string;
}

const CodeBlock = ({ code }: CodeBlockProps) => (
  <pre
    style={{
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-4)",
      overflowX: "auto",
      fontSize: "var(--text-xs)",
      fontFamily: "var(--font-mono)",
      lineHeight: 1.6,
      color: "var(--color-text)",
      margin: 0,
      whiteSpace: "pre",
    }}
  >
    <code>{code.trim()}</code>
  </pre>
);

export default CodeBlock;
