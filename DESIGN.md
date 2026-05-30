# Design

Visual system for the Travis Drilling site. See [PRODUCT.md](PRODUCT.md) for strategy and voice. Register: **brand** (an informational marketing site).

## Principles

- **Identity is the logo: black + Deep Sky Blue.** The whole palette is built from the two colors already in the logo. Differentiation from generic contractor sites comes from type, spacing, restraint, and real photos, not from new colors.
- **Plainspoken, not promotional.** No slogans, no marketing eyebrows, no decorative flourish. Headings are short and literal ("What we do", "Where we work", "Get an estimate").
- **Legible first.** Built for older / rural visitors on phones with weak signal.

## Color

OKLCH-friendly hex tokens, defined in `src/app.css` under `@theme`.

| Token                | Value              | Role                                                                                  |
| -------------------- | ------------------ | ------------------------------------------------------------------------------------- |
| `--color-brand`      | `#00bfff`          | Logo blue. Fills, icons on dark, the call-to-action button. **Fixed — never change.** |
| `--color-brand-deep` | `#0077a3`          | Accessible blue for text/links/icons on light surfaces (≥4.5:1 on white).             |
| `--color-ink`        | `#0b1117`          | Logo black. Dark sections (hero, contact, footer), headings.                          |
| neutrals             | Tailwind `slate-*` | Body text (`slate-600/700`), surfaces (`white`, `slate-50`), borders (`slate-200`).   |

Contrast rules that must hold:

- The call button is `bg-brand` + **`text-ink`** (black on Deep Sky Blue). White on `#00bfff` fails contrast — never use it.
- Blue _text_ on a light surface uses `brand-deep`, not `brand`.

Strategy: **restrained** — white/`slate-50` surfaces alternating with `ink` bands, blue used as a deliberate accent (one underline rule per section heading, icons, the CTA).

## Typography

Loaded via Google Fonts in `src/app.html`.

- **Display — Archivo** (`--font-display`), weights 400–900. All headings. Sturdy industrial grotesque; steel-stamped / signage feel. Headings use `letter-spacing: -0.02em` and `text-wrap: balance`.
- **Body — Atkinson Hyperlegible** (`--font-sans`), 400/700 + italics. Chosen for legibility (older / rural / low-signal readers); doubles as the accessibility commitment.

Hierarchy: fluid heading sizes via Tailwind responsive steps (`text-3xl sm:text-4xl` for sections, up to `text-5xl/7xl/8xl` for the hero h1). Body at `text-lg` with relaxed leading.

## Layout

- Container: `max-w-7xl` with `px-5 sm:px-6 lg:px-8`. Contact/hero copy narrows to `max-w-2xl/3xl`.
- Section rhythm: `py-20 sm:py-28`, alternating `white` / `slate-50` / `ink` backgrounds.
- Each section heading gets a short blue underline rule (`h-1 w-14 bg-brand`) instead of an uppercase eyebrow.
- **Services are a capabilities list, not a card grid** — icon + title + one factual line in a `sm:grid-cols-2 lg:grid-cols-3` grid with hairline `border-slate-200` dividers. (Identical icon-card grids are deliberately avoided.)
- Service area is a `flex-wrap` row of bordered town chips ending in an "and nearby areas" link-colored item.
- **Corner radius:** a small, consistent radius softens the hard industrial edges without going soft/pill. Buttons, chips, badges, and icon tiles use `rounded-md` (6px); larger contained surfaces (contact cards) use `rounded-lg` (8px). The square section underline rules (`h-1 w-14 bg-brand`) and full-bleed image blocks stay sharp.

## Imagery

- Real job-site photos live in `static/img/` (`rig.jpg`, `rig_cropped.jpg`, `Drilling_Pit.png`). Hero uses the rig photo with a dark `ink` gradient scrim for white-text legibility.
- Alt text describes the real scene ("Travis Drilling's rig set up at a water well job site").
- More owner-supplied photos (rig setups, trucks, crew) will be added; drop them into `static/img/` and swap the `src`.

## Motion

- One orchestrated hero load: badge → h1 → paragraph → buttons rise/fade in via the `.rise` keyframe (staggered `animation-delay`). No fade-on-scroll on every section.
- `prefers-reduced-motion: reduce` is honored globally in `app.css` (animations collapse to instant, smooth-scroll off).

## Components

- `src/lib/Navbar.svelte` — transparent overlay on `/` (white logo), solid white elsewhere (dark logo). Blue call button with ink text.
- `src/lib/Footer.svelte` — `ink` background, brand-blue contact icons, three columns (brand / contact / quick links).
