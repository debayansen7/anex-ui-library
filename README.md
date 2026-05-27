# Anex UI

A clean, accessible, and themeable React component library built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **CSS Modules**.

> **Package name:** `@debayan/anexui`

---

## Features

- **50+ components** spanning layout, navigation, feedback, overlays, data display, and form controls
- **WCAG AA accessibility** — semantic HTML, ARIA attributes, keyboard navigation, and focus management throughout
- **Light & dark theming** out of the box via CSS custom properties — switch at runtime with a single `data-theme` attribute
- **Zero runtime dependencies** on component libraries — built from scratch with native browser APIs (`<dialog>`, `hidden`, `role`, `aria-*`)
- **React 19 patterns** — `ref` as a prop, `useId()`, `useCallback()`, no deprecated `forwardRef`
- **CSS Modules + Tailwind CSS v4** — scoped styles with design tokens; no global class leakage
- **Tree-shakeable** — ESM + CJS dual build, fully typed with declaration files
- **Storybook v10** — interactive docs, dark mode toggle, and accessibility audit built in

---

## Tech Stack

| Tool | Version |
|---|---|
| React | 19 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| Vite | 7.x |
| Storybook | 10.x |

---

## Installation

```bash
# npm
npm install @debayan/anexui

# pnpm
pnpm add @debayan/anexui

# yarn
yarn add @debayan/anexui
```

Anex UI requires **React 19** as a peer dependency:

```bash
npm install react@^19 react-dom@^19
```

---

## Setup

### 1. Import the stylesheet

Add the Anex UI stylesheet once at the root of your app (e.g. `main.tsx` or `_app.tsx`):

```tsx
import "@debayan/anexui/styles";
```

This imports all design tokens (spacing, typography, radius, shadows) and both the light and dark color themes.

### 2. Set a theme

Anex UI reads the `data-theme` attribute on the `<html>` element:

```html
<!-- Light (default) -->
<html data-theme="light">

<!-- Dark -->
<html data-theme="dark">
```

To switch programmatically:

```ts
document.documentElement.setAttribute("data-theme", "dark");
```

### 3. (Optional) Wrap with ToastProvider

If you use the `Toast` system, wrap your app with `ToastProvider`:

```tsx
import { ToastProvider } from "@debayan/anexui";

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}
```

---

## Theming

Anex UI uses CSS custom properties for all design decisions. Themes are defined in two files:

- `src/themes/light.css` — applied under `[data-theme="light"]`
- `src/themes/dark.css` — applied under `[data-theme="dark"]`

### Color tokens

| Token | Purpose |
|---|---|
| `--color-bg` | Page background |
| `--color-surface` | Card / panel surface |
| `--color-surface-raised` | Elevated surface (popovers, dropdowns) |
| `--color-border` | Default border |
| `--color-border-focus` | Focus ring color |
| `--color-text` | Primary text |
| `--color-text-subtle` | Muted / secondary text |
| `--color-primary` | Brand / action color |
| `--color-primary-subtle` | Tinted background for primary elements |
| `--color-success` / `--color-error` / `--color-warning` / `--color-info` | Semantic status colors |

### Spacing & typography tokens

| Token | Value |
|---|---|
| `--space-1` … `--space-10` | 4px scale (4 px, 8 px, 12 px …) |
| `--text-xs` | 0.75 rem |
| `--text-sm` | 0.875 rem |
| `--text-base` | 1 rem |
| `--text-lg` | 1.125 rem |
| `--text-xl` / `--text-2xl` | 1.25 rem / 1.5 rem |
| `--radius-sm` / `--radius-md` / `--radius-lg` / `--radius-full` | Border radius scale |
| `--transition-fast` / `--transition-base` | CSS transition durations |

---

## Component Overview

### Basic / Form Controls

| Component | Description |
|---|---|
| `Button` | Solid, outline, ghost, and link variants; sm / md / lg sizes; loading state |
| `Label` | Accessible form label |
| `Input` | Text input with error and disabled states |
| `Textarea` | Multi-line input; auto-resize optional |
| `Checkbox` | Controlled and uncontrolled; indeterminate state |
| `RadioGroup` + `Radio` | Context-linked radio group |
| `Select` | Native select with custom styling |
| `Switch` | Toggle switch, `aria-checked` |
| `Slider` | Range slider with min / max / step |

### Layout

| Component | Description |
|---|---|
| `Container` | Centered content wrapper with max-width presets (sm → 2xl) |
| `Stack` | Flexbox stack — direction, gap, align, justify, wrap |
| `Grid` | CSS grid with col count and gap presets |
| `Divider` | Horizontal or vertical rule; supports an inline label |

### Navigation

| Component | Description |
|---|---|
| `Tabs` + `TabList` + `Tab` + `TabPanel` | Line or pill variant; roving tabindex keyboard navigation |
| `Breadcrumb` | `<nav>` with `aria-label`, `aria-current="page"` on last item |
| `Pagination` | Smart page range with ellipsis; siblings prop |
| `Stepper` | Horizontal or vertical progress stepper; `aria-current="step"` |

### Feedback

| Component | Description |
|---|---|
| `Alert` | Info / success / warning / error; `role="alert"` or `role="status"` |
| `Badge` | Dot or label badge; multiple color variants |
| `Spinner` | Animated loading indicator with sr-only label |
| `Progress` | `role="progressbar"` with `aria-valuenow` / `aria-valuemin` / `aria-valuemax` |
| `Skeleton` | Shimmer placeholder; text / circular / rectangular shapes |
| `ToastProvider` + `useToast` | Imperative toast system with auto-dismiss and `aria-live` |

### Overlay

| Component | Description |
|---|---|
| `Modal` | Native `<dialog>` with `showModal()` — free focus trap and Escape key |
| `Drawer` | Side / bottom sheet using `<dialog>`; right / left / bottom positions |
| `Tooltip` | Pure CSS show/hide on hover + focus-within; `role="tooltip"` |
| `Popover` | Click-triggered floating content; injects `aria-expanded` onto trigger |

### Data Display

| Component | Description |
|---|---|
| `Avatar` | Image with fallback initials; status dot (online / away / busy / offline) |
| `Card` + `CardHeader` + `CardBody` + `CardFooter` | Compound card layout |
| `Table` + `TableHead` + `TableBody` + `TableRow` + `TableHeader` + `TableCell` | Accessible table with `scope="col"` and caption |
| `Accordion` + `AccordionItem` + `AccordionTrigger` + `AccordionPanel` | Single or multi-expand; `hidden` attribute for a11y |
| `Tag` | Inline label chip with optional dismiss button |
| `Carousel` | Slide carousel with arrows, dots, autoPlay, and full ARIA carousel pattern |
| `Banner` | Full-width site-level message bar; info / success / warning / error / promo |
| `Timeline` | Vertical event timeline with status indicators and `<time>` elements |

### Form Composites

| Component | Description |
|---|---|
| `FormField` | Wraps any input with a label, helper text, and error message; injects `id`, `aria-describedby`, `aria-invalid`, `aria-required` via `cloneElement` |
| `SearchInput` | `type="search"` with clear button; hides native browser cancel button |
| `NumberInput` | `type="number"` with increment / decrement buttons; min / max clamping |

---

## Usage Examples

### Button

```tsx
import { Button } from "@debayan/anexui";

<Button variant="solid" size="md" onClick={() => console.log("clicked")}>
  Get started
</Button>

<Button variant="outline" isLoading>
  Saving…
</Button>
```

### FormField

```tsx
import { FormField, Input } from "@debayan/anexui";

<FormField
  label="Email address"
  helperText="We'll never share your email."
  error={!!errors.email}
  errorText={errors.email?.message}
  required
>
  <Input type="email" placeholder="you@example.com" />
</FormField>
```

### Toast

```tsx
import { useToast } from "@debayan/anexui";

function SaveButton() {
  const { toast } = useToast();

  return (
    <button onClick={() => toast({ message: "Saved!", type: "success" })}>
      Save
    </button>
  );
}
```

### Tabs

```tsx
import { Tabs, TabList, Tab, TabPanel } from "@debayan/anexui";

<Tabs defaultActiveId="overview" variant="line">
  <TabList>
    <Tab id="overview">Overview</Tab>
    <Tab id="analytics">Analytics</Tab>
    <Tab id="settings">Settings</Tab>
  </TabList>
  <TabPanel id="overview">Overview content</TabPanel>
  <TabPanel id="analytics">Analytics content</TabPanel>
  <TabPanel id="settings">Settings content</TabPanel>
</Tabs>
```

### Modal

```tsx
import { Modal, Button } from "@debayan/anexui";
import { useState } from "react";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm action">
        Are you sure you want to continue?
      </Modal>
    </>
  );
}
```

### Accordion

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from "@debayan/anexui";

<Accordion multiple>
  <AccordionItem id="q1">
    <AccordionTrigger>What is Anex UI?</AccordionTrigger>
    <AccordionPanel>A clean, accessible React component library.</AccordionPanel>
  </AccordionItem>
  <AccordionItem id="q2">
    <AccordionTrigger>Is it free?</AccordionTrigger>
    <AccordionPanel>Yes, MIT licensed.</AccordionPanel>
  </AccordionItem>
</Accordion>
```

---

## Development

```bash
# Install dependencies
npm install

# Start Storybook dev server (port 6006)
npm run storybook

# TypeScript type check
npx tsc --noEmit

# Build the library
npm run build:lib

# Lint
npm run lint
```

---

## Project Structure

```
src/
├── components/
│   ├── basic/          # Button, Input, Checkbox, Select, Switch, Slider …
│   ├── layout/         # Container, Stack, Grid, Divider
│   ├── navigation/     # Tabs, Breadcrumb, Pagination, Stepper
│   ├── feedback/       # Alert, Badge, Spinner, Progress, Skeleton, Toast
│   ├── overlay/        # Modal, Drawer, Tooltip, Popover
│   ├── data-display/   # Avatar, Card, Table, Accordion, Tag, Carousel, Banner, Timeline
│   └── form/           # FormField, SearchInput, NumberInput
├── tokens/
│   └── index.css       # Non-color design tokens (spacing, radius, transitions …)
├── themes/
│   ├── light.css       # Light theme color variables
│   ├── dark.css        # Dark theme color variables
│   └── index.css       # Imports both themes
└── lib/
    └── cn.ts           # clsx + tailwind-merge utility
```

---

## Accessibility

Every component is built with accessibility as a first-class concern:

- Semantic HTML elements (`<button>`, `<nav>`, `<dialog>`, `<ol>`, `<time>`, `<caption>`)
- ARIA roles, states, and properties (`aria-expanded`, `aria-current`, `aria-live`, `aria-describedby`, …)
- Keyboard navigation (Tab, Arrow keys, Enter, Escape, Space)
- Focus management — Modal and Drawer use native `<dialog>` for free focus trapping
- `prefers-reduced-motion` respected in all CSS animations
- Storybook addon-a11y configured with `test: "error"` — stories fail on a11y violations

---

## License

MIT © [Debayan Sen](mailto:debayan.sen7@gmail.com)
