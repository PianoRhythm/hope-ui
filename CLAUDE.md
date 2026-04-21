# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

Hope UI is a SolidJS component library. Upstream (`fabien-ml/hope-ui`) is no longer maintained; this fork lives under `PianoRhythm/hope-ui` and continues to track its own version of `@hope-ui/solid`. The library is published from `packages/solid`. The upstream successor is Pigment (`kobaltedev/pigment`) — not used here.

## Repo layout

pnpm + Turborepo monorepo (`pnpm-workspace.yaml`, `turbo.json`):

- `packages/solid/` — the `@hope-ui/solid` component library (the only published package).
- `apps/docs/` — `@hope-ui/docs`, Vite-powered documentation site that consumes `@hope-ui/solid` via `workspace:*`.

Note: `CONTRIBUTING.md` references `packages/design-system` and `packages/primitives` — those are outdated; only `packages/solid` exists today.

## Commands

All package manager commands use **pnpm 9** (declared in `package.json#packageManager`). Turbo orchestrates per-package scripts.

Root (monorepo-wide, via turbo):
- `pnpm build` — builds every package. `pnpm build:mem` raises Node heap to ~14 GB for memory-heavy builds.
- `pnpm test` — runs all test suites.
- `pnpm typecheck` — `tsc --noEmit` across packages (not cached).
- `pnpm lint` — ESLint on `.ts`/`.tsx`.
- `pnpm format` — Prettier write across the repo.
- `pnpm changeset` / `pnpm version-packages` / `pnpm release` — Changesets publishing flow.

Inside `packages/solid/` (where most work happens):
- `pnpm dev` — `vite serve dev --host` — launches the in-package dev playground at `packages/solid/dev/`.
- `pnpm build` — `vite build` producing `dist/index.mjs`, `dist/index.cjs`, and bundled `.d.ts` (via `vite-plugin-dts`, which bundles `@stitches/core` types in).
- `pnpm test` — Jest (jsdom, ts-jest, with Solid Babel preset). Running a single test: `pnpm --filter @hope-ui/solid test -- <pathOrPattern>` or `pnpm --filter @hope-ui/solid test -- -t "<test name>"`. Use `pnpm test:watch` for watch mode.
- `pnpm typecheck` — `tsc --noEmit`.
- `pnpm storybook` — `start-storybook -p 6006` (component stories live next to components as `*.stories.tsx`).

Inside `apps/docs/`:
- `pnpm dev` — Vite docs dev server.
- `pnpm build` / `pnpm serve` — production build and preview.

## Architecture

The library is built around three interlocking systems: **Stitches-based styled system**, **the `hope` factory**, and **theme/color-mode context**. Understanding all three is required before touching components.

### 1. Styled system (`packages/solid/src/styled-system/`)

- `stitches.config.ts` configures a single `@stitches/core` instance with the Hope token prefix (`hope`), a themeMap that routes border/stroke widths through the `sizes` scale, plus base tokens, media queries, and utils. All `css`, `globalCss`, `createTheme`, and `keyframes` exports in the library come from here — **do not create a second Stitches instance**.
- `tokens/` defines base design tokens (colors, space, sizes, radii, shadows, typography, z-indices). `media.ts` defines responsive breakpoints. `stitches-utils/` provides shorthand CSS utilities registered with Stitches.
- `props/` declares every style-prop family (border, color, flexbox, grid, interactivity, layout, margin, padding, position, pseudo-selector, radii, shadow, size, transform, transition, typography) plus the `css` escape hatch. Each prop file exports a `*PropNames` object; `system.ts` merges them into `StyleProps` / `stylePropNames` and provides `createStyledSystemClass` + `getUsedStylePropNames` that turn style props into a Stitches class.
- Style props accept responsive values (`ResponsiveProps`) — plain values or an object keyed by breakpoint.

### 2. The `hope` factory (`packages/solid/src/components/factory.tsx`)

`hope` is the foundation for every component. Two call forms:

- `hope("div")` / `hope.div` / `hope(SomeComponent, { baseClass, baseStyle })` — returns a `HopeComponent` that: splits style props from regular props, composes `baseClass` + caller classes + computed Stitches class, and renders via solid-js `Dynamic` using the `as` prop (defaulting to the given element).
- The factory also embeds tooltip behavior: when a consumer passes the `__tooltip_title` + related `__tooltip_*` props, the component wraps itself with a Floating UI–positioned portal tooltip. These underscore-prefixed props are an internal contract — components like `Tooltip` feed them in; downstream users do not set them directly.
- `hopeComponent.toString()` returns a class-selector so components can be targeted inside Stitches' `css` prop (same ergonomics as Stitches-wrapped components).

### 3. Theme + color mode (`packages/solid/src/hope-provider.tsx`, `color-mode.ts`)

- `HopeProvider` is the single required wrapper. It builds light/dark themes via `extendBaseTheme`, creates signals for `colorMode` and the current `theme`, persists color-mode choice to localStorage, toggles the body class, applies global CSS reset (if `enableCssReset`, default true), and calls `applyGlobalTransitionStyles()` to register transition keyframes used by drawer/menu/modal/notification/popover/select/tooltip.
- Hooks surface the context: `useTheme`, `useStyleConfig` (per-component theme overrides from `config.components`), `useColorMode`, and `useColorModeValue(light, dark)` returning a derived signal.

### 4. Component structure convention

Each component folder under `packages/solid/src/components/<name>/` typically contains:

- `<name>.tsx` — component implementation using `hope(...)` and `splitProps`.
- `<name>.styles.ts` — Stitches `css(...)` definitions and variants; compound components export a `*TransitionStyles` global fn registered in `HopeProvider`.
- `<name>.stories.tsx` — Storybook stories.
- `<name>.test.tsx` — Jest + `solid-testing-library` tests.
- `index.ts` — public surface.

Compound components (modal, menu, drawer, popover, select, accordion, tabs, form-control, etc.) usually have sub-parts (`modal-header.tsx`, `modal-body.tsx`, …) and a `create-*.ts` primitive that exposes the disclosure/state machine.

### Utilities and hooks

- `src/hooks/` — `create-disclosure`, `create-queue`, `use-click-outside`, `use-event`, re-exported from `hooks/index.ts`.
- `src/utils/` — runtime helpers (`assertion`, `css`, `dom`, `function`, `number`, `object`, `solid`, `tabbable`, `types`).
- `src/components/test-utils.tsx` and `storybook-utils.tsx` — shared test/Storybook harness helpers.

## Build & publish notes

- `vite.config.ts` builds in SSR mode (`ssr: true`) with ES + CJS outputs and externalizes every `dependencies`/`peerDependencies` entry plus `solid-js` subpaths. `@stitches/core` types are bundled into the emitted `.d.ts`.
- Peer deps are pinned ranges of `@stitches/core`, `solid-js`, and `solid-transition-group` — consumers must install these.
- `sideEffects: false` is set on `@hope-ui/solid`; avoid introducing top-level side effects in new source files (module-scope Stitches globals are the existing exception, wired through `HopeProvider` to stay tree-shake-safe).

## Tooling conventions

- Jest (`packages/solid/jest.config.js`) uses `ts-jest` + jsdom, maps Solid imports to CJS builds in `node_modules/solid-js/...`, and bootstraps with the root `jest.setup.ts`. Solid components must be compiled with `babel-preset-solid` — already configured globally under `ts-jest.babelConfig`.
- ESLint (`.eslintrc.json`) extends Solid, a11y, TypeScript, Prettier, and `simple-import-sort`. `@typescript-eslint/no-explicit-any` and `ban-types` are disabled deliberately. Keep imports sorted (the sort plugin auto-fixes on lint).
- TypeScript is `strict: true` with `jsxImportSource: "solid-js"`. Use `jest`, `node`, `vite/client`, and `@testing-library/jest-dom` types.
- Commits are conventional (`commitlint` + commitizen via `pnpm commit`). Changesets drive versioning/publishing.
- `CONTRIBUTING.md` says PRs land on `develop`, but the current default branch is `main` — confirm target branch before opening a PR.
