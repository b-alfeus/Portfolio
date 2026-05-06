# Portfolio — Project Context

Personal portfolio for Bryan Widjaya. Static site, no build step. Deployed via GitHub Pages from `master`.

## Project location

This repo lives on the external SSD **`9100 PRO`**:

```
/Volumes/9100 PRO/Documents/GitHub/Portfolio
```

`~/Documents/GitHub/Portfolio/` on the internal disk is **empty** (only a `.DS_Store`) — don't be fooled by it. If `9100 PRO` isn't mounted, stop and ask before doing anything; the working files aren't on the laptop.

## Session log

A running journal of work across sessions lives in `Memory.MD` at the repo root. Read it for "what happened recently and where things stand." Append a new dated entry when you finish a session's worth of work, newest on top.

## Stack

- Plain HTML files at the repo root (one per page).
- Single `styles.css` (light/dark via `[data-theme]` attribute on `<html>`).
- Single `shared.js` for theme toggle, language switcher, and JSON content rendering.
- Content in `data/*.json` (`journey.json`, `work.json`, `posts.json`) — edit JSON, not the HTML, when changing content.
- i18n: every translatable string uses `data-i18n="key"` (or `data-i18n-html` for HTML strings). Language strings live in `shared.js`.

## Deploy

`git push origin master` — GitHub Pages serves from the repo root. There is no CI; no PR workflow. Don't push without the user asking.

## Local preview

```
python3 -m http.server 8765
```

Run from the repo root. Always preview UI changes in the browser before reporting them as done — type-checks aren't enough.

## Branding conventions

- **Page title format:** `Bryan Widjaya • PageName` (use U+2022 `•`, not `.`, not `-`, not em-dash). Static fallback in HTML; dynamic post titles set in `shared.js` use the same format.
- **Accent color:** teal — `#00838f` in light mode, `#64d2ff` in dark mode (CSS var `--color-accent`).
- **Favicon:** solid teal circle (`assets/favicon.svg`).
- **Type:** Berkeley Mono throughout. Blocky, no rounded corners. High text density.
- **Aesthetic guardrails:** single accent color, no gradients, no rounded corners, no soft shadows.

## Nav state

Top nav shows: about, journey, work, contact. **Posts is intentionally hidden** (commented out in each page's nav) — `article.html`, `post.html`, and `data/posts.json` still exist so it can be re-enabled by uncommenting the nav links. Don't delete those files.

## Journey content

`data/journey.json` is the source for the timeline page. The user's **canonical career history lives in Notion** ("Hello, I'm Bryan Alfeus Widjaya" page) — when adding/editing journey entries, cross-reference Notion via the Notion MCP and prefer those facts over any pre-existing seed data in the JSON. The user has confirmed **UX Mobile Masters SEA (Jan 2018, Bhinneka)** is their only formal achievement; tag others as `work` or leave tags empty rather than inventing achievements.

## Working with the user

- Confirm before destructive ops (deletes, force-push, removing files outside the requested scope).
- Match the scope of the request — don't sweep up unrelated edits into a commit unless asked.
- Keep responses terse. The user reads diffs.
