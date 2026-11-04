# Future ideas

- [x] Implement the article at `/journal/why-august-tastes-different` and update the homepage “Read the story” CTA to link to it.
- [x] Implement `/journal/how-to-build-a-better-pantry` with the supplied copy and image, and link its homepage card.
- [ ] Visually review the pantry guide on desktop and mobile: composition, natural image proportions, readable columns, contrast, and horizontal overflow.
- [x] Replace decorative ingredient numbers in Pantry Index with approved-style tomato, fig, basil sprig, bean pod, peach, and eggplant icons; preserve its static list and existing layout.
- [ ] Review remaining decorative numbering on existing pages for selective replacement with approved culinary/botanical icons. Propose specific replacements before implementation; avoid a site-wide automatic replacement and preserve meaningful sequence, counts, and identifiers.
- [ ] Replace placeholder destinations in “Things worth keeping.”:
  - “All notes” — journal index
  - “The quiet ritual of Sunday cooking”
  - “What to buy at the market this week”

  Before publication, decide which pages belong in the portfolio scope.
  Implement the selected pages and update their links.
  Remove links and navigation affordances for deferred pages.
  Verify that this section has no links to placeholders or 404 pages.

## Deferred header destinations and features

The header currently links to the existing homepage Recipes, Pantry, and Journal sections from every page.

- [ ] Decide whether standalone recipe (`/recipes`) and pantry (`/pantry`) indexes belong in the portfolio scope. Ingredient detail pages remain optional as described below.
- [ ] Decide whether Seasonal (`/seasonal`) and About (`/about`) pages belong in scope.
- [ ] Implement Search (`/search`) and Saved recipes (`/saved`) only if these features are included in scope.

The journal index (`/journal`) is covered by the “Things worth keeping.” task above.
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
