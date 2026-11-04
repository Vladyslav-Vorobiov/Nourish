# Publication readiness

- [x] Record visual approval of the latest desktop/mobile changes, including the shared article entrance, Pantry Index additions, and recipe Method spacing.
- [x] Remove the homepage hero CTA and the nonfunctional “All notes” link; retain all three journal article cards.
- [x] Create a path-based Ink-on-Canvas N favicon set: `app/icon.svg`, `app/favicon.ico` (16/32/48px), and `app/apple-icon.png` (180px). Verify generated icon metadata on all pages.
- [x] Review and approve the favicon set and all eight sharing-image crops before the deployment-preparation commit.
- [x] Review the manually updated `.gitignore` and `jsconfig.json`; preserve `@/*` resolution without `baseUrl`.
- [x] Untrack 34 generated Python cache/browser artifact files while preserving local copies. Verify `git ls-files -ci --exclude-standard` is empty; retain source, images, local fonts/licenses, lockfile, documentation, and UI skill scripts/data/SKILL.md.
- [x] Remove redundant placeholders from nonempty `components/sections` and `data`; keep `lib/.gitkeep` for its otherwise empty directory.
- [x] Pass full lint and one final production build; verify all eight pages, 61 rendered internal links, homepage anchors, recipe/article back links, titles/descriptions, and favicon references. Reuse completed animation checks.
- [x] Verify all eight production pages and three favicon endpoints return HTTP 200 locally.
- [x] Run one refreshed final production build covering the latest `app/layout.jsx` and `components/sections/Newsletter.jsx` changes; all routes compile and prerender successfully.
- [x] Check tracked text files in HEAD and the current working tree for credential patterns without exposing values; no candidates found. This is not a full-history secret audit.
- [x] Verify all eight pages have unique, nonempty titles/descriptions and `lang="en"`; preserve the newsletter's explicit portfolio-demo status.
- [x] Remediate production dependency findings with compatible updates: pin Next.js and eslint-config-next to 16.4.5; resolve Sharp 0.35.5 through Next's optional dependency and source-map-js 1.2.2 through its existing parents. No direct transitive dependencies or overrides were added.
- [x] Resolve high development-tooling findings with targeted updates: brace-expansion 1.1.21/5.0.12, js-yaml 4.3.2, and Zod 4.6.7.
- [x] Pass full lint and one production build on the patched dependency set. Final `npm audit --omit=dev` reports zero vulnerabilities; full audit reports 16 moderate findings, with no high or critical findings.
- [ ] Revisit the remaining 16 moderate development/build-tooling findings in minimatch 3.1.5/10.2.6 and the ESLint/TypeScript-ESLint chains. Current compatible parent releases still require these minimatch majors (including TypeScript-ESLint 8.72.1); the patched minimatch 11 line falls outside those ranges. Await compatible upstream updates rather than forcing a transitive major, applying blanket overrides, or accepting obsolete ESLint downgrades. These findings are absent from the production-only dependency audit.
- [x] Prepare Open Graph and Twitter `summary_large_image` metadata for all eight pages, reusing their titles/descriptions and explicit page-specific image alt text. Set siteName `Nourish`, locale `en_US`, and website/article types. Create and visually inspect eight static 1200×630 JPEG crops in `public/images/sharing/`, preserving original photos.
- [ ] Once the permanent Vercel URL is known, set the final `metadataBase`, page canonical URLs and `og:url`, and finalize sitemap/robots configuration. Sharing-image paths intentionally remain relative; Next may resolve them to localhost in local previews without `metadataBase`. Configure and verify the permanent origin before publishing so localhost sharing URLs are never published.

The patched dependency set passes lint/build and has no production dependency audit findings. Sixteen moderate development/build-tooling findings remain as described above. Favicon and sharing images are visually approved. Production sharing/SEO URL configuration remains pending; do not push or deploy until separately requested.

No production URL has been invented; finalize sharing/SEO URLs as described above once the permanent hostname is available. The newsletter remains an explicitly labelled portfolio demo, with no subscription created. A live subscription service is a separate product decision.

## Future ideas

- [x] Implement the article at `/journal/why-august-tastes-different` and update the homepage “Read the story” CTA to link to it.
- [x] Implement `/journal/how-to-build-a-better-pantry` with the supplied copy and image, and link its homepage card.
- [x] Complete visual review of “How to build a better pantry” — visually approved on desktop and mobile.
- [x] Implement `/journal/the-quiet-ritual-of-sunday-cooking` with the supplied copy and image, and link its homepage card.
- [x] Complete visual review of “The quiet ritual of Sunday cooking” — visually approved on desktop and mobile.
- [x] Implement `/journal/what-to-buy-at-the-market-this-week` with the supplied copy and image, recipe links, and homepage card destination. Visually approved on desktop and mobile.
- [x] Replace decorative ingredient numbers in homepage Pantry Index with approved-style tomato, fig, basil sprig, bean pod, peach, and eggplant icons; preserve its static list and existing layout. Icon replacement and row alignment are visually approved on desktop and mobile.
- [ ] Review remaining decorative numbering on existing pages for selective replacement with approved culinary/botanical icons. Propose specific replacements before implementation; avoid a site-wide automatic replacement and preserve meaningful sequence, counts, and identifiers.
- [x] Resolve placeholder destinations in “Things worth keeping.”: all three cards lead to implemented articles, and “All notes” has been removed. Verify no rendered placeholder or 404 links remain.

## Deferred header destinations and features

The header currently links to the existing homepage Recipes, Pantry, and Journal sections from every page.

- [ ] Decide whether standalone recipe (`/recipes`) and pantry (`/pantry`) indexes belong in the portfolio scope. Ingredient detail pages remain optional as described below.
- [ ] Decide whether Seasonal (`/seasonal`) and About (`/about`) pages belong in scope.
- [ ] Implement Search (`/search`) and Saved recipes (`/saved`) only if these features are included in scope.

- [ ] Revisit a standalone journal index (`/journal`) only if a notes catalogue is added to scope; its “All notes” navigation has been removed.

Restore deferred header links only when their destinations and features work.

## Ingredient detail pages — optional

Pantry Index is intentionally a static reference list.

Revisit after the homepage is complete, if ingredient pages add enough value.
Possible content:

- How to choose the ingredient
- Storage conditions and approximate shelf life
- Preparation tips
- Related recipes

Restore links, arrows, and interactive states only when real pages exist.
