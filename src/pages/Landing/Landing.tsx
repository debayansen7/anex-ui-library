import React, { useState } from "react";
import { ToastProvider } from "../../components/feedback";
import BasicSection from "./sections/BasicSection";
import LayoutSection from "./sections/LayoutSection";
import NavigationSection from "./sections/NavigationSection";
import FeedbackSection from "./sections/FeedbackSection";
import OverlaySection from "./sections/OverlaySection";
import DataDisplaySection from "./sections/DataDisplaySection";
import FormSection from "./sections/FormSection";

const NAV_LINKS = [
  { id: "basic", label: "Basic", count: 9 },
  { id: "layout", label: "Layout", count: 4 },
  { id: "navigation", label: "Navigation", count: 4 },
  { id: "feedback", label: "Feedback", count: 6 },
  { id: "overlay", label: "Overlay", count: 4 },
  { id: "data-display", label: "Data Display", count: 8 },
  { id: "form", label: "Form", count: 3 },
];

const FEATURES = [
  { label: "53 components" },
  { label: "React 19" },
  { label: "TypeScript" },
  { label: "Tailwind CSS v4" },
  { label: "WCAG AA" },
  { label: "MIT License" },
];

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const installCmd = "npm install anexui";

  const copy = () => {
    navigator.clipboard.writeText(installCmd).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "var(--space-20) var(--space-6) var(--space-16)",
        borderBottom: "1px solid var(--color-border)",
        background: "var(--color-background)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "var(--space-2)", marginBottom: "var(--space-6)" }}>
        {FEATURES.map(({ label }) => (
          <span
            key={label}
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: 500,
              padding: "2px 10px",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text-subtle)",
              fontFamily: "var(--font-sans)",
              background: "var(--color-surface)",
            }}
          >
            {label}
          </span>
        ))}
      </div>

      <h1
        style={{
          margin: "0 0 var(--space-4)",
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "var(--color-text)",
          fontFamily: "var(--font-sans)",
          lineHeight: 1.1,
        }}
      >
        Anex UI
      </h1>

      <p
        style={{
          margin: "0 auto var(--space-8)",
          fontSize: "var(--text-lg)",
          color: "var(--color-text-subtle)",
          fontFamily: "var(--font-sans)",
          maxWidth: 560,
          lineHeight: 1.6,
        }}
      >
        A clean, accessible React component library built with{" "}
        <strong style={{ color: "var(--color-text)" }}>Tailwind CSS v4</strong>. 53 components,
        light &amp; dark themes, zero UI library dependencies.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "var(--space-3)", flexWrap: "wrap", marginBottom: "var(--space-10)" }}>
        <a
          href="https://www.npmjs.com/package/anexui"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "var(--space-2) var(--space-5)",
            borderRadius: "var(--radius-md)",
            background: "var(--color-primary)",
            color: "var(--color-primary-foreground)",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-sm)",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          npm →
        </a>
        <a
          href="https://github.com/debayansen7/anex-ui-library"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "var(--space-2) var(--space-5)",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--color-border)",
            background: "var(--color-surface)",
            color: "var(--color-text)",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-sm)",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          GitHub
        </a>
      </div>

      <button
        onClick={copy}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--space-3)",
          padding: "var(--space-3) var(--space-5)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border)",
          background: "var(--color-surface)",
          cursor: "pointer",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-sm)",
          color: "var(--color-text)",
        }}
        aria-label="Copy install command"
      >
        <span>$ {installCmd}</span>
        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-subtle)" }}>
          {copied ? "✓ Copied" : "Copy"}
        </span>
      </button>
    </div>
  );
};

const StickyNav = () => (
  <nav
    style={{
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "var(--color-background)",
      borderBottom: "1px solid var(--color-border)",
      overflowX: "auto",
    }}
  >
    <div
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 var(--space-6)",
        display: "flex",
        gap: "var(--space-1)",
        alignItems: "center",
        height: 48,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          fontSize: "var(--text-sm)",
          fontWeight: 700,
          color: "var(--color-text)",
          fontFamily: "var(--font-sans)",
          marginRight: "var(--space-4)",
          flexShrink: 0,
        }}
      >
        Components
      </span>
      {NAV_LINKS.map(({ id, label, count }) => (
        <a
          key={id}
          href={`#${id}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-1-5)",
            padding: "var(--space-1) var(--space-3)",
            borderRadius: "var(--radius-md)",
            fontSize: "var(--text-sm)",
            color: "var(--color-text-subtle)",
            fontFamily: "var(--font-sans)",
            textDecoration: "none",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)";
            (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-surface)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-subtle)";
            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
          }}
        >
          {label}
          <span
            style={{
              fontSize: "var(--text-xs)",
              background: "var(--color-border)",
              borderRadius: "var(--radius-full)",
              padding: "1px 6px",
              color: "var(--color-text-subtle)",
            }}
          >
            {count}
          </span>
        </a>
      ))}
    </div>
  </nav>
);

const Footer = () => (
  <footer
    style={{
      borderTop: "1px solid var(--color-border)",
      padding: "var(--space-10) var(--space-6)",
      textAlign: "center",
      background: "var(--color-background)",
    }}
  >
    <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", fontFamily: "var(--font-sans)" }}>
      Anex UI v0.1.0 — MIT © <a href="mailto:debayan.sen7@gmail.com" style={{ color: "var(--color-text)", textDecoration: "none" }}>Debayan Sen</a>
      <span style={{ margin: "0 var(--space-3)", opacity: 0.3 }}>|</span>
      <a href="https://www.npmjs.com/package/anexui" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text-subtle)", textDecoration: "none" }}>npm</a>
      <span style={{ margin: "0 var(--space-2)", opacity: 0.3 }}>·</span>
      <a href="https://github.com/debayansen7/anex-ui-library" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text-subtle)", textDecoration: "none" }}>GitHub</a>
    </p>
  </footer>
);

const Landing = () => (
  <ToastProvider>
    <div style={{ minHeight: "100vh", background: "var(--color-background)" }}>
      <Hero />
      <StickyNav />

      <main
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "var(--space-16) var(--space-6)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-20)",
        }}
      >
        <BasicSection />
        <LayoutSection />
        <NavigationSection />
        <FeedbackSection />
        <OverlaySection />
        <DataDisplaySection />
        <FormSection />
      </main>

      <Footer />
    </div>
  </ToastProvider>
);

export default Landing;
