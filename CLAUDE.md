# Anex UI — Developer Guide

## Project overview

**Anex UI** (`anexui`) is a React 19 component library built with TypeScript and Tailwind CSS v4. It ships **55 fully implemented components** across **8 active categories** (basic, layout, navigation, feedback, overlay, data-display, form, media). The repo hosts both the library source and a landing page that showcases every component live. A CLI (`npx anexui`) lets users install individual components from the registry.

---

## Tech stack

| Technology | Version |
|---|---|
| React | ^19.2.0 |
| TypeScript | ~5.x |
| Tailwind CSS | ^4.2.1 |
| Vite | ^7.3.1 |
| Storybook | ^10.2.15 |
| Vitest | ^4.0.18 |
| clsx | ^2.1.1 |
| tailwind-merge | ^2.3.0 |
| class-variance-authority | ^0.7.0 |

---

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts the landing page at `localhost:5173` |
| `npm run build` | Type-checks (`tsc -b`) then runs Vite build |
| `npm run preview` | Previews the built landing page |
| `npm run build:lib` | Builds ESM + CJS + type declarations into `dist/` |
| `npx tsc --noEmit` | Type-checks the entire project |
| `npm run lint` | Runs ESLint |
| `npm run storybook` | Starts Storybook at `localhost:6006` |
| `npm run build-storybook` | Builds static Storybook output |
| `npx anexui add <id>` | Downloads and installs a component from the registry |
| `npx anexui list [filter]` | Lists all available registry components by category |
| `npx anexui help` | Shows CLI usage information |

---

## Repository structure

```
src/
├── App.tsx / App.css         ← Landing page application root
├── main.tsx                  ← Vite entry point
├── index.css                 ← Global CSS
├── index.ts                  ← Main library entry point (all public exports)
│
├── assets/
│   └── react.svg
│
├── lib/
│   └── cn.ts                 ← clsx + tailwind-merge helper (use for className merging)
│
├── components/               ← Library source (55 fully implemented components)
│   ├── basic/                Button, Label, Input, Textarea, Checkbox,
│   │                         RadioGroup, Select, Switch, Slider, SegmentedControl
│   ├── layout/               Container, Stack, Grid, Divider, Sidebar
│   ├── navigation/           Tabs, Breadcrumb, Pagination, Stepper,
│   │                         Navbar, SideNav, TableOfContents
│   ├── feedback/             Alert, Badge, Spinner, Progress, Skeleton,
│   │                         Toast, Callout, EmptyState
│   ├── overlay/              Modal, Drawer, Tooltip, Popover, CommandPalette
│   ├── data-display/         Avatar, Card, Table, Accordion, Tag, Carousel,
│   │                         Banner, Timeline, CodeBlock, Rating, ImageGallery
│   ├── form/                 FormField, SearchInput, NumberInput, DatePicker,
│   │                         Combobox, FileUpload, OTPInput
│   ├── media/                AudioPlayer, VideoPlayer
│   ├── common/               (in-progress — Header partial, Footer/MainWrapper/SideBar empty)
│   └── advanced/             (reserved — empty)
│
├── pages/
│   └── Landing/              ← Landing page (component showcase)
│       ├── Landing.tsx       Hero + sticky nav + all sections assembled
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
│           ├── FormSection.tsx
│           └── MediaSection.tsx
│
├── stories/                  ← Storybook demo files (Button, Header, Page demos + assets)
│
├── themes/
│   ├── index.css             Imports light.css and dark.css
│   ├── light.css             Light theme CSS custom properties (default, applied to :root)
│   └── dark.css              Dark theme CSS custom properties (data-theme="dark")
│
└── tokens/
    └── index.css             Spacing, radius, shadow, z-index, and typography tokens

cli/
└── index.js                  ← CLI entry point (bin: "anexui")

dist/                         ← Built output (index.mjs, index.cjs, index.css, types/)
```

---

## Each component folder

Every component follows the same four-file pattern:

```
ComponentName/
├── ComponentName.tsx        Implementation
├── ComponentName.Type.ts    TypeScript interfaces and type aliases
├── ComponentName.module.css Scoped styles using CSS custom properties from tokens/themes
└── ComponentName.stories.tsx Storybook stories
```

The category `index.ts` re-exports everything — import from the category, not the file:

```ts
import { Button } from "../../components/basic";              // ✓
import Button from "../../components/basic/Button/Button";    // ✗
```

For className merging inside component implementations, use the `cn` helper:

```ts
import { cn } from "../../lib/cn";
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

3. **Export it** from the main library entry `src/index.ts`:
   ```ts
   export { ComponentName } from "./components/<category>";
   export type { ComponentNameProps } from "./components/<category>";
   ```

4. **Add a demo card** to the matching section file in `src/pages/Landing/sections/`:
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

5. **Update the `count` prop** on the `SectionHeader` in that section file.

6. **Update the `NAV_LINKS` array** in `Landing.tsx` if the count changed.

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

## CLI

The `cli/index.js` is registered as the `anexui` binary in `package.json`. It fetches component source from `https://anexui.com/registry/` and writes files directly into the user's project — useful for projects that want to copy-own components rather than import from the published package.

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
