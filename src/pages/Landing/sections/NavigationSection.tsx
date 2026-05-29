import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel, Breadcrumb, Pagination, Stepper } from "../../../components/navigation";
import DemoCard from "../shared/DemoCard";
import SectionHeader from "../shared/SectionHeader";

const STEPPER_STEPS = [
  { id: "1", label: "Account", description: "Create your account" },
  { id: "2", label: "Profile", description: "Set up your profile" },
  { id: "3", label: "Review", description: "Confirm details" },
];

const NavigationSection = () => {
  const [page, setPage] = useState(3);
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section>
      <SectionHeader
        id="navigation"
        title="Navigation"
        description="Wayfinding components — tabs, breadcrumbs, pagination, and step progress."
        count={4}
        icon="🧭"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "var(--space-4)",
        }}
      >
        <DemoCard
          title="Tabs"
          description="Line and pill variants with roving tabindex keyboard navigation."
          code={`import { Tabs, TabList, Tab, TabPanel } from "anexui";

// Line variant
<Tabs defaultActiveId="overview" variant="line">
  <TabList>
    <Tab id="overview">Overview</Tab>
    <Tab id="analytics">Analytics</Tab>
    <Tab id="settings">Settings</Tab>
  </TabList>
  <TabPanel id="overview">Overview content</TabPanel>
  <TabPanel id="analytics">Analytics content</TabPanel>
  <TabPanel id="settings">Settings content</TabPanel>
</Tabs>

// Pill variant
<Tabs defaultActiveId="home" variant="pill">
  …
</Tabs>`}
        >
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <Tabs defaultActiveId="overview" variant="line">
              <TabList>
                <Tab id="overview">Overview</Tab>
                <Tab id="analytics">Analytics</Tab>
                <Tab id="settings">Settings</Tab>
              </TabList>
              <TabPanel id="overview">
                <p style={{ margin: "var(--space-4) 0 0", fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", fontFamily: "var(--font-sans)" }}>
                  Overview panel content
                </p>
              </TabPanel>
              <TabPanel id="analytics">
                <p style={{ margin: "var(--space-4) 0 0", fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", fontFamily: "var(--font-sans)" }}>
                  Analytics panel content
                </p>
              </TabPanel>
              <TabPanel id="settings">
                <p style={{ margin: "var(--space-4) 0 0", fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", fontFamily: "var(--font-sans)" }}>
                  Settings panel content
                </p>
              </TabPanel>
            </Tabs>
            <Tabs defaultActiveId="all" variant="pill">
              <TabList>
                <Tab id="all">All</Tab>
                <Tab id="active">Active</Tab>
                <Tab id="archived">Archived</Tab>
              </TabList>
              <TabPanel id="all" />
              <TabPanel id="active" />
              <TabPanel id="archived" />
            </Tabs>
          </div>
        </DemoCard>

        <DemoCard
          title="Breadcrumb"
          description="Nav landmark with aria-label and aria-current on the last item."
          code={`import { Breadcrumb } from "anexui";

<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics", href: "/products/electronics" },
    { label: "Headphones" },
  ]}
/>`}
        >
          <div style={{ width: "100%" }}>
            <Breadcrumb
              items={[
                { label: "Home", href: "#" },
                { label: "Products", href: "#" },
                { label: "Electronics", href: "#" },
                { label: "Headphones" },
              ]}
            />
          </div>
        </DemoCard>

        <DemoCard
          title="Pagination"
          description="Smart page range with ellipsis. Accepts total pages and fires onChange."
          code={`import { Pagination } from "anexui";
import { useState } from "react";

const [page, setPage] = useState(1);

<Pagination
  total={10}
  page={page}
  onChange={setPage}
  siblings={1}
/>`}
        >
          <Pagination total={10} page={page} onChange={setPage} siblings={1} />
        </DemoCard>

        <DemoCard
          title="Stepper"
          description="Horizontal or vertical progress stepper with completed/active/upcoming states."
          code={`import { Stepper } from "anexui";

const steps = [
  { id: "1", label: "Account", description: "Create your account" },
  { id: "2", label: "Profile", description: "Set up your profile" },
  { id: "3", label: "Review", description: "Confirm details" },
];

<Stepper steps={steps} activeStep={1} orientation="horizontal" />`}
        >
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <Stepper steps={STEPPER_STEPS} activeStep={activeStep} orientation="horizontal" />
            <div style={{ display: "flex", gap: "var(--space-2)", justifyContent: "center" }}>
              <button
                onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
                disabled={activeStep === 0}
                style={{
                  padding: "var(--space-1) var(--space-3)",
                  fontSize: "var(--text-xs)",
                  fontFamily: "var(--font-sans)",
                  cursor: activeStep === 0 ? "not-allowed" : "pointer",
                  opacity: activeStep === 0 ? 0.4 : 1,
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-surface)",
                  color: "var(--color-text)",
                }}
              >
                ← Prev
              </button>
              <button
                onClick={() => setActiveStep((s) => Math.min(STEPPER_STEPS.length - 1, s + 1))}
                disabled={activeStep === STEPPER_STEPS.length - 1}
                style={{
                  padding: "var(--space-1) var(--space-3)",
                  fontSize: "var(--text-xs)",
                  fontFamily: "var(--font-sans)",
                  cursor: activeStep === STEPPER_STEPS.length - 1 ? "not-allowed" : "pointer",
                  opacity: activeStep === STEPPER_STEPS.length - 1 ? 0.4 : 1,
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-surface)",
                  color: "var(--color-text)",
                }}
              >
                Next →
              </button>
            </div>
          </div>
        </DemoCard>
      </div>
    </section>
  );
};

export default NavigationSection;
