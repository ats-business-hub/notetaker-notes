# Notetaker Notes

Static English site comparing Fireflies, MeetGeek, and Krisp for U.S. small businesses. GitHub Pages serves it from the root of this repository (custom domain via the CNAME file): [https://notetakernotes.com/](https://notetakernotes.com/). There is no build step. `.nojekyll` is present so Pages does not run Jekyll.

## Pages

- `index.html` — site intro and comparison article, including the source list
- `about.html` — author note and X contact
- `disclosure.html` — affiliate disclosure
- `privacy.html` — no analytics, cookies, or forms

Facts on the site come from the comparison article (official vendor pages checked 18 November 2026). Prices are dated as of November 2026.

Affiliate product CTAs use `rel="sponsored nofollow noopener"` and `target="_blank"`. The Fireflies affiliate URL is `https://fireflies.ai/?fpr=atsushi-79ddd1`. The Krisp partner URL is `https://partner.krisp.ai/atsushi`. MeetGeek does not have an affiliate link yet; those product links still point at official `https://meetgeek.ai/` URLs and remain marked `<!-- MEETGEEK_LINK -->` for a later swap. Official pricing, help, and other source citations stay on each vendor’s documentation URLs (not on partner links). Circleback partner CTAs, where present, use `https://go.circleback.ai/atsushi`.

Preview locally:

```bash
python3 -m http.server
```
