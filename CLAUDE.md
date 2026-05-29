# Anex UI — Developer Guide

## Project overview

**Anex UI** (`anexui`) is a React 19 component library built with TypeScript and Tailwind CSS v4. It ships 53 accessible components across 7 categories. The repo hosts both the library source and a landing page that showcases every component live.

---

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts the landing page at `localhost:5173` |
| `npm run storybook` | Starts Storybook at `localhost:6006` |
| `npm run build:lib` | Builds ESM + CJS + type declarations into `dist/` |
| `npx tsc --noEmit` | Type-checks the entire project |
| `npm run lint` | Runs ESLint |

---

## Repository structure

```
src/
├── components/           ← Library source
│   ├── basic/            Button, Label, Input, Textarea, Checkbox,
│   │                     RadioGroup, Select, Switch, Slider
│   ├── layout/           Container, Stack, Grid, Divider
│   ├── navigation/       Tabs, Breadcrumb, Pagination, Stepper
│   ├── feedback/         Alert, Badge, Spinner, Progress, Skeleton, Toast
│   ├── overlay/          Modal, Drawer, Tooltip, Popover
│   ├── data-display/     Avatar, Card, Table, Accordion, Tag,
│   │                     Carousel, Banner, Timeline
│   └── form/             FormField, SearchInput, NumberInput
│
├── pages/
│   └── Landing/          ← Landing page (component showcase)
│       ├── Landing.tsx   Hero + sticky nav + all sections assembled
│       ├── shared/
│       │   ├── DemoCard.tsx      Card wrapper: title, description, live demo, code toggle
│       │   ├── CodeBlock.tsx     Styled <pre> for code snippets
│       │   └── SectionHeader.tsx Section heading with icon, count badge, description
│       └── sections/
│           ├── BasicSection.tsx
│           ├── LayoutSection.tsx
│           ├── NavigationSection.tsx
│           ├── FeedbackSection.tsx
│           ├── OverlaySection.tsx
│           ├── DataDisplaySection.tsx
│           └── FormSection.tsx
│
├── themes/
│   ├── light.css         Light theme CSS custom properties (default, applied to :root)
│   └── dark.css          Dark theme CSS custom properties (data-theme="dark")
│
└── tokens/
    └── index.css         Spacing, radius, shadow, z-index, and typography tokens
```

---

## Each component folder

Every component follows the same four-file pattern:

```
ComponentName/
├── ComponentName.tsx        Implementation
├── ComponentName.Type.ts    TypeScript interfaces and type aliases
├── ComponentName.module.css Scoped styles using CSS custom properties from tokens/themes
└── ComponentName.stories.ts Storybook stories
```

The category `index.ts` re-exports everything — import from the category, not the file:

```ts
import { Button } from "../../components/basic";       // ✓
import Button from "../../components/basic/Button/Button"; // ✗
```

---

## How to add a new component

1. **Create the component folder** under the right category:
   ```
   src/components/<category>/<ComponentName>/
   ├── ComponentName.tsx
   ├── ComponentName.Type.ts
   ├── ComponentName.module.css
   └── ComponentName.stories.tsx
   ```

2. **Export it** from `src/components/<category>/index.ts`:
   ```ts
   export { default as ComponentName } from "./ComponentName/ComponentName";
   export type { ComponentNameProps } from "./ComponentName/ComponentName.Type";
   ```

3. **Add a demo card** to the matching section file in `src/pages/Landing/sections/`:
   ```tsx
   <DemoCard
     title="ComponentName"
     description="One-line description of what it does."
     code={`import { ComponentName } from "anexui";

   <ComponentName prop="value" />`}
   >
     <ComponentName prop="value" />
   </DemoCard>
   ```

4. **Update the `count` prop** on the `SectionHeader` in that section file.

5. **Update the `NAV_LINKS` array** in `Landing.tsx` if the count changed.

6. **Add the export to the published package** in the library's main `index.ts` (if one exists at `src/index.ts`).

---

## Landing page architecture

### `Landing.tsx`
- Wraps everything in `ToastProvider` (required for the Toast demo in FeedbackSection)
- Renders: `Hero` → `StickyNav` → `<main>` with all sections → `Footer`
- `StickyNav` uses anchor links (`#basic`, `#layout`, …) — each section's `SectionHeader` sets the matching `id`
- `scrollMarginTop: 72` on each section header compensates for the sticky nav height

### `DemoCard`
- Has internal `showCode` state — the code snippet is hidden by default, toggled via "Show code"
- `children` = the live demo (rendered components)
- `code` = raw string pasted into `<pre><code>` — write it as you would in actual usage

### Adding state to a demo
If a demo needs local state (e.g. Modal open/close), keep the state inside the section file — not inside `DemoCard`. Example:

```tsx
// In FeedbackSection.tsx
const [open, setOpen] = useState(false);

<DemoCard title="Modal" ...>
  <Button onClick={() => setOpen(true)}>Open</Button>
  <Modal isOpen={open} onClose={() => setOpen(false)} title="...">
    …
  </Modal>
</DemoCard>
```

---

## Theming

All components use CSS custom properties from `src/tokens/` and `src/themes/`. To preview dark mode in the landing page:

```js
document.documentElement.setAttribute("data-theme", "dark");
```

or add `data-theme="dark"` to `<html>` in `index.html`.

---

## Publishing

```bash
# Build the library
npm run build:lib

# Pack locally to test
npm pack

# Publish to npm (requires auth)
npm publish
```

The published package includes only `dist/` and `cli/` (set in `package.json` → `files`).
