# Rama Winding Wires — site audit

Baseline taken before the November 2026 fix round. 20 HTML pages, one stylesheet
(`assets/site.css`, 597 lines), three scripts, 51 images.

## Scores at baseline

| Area | Score | Headline |
|---|---:|---|
| Crawl & indexing | 92 | sitemap, robots and canonicals all correct |
| Meta & social cards | 88 | complete on 19/20 pages; no `theme-color` |
| Structured data | 74 | rich already, but no `sameAs`, no FAQ, no geo |
| Semantics & a11y | 90 | one `h1` per page, every image has `alt` |
| Performance | 71 | 7.4 MB of images, no WebP/AVIF anywhere |
| **Typography consistency** | **42** | **33 font sizes, 15 letter-spacings, 18 line-heights** |
| Visual bugs | 60 | footer logo misaligned, tagline colour, capitalisation |
| **Overall** | **74** | solid foundation, inconsistent type, thin on schema |

## What is NOT broken

Worth stating, because a lot of it is already right:

- Every page has exactly one `h1`. No heading-level skips.
- Every `<img>` has an `alt`, explicit `width`/`height` (so no layout shift), and
  `loading="lazy"` below the fold.
- `sitemap.xml` lists all 19 public pages; nothing missing, nothing stale.
- `robots.txt` is correct and explicitly welcomes AI answer engines.
- Canonicals, Open Graph and Twitter cards present on all 19 public pages.
- `404.html` correctly carries `noindex` and is correctly excluded from the sitemap.
- Schema already covers Organization, WebSite, Product, BreadcrumbList, Article,
  ItemPage, CollectionPage, ContactPoint, PostalAddress.

## Broken / missing

### 1. Typography has no system (the big one)

The stylesheet declares three family hooks — `--f-sans`, `--f-display`, `--f-mono`
— but all three alias to DM Sans. So family is already consistent. The problem is
every *size* is hand-picked at the call site:

- **33 distinct `font-size` values**, including 9.5px, 10.5px, 11.5px, 12.5px,
  13.5px, 14.5px, 14.8px, 15.5px, 16.5px — nine half-pixel one-offs
- **15 distinct `letter-spacing` values** across a .005em–.22em range
- **18 distinct `line-height` values**, including 1.55, 1.58, 1.68, 1.72, 1.75

Nothing references a token, so a type change means hunting 597 lines. Two
paragraph styles 0.3px apart (14.5 vs 14.8) are a difference nobody chose on
purpose.

### 2. Structured data gaps

- No `sameAs` anywhere — the Organization has no social profiles attached, so
  Google cannot link the brand to its accounts in a Knowledge Panel
- No `FAQPage` on any page, despite the product pages answering real questions
- No geo coordinates on the Jeedimetla address
- No `theme-color` meta on any page

### 3. Performance

- 7.4 MB of images, all JPEG/PNG. No WebP or AVIF, so modern browsers get no
  smaller payload. `hero.jpg` alone is 304 KB.

### 4. Visual bugs reported

- **Footer logo sits right, should sit left.** Root cause: the global `.brand`
  rule (`assets/site.css:88`) carries `justify-self:end` for the header, and the
  footer's `.fabout .brand` inherits it.
- **"For" in the tagline is orange, should be white**, and "World class" should be
  "World Class" to match the brand usage.
- **"aluminium" lowercase in the hero `h1`** where the brand treats "Aluminium
  Winding Wire" as a product name.
