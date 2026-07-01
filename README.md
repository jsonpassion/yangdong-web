# Yangdong Spatial Community Day

Static SPA for a Vision Pro Community Day introduction and application page.

## Local Preview

Open `index.html` directly, or run:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Application Form

The form works without a backend by saving submissions temporarily in the browser. To connect a real application endpoint, set `APPLICATION_ENDPOINT` in `main.js`.

Expected payload:

```json
{
  "name": "string",
  "email": "string",
  "affiliation": "string",
  "experience": "string",
  "talk": "string",
  "consent": "on",
  "createdAt": "ISO timestamp"
}
```

## Asset Replacement List

Current placeholders live in `public/assets`. Replace or add these production assets when available:

- `public/assets/yangdong-village-hero.jpg`: wide first-viewport photo of Yangdong Village.
- `public/assets/heritage-route-map.svg`: route map or illustrated walking path.
- `public/assets/vision-pro-workshop.jpg`: Vision Pro intro or hands-on scene.
- `public/assets/spatial-walk-route.jpg`: village walking scene with depth and people.
- `public/assets/shared-gallery-cover.jpg`: participants reviewing spatial photos/videos.
- `public/assets/lightning-talks.jpg`: discussion or app recommendation scene.
- `public/assets/participant-spatial-video.mp4`: optional short ambient video for a future hero/result section.
- `public/assets/yangdong-community-mini-app.png`: screenshot or mock of a future shared mini app.
- `public/assets/spatial-archive-cover.jpg`: future archive cover image.

After adding real assets, update the matching `src` values in `index.html` and `main.js`.

## GitHub Pages Deployment

This repo includes `.github/workflows/pages.yml`. After pushing to GitHub:

```bash
git remote add origin git@github.com:<owner>/<repo>.git
git branch -M main
git push -u origin main
```

In GitHub, set Pages source to **GitHub Actions** if it is not already enabled.

## Source Notes

The page copy treats Yangdong Village as part of UNESCO World Heritage "Historic Villages of Korea: Hahoe and Yangdong" and keeps the event language centered on community exploration rather than official institutional affiliation.
