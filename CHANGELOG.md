# Changelog

All notable changes to Anex UI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0] — 2026-05-28

### Added

#### Phase 1 — Form Primitives
- **Button** — variants (solid, outline, ghost, link), sizes (sm, md, lg), loading spinner, `aria-busy`, `aria-disabled`
- **Label** — `htmlFor` binding, required `*` indicator (`aria-hidden`)
- **Input** — text / email / password, `aria-invalid`, `aria-describedby`
- **Textarea** — `aria-invalid`, `aria-describedby`
- **Checkbox** — indeterminate state, `fieldset`/`legend` for groups
- **Radio Group** — context-linked, arrow key navigation, `role="radiogroup"`
- **Select** — native select with custom styling
- **Switch** — `role="switch"`, `aria-checked`
- **Slider** — `role="slider"`, `aria-valuenow` / `aria-valuemin` / `aria-valuemax`, arrow keys

#### Phase 2 — Layout
- **Container** — max-width wrapper (sm → 2xl), responsive padding
- **Stack** — flexbox (horizontal / vertical), gap, align, justify, wrap props
- **Grid** — CSS Grid helper, cols / rows / gap props
- **Divider** — `role="separator"`, `aria-orientation`, optional inline label

#### Phase 3 — Navigation
- **Tabs** — `role="tablist"` / `"tab"` / `"tabpanel"`, roving tabindex keyboard navigation, line + pill variants
- **Breadcrumb** — `<nav aria-label="Breadcrumb">`, `aria-current="page"`
- **Pagination** — smart ellipsis, `aria-current`, siblings prop
- **Stepper** — `aria-current="step"`, horizontal + vertical orientation

#### Phase 4 — Feedback / Status
- **Alert** — `role="alert"` (error) / `role="status"` (others), `aria-live`
- **Badge** — dot and label mode, multiple color variants
- **Progress Bar** — `role="progressbar"`, `aria-valuenow` / `aria-valuemin` / `aria-valuemax`
- **Spinner** — `role="status"`, animated SVG, visually hidden sr-only label
- **Skeleton** — shimmer animation, `aria-hidden="true"`, text / circular / rectangular shapes
- **Toast** — `ToastProvider` + `useToast` hook, `aria-live="polite"`, auto-dismiss, manual close

#### Phase 5 — Overlay
- **Modal** — native `<dialog>` + `showModal()`, focus trap, Escape to close, backdrop click dismiss
- **Drawer** — same dialog pattern, right / left / bottom positions, sm / md / lg sizes
- **Tooltip** — pure CSS via `:hover` + `:focus-within`, `role="tooltip"`, `aria-describedby`
- **Popover** — click-triggered, `aria-expanded` / `aria-haspopup` / `aria-controls` on trigger

#### Phase 6 — Data Display
- **Avatar** — image with fallback initials, status dot (online / away / busy / offline), `onError` handler
- **Card** — compound: `Card`, `CardHeader`, `CardBody`, `CardFooter`
- **Table** — compound: `Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeader` (`scope="col"`), `TableCell`, caption
- **Accordion** — compound, single + multi-expand, `hidden` attribute for a11y, `aria-expanded` / `aria-controls`
- **Tag** — optional dismiss button with `aria-label="Remove [tag]"`
- **Carousel** — W3C aria carousel pattern, arrows, dots, autoPlay, pause on hover
- **Banner** — full-width site bar, info / success / warning / error / promo variants, dismiss button
- **Timeline** — `<ol>`, status dots, connector lines, `<time dateTime>`, `aria-current="step"`

#### Phase 7 — Form Composites
- **FormField** — bundles Label + input + helper/error text, injects `id`, `aria-describedby`, `aria-invalid`, `aria-required` via `cloneElement`
- **SearchInput** — `type="search"`, controlled/uncontrolled, clear button, hides native browser cancel
- **NumberInput** — `type="number"`, increment/decrement buttons, min/max clamping, hides native spinners

#### Infrastructure
- Vite library build — ESM + CJS output (`index.mjs` / `index.cjs`)
- TypeScript declarations via `tsconfig.lib.json`
- Design tokens — colors, spacing, typography, radii, shadows, z-index (`src/tokens/index.css`)
- Light & dark themes via `[data-theme]` CSS custom properties
- `clsx` + `tailwind-merge` utility (`src/lib/cn.ts`)
- Storybook v10 with a11y plugin set to `error` mode
- `npx anexui add <component>` CLI — fetches components from registry, resolves deps, writes to `src/components/`

[0.1.0]: https://github.com/debayan/anexui/releases/tag/v0.1.0
