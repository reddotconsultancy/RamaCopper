# Rama Winding Wires

Marketing site for **Raghupati Wires India Pvt Ltd** (Rama Winding Wires), Hyderabad —
manufacturer of enamelled copper and aluminium winding wires.

A rebuild of [ramacopper.com](https://ramacopper.com).

## Running it

Static HTML, CSS and JS — no build step, no dependencies. Serve the folder:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>. All paths are relative, so the folder can be dropped
on any static host, or opened straight from disk.

## Structure

One page per nav item, all sharing `assets/`:

| File | Holds |
| --- | --- |
| `index.html` | The full one-pager: hero, and every section below it |
| `products.html` | The five product lines |
| `about.html` | Company, vision and mission, packing |
| `applications.html` | The six markets the wire serves |
| `technical.html` | The four specification tables |
| `contact.html` | Enquiry form and company details |

`assets/site.css` carries all styling. `assets/site.js` holds the shared behaviour
(mobile nav, card grids, enquiry form) and guards every block, so a page that lacks
an element simply skips it; `assets/tech.js` holds the specification tables and is
loaded only by the two pages that show them. The twelve photographs and the logo
live in `assets/img/`.

Header and footer markup is repeated in each page rather than injected by script,
so the pages still render with JavaScript disabled. Edit one, edit all six.

## Notes

- **Technical data.** The original site published its specification tables as JPEG scans.
  They are transcribed here into real, searchable HTML tables: copper covering gradewise
  (SWG 8–43), submersible parameters, aluminium SWG/AWG conversions and thermal classes.
- **Datasheet correction.** The source aluminium table lists AWG 35 as `0.008 mm`, which is a
  typo — AWG 35 is `0.142 mm`. The corrected value is used here and should be fixed in the
  source brochure.
- **Photography.** Every supplied product photo had marketing text burned across the middle.
  The text band is cut out and the frame rejoined, so the images carry no baked-in captions.
- **Hero photograph** is stock: ["A coil of copper wire on a table"](https://unsplash.com/photos/a-coil-of-copper-wire-on-a-table-TqueZSSAloY)
  by Guille B on Unsplash, used under the [Unsplash License](https://unsplash.com/license)
  (free for commercial use, no attribution required — credited here as a courtesy).
  It replaced a supplied cutout of two spools on flat grey, which was a masked product
  shot upscaled to 1900 px and was soft and haloed at hero size. Swap in a real photograph
  of the Jeedimetla floor when one is available — an authentic plant shot beats stock.
- **Enquiry form** composes a `mailto:` to info@ramacopper.com. Point it at a real endpoint
  before going live. It appears on both `contact.html` and the foot of `index.html`.
- **Images** were previously inlined as data URIs in a single 706 KB file. They are now
  separate files under `assets/img/`, so a visitor loads only the photographs on the page
  they asked for, and the browser caches them across pages.
