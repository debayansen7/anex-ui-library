import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Data Display/Accordion",
  component: Accordion,
  argTypes: {
    multiple: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Single: Story = {
  args: { defaultOpen: "item1" },
  render: (args) => (
    <div style={{ maxWidth: 560 }}>
      <Accordion {...args}>
        <AccordionItem id="item1">
          <AccordionTrigger>What is CleanUI?</AccordionTrigger>
          <AccordionPanel>
            CleanUI is an accessible, themeable React component library built with CSS Modules and Tailwind CSS v4.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem id="item2">
          <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
          <AccordionPanel>
            Yes. Apply <code>data-theme="dark"</code> to the root <code>html</code> element to switch themes.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem id="item3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionPanel>
            All components follow WAI-ARIA patterns. Accordion uses <code>aria-expanded</code>, <code>aria-controls</code>, and <code>role="region"</code>.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Multiple: Story = {
  args: { multiple: true, defaultOpen: ["item1", "item3"] },
  render: (args) => (
    <div style={{ maxWidth: 560 }}>
      <Accordion {...args}>
        <AccordionItem id="item1">
          <AccordionTrigger>Section one</AccordionTrigger>
          <AccordionPanel>Content for section one.</AccordionPanel>
        </AccordionItem>
        <AccordionItem id="item2">
          <AccordionTrigger>Section two</AccordionTrigger>
          <AccordionPanel>Content for section two.</AccordionPanel>
        </AccordionItem>
        <AccordionItem id="item3">
          <AccordionTrigger>Section three</AccordionTrigger>
          <AccordionPanel>Content for section three.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
