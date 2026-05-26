import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Pagination from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Navigation/Pagination",
  component: Pagination,
  argTypes: {
    total: { control: { type: "number", min: 1 } },
    page: { control: { type: "number", min: 1 } },
    siblings: { control: { type: "number", min: 0, max: 3 } },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <p style={{ color: "var(--color-text-subtle)", fontSize: "var(--text-sm)", margin: 0 }}>
          Page <strong style={{ color: "var(--color-text)" }}>{page}</strong> of 20
        </p>
        <Pagination total={20} page={page} onChange={setPage} />
      </div>
    );
  },
};

export const FewPages: Story = {
  render: () => {
    const [page, setPage] = React.useState(2);
    return <Pagination total={5} page={page} onChange={setPage} />;
  },
};

export const ManySiblings: Story = {
  render: () => {
    const [page, setPage] = React.useState(10);
    return <Pagination total={30} page={page} onChange={setPage} siblings={2} />;
  },
};

export const NearEnd: Story = {
  render: () => {
    const [page, setPage] = React.useState(18);
    return <Pagination total={20} page={page} onChange={setPage} />;
  },
};
