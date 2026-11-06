# Typography

One family, one scale. Every `font-size`, `letter-spacing` and `line-height` in
`assets/site.css` resolves to a token defined in `:root`. If a value is not on
this page, it should not appear in the stylesheet — add a token instead of a
one-off.

## Families

The site runs on **one typeface**: DM Sans, with Kaushan Script used for exactly
one word. Three family hooks exist and all resolve to DM Sans; they are kept as
role names so a future change can split them without touching call sites.

| Token | Resolves to | Used for |
|---|---|---|
| `--f-sans` | DM Sans → DM Sans Fallback → system-ui | everything |
| `--f-display` | `var(--f-sans)` | headings (role hook) |
| `--f-mono` | `var(--f-sans)` | labels, tables, addresses (role hook) |
| — | Kaushan Script | the cursive "For" in the tagline, nothing else |

Loaded from Google Fonts: `DM Sans` 300/400/500/600 plus 400/500 italic, and
`Kaushan Script` 400. `DM Sans Fallback` is a local Arial metric-match that
holds the layout while the webfont arrives, so there is no reflow.

## Size scale

| Token | Value | Role |
|---|---|---|
| `--fs-micro` | 10px | micro caps: table super-labels, dense facts |
| `--fs-label` | 11px | uppercase labels, eyebrows, captions, meta |
| `--fs-xs` | 12px | spec tables, dense data |
| `--fs-sm` | 13px | nav, small links, list rows |
| `--fs-body-sm` | 14px | secondary body, footer links |
| `--fs-body` | 15px | body copy in cards and panels |
| `--fs-body-lg` | 16px | page body (the `<body>` default) |
| `--fs-lede` | 17px | lede and intro paragraphs |
| `--fs-h4` | 18px | small headings |
| `--fs-h3` | `clamp(19px, 2vw, 24px)` | sub-headings |
| `--fs-h2` | `clamp(22px, 2.7vw, 32px)` | section headings |
| `--fs-h1` | `clamp(26px, 3.4vw, 42px)` | page headings |
| `--fs-hero` | `clamp(1.85rem, 3.55vw, 3rem)` | the homepage hero only |
| `--fs-hero-sm` | 27px | hero below 530px, under the clamp floor |
| `--fs-script` | 1.7em | the cursive "For", relative to its line |
| `--fs-script-sm` | 1.4em | the same, on narrow screens |

Everything from `--fs-h3` up is fluid, so there are no size breakpoints to
maintain — the type grows with the viewport between a floor and a ceiling.

## Letter-spacing

Tracking follows size: large type is tightened, small uppercase type is opened
up. This is the single rule behind the whole set.

| Token | Value | Applies to |
|---|---|---|
| `--ls-display` | −0.024em | hero and large headings |
| `--ls-heading` | −0.015em | mid headings |
| `--ls-body` | 0 | body copy |
| `--ls-wide` | 0.05em | lightly tracked numerals |
| `--ls-caps-sm` | 0.09em | uppercase at larger sizes |
| `--ls-caps` | 0.13em | uppercase labels — the default caps tracking |
| `--ls-caps-xl` | 0.22em | the one very wide label in the header |

**Never set uppercase without tracking.** Capitals set at 0 tracking read as a
solid block. Anything with `text-transform:uppercase` takes `--ls-caps` unless
there is a reason to pick another step.

## Line-height

| Token | Value | Applies to |
|---|---|---|
| `--lh-1` | 1 | single-line, optically centred |
| `--lh-display` | 1.12 | hero and large headings |
| `--lh-snug` | 1.2 | headings |
| `--lh-heading` | 1.4 | short multi-line headings, list rows |
| `--lh-body` | 1.6 | default body |
| `--lh-relaxed` | 1.7 | long-form paragraphs |
| `--lh-loose` | 1.85 | addresses and spaced-out blocks |

Line-height moves inversely to size: the bigger the type, the tighter the
leading. A 42px heading at 1.6 would drift apart; 11px caps at 1.2 would collide.

## Weights

DM Sans is loaded at 300, 400, 500 and 600. In practice the site uses:

- **400** — body copy, nav, most labels
- **500** — emphasis, active nav, card headings, tagline product line
- **600** — reserved; use sparingly, headings carry weight through size

## Measure

Body copy is capped with `max-width` in `ch`, not pixels, so the limit tracks the
font: `60ch` for ledes, `36ch` for footer copy, `80ch` for technical notes.
Roughly 60–75 characters is the target for comfortable reading.

## Working rules

1. **Never write a raw value.** `font-size:14.5px` in a new rule is a bug. Pick
   the nearest token; if genuinely nothing fits, add a token and document it here.
2. **Pick by role, not by number.** Reach for `--fs-label` because the thing is a
   label, not because it happens to be 11px today.
3. **Tracking and leading travel with size.** Changing a size usually means
   changing both; the tables above pair them.
4. **One family.** If a second typeface is ever needed, add it as a `--f-*` hook
   in `:root` and point role tokens at it. Do not name a font at a call site.

## Why this exists

Before this scale the stylesheet carried 33 distinct font sizes, 15
letter-spacings and 18 line-heights, all chosen at the call site. Nine sizes were
half-pixel one-offs and two paragraph styles sat 0.3px apart — a difference
nobody chose deliberately. `docs/AUDIT.md` records that baseline.
