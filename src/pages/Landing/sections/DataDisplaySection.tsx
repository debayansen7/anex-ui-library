import React, { useState } from "react";
import {
  Avatar,
  Card, CardHeader, CardBody, CardFooter,
  Table, TableHead, TableBody, TableRow, TableHeader, TableCell,
  Accordion, AccordionItem, AccordionTrigger, AccordionPanel,
  Tag,
  Carousel,
  Banner,
  Timeline,
} from "../../../components/data-display";
import { Button } from "../../../components/basic";
import { Stack } from "../../../components/layout";
import DemoCard from "../shared/DemoCard";
import SectionHeader from "../shared/SectionHeader";

const USERS = [
  { name: "Alice Chen", email: "alice@example.com", role: "Designer", status: "Active" },
  { name: "Bob Martinez", email: "bob@example.com", role: "Engineer", status: "Active" },
  { name: "Carol White", email: "carol@example.com", role: "Manager", status: "Away" },
];

const FAQ = [
  { id: "q1", q: "Is Anex UI free to use?", a: "Yes — MIT licensed. Use it in personal and commercial projects." },
  { id: "q2", q: "Does it support dark mode?", a: "Yes. Set data-theme=\"dark\" on <html> to switch themes at runtime." },
  { id: "q3", q: "Does it require Tailwind CSS?", a: "Tailwind is used internally. You don't need it configured in your app — just import the stylesheet." },
];

const TIMELINE_ITEMS = [
  { id: "1", title: "Order placed", time: "10:00 AM", status: "completed" as const, description: "Payment confirmed" },
  { id: "2", title: "Processing", time: "10:15 AM", status: "completed" as const },
  { id: "3", title: "Shipped", time: "2:00 PM", status: "current" as const, description: "In transit with FedEx" },
  { id: "4", title: "Out for delivery", status: "upcoming" as const },
  { id: "5", title: "Delivered", status: "upcoming" as const },
];

const CAROUSEL_SLIDES = [
  { bg: "var(--color-primary-subtle)", label: "Build fast with 51 components" },
  { bg: "var(--color-success-subtle)", label: "WCAG AA accessible by default" },
  { bg: "var(--color-info-subtle)", label: "Light & dark themes out of the box" },
  { bg: "var(--color-warning-subtle)", label: "React 19 • TypeScript • Tailwind v4" },
];

const DataDisplaySection = () => {
  const [tags, setTags] = useState(["React", "TypeScript", "Tailwind", "Accessible", "MIT"]);
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <section>
      <SectionHeader
        id="data-display"
        title="Data Display"
        description="Structured content components — avatars, cards, tables, accordions, tags, carousels, banners, and timelines."
        count={8}
        icon="📊"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "var(--space-4)",
        }}
      >
        <DemoCard
          title="Avatar"
          description="Image with fallback initials, five sizes, and four status indicators."
          code={`import { Avatar } from "anexui";

<Avatar initials="JD" size="xl" status="online" />
<Avatar initials="BM" size="lg" status="away" />
<Avatar initials="CW" size="md" status="busy" />
<Avatar initials="AS" size="sm" status="offline" />
<Avatar size="xs" />`}
        >
          <Stack direction="row" gap="3" align="center">
            <Avatar initials="AC" size="xl" status="online" />
            <Avatar initials="BM" size="lg" status="away" />
            <Avatar initials="CW" size="md" status="busy" />
            <Avatar initials="DS" size="sm" status="offline" />
            <Avatar size="xs" />
          </Stack>
        </DemoCard>

        <DemoCard
          title="Card"
          description="Compound card with CardHeader, CardBody, and CardFooter sub-components."
          code={`import { Card, CardHeader, CardBody, CardFooter } from "anexui";

<Card>
  <CardHeader>
    <h3>Card title</h3>
  </CardHeader>
  <CardBody>
    <p>Card body content</p>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
        >
          <Card style={{ width: "100%", maxWidth: 280 }}>
            <CardHeader>
              <p style={{ margin: 0, fontWeight: 600, fontSize: "var(--text-sm)", fontFamily: "var(--font-sans)", color: "var(--color-text)" }}>
                Project report
              </p>
              <p style={{ margin: "var(--space-1) 0 0", fontSize: "var(--text-xs)", color: "var(--color-text-subtle)", fontFamily: "var(--font-sans)" }}>
                Last updated 2 hours ago
              </p>
            </CardHeader>
            <CardBody>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", fontFamily: "var(--font-sans)", lineHeight: 1.6 }}>
                Q2 metrics are up 14% vs last quarter. All KPIs on track.
              </p>
            </CardBody>
            <CardFooter>
              <Stack direction="row" gap="2">
                <Button size="sm" variant="primary">View report</Button>
                <Button size="sm" variant="ghost">Share</Button>
              </Stack>
            </CardFooter>
          </Card>
        </DemoCard>

        <DemoCard
          title="Table"
          description='Accessible table with scope="col" headers, caption, and compound sub-components.'
          code={`import {
  Table, TableHead, TableBody,
  TableRow, TableHeader, TableCell
} from "anexui";

<Table caption="Team members">
  <TableHead>
    <TableRow>
      <TableHeader scope="col">Name</TableHeader>
      <TableHeader scope="col">Role</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Alice Chen</TableCell>
      <TableCell>Designer</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
        >
          <div style={{ width: "100%", overflowX: "auto" }}>
            <Table caption="Team members">
              <TableHead>
                <TableRow>
                  <TableHeader scope="col">Name</TableHeader>
                  <TableHeader scope="col">Role</TableHeader>
                  <TableHeader scope="col">Status</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {USERS.map((u) => (
                  <TableRow key={u.email}>
                    <TableCell>{u.name}</TableCell>
                    <TableCell>{u.role}</TableCell>
                    <TableCell>{u.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DemoCard>

        <DemoCard
          title="Accordion"
          description="Single or multi-expand panels using the hidden attribute for accessibility."
          code={`import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from "anexui";

<Accordion multiple defaultOpen={["q1"]}>
  <AccordionItem id="q1">
    <AccordionTrigger>Is it free?</AccordionTrigger>
    <AccordionPanel>Yes, MIT licensed.</AccordionPanel>
  </AccordionItem>
  <AccordionItem id="q2">
    <AccordionTrigger>Dark mode?</AccordionTrigger>
    <AccordionPanel>Yes, via data-theme attribute.</AccordionPanel>
  </AccordionItem>
</Accordion>`}
        >
          <div style={{ width: "100%" }}>
            <Accordion defaultOpen="q1">
              {FAQ.map(({ id, q, a }) => (
                <AccordionItem key={id} id={id}>
                  <AccordionTrigger>{q}</AccordionTrigger>
                  <AccordionPanel>
                    <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", fontFamily: "var(--font-sans)" }}>{a}</p>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </DemoCard>

        <DemoCard
          title="Tag"
          description="Inline chip with six colour variants and an optional dismiss button."
          code={`import { Tag } from "anexui";

<Tag variant="primary">React</Tag>
<Tag variant="success">Verified</Tag>
<Tag variant="warning">Beta</Tag>
<Tag variant="error" onRemove={() => {}}>Deprecated</Tag>
<Tag variant="info">v2.0</Tag>`}
        >
          <Stack direction="row" gap="2" wrap align="center">
            {tags.map((tag) => (
              <Tag key={tag} variant="primary" onRemove={() => setTags((t) => t.filter((x) => x !== tag))}>
                {tag}
              </Tag>
            ))}
            {tags.length === 0 && (
              <Button size="sm" variant="ghost" onClick={() => setTags(["React", "TypeScript", "Tailwind", "Accessible", "MIT"])}>
                Reset tags
              </Button>
            )}
          </Stack>
        </DemoCard>

        <DemoCard
          title="Carousel"
          description="Slide carousel with arrows, dots, autoPlay, loop, and full ARIA carousel pattern."
          code={`import { Carousel } from "anexui";

<Carousel
  autoPlay
  interval={3000}
  loop
  showArrows
  showDots
  label="Feature highlights"
>
  <div>Slide one content</div>
  <div>Slide two content</div>
  <div>Slide three content</div>
</Carousel>`}
        >
          <div style={{ width: "100%" }}>
            <Carousel autoPlay interval={3000} loop showArrows showDots label="Feature highlights">
              {CAROUSEL_SLIDES.map(({ bg, label }) => (
                <div
                  key={label}
                  style={{
                    background: bg,
                    borderRadius: "var(--radius-md)",
                    padding: "var(--space-8) var(--space-6)",
                    textAlign: "center",
                    fontSize: "var(--text-sm)",
                    fontFamily: "var(--font-sans)",
                    color: "var(--color-text)",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </div>
              ))}
            </Carousel>
          </div>
        </DemoCard>

        <DemoCard
          title="Banner"
          description="Full-width site message bar with info, success, warning, error, and promo variants."
          code={`import { Banner } from "anexui";

<Banner
  variant="promo"
  title="Special offer"
  description="Get 3 months free — upgrade before Friday."
  action={{ label: "Claim offer", onClick: () => {} }}
  onDismiss={() => {}}
/>

<Banner
  variant="warning"
  title="Scheduled maintenance"
  description="Services offline Sunday 2–4 AM UTC."
/>`}
        >
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {bannerVisible ? (
              <Banner
                variant="promo"
                title="Special offer"
                description="Get 3 months free — upgrade before Friday."
                action={{ label: "Claim offer", onClick: () => {} }}
                onDismiss={() => setBannerVisible(false)}
              />
            ) : (
              <Button size="sm" variant="ghost" onClick={() => setBannerVisible(true)}>Restore banner</Button>
            )}
            <Banner
              variant="warning"
              title="Scheduled maintenance"
              description="Services will be offline Sunday 2–4 AM UTC."
            />
          </div>
        </DemoCard>

        <DemoCard
          title="Timeline"
          description="Vertical event timeline with completed, current, and upcoming status indicators."
          code={`import { Timeline } from "anexui";

<Timeline items={[
  { id: "1", title: "Order placed",  time: "10:00 AM", status: "completed" },
  { id: "2", title: "Processing",   time: "10:15 AM", status: "completed" },
  { id: "3", title: "Shipped",      time: "2:00 PM",  status: "current",
    description: "In transit with FedEx" },
  { id: "4", title: "Out for delivery", status: "upcoming" },
  { id: "5", title: "Delivered",    status: "upcoming" },
]} />`}
        >
          <div style={{ width: "100%" }}>
            <Timeline items={TIMELINE_ITEMS} />
          </div>
        </DemoCard>
      </div>
    </section>
  );
};

export default DataDisplaySection;
