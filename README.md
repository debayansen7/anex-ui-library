# Anex UI

A clean, accessible, and themeable React component library built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **CSS Modules**.

[![npm version](https://img.shields.io/npm/v/anexui)](https://www.npmjs.com/package/anexui)
[![License: MIT](https://img.shields.io/badge/License-MIT-violet.svg)](LICENSE)

> **Package name:** `anexui` — **Current version:** `1.0.0`
>
> GitHub: [debayansen7/anex-ui-library](https://github.com/debayansen7/anex-ui-library) · npm: [npmjs.com/package/anexui](https://www.npmjs.com/package/anexui)

---

## Features

- **53 components** across 7 categories — layout, navigation, feedback, overlays, data display, form controls, and more
- **WCAG AA accessibility** — semantic HTML, ARIA attributes, keyboard navigation, and focus management throughout
- **Light & dark theming** out of the box via CSS custom properties — switch at runtime with a single `data-theme` attribute
- **Zero UI library dependencies** — built from scratch using native browser APIs (`<dialog>`, `hidden`, `role`, `aria-*`); only three small utilities bundled (`clsx`, `tailwind-merge`, `class-variance-authority`)
- **React 19 patterns** — `ref` as a prop, `useId()`, `useCallback()`, no deprecated `forwardRef`
- **Polymorphic Button** — renders as `<a>` when `href` is provided, `<button>` otherwise
- **CSS Modules + Tailwind CSS v4** — scoped styles with design tokens; no global class leakage
- **Tree-shakeable** — ESM + CJS dual build, fully typed declaration files
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

Add the Anex UI stylesheet once at the root of your app (e.g. `main.tsx` or `app/layout.tsx`):

```tsx
import "anexui/styles";
```

This imports all design tokens (spacing, typography, radius, shadows, z-index) and both the light and dark color themes.

### 2. Set a theme

Anex UI defaults to the **light** theme (`:root`). Override by setting `data-theme` on `<html>`:

```html
<!-- Light (default — no attribute required) -->
<html>

<!-- Explicit light -->
<html data-theme="light">

<!-- Dark -->
<html data-theme="dark">
```

Switch programmatically:

```ts
document.documentElement.setAttribute("data-theme", "dark");
```

### 3. Wrap with ToastProvider (if using Toast)

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

## Component Overview

### Basic (10)

| Component | Description |
|---|---|
| `Button` | Primary, secondary, ghost, outline, danger variants; xs–lg sizes; loading state; renders as `<a>` when `href` is provided |
| `Label` | Accessible form label with optional required indicator |
| `Input` | Text input with error, disabled, and helper text states |
| `Textarea` | Multi-line input; auto-resize optional |
| `Checkbox` | Controlled and uncontrolled; indeterminate state |
| `RadioGroup` + `Radio` | Context-linked radio group with arrow-key navigation |
| `Select` | Native select with accessible custom styling |
| `Switch` | Toggle switch with `aria-checked` |
| `Slider` | Range slider with min / max / step and keyboard support |
| `SegmentedControl` | Compact button-group toggle for mutually exclusive options |

### Layout (5)

| Component | Description |
|---|---|
| `Container` | Centered wrapper with responsive max-width presets (sm → 2xl) |
| `Stack` | Flexbox stack — direction, gap, align, justify, wrap |
| `Grid` | CSS grid with column count and gap presets |
| `Divider` | Horizontal or vertical rule with optional inline label |
| `Sidebar` | Persistent collapsible `<aside>` panel with header, footer, and toggle |

### Navigation (7)

| Component | Description |
|---|---|
| `Tabs` + `TabList` + `Tab` + `TabPanel` | Line or pill variant; roving tabindex keyboard navigation |
| `Breadcrumb` | `<nav>` with `aria-label` and `aria-current="page"` on last item |
| `Pagination` | Smart page range with ellipsis; configurable sibling count |
| `Stepper` | Horizontal or vertical progress stepper; `aria-current="step"` |
| `Navbar` + `NavbarBrand` + `NavbarNav` + `NavbarActions` | Compound sticky header component |
| `SideNav` + `SideNavGroup` + `SideNavItem` | Grouped sidebar navigation with active state |
| `TableOfContents` | Presentational TOC with active heading highlighting |

### Feedback (8)

| Component | Description |
|---|---|
| `Alert` | Info / success / warning / error; `role="alert"` or `role="status"` |
| `Badge` | Dot or label badge with multiple color variants |
| `Spinner` | Animated loading indicator with screen-reader label |
| `Progress` | `role="progressbar"` with `aria-valuenow` / min / max |
| `Skeleton` | Shimmer placeholder in text, circular, or rectangular shapes |
| `ToastProvider` + `useToast` | Imperative toast system with auto-dismiss and `aria-live` |
| `Callout` | Left-border accent block — info, warning, success, danger, neutral |
| `EmptyState` | Centered placeholder with icon, title, description, and action slot |

### Overlay (5)

| Component | Description |
|---|---|
| `Modal` | Native `<dialog>` with `showModal()` — free focus trap and Escape to close |
| `Drawer` | Side sheet using `<dialog>`; right / left / bottom positions |
| `Tooltip` | Pure CSS tooltip on hover and focus; `role="tooltip"` |
| `Popover` | Click-triggered floating panel; injects `aria-expanded` onto trigger |
| `CommandPalette` | Keyboard-driven search overlay with grouped results and arrow-key navigation |

### Data Display (11)

| Component | Description |
|---|---|
| `Avatar` | Image with fallback initials; status dot (online / away / busy / offline) |
| `Card` + `CardHeader` + `CardBody` + `CardFooter` | Compound card with optional hover-lift animation |
| `Table` + sub-components | Accessible table with `scope="col"` and caption support |
| `Accordion` + sub-components | Single or multi-expand; `hidden` attribute for accessibility |
| `Tag` | Inline chip with optional dismiss button |
| `Carousel` | Slide carousel with arrows, dots, autoPlay, and ARIA carousel pattern |
| `Banner` | Full-width message bar — info / success / warning / error / promo |
| `Timeline` | Vertical event list with status indicators and `<time>` elements |
| `CodeBlock` | Syntax-highlighted `<pre>` with language label and copy button |
| `Rating` | Star rating — full, half, and empty states; interactive or read-only |
| `ImageGallery` | Responsive image grid with native `<dialog>` lightbox and keyboard navigation |

### Form Composites (7)

| Component | Description |
|---|---|
| `FormField` | Wraps any input with label, helper text, and error; injects `id`, `aria-describedby`, `aria-invalid` |
| `SearchInput` | `type="search"` with clear button; hides native browser cancel icon |
| `NumberInput` | Increment / decrement buttons with min / max clamping |
| `DatePicker` | Calendar dropdown with min / max constraints and hidden form input |
| `Combobox` | Searchable dropdown with keyboard navigation and optional clear button |
| `FileUpload` | Drag-and-drop zone with size validation and file list management |
| `OTPInput` | N-box OTP / PIN input with auto-advance, paste, and `onComplete` callback |

---

## Usage Examples

### Button

```tsx
import { Button } from "anexui";

// Standard button
<Button variant="primary" size="md" onClick={() => console.log("clicked")}>
  Get started
</Button>

// Loading state
<Button variant="primary" loading>
  Saving…
</Button>

// Renders as <a> when href is provided
<Button variant="primary" href="/docs" target="_blank">
  View docs
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

### DatePicker

```tsx
import { DatePicker } from "anexui";
import { useState } from "react";

function Example() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <DatePicker
      value={date}
      onChange={setDate}
      placeholder="Pick a date"
      min={new Date()}
    />
  );
}
```

### Combobox

```tsx
import { Combobox } from "anexui";
import { useState } from "react";

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
];

function Example() {
  const [value, setValue] = useState("");

  return (
    <Combobox
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Select a framework"
      clearable
    />
  );
}
```

---

## Development

```bash
# Install dependencies
npm install

# Start landing page dev server (port 5173)
npm run dev

# Start Storybook (port 6006)
npm run storybook

# Type check
npx tsc --noEmit

# Build library (ESM + CJS + type declarations → dist/)
npm run build:lib

# Lint
npm run lint
```

---

## Project Structure

```
src/
├── components/
│   ├── basic/          # Button, Input, Textarea, Checkbox, Select, Switch, Slider,
│   │                   # RadioGroup, Label, SegmentedControl
│   ├── layout/         # Container, Stack, Grid, Divider, Sidebar
│   ├── navigation/     # Tabs, Breadcrumb, Pagination, Stepper,
│   │                   # Navbar, SideNav, TableOfContents
│   ├── feedback/       # Alert, Badge, Spinner, Progress, Skeleton, Toast,
│   │                   # Callout, EmptyState
│   ├── overlay/        # Modal, Drawer, Tooltip, Popover, CommandPalette
│   ├── data-display/   # Avatar, Card, Table, Accordion, Tag, Carousel, Banner,
│   │                   # Timeline, CodeBlock, Rating, ImageGallery
│   └── form/           # FormField, SearchInput, NumberInput, DatePicker,
│                       # Combobox, FileUpload, OTPInput
├── tokens/
│   └── index.css       # Non-color tokens (spacing, radius, shadows, z-index, typography)
├── themes/
│   ├── light.css       # Light theme color variables (default — applied to :root)
│   ├── dark.css        # Dark theme color variables
│   └── index.css       # Imports both themes
└── lib/
    └── cn.ts           # clsx + tailwind-merge utility
```

---

## Theming

All design decisions are driven by CSS custom properties. To create a custom theme:

1. Create `src/themes/my-theme.css` with `[data-theme="my-theme"] { ... }` overrides
2. Import it in `src/themes/index.css`
3. Set `data-theme="my-theme"` on `<html>`

Key token groups: colors, spacing, typography, radius, shadows, transitions, z-index. See the full token reference in the [docs](https://your-docs-site.com/docs/theming).

---

## Accessibility

- Semantic HTML elements (`<button>`, `<nav>`, `<dialog>`, `<ol>`, `<time>`, `<caption>`)
- ARIA roles, states, and properties throughout
- Full keyboard navigation (Tab, Arrow keys, Enter, Escape, Space)
- Focus management — Modal and Drawer use native `<dialog>` for free focus trapping
- `prefers-reduced-motion` respected — all transition tokens zero out automatically
- Storybook `addon-a11y` configured — stories fail on accessibility violations

---

## License

MIT © [Debayan Sen](mailto:debayan.sen7@gmail.com)
