---
name: ui-ux-pro-max
description: Design, implement, and review web interfaces using searchable UI/UX guidance while respecting established design systems.
---
# ui-ux-pro-max

Comprehensive design guide for web and mobile applications. Contains 67 styles, 96 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 13 technology stacks. Searchable database with priority-based recommendations.

## Prerequisites

Check if Python is installed:

```bash
python --version
```

Examples below run from the repository root and use `python`, the working Windows interpreter. On systems where Python 3 is named `python3`, substitute that executable. `-B` prevents bytecode cache writes. Replace angle-bracket placeholders before running commands.

If Python is not installed, install it based on user's OS:

**macOS:**
```bash
brew install python3
```

**Ubuntu/Debian:**
```bash
sudo apt update && sudo apt install python3
```

**Windows:**
```powershell
winget install Python.Python.3.12
```

---

## How to Use This Skill

When user requests UI/UX work (design, build, create, implement, review, fix, improve), follow the applicable steps below.

### Existing Projects: Start with the Approved Design

Read applicable `AGENTS.md`, `DESIGN.md` when present, and the relevant implemented components and styles before choosing recommendations. Preserve established tokens, typography, layouts, assets, and motion specifications. Use targeted domain or stack searches only where they help the current task; routine implementation, review, or fixes do not require a new design system. Follow the project's existing stack and task boundaries.

Generic style examples, palette values, layout patterns, and timing recommendations in this skill or its search results are supplementary guidance. They do not override approved project tokens, layouts, or motion specifications. Use the requested scope of checks rather than expanding work to every checklist item.

### Step 1: Analyze User Requirements

Extract key information from user request:
- **Product type**: SaaS, e-commerce, portfolio, dashboard, landing page, etc.
- **Style keywords**: minimal, playful, professional, elegant, dark mode, etc.
- **Industry**: healthcare, fintech, gaming, education, etc.
- **Stack**: Use the existing project's stack or the user's choice; default to `html-tailwind` only when neither is established

### Step 2: Generate a Design System (Conditional)

Use `--design-system` for a new visual direction or when explicitly requested. Skip it for routine work on an established design and go directly to targeted searches if useful. Generation returns recommendations; it does not replace an approved project design. Without `--persist`, it prints results without saving design-system files:

```bash
python -B .codex/skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system -p "Project Name"
```

This command:
1. Searches 5 domains in parallel (product, style, color, landing, typography)
2. Applies reasoning rules from `ui-reasoning.csv` to select best matches
3. Returns complete design system: pattern, style, colors, typography, effects
4. Includes anti-patterns to avoid

**Example:**
```bash
python -B .codex/skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness service" --design-system -p "Serenity Spa"
```

### Step 2b: Persist a Design System (Opt-in Only)

Only when the user requests saved design-system files, add `--persist`. Generation alone does not imply persistence. This option creates directories and writes files, replacing matching files if they already exist:

```bash
python -B .codex/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name"
```

Paths are relative to the current directory, or `--output-dir` if supplied. `<project-slug>` is the project name lowercased with spaces replaced by hyphens (`Project Name` becomes `project-name`; omitting `-p` uses `default`).

This creates:
- `design-system/<project-slug>/MASTER.md` — Generated design recommendations
- `design-system/<project-slug>/pages/` — Folder for page-specific overrides

**With page-specific override:**
```bash
python -B .codex/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name" --page "dashboard"
```

This also creates:
- `design-system/<project-slug>/pages/dashboard.md` — Page-specific deviations from Master

**How hierarchical retrieval works:**
1. If the project has adopted these generated files, check `design-system/<project-slug>/pages/checkout.md` for a Checkout page.
2. Within this generated hierarchy, page rules override `design-system/<project-slug>/MASTER.md`; otherwise use that Master as the generated reference.
3. Generated files do not supersede applicable `AGENTS.md`, approved `DESIGN.md`, or established implementation conventions.

### Step 3: Supplement with Detailed Searches (as needed)

Use focused domain searches when additional guidance helps the task, with or without design-system generation:

```bash
python -B .codex/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> -n 3
```

**When to use detailed searches:**

| Need | Domain | Example |
|------|--------|---------|
| More style options | `style` | `--domain style "glassmorphism dark"` |
| Chart recommendations | `chart` | `--domain chart "real-time dashboard"` |
| UX best practices | `ux` | `--domain ux "animation accessibility"` |
| Alternative fonts | `typography` | `--domain typography "elegant luxury"` |
| Landing structure | `landing` | `--domain landing "hero social-proof"` |

### Step 4: Stack Guidelines (Default: html-tailwind)

Get implementation-specific best practices for the existing or requested stack. Default to `html-tailwind` only when no stack is established.

```bash
python -B .codex/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack html-tailwind
```

Available stacks: `html-tailwind`, `react`, `nextjs`, `astro`, `vue`, `nuxtjs`, `nuxt-ui`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`, `jetpack-compose`

---

## Search Reference

### Available Domains

| Domain | Use For | Example Keywords |
|--------|---------|------------------|
| `product` | Product type recommendations | SaaS, e-commerce, portfolio, healthcare, beauty, service |
| `style` | UI styles, colors, effects | glassmorphism, minimalism, dark mode, brutalism |
| `typography` | Font pairings, Google Fonts | elegant, playful, professional, modern |
| `color` | Color palettes by product type | saas, ecommerce, healthcare, beauty, fintech, service |
| `landing` | Page structure, CTA strategies | hero, hero-centric, testimonial, pricing, social-proof |
| `chart` | Chart types, library recommendations | trend, comparison, timeline, funnel, pie |
| `ux` | Best practices, anti-patterns | animation, accessibility, z-index, loading |
| `react` | React/Next.js performance | waterfall, bundle, suspense, memo, rerender, cache |
| `web` | Web interface guidelines | aria, focus, keyboard, semantic, virtualize |
| `icons` | Icon selection and usage | lucide, heroicons, svg icon |

### Available Stacks

| Stack | Focus |
|-------|-------|
| `html-tailwind` | Tailwind utilities, responsive, a11y (DEFAULT) |
| `react` | State, hooks, performance, patterns |
| `nextjs` | SSR, routing, images, API routes |
| `astro` | Content sites, islands, rendering, integrations |
| `vue` | Composition API, Pinia, Vue Router |
| `nuxtjs` | Nuxt rendering, routing, data fetching |
| `nuxt-ui` | Nuxt UI components, themes, accessibility |
| `svelte` | Runes, stores, SvelteKit |
| `swiftui` | Views, State, Navigation, Animation |
| `react-native` | Components, Navigation, Lists |
| `flutter` | Widgets, State, Layout, Theming |
| `shadcn` | shadcn/ui components, theming, forms, patterns |
| `jetpack-compose` | Composables, Modifiers, State Hoisting, Recomposition |

---

## Example Workflow

This example assumes a new visual direction with no established project design. For an existing project, start with its approved design and skip generation unless requested.

**User request:** "Làm landing page cho dịch vụ chăm sóc da chuyên nghiệp"

### Step 1: Analyze Requirements
- Product type: Beauty/Spa service
- Style keywords: elegant, professional, soft
- Industry: Beauty/Wellness
- Stack: html-tailwind (default)

### Step 2: Generate a Design System (Conditional)

```bash
python -B .codex/skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness service elegant" --design-system -p "Serenity Spa"
```

**Output:** Complete design system with pattern, style, colors, typography, effects, and anti-patterns.

### Step 3: Supplement with Detailed Searches (as needed)

```bash
# Get UX guidelines for animation and accessibility
python -B .codex/skills/ui-ux-pro-max/scripts/search.py "animation accessibility" --domain ux

# Get alternative typography options if needed
python -B .codex/skills/ui-ux-pro-max/scripts/search.py "elegant luxury serif" --domain typography
```

### Step 4: Stack Guidelines

```bash
python -B .codex/skills/ui-ux-pro-max/scripts/search.py "layout responsive form" --stack html-tailwind
```

**Then:** For this new direction, synthesize the recommendations and relevant searches. Implement only within the user's requested scope; retain approved project decisions where applicable.

---

## Output Formats

The `--design-system` flag supports two output formats:

```bash
# ASCII box (default) - best for terminal display
python -B .codex/skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system

# Markdown - best for documentation
python -B .codex/skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system -f markdown
```

---

## Tips for Better Results

1. **Be specific with keywords** - "healthcare SaaS dashboard" > "app"
2. **Search multiple times** - Different keywords reveal different insights
3. **Combine domains** - Style + Typography + Color = Complete design system
4. **Check relevant UX** - Search "animation", "z-index", or "accessibility" when useful for the task
5. **Use stack flag** - Get implementation-specific best practices
6. **Iterate** - If first search doesn't match, try different keywords

---

## Common Rules for Professional UI

These are general examples for contexts without an approved alternative. Project tokens, layout conventions, and motion specifications take precedence, including over the timing examples below:

### Icons & Visual Elements

| Rule | Do | Don't |
|------|----|----- |
| **No emoji icons** | Use SVG icons (Heroicons, Lucide, Simple Icons) | Use emojis like 🎨 🚀 ⚙️ as UI icons |
| **Stable hover states** | Use color/opacity transitions on hover | Use scale transforms that shift layout |
| **Correct brand logos** | Research official SVG from Simple Icons | Guess or use incorrect logo paths |
| **Consistent icon sizing** | Use fixed viewBox (24x24) with w-6 h-6 | Mix different icon sizes randomly |

### Interaction & Cursor

| Rule | Do | Don't |
|------|----|----- |
| **Cursor pointer** | Add `cursor-pointer` to all clickable/hoverable cards | Leave default cursor on interactive elements |
| **Hover feedback** | Provide visual feedback (color, shadow, border) | No indication element is interactive |
| **Smooth transitions** | Use `transition-colors duration-200` | Instant state changes or too slow (>500ms) |

### Light/Dark Mode Contrast

| Rule | Do | Don't |
|------|----|----- |
| **Glass card light mode** | Use `bg-white/80` or higher opacity | Use `bg-white/10` (too transparent) |
| **Text contrast light** | Use `#0F172A` (slate-900) for text | Use `#94A3B8` (slate-400) for body text |
| **Muted text light** | Use `#475569` (slate-600) minimum | Use gray-400 or lighter |
| **Border visibility** | Use `border-gray-200` in light mode | Use `border-white/10` (invisible) |

### Layout & Spacing

| Rule | Do | Don't |
|------|----|----- |
| **Floating navbar** | Add `top-4 left-4 right-4` spacing | Stick navbar to `top-0 left-0 right-0` |
| **Content padding** | Account for fixed navbar height | Let content hide behind fixed elements |
| **Consistent max-width** | Use same `max-w-6xl` or `max-w-7xl` | Mix different container widths |

---

## Pre-Delivery Checklist

Before delivering UI code, verify the items relevant to the requested change and supported project modes. The timing ranges below describe generic interaction transitions; they do not replace approved entrance choreography or other project motion specifications:

### Visual Quality
- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] Brand logos are correct (verified from Simple Icons)
- [ ] Hover states don't cause layout shift
- [ ] Use theme colors directly (bg-primary) not var() wrapper

### Interaction
- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states provide clear visual feedback
- [ ] Transitions are smooth (150-300ms)
- [ ] Focus states visible for keyboard navigation

### Light/Dark Mode
- [ ] Light mode text has sufficient contrast (4.5:1 minimum)
- [ ] Glass/transparent elements visible in light mode
- [ ] Borders visible in both modes
- [ ] Test both modes before delivery

### Layout
- [ ] Floating elements have proper spacing from edges
- [ ] No content hidden behind fixed navbars
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile

### Accessibility
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Color is not the only indicator
- [ ] `prefers-reduced-motion` respected
