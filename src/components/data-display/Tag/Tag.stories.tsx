import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Tag from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Data Display/Tag",
  component: Tag,
  argTypes: {
    variant: { control: "select", options: ["default", "primary", "success", "warning", "error", "info"] },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: { variant: "default", children: "React" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
      <Tag variant="default">Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="info">Info</Tag>
    </div>
  ),
};

export const Dismissible: Story = {
  render: () => {
    const [tags, setTags] = React.useState(["React", "TypeScript", "Tailwind", "CSS Modules"]);
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
        {tags.map((tag) => (
          <Tag
            key={tag}
            variant="primary"
            onRemove={() => setTags((t) => t.filter((x) => x !== tag))}
            removeLabel={`Remove ${tag}`}
          >
            {tag}
          </Tag>
        ))}
      </div>
    );
  },
};
