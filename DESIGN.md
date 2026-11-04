# Nourish design reference

This records the current implemented homepage design for future recipe and journal pages. Source of truth: `styles/globals.css`, `app/layout.jsx`, `components/ui/`, `components/layout/`, `components/sections/`, and `data/home.js`. Values below describe the implementation; homepage compositions are examples, not required page templates.

## Identity and reusable principles

Nourish is a modern pantry journal with an editorial food-magazine identity: warm paper, dark green ink, expressive serif headlines, restrained sans-serif details, generous space, and seasonal food photography. English copy is calm, concrete, and concerned with cooking, keeping, and noticing.

Hierarchy comes from type, image scale, whitespace, numbering, and thin rules. Current surfaces are flat, with square image frames and buttons; cards are not raised or shadowed. Asymmetry is deliberate and aligned to the grid. Photography supplies texture and richness; interface color stays restrained.

## Palette

Exact tokens from `@theme inline` (prefix every name with `--color-`):

| Token | Value | Current role |
| --- | --- | --- |
| `ink` | `#1c2a24` | Headlines, links, primary buttons |
| `ink-hover` | `#304238` | Primary button hover/focus fill |
| `olive` | `#71806a` | Navigation, card-title and editorial-link hover |
| `tomato` | `#b54832` | Issue accents, numbering, cover-link hover |
| `saffron` | `#d29a32` | Keyboard-focus outline |
| `plum` | `#6e3f46` | Defined; no current homepage application |
| `canvas` | `#f4f0e7` | Body and header background |
| `surface` | `#fffcf5` | Journal hover surface, inverse button |
| `surface-2` | `#e9e3d5` | Pantry background, image fallback, inverse supporting text |
| `surface-dark` | `#27352d` | Newsletter background |
| `text-primary` | `#1e2420` | Default body text |
| `text-secondary` | `#5d625c` | Descriptions, captions, metadata |
| `text-inverse` | `#f8f4ea` | Text on dark surfaces |
| `border-subtle` | `#d8d1c2` | Default borders and dividers |
| `border-strong` | `#aaa394` | Cover masthead rule and pantry rows |

## Typography

`--font-display` resolves to `--font-dm-serif-display`: **DM Serif Display**, weight 400. `--font-sans` resolves to `--font-dm-sans`: **DM Sans**; the body stack is DM Sans, Arial, sans-serif. Body default is `1rem / 1.5`. Sizes in pixels below assume a 16px root; the implementation uses rem and fluid clamps.

Reusable hierarchy: serif for headlines and ingredient names; sans-serif for reading text, controls, labels, captions, and numbers. Headlines use tight leading and negative tracking; small editorial labels use uppercase and open tracking. Current heading sizes are composition-specific, not a universal H1–H3 scale.

| Role / current example | Size | Line-height; tracking |
| --- | --- | --- |
| Cover H1 | `clamp(3rem,13.3vw,4.5rem)`; md+: `clamp(3rem,6.5vw,6rem)` | `0.95`; `-0.045em` |
| Recipe section H2 | `clamp(2.5rem,4.3vw,4.5rem)` | `0.95`; `-0.05em` |
| Pantry H2 | `clamp(2.75rem,4.8vw,5rem)` | `0.9`; `-0.055em` |
| Featured story H2 | `clamp(3rem,5.2vw,5.6rem)`; md+: `clamp(2.7rem,4.68vw,5.04rem)` | `0.9`; `-0.06em` |
| Journal section H2 | `clamp(2.5rem,4vw,4.25rem)` | `1`; `-0.05em` |
| Newsletter H2 | `clamp(3rem,5vw,5.5rem)` | `0.9`; `-0.06em` |
| Recipe card H3 | `clamp(1.75rem,2.4vw,2.5rem)` | `0.98`; `-0.04em` |
| Journal card H3 | `1.875rem` (30px) | `0.95`; `-0.04em` |
| Pantry ingredient | `1.875rem`; sm+: `2.25rem` | `1`; `-0.04em` |
| EditorialLabel | `0.6875rem` (11px), medium | Default inherited leading; `0.12em`, uppercase |
| Numbers / small metadata | `0.75rem` (12px) | Usually 16px; commonly `0.08em` |
| Captions / pantry details | `0.8125rem` (13px) | Cover/details: 20px; story caption: inherited 1.5; tracking `0.03–0.04em` where specified |

Reading text: recipe descriptions are **16px / 24px**; story and newsletter introductions are **16px / 28px**, `max-w-md` (28rem). Cover introduction is **14px / 24px**, becoming **16px / 28px at lg**, limited to `34ch`. Pantry introduction is **14px / 24px**, `max-w-xs` (20rem). Controls/navigation are generally 14px; buttons and editorial calls to action use medium weight. No long-form article body or recipe-method typography has been implemented yet; these introduction sizes are references, not an established article template.

## Layout, rhythm, and rules

- `Container`: centered, full width, **1440px maximum including padding**; horizontal padding **20px**, **32px at md**, **48px at xl**. Body minimum width: 320px.
- Current breakpoints: **sm 640px**, **md 768px**, **lg 1024px**, **xl 1280px** (40/48/64/80rem).
- Common editorial grid: **4 columns / 12px column gaps**, switching at md to **12 columns / 24px gaps**. Mobile content usually spans all four columns; some compositions use a simple one-column stack instead.
- Spacing follows the existing 4px utility unit. Typical label-to-heading gap: 12–16px; heading-to-copy: 24px; image-to-caption: 12px; image-to-card text: 16px. Section heading-to-content: 40px, increasing to 56px at md for recipes/journal and 48px to 64px for pantry.
- Most sections use vertical padding **80px / 112px at sm / 144px at lg**. Homepage exceptions: story reaches 160px at lg; journal 128px; cover top/bottom is 24/40px, then 40/64px at md.
- Dividers are 1px: subtle for section boundaries, captions, journal cells, and header/footer; strong for the cover's top rule and pantry rows. Color bands distinguish pantry and newsletter sections.

### Homepage compositions, not reusable templates

- Cover: md+ text/image split **5/7**; mobile order is issue line, headline, photograph/caption, introduction, link. The forced three-line headline belongs to this cover.
- Recipes: stacked full-width cards on mobile; md+ spans **5/3/4**, with the middle card offset down **48px at lg**. Different image proportions create uneven edges without abandoning alignment.
- Featured story: md+ image spans **7 columns**; text spans **4 starting at column 9**, leaving a column of air, with **96px top padding** on the text. Mobile stacks image before text.
- Journal preview: three equal ruled cells at md+, stacked with bottom rules below md. Pantry uses two ruled list columns at md+. Newsletter has offset text/form columns on desktop.
- Header: 72px high, 80px at md; full navigation appears at lg, with a menu below lg. Wordmark is 32px, 36px at sm; footer wordmark is 24px.

For new pages, reuse the container, type contrast, spacing rhythm, rules, and grid alignment. Choose content-driven spans rather than copying the homepage's offsets or section order.

## Photography and cropping

Current supplied imagery shows seasonal ingredients and unfussy food, warm directional daylight and shadows, tactile linen, ceramic dishes, wood, and paper. It feels close to a working kitchen and market table. Use the supplied assets; photography is not replaced as part of routine layout work.

Frames are rectangular, `overflow-hidden`, with `surface-2` behind the image and `object-fit: cover`. Cropping fills the frame rather than stretching the source. Default positioning is centered; the cover explicitly uses **60% horizontal / 50% vertical**, and the story explicitly uses center. These focal positions are image-specific.

| Current placement | Below md ratio (width:height) | md+ ratio |
| --- | --- | --- |
| Cover | 6:5 | 6:5 |
| Recipe 01 | 4:5 | 5:6 |
| Recipe 02 | 3:2 | 4:5 |
| Recipe 03 | 5:6 | 1:1 |
| Featured story | 5:4 | 5:4 |

These are homepage frame choices, not mandatory recipe-detail or journal-article ratios. Captions sit outside images; current frames have no text overlay or hover zoom. Preserve descriptive alt text.

## Culinary and botanical iconography

The five original pantry guide SVG drawings in `components/ui/PantryIcon.jsx` are the approved visual reference: bean pod, wheat stalk, tomato, olive oil bottle, and herb sprig. `app/journal/how-to-build-a-better-pantry/PantryIcon.jsx` re-exports this shared component for the article. The shared set also supplies fig, basil sprig, peach, and eggplant accents for the homepage Pantry Index.

- Reuse this style for relevant ingredient and category accents across the project. Check existing assets and component conventions before creating more icons.
- Use unfilled outlines with consistent **1.5-unit strokes**, rounded caps and joins, and balanced optical scale within a **32×32 viewBox**. The current implementation uses `stroke="currentColor"`, `text-olive` (muted olive), and `size-8` (**32px**); keep similar accents around **28–32px** and non-shrinking beside naturally wrapping headings.
- Keep accents plain: no decorative backgrounds, enclosing circles, hover effects, or unnecessary animation.
- Decorative icons must be hidden from assistive technology; the reference uses `aria-hidden="true"` and `focusable="false"`. Functional icons need accessible labels on their controls.
- Icons may replace purely decorative numbering when they communicate a category more clearly. Preserve numbers that convey sequence, counts, or meaningful identifiers, especially recipe method steps.

## Links, controls, and keyboard focus

- Global links inherit color and remove text decoration. Navigation and linked card titles turn olive on hover. Editorial calls to action use a 1px bottom border, 4px bottom padding, and small directional arrows; cover hover turns tomato, story/journal hover olive. Color transitions are generally **200ms**. Journal cells also gain a `surface` background on hover.
- `Button`: square corners, inline flex, centered content, **44px minimum height**, **20px horizontal padding**, **8px gap**, **14px medium text**, `0.02em` tracking, 200ms color transition. Primary: ink/inverse text → ink-hover fill on hover or keyboard focus. Secondary: ink border/text, transparent fill → surface-2. Inverse: surface/ink text → surface-2. Text variant adds underline on hover/focus with 4px underline offset and requests zero horizontal padding.
- Icon controls use **44×44px** targets; current Lucide arrows/icons use thin **1.5px strokes**. Newsletter submit overrides the button to 48px minimum height and full width.
- Global `:focus-visible`: **2px solid saffron outline, 3px offset**. Newsletter submit requests 4px offset. Hover color is not the only keyboard indicator.
- The implemented input is newsletter-specific: **48px height**, transparent fill, no horizontal padding, 16px inverse text, surface-2 placeholder, and a **1px surface-2 border at 40% opacity** on the bottom. Focus changes it to a **2px surface border**, adjusting bottom padding from 1px to 0 to hold its position. Global outline and shadow are explicitly removed for this input only. Do not generalize that exception into a site-wide input rule.
- Newsletter has an accessible label, email autocomplete, invalid state and error association, alert text, and a status message. Error/status text is 14px / 24px in surface-2. This does not establish a general form-state palette.

## Current motion

### Recipe entrance (`RecipeCardReveals`)

The stationary article is measured/observed; its inner link (image and text together) animates once. Content is visible in server-rendered markup; hiding is prepared only on the client when motion and IntersectionObserver are available.

| | Desktop (md+, ≥768px) | Mobile (<768px) |
| --- | --- | --- |
| Initial prepared state | Opacity 0, x = −24px | Opacity 0, y = +20px |
| Trigger | First article reaches 20% visible area | Each pending article reaches 10% visible area |
| Sequence | All cards left to right; starts at 0 / 0.4 / 0.8 seconds | Each card independently; no stagger |
| Duration per card | 1.6 seconds | 1 second |
| Easing / destination | Cubic Bézier `[0.4,0,0.2,1]`; opacity 1, translation 0 | Same |

If the first desktop card is already at least 20% visible during setup, the whole sequence is skipped. Mobile cards whose top edge is already above the viewport bottom remain visible instead of being prepared. Keyboard focus entering the grid, breakpoint changes, or motion-preference changes complete pending/running entrances and reveal everything. Errors also restore visibility. Without IntersectionObserver or with reduced motion requested at setup, cards remain visible with no entrance. The desktop stagger is specific to this three-card homepage composition.

### Other current motion and reduced motion

- Cover H1 and figure: 450ms ease-out, opacity 0→1 and y 12→0px, only under `prefers-reduced-motion: no-preference`.
- `ScrollReveal`: once at 10% in view, opacity 0→1 and y 18→0px over 550ms, easing `[0.22,1,0.36,1]`; optional delay defaults to zero. Server content stays visible until the entrance runs. Reduced motion skips it.
- Mobile menu: opacity and y −8→0px over 200ms ease-out; reduced motion uses zero duration without translation.
- Global reduced-motion CSS restores `.scroll-reveal` visibility/transforms, disables smooth scrolling, and reduces CSS transition/animation durations to 0.01ms with one animation iteration. Recipe motion separately uses the completion behavior above.

## Scope for future pages

Reuse implemented visual primitives; recipe-detail and long-form journal layouts still need their own composition decisions. Homepage issue dates, seasonal copy, numbered selections, navigation destinations, and shared `/recipes` or `/journal` links do not define permanent information architecture. The newsletter currently reports a portfolio demo and creates no subscription; that behavior is not a product requirement.
