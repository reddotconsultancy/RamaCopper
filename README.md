# Rama Winding Wires

Marketing site for **Raghupati Wires India Pvt Ltd** (Rama Winding Wires), Hyderabad —
manufacturer of enamelled copper and aluminium winding wires.

A rebuild of [ramacopper.com](https://ramacopper.com).

## Running it

The site is a single self-contained `index.html` — no build step, no dependencies.
Images are embedded as data URIs, so the file works offline and can be dropped on any host.

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Notes

- **Technical data.** The original site published its specification tables as JPEG scans.
  They are transcribed here into real, searchable HTML tables: copper covering gradewise
  (SWG 8–43), submersible parameters, aluminium SWG/AWG conversions and thermal classes.
- **Datasheet correction.** The source aluminium table lists AWG 35 as `0.008 mm`, which is a
  typo — AWG 35 is `0.142 mm`. The corrected value is used here and should be fixed in the
  source brochure.
- **Photography.** Every supplied product photo had marketing text burned across the middle.
  The text band is cut out and the frame rejoined, so the images carry no baked-in captions.
- **Enquiry form** composes a `mailto:` to info@ramacopper.com. Point it at a real endpoint
  before going live.
