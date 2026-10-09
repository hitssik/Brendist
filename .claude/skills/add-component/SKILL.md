---
name: add-component
description: Create a new reusable, accessible React + TypeScript UI component in src/components/ui/ that follows Brendist's Tailwind tokens and conventions. Use when the user asks to add, create, or scaffold a UI component (e.g. Badge, Card, Input, Toggle).
argument-hint: <ComponentName> [short description of what it should do]
---

# Add a UI component

Create the component requested in: **$ARGUMENTS**

The first word is the component name; anything after it is an optional description of purpose, variants, or behavior.

## 1. Read project instructions

- Read `CLAUDE.md` in full and follow it. It overrides anything in this skill.
- Note the commands it lists (typecheck, lint, build, test) — use those in step 7.

## 2. Validate the name

- If no name was given, ask the user for one and stop.
- Convert it to PascalCase (`date picker` → `DatePicker`). The file is `src/components/ui/<Name>.tsx`.
- If the name collides with a native element or React export in a confusing way (e.g. `Fragment`), suggest an alternative before continuing.

## 3. Check whether it already exists

- Look in `src/components/ui/` for `<Name>.tsx` (case-insensitive) and search `src/` for `export function <Name>` or `export const <Name>`.
- If it exists: **do not overwrite it.** Show the user what exists and ask whether to extend it, replace it, or pick another name.

## 4. Learn the existing conventions

Read before writing — match what is there rather than inventing new patterns:

- `src/components/ui/Button.tsx` (and any other files in `src/components/ui/`) — prop typing, variant/size maps, class joining, comments style.
- `src/index.css` — `@theme` tokens (`brand-*`, `font-sans`) and shared classes (`.card`, `.tag`).
- `index.html` and `src/App.tsx` — how components are used and how light/dark styles are paired.

Conventions to reproduce (verify they still hold):

- Named export, function component, PascalCase file and component name.
- Props type extends the native element's props via `ComponentPropsWithRef<'element'>` so `ref`, `aria-*`, and event handlers pass through; spread `...props` onto the root element.
- `variant` / `size` maps typed as `Record<Variant, string>`; sensible defaults.
- Classes joined with `[...].filter(Boolean).join(' ')`; consumer `className` goes last.
- Colors only from existing tokens (`brand-*`) and Tailwind's palette already used (`slate-*`). No hardcoded hex values, no new dependencies (no clsx/cva/tailwind-merge) unless the user agrees.
- Every visual style has a `dark:` counterpart.
- Short explanatory comments (Ukrainian, like the rest of the project) where they help learning.

## 5. Build the component

Use the most semantic native element (`button`, `input`, `label`, `dialog`, `ul`…) instead of `div` + ARIA.

Include only the states that make sense for this component:

- **Interactive:** hover via `enabled:hover:` (or `hover:`), keyboard focus via `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500`, `disabled:` styles plus `cursor-pointer` / `disabled:cursor-not-allowed`.
- **Async:** `loading` with `aria-busy` and a decorative `aria-hidden` indicator.
- **Form fields:** associated `<label>`, `aria-invalid` + `aria-describedby` for error/help text, `required`.
- **Toggles/selection:** `aria-pressed`, `aria-checked`, or `aria-expanded` as appropriate.

Accessibility checklist:

- Fully operable with the keyboard; visible focus.
- Accessible name for every interactive element (text, `aria-label`, or `<label>`).
- Text contrast meets WCAG AA in both light and dark modes.
- Decorative icons are `aria-hidden="true"`.

Never use `any`. Keep the component small and focused; split it if it grows beyond one responsibility.

## 6. Show it on the page (optional, ask first if unclear)

If the project has a demo area (currently the "Компоненти" section in `src/App.tsx`), add a compact example showing the main variants and states. Do not change the portfolio sections in `index.html`.

## 7. Validate

Run every available check from `package.json` / `CLAUDE.md`, typically:

```bash
npm run typecheck
npm run lint
npm run build
```

Fix any errors you introduced. If the dev server is available, open the page and check the component in light and dark mode, at mobile width, and with keyboard navigation. Report any check that could not run.

Do not commit or push unless the user asks.

## 8. Summarize

Finish with:

- **Files changed** — created/modified files with one line each on what changed.
- **API** — props, their types, and defaults.
- **Usage** — a short TSX example, e.g.

  ```tsx
  import { Name } from './components/ui/Name'

  <Name variant="primary">…</Name>
  ```

- **Checks** — which commands ran and their result.
- **Open questions** — anything you assumed or left out.
