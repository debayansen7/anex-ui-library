import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Data Display/Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Inactive" },
  { id: 4, name: "David Brown", email: "david@example.com", role: "Editor", status: "Active" },
];

export const Default: Story = {
  render: () => (
    <Table caption="Team members">
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((u) => (
          <TableRow key={u.id}>
            <TableCell>{u.name}</TableCell>
            <TableCell>{u.email}</TableCell>
            <TableCell>{u.role}</TableCell>
            <TableCell>{u.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
