# Rama Winding Wires

Marketing site for **Raghupati Wires India Pvt Ltd** (Rama Winding Wires), Hyderabad,
manufacturer of enamelled copper and aluminium winding wires.

A rebuild of [ramacopper.com](https://ramacopper.com).

## Running it

Static HTML, CSS and JS, with no build step and no dependencies. Serve the folder:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>. All paths are relative, so the folder can be dropped
on any static host, or opened straight from disk.

## Structure

One page per nav item, all sharing `assets/`:

| File | Holds |
| --- | --- |
| `index.html` | The full one pager: hero, and every section below it |
| `products.html` | The five product lines |
| `about.html` | Company, vision and mission, packing |
| `applications.html` | The six markets the wire serves |
| `technical.html` | The four specification tables |
| `contact.html` | Enquiry form and company details |
| `enamelled-copper-wire.html` … (5 files) | One detail page per product line |
| `electric-mobility.html` … (6 files) | One article per application (blog style: hero, sticky contents, sectioned body, takeaways, FAQ) |

Each detail page has the photo, a longer description, a facts list, a "See also" grid of the
siblings, and ends with the same contact block as `contact.html`. The product and application
cards (built by `site.js`) and the footer product links all point at these pages. The slugs live
in the `P` and `A` arrays in `assets/site.js`; add a page there and it appears in the grids.

`assets/site.css` carries all styling. `assets/site.js` holds the shared behaviour
(mobile nav, card grids, enquiry form) and guards every block, so a page that lacks
an element simply skips it; `assets/tech.js` holds the specification tables and is
loaded only by the two pages that show them. The thirteen photographs and the logo
live in `assets/img/`.

Header and footer markup is repeated in each page rather than injected by script,
so the pages still render with JavaScript disabled. Edit one, edit all six.

## Notes

- **Favicon** (`favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png`) is the orange mark from the
  live site. **Sharing previews**: every page carries Open Graph and Twitter card tags plus a canonical
  link, with absolute URLs that assume the site lives at the root of `https://ramacopper.com/`;
  change `BASE` in the head of each page if hosted elsewhere. Each page's share image is its own
  product or application photograph; the one pager and company pages use the hero.

- **Technical data.** The original site published its specification tables as JPEG scans.
  They are transcribed here into real, searchable HTML tables: copper covering gradewise
  (SWG 8-43), submersible parameters, aluminium SWG/AWG conversions and thermal classes.
- **Datasheet correction.** The source aluminium table lists AWG 35 as `0.008 mm`, which is a
  typo: AWG 35 is `0.142 mm`. The corrected value is used here and should be fixed in the
  source brochure.
- **Product photographs** (the five product cards) are stock from Pixabay under the
  [Pixabay Content License](https://pixabay.com/service/license-summary/) (free for commercial
  use, no attribution required; credited here as a courtesy). They replaced the supplied photos,
  which had marketing text burned across the middle and were soft after cropping it out.
  Pixabay serves 1280 px without an account, so these are 1280 x 853 (3:2), and `bare.jpg`
  is 1080 x 720 because its source is 16:9. Sign in to Pixabay to fetch the full size originals
  if larger cards are ever needed.
  | File | Photograph | Photographer |
  | --- | --- | --- |
  | `enamelled.jpg` | [Enamelled copper wire on a spool](https://pixabay.com/photos/copper-enamelled-lp-lmx-polyamide-88247/) | byrev |
  | `submersible.jpg` | [Motor with copper coils](https://pixabay.com/photos/motor-copper-coil-spiral-8069497/) | Photorel |
  | `aluminium.jpg` | [Coil of aluminium wire](https://pixabay.com/photos/wire-won-line-steel-aluminum-2775895/) | HeungSoon |
  | `bare.jpg` | [Bare copper wire strands](https://pixabay.com/photos/wire-copper-electric-stop-closeup-2681887/) | disign |
  | `colored.jpg` | [Coloured wire hanks](https://pixabay.com/photos/wires-aluminum-metal-colored-553305/) | rgouveia |
- **Hero photograph** is stock: ["A coil of copper wire on a table"](https://unsplash.com/photos/a-coil-of-copper-wire-on-a-table-TqueZSSAloY)
  by Guille B on Unsplash, used under the [Unsplash License](https://unsplash.com/license)
  (free for commercial use, no attribution required; credited here as a courtesy).
  It replaced a supplied cutout of two spools on flat grey, which was a masked product
  shot upscaled to 1900 px and was soft and haloed at hero size. Swap in a real photograph
  of the Jeedimetla floor when one is available. An authentic plant shot beats stock.
- **Application photographs** (the six market cards) are also Unsplash stock under the same
  license, fetched at 1320 x 880 (the 3:2 card ratio) with `?w=1320&h=880&fit=crop&q=80`.
  They replaced six 880 px files that were heavily compressed, soft and pre-darkened.
  | File | Photograph | Photographer |
  | --- | --- | --- |
  | `emobility.jpg` | [Electric vehicle charger plugged into car](https://unsplash.com/photos/xfaYAsMV1p8) | CHUTTERSNAP |
  | `automotive.jpg` | [The engine compartment of a car with the hood up](https://unsplash.com/photos/u3RhNe3QJeM) | Luca Hooijer |
  | `drive.jpg` | [A factory filled with lots of orange machines](https://unsplash.com/photos/8gr6bObQLOI) | Simon Kadula |
  | `energy.jpg` | [Photo of truss towers](https://unsplash.com/photos/yETqkLnhsUI) | Matthew Henry |
  | `renewable.jpg` | [Solar panel under blue sky](https://unsplash.com/photos/XGAZzyLzn18) | American Public Power Association |
  | `white.jpg` | [Yellow and black cordless power drill on a workbench](https://unsplash.com/photos/QvEXI1xquRY) | Rob Dean |
- **About page** (`about.html`) carries everything the original about-us page had: the
  company paragraph, vision, the five mission points and the closing line in the main column,
  with the Managing Director's portrait and quote alongside. The copy is written
  around the terms a buyer searches for (enamelled copper wire, aluminium winding wire,
  Hyderabad, IS 13730, IEC 60317, NEMA MW) with internal links to products, applications and
  technical data. The page has a visible H1, a descriptive title and meta description, and an
  `AboutPage` / `Organization` / `Person` JSON-LD block whose `url`, `logo` and `image` are
  absolute and assume the site lives at the root of ramacopper.com; change them if it is hosted
  elsewhere. The one pager keeps its shorter about section, without the portrait.
- **Director portrait** (`director.jpg`) is the photograph from the original site, cropped
  from the 2000 px square source to 4:5 at 960 x 1200.
- **Enquiry form** composes a `mailto:` to info@ramacopper.com. Point it at a real endpoint
  before going live. It appears on both `contact.html` and the foot of `index.html`.
- **Images** were previously inlined as data URIs in a single 706 KB file. They are now
  separate files under `assets/img/`, so a visitor loads only the photographs on the page
  they asked for, and the browser caches them across pages.
