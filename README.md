# Notetaker Notes

Static English site comparing Fireflies, MeetGeek, and Krisp for U.S. small businesses. GitHub Pages serves it from the root of this repository (custom domain via the CNAME file): [https://notetakernotes.com/](https://notetakernotes.com/). There is no build step. `.nojekyll` is present so Pages does not run Jekyll.

## Pages

- `index.html` — site intro and comparison article, including the source list
- `about.html` — author note and X contact
- `disclosure.html` — affiliate disclosure
- `privacy.html` — no analytics, cookies, or forms

Facts on the site come from the comparison article (official vendor pages checked 18 November 2026). Prices are dated as of November 2026.

The Fireflies affiliate URL is `https://fireflies.ai/?fpr=atsushi-79ddd1` (`rel="sponsored nofollow noopener"`). MeetGeek and Krisp do not have affiliate links yet. Those product links point at `https://meetgeek.ai/` and `https://krisp.ai/` and are marked `<!-- MEETGEEK_LINK -->` and `<!-- KRISP_LINK -->` for a later swap. Official pricing and source links stay on the vendor documentation URLs.

Preview locally:

```bash
python3 -m http.server
```
