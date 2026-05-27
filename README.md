# Anex UI

A clean, accessible, and themeable React component library built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **CSS Modules**.

[![npm version](https://img.shields.io/npm/v/anexui)](https://www.npmjs.com/package/anexui)
[![License: MIT](https://img.shields.io/badge/License-MIT-violet.svg)](LICENSE)

> **Package name:** `anexui` — **Current version:** `0.1.0`
>
> GitHub: [debayansen7/anex-ui-library](https://github.com/debayansen7/anex-ui-library) · npm: [npmjs.com/package/anexui](https://www.npmjs.com/package/anexui)

---

## Features

- **53 exported components** spanning layout, navigation, feedback, overlays, data display, and form controls
- **WCAG AA accessibility** — semantic HTML, ARIA attributes, keyboard navigation, and focus management throughout
- **Light & dark theming** out of the box via CSS custom properties — switch at runtime with a single `data-theme` attribute; light is the default
- **No UI library dependencies** — built from scratch with native browser APIs (`<dialog>`, `hidden`, `role`, `aria-*`); only three small utilities are bundled (`clsx`, `tailwind-merge`, `class-variance-authority`)
- **React 19 patterns** — `ref` as a prop, `useId()`, `useCallback()`, no deprecated `forwardRef`
- **CSS Modules + Tailwind CSS v4** — scoped styles with design tokens; no global class leakage
- **Tree-shakeable** — ESM + CJS dual build, fully typed with declaration files
- **Storybook v10** — interactive docs, dark mode toggle, and accessibility audit built in

---

## Tech Stack

| Tool | Version |
|---|---|
| React | 19.x |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| Vite | 7.x |
| Storybook | 10.x |

---

## Installation

```bash
# npm
npm install anexui

# pnpm
pnpm add anexui

# yarn
yarn add anexui
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
import "anexui/styles";
```

This imports all design tokens (spacing, typography, radius, shadows, z-index) and both the light and dark color themes.

### 2. Set a theme

Anex UI defaults to the **light** theme (`:root`). Override by setting the `data-theme` attribute on the `<html>` element:

```html
<!-- Light (default — no attribute required) -->
<html>

<!-- Explicit light -->
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
import { ToastProvider } from "anexui";

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

- `src/themes/light.css` — applied under `:root` and `[data-theme="light"]` (default)
- `src/themes/dark.css` — applied under `[data-theme="dark"]`

To add a custom theme, create `src/themes/my-theme.css` with `[data-theme="my-theme"] { ... }`, register it in `src/themes/index.css`, and set `data-theme="my-theme"` on `<html>`.

### Color tokens

| Token | Purpose |
|---|---|
| `--color-background` | Page background |
| `--color-surface` | Card / panel surface |
| `--color-surface-raised` | Elevated surface (popovers, dropdowns) |
| `--color-overlay` | Modal / drawer backdrop (semi-transparent) |
| `--color-border` | Default border |
| `--color-border-strong` | High-contrast border |
| `--color-border-focus` | Focus ring color |
| `--color-text` | Primary text |
| `--color-text-subtle` | Muted / secondary text |
| `--color-text-disabled` | Disabled state text |
| `--color-text-inverse` | Text on inverted (dark) backgrounds |
| `--color-primary` | Brand / action color |
| `--color-primary-hover` | Hovered primary |
| `--color-primary-active` | Pressed primary |
| `--color-primary-subtle` | Tinted background for primary elements |
| `--color-primary-foreground` | Text on primary backgrounds |
| `--color-secondary` | Neutral action background |
| `--color-secondary-foreground` | Text on secondary backgrounds |
| `--color-ghost-foreground` | Text for ghost / low-emphasis elements |
| `--color-danger` | Destructive action color |
| `--color-danger-foreground` | Text on danger backgrounds |
| `--color-success` / `--color-success-subtle` / `--color-success-foreground` | Success status |
| `--color-warning` / `--color-warning-subtle` / `--color-warning-foreground` | Warning status |
| `--color-error` / `--color-error-subtle` / `--color-error-foreground` | Error status |
| `--color-info` / `--color-info-subtle` / `--color-info-foreground` | Info status |
| `--color-label` | Form label text |
| `--color-label-required` | Required field asterisk |
| `--color-input-background` | Form control background |
| `--color-input-border` | Form control border |
| `--color-input-border-hover` | Hovered form control border |
| `--color-input-border-focus` | Focused form control border |
| `--color-input-border-error` | Error state form control border |
| `--color-input-placeholder` | Placeholder text |

### Spacing tokens

Spacing follows a **rem-based 4px scale** (`1rem = 16px`). Fractional steps are available for fine-grained control:

| Token | Value | px equivalent |
|---|---|---|
| `--space-0` | `0` | 0 |
| `--space-px` | `1px` | 1 |
| `--space-0-5` | `0.125rem` | 2 |
| `--space-1` | `0.25rem` | 4 |
| `--space-1-5` | `0.375rem` | 6 |
| `--space-2` | `0.5rem` | 8 |
| `--space-2-5` | `0.625rem` | 10 |
| `--space-3` | `0.75rem` | 12 |
| `--space-4` | `1rem` | 16 |
| `--space-5` | `1.25rem` | 20 |
| `--space-6` | `1.5rem` | 24 |
| `--space-8` | `2rem` | 32 |
| `--space-10` | `2.5rem` | 40 |
| `--space-12` | `3rem` | 48 |
| `--space-16` | `4rem` | 64 |
| `--space-20` | `5rem` | 80 |
| `--space-24` | `6rem` | 96 |

### Typography tokens

| Token | Value |
|---|---|
| `--text-xs` | `0.75rem` |
| `--text-sm` | `0.875rem` |
| `--text-base` | `1rem` |
| `--text-lg` | `1.125rem` |
| `--text-xl` | `1.25rem` |
| `--text-2xl` | `1.5rem` |
| `--text-3xl` | `1.875rem` |
| `--text-4xl` | `2.25rem` |
| `--font-sans` | System sans-serif stack |
| `--font-mono` | System monospace stack |

### Other tokens

| Token | Purpose |
|---|---|
| `--radius-sm` / `--radius-md` / `--radius-lg` / `--radius-xl` / `--radius-2xl` / `--radius-full` | Border radius scale |
| `--shadow-sm` / `--shadow-md` / `--shadow-lg` / `--shadow-xl` | Box shadow scale |
| `--transition-fast` / `--transition-base` / `--transition-slow` | `100ms`, `200ms`, `300ms` ease transitions — zeroed when `prefers-reduced-motion: reduce` |
| `--z-dropdown` / `--z-sticky` / `--z-modal-backdrop` / `--z-modal` / `--z-popover` / `--z-tooltip` / `--z-toast` | Managed z-index stack |

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
import { Button } from "anexui";

<Button variant="solid" size="md" onClick={() => console.log("clicked")}>
  Get started
</Button>

<Button variant="outline" isLoading>
  Saving…
</Button>
```

### FormField

```tsx
import { FormField, Input } from "anexui";

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
import { useToast } from "anexui";

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
import { Tabs, TabList, Tab, TabPanel } from "anexui";

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
import { Modal, Button } from "anexui";
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
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from "anexui";

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

# Build the library (outputs ESM + CJS + type declarations)
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
│   └── data-display/   # Avatar, Card, Table, Accordion, Tag, Carousel, Banner, Timeline
├── form/               # FormField, SearchInput, NumberInput
├── tokens/
│   └── index.css       # Non-color design tokens (spacing, radius, shadows, z-index, typography)
├── themes/
│   ├── light.css       # Light theme color variables (default — applied to :root)
│   ├── dark.css        # Dark theme color variables
│   └── index.css       # Imports both themes (add custom themes here)
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
- `prefers-reduced-motion` respected — all transition tokens zero out automatically
- Storybook `addon-a11y` configured with `test: "error"` — stories fail on a11y violations

---

## License

MIT © [Debayan Sen](mailto:debayan.sen7@gmail.com)
