import React, { useState } from "react";
import { Alert, Badge, Spinner, Progress, Skeleton } from "../../../components/feedback";
import { useToast } from "../../../components/feedback";
import { Button } from "../../../components/basic";
import { Stack } from "../../../components/layout";
import DemoCard from "../shared/DemoCard";
import SectionHeader from "../shared/SectionHeader";

const ToastDemo = () => {
  const { toast } = useToast();
  return (
    <Stack direction="row" gap="2" wrap>
      <Button size="sm" variant="secondary" onClick={() => toast("This is a default toast")}>
        Default
      </Button>
      <Button size="sm" variant="secondary" onClick={() => toast({ message: "Saved successfully!", type: "success" })}>
        Success
      </Button>
      <Button size="sm" variant="secondary" onClick={() => toast({ message: "Something went wrong", type: "error" })}>
        Error
      </Button>
      <Button size="sm" variant="secondary" onClick={() => toast({ message: "Please review your input", type: "warning" })}>
        Warning
      </Button>
      <Button size="sm" variant="secondary" onClick={() => toast({ message: "New version available", type: "info" })}>
        Info
      </Button>
    </Stack>
  );
};

const FeedbackSection = () => {
  const [progress, setProgress] = useState(65);

  return (
    <section>
      <SectionHeader
        id="feedback"
        title="Feedback"
        description="Status and loading indicators — alerts, badges, spinners, progress bars, and toasts."
        count={6}
        icon="💬"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "var(--space-4)",
        }}
      >
        <DemoCard
          title="Alert"
          description="Inline message banners for success, error, warning, and info states."
          code={`import { Alert } from "anexui";

<Alert variant="success" title="Saved!">
  Your changes have been saved.
</Alert>

<Alert variant="error" title="Error" onDismiss={() => {}}>
  Something went wrong. Please try again.
</Alert>

<Alert variant="warning">This action cannot be undone.</Alert>
<Alert variant="info" title="Heads up">Check the docs.</Alert>`}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", width: "100%" }}>
            <Alert variant="success" title="Changes saved">Your profile has been updated.</Alert>
            <Alert variant="error" title="Upload failed">Max file size is 5 MB.</Alert>
            <Alert variant="warning">Your session expires in 5 minutes.</Alert>
            <Alert variant="info" title="New feature">Dark mode is now available.</Alert>
          </div>
        </DemoCard>

        <DemoCard
          title="Badge"
          description="Inline label chip with six colour variants, two sizes, and a dot mode."
          code={`import { Badge } from "anexui";

<Badge variant="default">Default</Badge>
<Badge variant="primary">New</Badge>
<Badge variant="success">Approved</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Rejected</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="primary" dot />  {/* dot-only */}`}
        >
          <Stack direction="row" gap="2" wrap align="center">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">New</Badge>
            <Badge variant="success">Approved</Badge>
            <Badge variant="warning">Pending</Badge>
            <Badge variant="error">Failed</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="primary" dot />
            <Badge variant="success" dot />
            <Badge variant="error" dot />
          </Stack>
        </DemoCard>

        <DemoCard
          title="Spinner"
          description="Animated loading indicator with accessible sr-only label."
          code={`import { Spinner } from "anexui";

<Spinner size="sm" label="Loading…" />
<Spinner size="md" label="Loading…" />
<Spinner size="lg" label="Loading…" />`}
        >
          <Stack direction="row" gap="6" align="center">
            <Spinner size="sm" label="Loading" />
            <Spinner size="md" label="Loading" />
            <Spinner size="lg" label="Loading" />
          </Stack>
        </DemoCard>

        <DemoCard
          title="Progress"
          description="ARIA progressbar with label, numeric value display, and status variants."
          code={`import { Progress } from "anexui";

<Progress value={65} label="Upload" showValue />
<Progress value={100} variant="success" label="Complete" showValue />
<Progress value={40} variant="warning" label="Quota" showValue />
<Progress value={80} variant="error" label="Memory" showValue />`}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", width: "100%" }}>
            <Progress value={progress} label="Upload progress" showValue />
            <Progress value={100} variant="success" label="Complete" showValue />
            <Progress value={42} variant="warning" label="Storage quota" showValue />
            <Progress value={88} variant="error" label="CPU usage" showValue />
            <div style={{ display: "flex", gap: "var(--space-2)", justifyContent: "center" }}>
              <button
                onClick={() => setProgress((p) => Math.max(0, p - 10))}
                style={{ padding: "2px 10px", fontSize: "var(--text-xs)", fontFamily: "var(--font-sans)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", background: "var(--color-surface)", cursor: "pointer", color: "var(--color-text)" }}
              >
                −10
              </button>
              <button
                onClick={() => setProgress((p) => Math.min(100, p + 10))}
                style={{ padding: "2px 10px", fontSize: "var(--text-xs)", fontFamily: "var(--font-sans)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", background: "var(--color-surface)", cursor: "pointer", color: "var(--color-text)" }}
              >
                +10
              </button>
            </div>
          </div>
        </DemoCard>

        <DemoCard
          title="Skeleton"
          description="Shimmer placeholder for text, circular, and rectangular content shapes."
          code={`import { Skeleton } from "anexui";

<Skeleton variant="circle" width={48} height={48} />
<Skeleton variant="text" width="60%" height={16} />
<Skeleton variant="rect" width="100%" height={120} />`}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", width: "100%" }}>
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
              <Skeleton variant="circle" width={48} height={48} />
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                <Skeleton variant="text" width="60%" height={14} />
                <Skeleton variant="text" width="90%" height={12} />
              </div>
            </div>
            <Skeleton variant="rect" width="100%" height={80} />
          </div>
        </DemoCard>

        <DemoCard
          title="Toast"
          description="Imperative toast system with auto-dismiss and aria-live announcements."
          code={`import { useToast } from "anexui";

const { toast } = useToast();

toast("Simple message");
toast({ message: "Saved!", type: "success" });
toast({ message: "Failed", type: "error", duration: 5000 });
toast({ message: "Warning", type: "warning" });
toast({ message: "FYI", type: "info" });

// Wrap your app once:
import { ToastProvider } from "anexui";
<ToastProvider><App /></ToastProvider>`}
        >
          <ToastDemo />
        </DemoCard>
      </div>
    </section>
  );
};

export default FeedbackSection;
