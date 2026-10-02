# Oxygen Website

Static website for the Oxygen Browser project, hosted on GitHub Pages.
English at `/`, Spanish at `/es/`. No trackers, no third-party requests,
no build step — plain HTML + CSS + a tiny local JS.

## Publish

1. Create a **new public repo** (e.g. `oxygen-browser/oxygen-website`).
2. Push this folder's contents to `main`.
3. Repo → Settings → Pages → Deploy from branch → `main` / `/ (root)`.
4. (Optional) add a `CNAME` file with your domain.

## Configure

All external links live in one place: `assets/js/site.js` (`OXYGEN`
object). Update before publishing:

- `githubOrg`, `browserRepo`, `releases`, `patchesDir`
- `version`, `firefoxBase`

Search the HTML for `oxygen-browser` if you change the org name.

## Local preview

Any static server works, e.g. from this folder:

```sh
python3 -m http.server 8080
```

then open http://localhost:8080 (Spanish: http://localhost:8080/es/).

## Layout

```text
index.html            English home
privacy.html          English privacy (this site collects nothing)
es/index.html         Spanish home
es/privacidad.html    Spanish privacy
assets/css/style.css  all styles, dark theme, system fonts
assets/js/site.js     link config, OS-aware download label, footer year
assets/img/           the real Oxygen mark (logo.png, from browser branding)
.nojekyll             serve assets/ as-is on Pages
```
