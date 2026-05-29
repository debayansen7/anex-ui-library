import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SideNav, SideNavGroup, SideNavItem } from "./SideNav";

const meta: Meta<typeof SideNav> = {
  title: "Navigation/SideNav",
  component: SideNav,
};

export default meta;
type Story = StoryObj<typeof SideNav>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = React.useState("button");
    return (
      <div style={{ width: 220 }}>
        <SideNav>
          <SideNavGroup label="Getting Started">
            <SideNavItem href="#" active={active === "intro"} onClick={() => setActive("intro")}>Introduction</SideNavItem>
            <SideNavItem href="#" active={active === "install"} onClick={() => setActive("install")}>Installation</SideNavItem>
            <SideNavItem href="#" active={active === "theming"} onClick={() => setActive("theming")}>Theming</SideNavItem>
          </SideNavGroup>
          <SideNavGroup label="Components">
            <SideNavItem href="#" active={active === "button"} onClick={() => setActive("button")}>Button</SideNavItem>
            <SideNavItem href="#" active={active === "input"} onClick={() => setActive("input")}>Input</SideNavItem>
            <SideNavItem href="#" active={active === "modal"} onClick={() => setActive("modal")}>Modal</SideNavItem>
          </SideNavGroup>
        </SideNav>
      </div>
    );
  },
};
