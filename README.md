# Portfolio

Personal portfolio for Bryan Widjaya — static HTML/CSS/JS, no build step.

## Stack

- Plain HTML, CSS, and JavaScript.
- Content lives in `data/*.json` and is rendered client-side by `shared.js`. Edit the JSON files directly to update content.
- Berkeley Mono is embedded as base64 in `styles.css`; the woff2 sources in `assets/fonts/` are gitignored (paid license).

## Pages

| File | Purpose |
|------|---------|
| `index.html`   | About / hero |
| `journey.html` | Timeline with Life / Career / Achievement filters |
| `work.html`    | Project grid |
| `project.html` | Single project template |
| `article.html` | Post index with featured carousel and search |
| `post.html`    | Single post, loaded by `?slug=` |
| `contact.html` | Links |

## Local development

Any static server works. For example:

```sh
npx serve .
```
