import React, { useState } from "react";
import { Modal, Drawer, Tooltip, Popover } from "../../../components/overlay";
import { Button } from "../../../components/basic";
import { Stack } from "../../../components/layout";
import DemoCard from "../shared/DemoCard";
import SectionHeader from "../shared/SectionHeader";

const OverlaySection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerSide, setDrawerSide] = useState<"right" | "left" | "bottom">("right");

  const openDrawer = (side: "right" | "left" | "bottom") => {
    setDrawerSide(side);
    setDrawerOpen(true);
  };

  return (
    <section>
      <SectionHeader
        id="overlay"
        title="Overlay"
        description="Floating and fullscreen layers — modals, drawers, tooltips, and popovers."
        count={4}
        icon="🪟"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "var(--space-4)",
        }}
      >
        <DemoCard
          title="Modal"
          description="Native <dialog> with showModal() — free focus trap and Escape key handling."
          code={`import { Modal, Button } from "anexui";
import { useState } from "react";

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open modal</Button>

<Modal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Confirm action"
  description="This cannot be undone."
  size="md"
>
  <p>Are you sure you want to continue?</p>
  <Button onClick={() => setOpen(false)}>Confirm</Button>
</Modal>`}
        >
          <>
            <Button variant="primary" size="sm" onClick={() => setModalOpen(true)}>
              Open modal
            </Button>
            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Confirm action"
              description="This action cannot be undone."
              size="md"
            >
              <p style={{ margin: "0 0 var(--space-4)", fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", fontFamily: "var(--font-sans)" }}>
                Are you sure you want to delete this item? All associated data will be permanently removed.
              </p>
              <Stack direction="row" gap="2" justify="end">
                <Button variant="ghost" size="sm" onClick={() => setModalOpen(false)}>Cancel</Button>
                <Button variant="danger" size="sm" onClick={() => setModalOpen(false)}>Delete</Button>
              </Stack>
            </Modal>
          </>
        </DemoCard>

        <DemoCard
          title="Drawer"
          description="Side/bottom sheet using <dialog>. Supports right, left, and bottom positions."
          code={`import { Drawer, Button } from "anexui";
import { useState } from "react";

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open drawer</Button>

<Drawer
  isOpen={open}
  onClose={() => setOpen(false)}
  side="right"
  size="md"
  title="Navigation"
>
  <nav>Menu items here</nav>
</Drawer>`}
        >
          <>
            <Stack direction="row" gap="2" wrap>
              <Button size="sm" variant="secondary" onClick={() => openDrawer("right")}>Right</Button>
              <Button size="sm" variant="secondary" onClick={() => openDrawer("left")}>Left</Button>
              <Button size="sm" variant="secondary" onClick={() => openDrawer("bottom")}>Bottom</Button>
            </Stack>
            <Drawer
              isOpen={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              side={drawerSide}
              size="md"
              title={`${drawerSide.charAt(0).toUpperCase() + drawerSide.slice(1)} drawer`}
            >
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-subtle)", fontFamily: "var(--font-sans)", margin: 0 }}>
                Drawer content slides in from the {drawerSide}. Press Escape or click outside to close.
              </p>
            </Drawer>
          </>
        </DemoCard>

        <DemoCard
          title="Tooltip"
          description="Pure CSS tooltip on hover and focus-within. Supports top, bottom, left, right."
          code={`import { Tooltip, Button } from "anexui";

<Tooltip content="Saves your progress" side="top">
  <Button>Save</Button>
</Tooltip>

<Tooltip content="Permanently removes the item" side="bottom">
  <Button variant="danger">Delete</Button>
</Tooltip>

<Tooltip content="Opens in a new tab" side="right">
  <Button variant="ghost">External link ↗</Button>
</Tooltip>`}
        >
          <Stack direction="row" gap="3" wrap align="center">
            <Tooltip content="Saves your progress" side="top">
              <Button size="sm" variant="primary">Save</Button>
            </Tooltip>
            <Tooltip content="Permanently removes the item" side="bottom">
              <Button size="sm" variant="danger">Delete</Button>
            </Tooltip>
            <Tooltip content="Copy to clipboard" side="right">
              <Button size="sm" variant="ghost">Copy</Button>
            </Tooltip>
          </Stack>
        </DemoCard>

        <DemoCard
          title="Popover"
          description="Click-triggered floating panel with aria-expanded on the trigger element."
          code={`import { Popover, Button } from "anexui";

<Popover
  content={
    <div style={{ minWidth: 160 }}>
      <p>Filter options</p>
      <Button size="sm" variant="ghost">By date</Button>
      <Button size="sm" variant="ghost">By name</Button>
    </div>
  }
  side="bottom"
  align="start"
>
  <Button>Filter ▾</Button>
</Popover>`}
        >
          <Stack direction="row" gap="3" wrap>
            <Popover
              content={
                <div style={{ minWidth: 160, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                  <p style={{ margin: "0 0 var(--space-2)", fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--color-text-subtle)", fontFamily: "var(--font-sans)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Filter by</p>
                  {["Date", "Name", "Status", "Owner"].map((opt) => (
                    <button key={opt} style={{ textAlign: "left", padding: "var(--space-1) var(--space-2)", background: "none", border: "none", borderRadius: "var(--radius-sm)", cursor: "pointer", fontSize: "var(--text-sm)", fontFamily: "var(--font-sans)", color: "var(--color-text)" }}>
                      {opt}
                    </button>
                  ))}
                </div>
              }
              side="bottom"
              align="start"
            >
              <Button size="sm" variant="outline">Filter ▾</Button>
            </Popover>

            <Popover
              content={
                <div style={{ minWidth: 140, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                  {["Edit", "Duplicate", "Archive", "Delete"].map((opt) => (
                    <button key={opt} style={{ textAlign: "left", padding: "var(--space-1) var(--space-2)", background: "none", border: "none", borderRadius: "var(--radius-sm)", cursor: "pointer", fontSize: "var(--text-sm)", fontFamily: "var(--font-sans)", color: opt === "Delete" ? "var(--color-danger)" : "var(--color-text)" }}>
                      {opt}
                    </button>
                  ))}
                </div>
              }
              side="bottom"
              align="end"
            >
              <Button size="sm" variant="ghost">Actions ⋯</Button>
            </Popover>
          </Stack>
        </DemoCard>
      </div>
    </section>
  );
};

export default OverlaySection;
