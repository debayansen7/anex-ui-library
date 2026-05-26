import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Timeline from "./Timeline";

const meta: Meta<typeof Timeline> = {
  title: "Data Display/Timeline",
  component: Timeline,
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const OrderTracking: Story = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <Timeline
        items={[
          { id: "1", title: "Order placed",      description: "We received your order #8472.",                      time: "Jan 5, 2024", dateTime: "2024-01-05", status: "completed" },
          { id: "2", title: "Payment confirmed",  description: "Your payment has been processed successfully.",       time: "Jan 5, 2024", dateTime: "2024-01-05", status: "completed" },
          { id: "3", title: "Order shipped",      description: "Your package is on its way. Tracking: TK9824.",      time: "Jan 7, 2024", dateTime: "2024-01-07", status: "completed" },
          { id: "4", title: "Out for delivery",   description: "Your package will be delivered today.",               time: "Jan 8, 2024", dateTime: "2024-01-08", status: "current"   },
          { id: "5", title: "Delivered",          description: "Package delivered to your address.",                  time: "Expected today",                        status: "upcoming"  },
        ]}
      />
    </div>
  ),
};

export const ProjectMilestones: Story = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <Timeline
        items={[
          { id: "1", title: "Project kickoff",   description: "Initial planning and team onboarding.",  time: "Mar 1",  dateTime: "2024-03-01", status: "completed" },
          { id: "2", title: "Design phase",       description: "Wireframes and component specs.",         time: "Mar 10", dateTime: "2024-03-10", status: "completed" },
          { id: "3", title: "Development",        description: "Building the component library.",         time: "Mar 20", dateTime: "2024-03-20", status: "current"   },
          { id: "4", title: "QA & review",        description: "Testing and accessibility audit.",        time: "Apr 5",  dateTime: "2024-04-05", status: "upcoming"  },
          { id: "5", title: "Launch",             description: "Publishing to npm.",                      time: "Apr 15", dateTime: "2024-04-15", status: "upcoming"  },
        ]}
      />
    </div>
  ),
};

export const NoTimestamps: Story = {
  render: () => (
    <div style={{ maxWidth: 360 }}>
      <Timeline
        items={[
          { id: "1", title: "Account created",    status: "completed" },
          { id: "2", title: "Email verified",     status: "completed" },
          { id: "3", title: "Profile completed",  status: "current"   },
          { id: "4", title: "First login reward", status: "upcoming"  },
        ]}
      />
    </div>
  ),
};
