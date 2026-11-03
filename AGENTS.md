<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project conventions

- Use JavaScript/JSX. Do not introduce TypeScript.
- Follow the existing design tokens, typography, and component conventions.
- Keep website copy in English.

## Working agreements

- Work in small, focused iterations. Modify only what the current task requires.
- Do not run a production build for every small iteration. Run it before release or when changes affect production compilation or static generation.
- Inspect only the relevant components, styles, and documentation.
  Do not start a broad project audit unless requested.
- Preserve unrelated code, content, and completed sections.
- Do not add dependencies unless the task requires them.
- For minor visual changes, do not use Playwright or browser automation.
  The user checks localhost and provides screenshots.
- Use supplied image assets. Do not generate or replace photography unless asked.
- Run checks appropriate to the change. Do not add tests for purely cosmetic edits.
- Finish with a brief summary of changes and checks performed.
  Clearly state any checks that were not run.

## Project references

- For UI tasks, use DESIGN.md as the visual source of truth.
  Read the relevant sections when starting UI work in a new session,
  when the file changes, or when needed details are missing from context.
  Avoid redundant reads within the same session.
- Consult TODO.md when the task touches deferred work or known limitations.
- Use Context7 when library documentation is needed, rather than for routine styling changes.
