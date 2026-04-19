# Portfolio

Personal portfolio for Bryan Widjaya — static HTML/CSS/JS with content synced from Notion.

## Stack

- Plain HTML, CSS, and JavaScript — no build step.
- Content in `data/*.json`, rendered client-side by `shared.js`.
- `scripts/sync-notion.mjs` refreshes `data/*.json` from Notion databases.
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

## Syncing content from Notion

```sh
npm install
NOTION_TOKEN=… NOTION_POSTS_DB=… NOTION_WORK_DB=… NOTION_JOURNEY_DB=… npm run sync
```

Only pages with `Published = true` are synced.
