import React from "react";
import { Container, Stack, Grid, Divider } from "../../../components/layout";
import DemoCard from "../shared/DemoCard";
import SectionHeader from "../shared/SectionHeader";

const Box = ({ children, color = "var(--color-primary-subtle)" }: { children: React.ReactNode; color?: string }) => (
  <div
    style={{
      background: color,
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-sm)",
      padding: "var(--space-2) var(--space-3)",
      fontSize: "var(--text-xs)",
      fontFamily: "var(--font-sans)",
      color: "var(--color-text-subtle)",
      textAlign: "center",
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </div>
);

const LayoutSection = () => (
  <section>
    <SectionHeader
      id="layout"
      title="Layout"
      description="Structural building blocks — containers, flex stacks, CSS grids, and dividers."
      count={4}
      icon="🏗️"
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "var(--space-4)",
      }}
    >
      <DemoCard
        title="Container"
        description="Centered content wrapper with max-width presets from sm to full."
        code={`import { Container } from "anexui";

<Container maxWidth="lg">
  <p>Page content constrained to lg width</p>
</Container>

<Container maxWidth="sm">
  <p>Narrower sm container</p>
</Container>`}
      >
        <div style={{ width: "100%" }}>
          {(["sm", "md", "lg"] as const).map((size) => (
            <Container key={size} maxWidth={size} style={{ marginBottom: "var(--space-2)" }}>
              <div
                style={{
                  background: "var(--color-primary-subtle)",
                  border: "1px dashed var(--color-primary)",
                  borderRadius: "var(--radius-sm)",
                  padding: "var(--space-2)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-text-subtle)",
                  fontFamily: "var(--font-sans)",
                  textAlign: "center",
                }}
              >
                maxWidth="{size}"
              </div>
            </Container>
          ))}
        </div>
      </DemoCard>

      <DemoCard
        title="Stack"
        description="Flexbox stack — control direction, gap, alignment, and wrapping."
        code={`import { Stack } from "anexui";

// Column
<Stack direction="column" gap="3">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Stack>

// Row with space-between
<Stack direction="row" gap="3" justify="between" align="center">
  <Box>Left</Box>
  <Box>Right</Box>
</Stack>`}
      >
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <Stack direction="row" gap="3" align="center">
            <Box>Row</Box>
            <Box>Item</Box>
            <Box>Example</Box>
          </Stack>
          <Stack direction="row" gap="3" justify="between" align="center" style={{ width: "100%" }}>
            <Box>Left</Box>
            <Box>Center</Box>
            <Box>Right</Box>
          </Stack>
        </div>
      </DemoCard>

      <DemoCard
        title="Grid"
        description="CSS grid with column count and gap presets."
        code={`import { Grid } from "anexui";

<Grid cols={3} gap="4">
  <Card>One</Card>
  <Card>Two</Card>
  <Card>Three</Card>
</Grid>`}
      >
        <div style={{ width: "100%" }}>
          <Grid cols={3} gap="3" style={{ width: "100%" }}>
            {["One", "Two", "Three", "Four", "Five", "Six"].map((label) => (
              <Box key={label}>{label}</Box>
            ))}
          </Grid>
        </div>
      </DemoCard>

      <DemoCard
        title="Divider"
        description="Horizontal or vertical rule with an optional centre label."
        code={`import { Divider } from "anexui";

<Divider />
<Divider label="or" />

// Vertical (inside a row)
<Stack direction="row" style={{ height: 48 }}>
  <span>Left</span>
  <Divider orientation="vertical" />
  <span>Right</span>
</Stack>`}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", width: "100%" }}>
          <Divider />
          <Divider label="or continue with" />
          <Stack direction="row" align="center" gap="4" style={{ height: 40 }}>
            <Box>Left</Box>
            <Divider orientation="vertical" />
            <Box>Right</Box>
          </Stack>
        </div>
      </DemoCard>
    </div>
  </section>
);

export default LayoutSection;
