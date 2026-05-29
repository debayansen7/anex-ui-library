import React, { useState } from "react";
import { FormField, SearchInput, NumberInput } from "../../../components/form";
import { Input, Textarea, Select, Checkbox } from "../../../components/basic";
import DemoCard from "../shared/DemoCard";
import SectionHeader from "../shared/SectionHeader";

const FormSection = () => {
  const [search, setSearch] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <section>
      <SectionHeader
        id="form"
        title="Form Composites"
        description="Higher-level form controls that wire up labels, helper text, errors, and ARIA attributes automatically."
        count={3}
        icon="📋"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "var(--space-4)",
        }}
      >
        <DemoCard
          title="FormField"
          description="Wraps any input with a label, helper text, and error message. Injects id, aria-describedby, aria-invalid, and aria-required via cloneElement."
          code={`import { FormField, Input, Textarea, Select } from "anexui";

// Valid state
<FormField
  label="Email address"
  helperText="We'll never share your email."
  required
>
  <Input type="email" placeholder="you@example.com" />
</FormField>

// Error state
<FormField
  label="Password"
  required
  error
  errorText="Must be at least 8 characters"
>
  <Input type="password" />
</FormField>`}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", width: "100%" }}>
            <FormField
              label="Email address"
              helperText="We'll never share your email."
              required
            >
              <Input type="email" placeholder="you@example.com" />
            </FormField>

            <FormField
              label="Password"
              required
              error
              errorText="Must be at least 8 characters"
            >
              <Input type="password" placeholder="Enter password" />
            </FormField>

            <FormField label="Country" helperText="Select your billing country.">
              <Select placeholder="Choose a country…">
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="in">India</option>
              </Select>
            </FormField>

            <FormField label="Bio" helperText="Max 200 characters.">
              <Textarea rows={3} placeholder="Tell us about yourself…" />
            </FormField>

            <FormField label="">
              <Checkbox label="I agree to the terms and conditions" required />
            </FormField>
          </div>
        </DemoCard>

        <DemoCard
          title="SearchInput"
          description={'type="search" input with a clear × button that hides the native browser cancel icon.'}
          code={`import { SearchInput } from "anexui";
import { useState } from "react";

const [query, setQuery] = useState("");

<SearchInput
  placeholder="Search components…"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onClear={() => setQuery("")}
/>`}
        >
          <div style={{ width: "100%" }}>
            <SearchInput
              placeholder="Search components…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClear={() => setSearch("")}
            />
            {search && (
              <p style={{ marginTop: "var(--space-2)", fontSize: "var(--text-xs)", color: "var(--color-text-subtle)", fontFamily: "var(--font-sans)" }}>
                Searching for: <strong>{search}</strong>
              </p>
            )}
          </div>
        </DemoCard>

        <DemoCard
          title="NumberInput"
          description="Numeric input with increment / decrement buttons and min / max clamping."
          code={`import { NumberInput } from "anexui";
import { useState } from "react";

const [qty, setQty] = useState(1);

<NumberInput
  value={qty}
  onChange={setQty}
  min={1}
  max={99}
  step={1}
/>`}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", width: "100%", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "center" }}>
              <p style={{ margin: 0, fontSize: "var(--text-xs)", color: "var(--color-text-subtle)", fontFamily: "var(--font-sans)" }}>Quantity (1–99)</p>
              <NumberInput value={quantity} onChange={setQuantity} min={1} max={99} step={1} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", alignItems: "center" }}>
              <p style={{ margin: 0, fontSize: "var(--text-xs)", color: "var(--color-text-subtle)", fontFamily: "var(--font-sans)" }}>Rating (0–5, step 0.5)</p>
              <NumberInput defaultValue={3} min={0} max={5} step={0.5} />
            </div>
          </div>
        </DemoCard>
      </div>
    </section>
  );
};

export default FormSection;
