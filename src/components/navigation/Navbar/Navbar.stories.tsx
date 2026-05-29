import type { Meta, StoryObj } from "@storybook/react-vite";
import { Navbar, NavbarBrand, NavbarNav, NavbarActions } from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Navigation/Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: () => (
    <Navbar sticky={false}>
      <NavbarBrand href="#">Anex UI</NavbarBrand>
      <NavbarNav>
        <a href="#" style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", textDecoration: "none" }}>Docs</a>
        <a href="#" style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", textDecoration: "none" }}>Components</a>
        <a href="#" style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", textDecoration: "none" }}>Theming</a>
      </NavbarNav>
      <NavbarActions>
        <button style={{ padding: "var(--space-1-5) var(--space-4)", borderRadius: "var(--radius-md)", background: "var(--color-primary)", color: "var(--color-primary-foreground)", border: "none", cursor: "pointer", fontSize: "var(--text-sm)" }}>
          Get started
        </button>
      </NavbarActions>
    </Navbar>
  ),
};
