# Project: Brendist

## Context

Brendist is a personal portfolio and learning repository for a Senior UX/UI and Product Designer transitioning into Design Engineering.

The project currently contains a responsive personal landing page that showcases professional background, expertise, and experience.

The goal is to progressively develop this repository into a maintainable React application while practicing Git, component development, accessibility, and AI-assisted engineering workflows.

## Tech Stack

### Currently implemented
- HTML5 (static portfolio markup in index.html)
- React 19 with TypeScript, mounted into `#root` inside index.html
- Vite as dev server and bundler
- Tailwind CSS v4 via `@tailwindcss/vite`
- CSS custom properties through Tailwind @theme (src/index.css)
- Google Fonts (Inter)
- Responsive layouts using Flexbox and CSS Grid
- Dark mode using Tailwind dark variants
- ESLint (typescript-eslint, react-hooks) and TypeScript type checking
- Git and GitHub

### Not yet configured
- Automated testing
- GitHub Pages deployment of the Vite build (`dist/`)

### Planned development stack
- Migrate the remaining static sections of index.html to React components
- Component testing when the project requires it

### Commands
- `npm run dev` — local dev server
- `npm run typecheck` — TypeScript check
- `npm run lint` — ESLint
- `npm run build` — typecheck + production build to `dist/`

Do not assume planned technologies are already installed.

## File Structure

Current confirmed files:

Brendist/
├── README.md
├── ABOUT.md
├── CLAUDE.md
├── index.html          # Vite entry; static portfolio sections + `#root`
├── package.json
├── vite.config.ts
├── tsconfig.json
├── eslint.config.js
└── src/
    ├── main.tsx        # mounts React into `#root`
    ├── App.tsx         # Button demo section
    ├── index.css       # Tailwind import, @theme tokens, .card / .tag
    └── components/
        └── ui/
            └── Button.tsx

### File responsibilities

- README.md: project introduction and designer profile.
- ABOUT.md: bilingual professional biography.
- index.html: static portfolio sections (layout and content) and the React mount point.
- src/index.css: Tailwind setup, design tokens, and shared component classes.
- src/components/ui/: reusable UI components.

## Code Conventions

### Existing conventions
- Use semantic HTML elements.
- Use Tailwind utility classes for layout and styling.
- Follow a mobile-first responsive approach.
- Use descriptive CSS class names for reusable patterns.
- Store shared brand colors in Tailwind @theme tokens.
- Use accessible text contrast and visible interaction states.
- Support both light and dark color schemes.
- Keep explanatory comments where they help learning.

### React conventions after migration
- Use TypeScript for React components.
- Use PascalCase for component names and filenames.
- Use camelCase for variables and functions.
- Define component props using TypeScript types.
- Prefer named exports for reusable UI components.
- Prefer function components and React hooks.
- Keep components small and focused.
- Use native HTML attributes whenever possible.
- Match existing project patterns before introducing new ones.

## What to do

1. Inspect the repository and relevant files before making changes.

2. Preserve existing functionality and visual design when migrating from static HTML to React.

3. Build reusable, accessible components using TypeScript and existing Tailwind design tokens.

4. Implement responsive layouts, semantic markup, keyboard interactions, and visible focus states.

5. Before finishing, review changed files and run all available lint, typecheck, test, and build commands. Report any checks that cannot run.

## What NOT to do

1. Do not assume React, Vite, TypeScript, or testing tools are installed before verifying the repository.

2. Do not use TypeScript `any` as a shortcut for missing or unclear types.

3. Do not introduce additional UI frameworks or styling libraries without a clear reason.

4. Do not duplicate existing Tailwind tokens with arbitrary hardcoded colors or unnecessarily add custom CSS when utilities are sufficient.

5. Do not rewrite unrelated files, remove existing content, commit secrets, or push changes without explicit approval.

## Development Workflow

For every implementation task:

1. Inspect relevant files and project instructions.
2. Explain the intended changes briefly.
3. Implement the smallest maintainable solution.
4. Validate functionality and accessibility.
5. Run available project checks.
6. Review the Git diff.
7. Summarize changes and remaining issues.

Use feature branches for new work.

Follow Conventional Commits:
- feat: new feature
- fix: bug fix
- refactor: internal restructuring
- docs: documentation changes
- test: test changes
- chore: tooling or maintenance

## Definition of Done

A task is complete when:
- Requirements are implemented.
- Existing functionality is preserved.
- The code follows project conventions.
- Relevant accessibility considerations are addressed.
- Available checks pass, or limitations are documented.
- Unrelated files remain unchanged.
- Changes are ready for review through a GitHub Pull Request.