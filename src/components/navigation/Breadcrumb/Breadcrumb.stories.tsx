import type { Meta, StoryObj } from "@storybook/react-vite";
import Breadcrumb from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Navigation/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    separator: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "Products", href: "#" },
      { label: "Keyboards" },
    ],
    separator: "/",
  },
};

export const DeepNesting: Story = {
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "Library", href: "#" },
      { label: "Data", href: "#" },
      { label: "Reports", href: "#" },
      { label: "Annual 2024" },
    ],
  },
};

export const ChevronSeparator: Story = {
  args: {
    items: [
      { label: "Dashboard", href: "#" },
      { label: "Settings", href: "#" },
      { label: "Profile" },
    ],
    separator: "›",
  },
};

export const OnClick: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: "Home", onClick: () => alert("Home clicked") },
        { label: "Category", onClick: () => alert("Category clicked") },
        { label: "Current Page" },
      ]}
    />
  ),
};
