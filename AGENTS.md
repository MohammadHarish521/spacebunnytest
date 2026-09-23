<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project shape

- This is a single Next.js 16.3.6 App Router app using React 19 and TypeScript; it has no `src/`, `pages/`, workspace packages, or API routes.
- `app/layout.tsx` is the root layout and imports `app/globals.css`; `app/page.tsx` is the `/` route. Static assets belong in `public/`, and `@/*` imports resolve from the repository root.
- Styling is Tailwind CSS v4 through `@tailwindcss/postcss`; `app/globals.css` owns the `@import "tailwindcss"` entrypoint and there is currently no Tailwind config.

## Commands

- Use npm with the checked-in `package-lock.json`: run `npm ci` for a reproducible install.
- `npm run dev` starts the Turbopack development server at `http://localhost:3000`.
- `npm run lint` runs the flat-config ESLint setup; `next lint` is removed in Next.js 16.
- `npx next typegen && npx tsc --noEmit` typechecks the project; run `next typegen` first when generated route types are stale or absent.
- `npm run build` performs the production build and TypeScript check; run `npm run start` only after it.
- There is no test script or test framework configured; do not assume a `test` command.

## Generated files

- Next.js 16.3.6 requires Node.js 20.9 or newer.
- Do not edit or commit `next-env.d.ts`, `.next/`, or `*.tsbuildinfo`; they are generated and ignored.
- `CLAUDE.md` contains only `@AGENTS.md`; keep repository-specific guidance here.
