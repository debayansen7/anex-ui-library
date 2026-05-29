import React, { useState } from "react";
import {
  Button,
  Label,
  Input,
  Textarea,
  Checkbox,
  RadioGroup,
  Radio,
  Select,
  Switch,
  Slider,
} from "../../../components/basic";
import DemoCard from "../shared/DemoCard";
import SectionHeader from "../shared/SectionHeader";

const BasicSection = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1800);
  };

  return (
    <section>
      <SectionHeader
        id="basic"
        title="Basic / Form Controls"
        description="Fundamental interactive elements — buttons, inputs, toggles, and selectors."
        count={9}
        icon="🎛️"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "var(--space-4)",
        }}
      >
        <DemoCard
          title="Button"
          description="Solid, outline, ghost, secondary, and danger variants with xs–lg sizes and a loading state."
          code={`import { Button } from "anexui";

<Button variant="primary">Save changes</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="outline">Learn more</Button>
<Button variant="ghost">Dismiss</Button>
<Button variant="danger">Delete</Button>
<Button variant="primary" loading>Saving…</Button>
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" disabled>Disabled</Button>`}
        >
          <Button variant="primary" size="sm" onClick={handleLoadingDemo} loading={loading}>
            {loading ? "Saving…" : "Save changes"}
          </Button>
          <Button variant="secondary" size="sm">Cancel</Button>
          <Button variant="outline" size="sm">Learn more</Button>
          <Button variant="ghost" size="sm">Dismiss</Button>
          <Button variant="danger" size="sm">Delete</Button>
        </DemoCard>

        <DemoCard
          title="Label"
          description="Accessible form label with optional required indicator."
          code={`import { Label } from "anexui";

<Label htmlFor="email">Email address</Label>
<Label htmlFor="name" required>Full name</Label>`}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", width: "100%" }}>
            <Label htmlFor="demo-email">Email address</Label>
            <Label htmlFor="demo-name" required>Full name</Label>
          </div>
        </DemoCard>

        <DemoCard
          title="Input"
          description="Text input supporting all HTML input types, error and disabled states."
          code={`import { Input } from "anexui";

<Input type="text" placeholder="Your name" />
<Input type="email" placeholder="you@example.com" />
<Input type="password" placeholder="Password" />
<Input error placeholder="Invalid value" />`}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", width: "100%" }}>
            <Input placeholder="Your name" />
            <Input type="email" placeholder="you@example.com" />
            <Input error placeholder="Invalid — shows error state" />
          </div>
        </DemoCard>

        <DemoCard
          title="Textarea"
          description="Multi-line input with configurable resize and error state."
          code={`import { Textarea } from "anexui";

<Textarea placeholder="Write something…" rows={3} />
<Textarea error placeholder="Error state" resize="none" />`}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", width: "100%" }}>
            <Textarea placeholder="Write something…" rows={3} />
            <Textarea error placeholder="Error state" rows={2} resize="none" />
          </div>
        </DemoCard>

        <DemoCard
          title="Checkbox"
          description="Controlled and uncontrolled checkbox with indeterminate and disabled states."
          code={`import { Checkbox } from "anexui";

<Checkbox label="Accept terms" />
<Checkbox label="Subscribe to newsletter" defaultChecked />
<Checkbox label="Partial selection" indeterminate />
<Checkbox label="Unavailable" disabled />`}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", width: "100%" }}>
            <Checkbox label="Accept terms and conditions" />
            <Checkbox label="Subscribe to newsletter" defaultChecked />
            <Checkbox label="Partial selection" indeterminate />
            <Checkbox label="Unavailable option" disabled />
          </div>
        </DemoCard>

        <DemoCard
          title="RadioGroup"
          description="Context-linked radio group with vertical and horizontal layout."
          code={`import { RadioGroup, Radio } from "anexui";

<RadioGroup legend="Notifications" name="notify">
  <Radio label="Email" value="email" defaultChecked />
  <Radio label="SMS" value="sms" />
  <Radio label="Push" value="push" />
</RadioGroup>`}
        >
          <div style={{ width: "100%" }}>
            <RadioGroup legend="Delivery method" name="delivery-demo" direction="vertical">
              <Radio label="Email" value="email" defaultChecked />
              <Radio label="SMS" value="sms" />
              <Radio label="Push notification" value="push" />
            </RadioGroup>
          </div>
        </DemoCard>

        <DemoCard
          title="Select"
          description="Native select with custom styling, placeholder, and error state."
          code={`import { Select } from "anexui";

<Select placeholder="Choose a country…">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="in">India</option>
</Select>
<Select error>
  <option value="">Select a plan</option>
</Select>`}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", width: "100%" }}>
            <Select placeholder="Choose a country…">
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="in">India</option>
            </Select>
            <Select error>
              <option value="">Select a plan — error state</option>
            </Select>
          </div>
        </DemoCard>

        <DemoCard
          title="Switch"
          description="Toggle switch with accessible label and disabled state."
          code={`import { Switch } from "anexui";

<Switch label="Enable notifications" />
<Switch label="Dark mode" defaultChecked />
<Switch label="Feature disabled" disabled />`}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", width: "100%" }}>
            <Switch label="Enable notifications" />
            <Switch label="Dark mode" defaultChecked />
            <Switch label="Feature unavailable" disabled />
          </div>
        </DemoCard>

        <DemoCard
          title="Slider"
          description="Range slider with configurable min, max, step, and optional value display."
          code={`import { Slider } from "anexui";

<Slider defaultValue={40} aria-label="Volume" />
<Slider
  min={0} max={100} step={5}
  defaultValue={60}
  showValue
  aria-label="Brightness"
/>`}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", width: "100%" }}>
            <Slider defaultValue={40} aria-label="Volume" />
            <Slider min={0} max={100} step={5} defaultValue={60} showValue aria-label="Brightness" />
          </div>
        </DemoCard>
      </div>
    </section>
  );
};

export default BasicSection;
