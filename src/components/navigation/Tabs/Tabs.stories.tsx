import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabList, Tab, TabPanel } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  argTypes: {
    variant: { control: "radio", options: ["line", "pill"] },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Line: Story = {
  args: { variant: "line", defaultActiveId: "overview" },
  render: (args) => (
    <Tabs {...args}>
      <TabList>
        <Tab id="overview">Overview</Tab>
        <Tab id="analytics">Analytics</Tab>
        <Tab id="settings">Settings</Tab>
        <Tab id="billing" disabled>Billing</Tab>
      </TabList>
      <TabPanel id="overview">
        <p style={{ color: "var(--color-text)", margin: 0 }}>Overview panel content.</p>
      </TabPanel>
      <TabPanel id="analytics">
        <p style={{ color: "var(--color-text)", margin: 0 }}>Analytics panel content.</p>
      </TabPanel>
      <TabPanel id="settings">
        <p style={{ color: "var(--color-text)", margin: 0 }}>Settings panel content.</p>
      </TabPanel>
      <TabPanel id="billing">
        <p style={{ color: "var(--color-text)", margin: 0 }}>Billing panel content.</p>
      </TabPanel>
    </Tabs>
  ),
};

export const Pill: Story = {
  args: { variant: "pill", defaultActiveId: "month" },
  render: (args) => (
    <Tabs {...args}>
      <TabList>
        <Tab id="day">Day</Tab>
        <Tab id="week">Week</Tab>
        <Tab id="month">Month</Tab>
        <Tab id="year">Year</Tab>
      </TabList>
      <TabPanel id="day">
        <p style={{ color: "var(--color-text)", margin: 0 }}>Daily view.</p>
      </TabPanel>
      <TabPanel id="week">
        <p style={{ color: "var(--color-text)", margin: 0 }}>Weekly view.</p>
      </TabPanel>
      <TabPanel id="month">
        <p style={{ color: "var(--color-text)", margin: 0 }}>Monthly view.</p>
      </TabPanel>
      <TabPanel id="year">
        <p style={{ color: "var(--color-text)", margin: 0 }}>Yearly view.</p>
      </TabPanel>
    </Tabs>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [active, setActive] = React.useState("tab1");
    return (
      <div>
        <p style={{ color: "var(--color-text-subtle)", fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
          Active: <strong style={{ color: "var(--color-text)" }}>{active}</strong>
        </p>
        <Tabs activeId={active} onChange={setActive}>
          <TabList>
            <Tab id="tab1">Tab 1</Tab>
            <Tab id="tab2">Tab 2</Tab>
            <Tab id="tab3">Tab 3</Tab>
          </TabList>
          <TabPanel id="tab1"><p style={{ color: "var(--color-text)", margin: 0 }}>Panel 1</p></TabPanel>
          <TabPanel id="tab2"><p style={{ color: "var(--color-text)", margin: 0 }}>Panel 2</p></TabPanel>
          <TabPanel id="tab3"><p style={{ color: "var(--color-text)", margin: 0 }}>Panel 3</p></TabPanel>
        </Tabs>
      </div>
    );
  },
};
