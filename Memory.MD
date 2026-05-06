# Memory — session log

A running journal of Claude Code sessions on this portfolio. **Newest entries on top.** Use this to see what's recently happened, what was decided, and where things stand. Pair with `CLAUDE.md` (which holds durable project conventions); this file holds the timeline.

When you finish a session's worth of work, append a new dated entry at the top in the format used below. Keep entries terse — what changed, why, and any gotcha worth surfacing next time. Don't restate things that already live in `CLAUDE.md`.

---

## 2026-05-05 — Journey refactor commit

**Pushed:** `f7da44d` — *"Journey refactor, leaner hero, drop page headers, MMXXVI footer"* (9 files, +350 / −487).

Themes in the commit:

- **Footer year `2026` → `MMXXVI`** (Roman numerals) across all 5 page footers and the four translation locales in `shared.js` (en / id / jp / de).
- **`index.html` hero**: removed the `LIVE` status dot + separator UI; kept the animated globe SVG and `#location` text.
- **`work.html` and `contact.html`**: dropped the `[ 03 / 04 ]` / `[ 04 / 04 ]` `page-header` sections (the labelled H1 + intro paragraph). The pages now go straight from nav into content.
- **Journey page** (`journey.html`, `shared.js`, `styles.css`):
  - Filter bar moved *inside* `.journey-panel` (was outside above the timeline).
  - Timeline event markup restructured: location-pin sub-paragraph removed; new dataset attrs (`year`, `date`) added to each `.timeline-event` `<li>`.
  - Mobile navigator (prev/next + label dropdown) code reshaped to insert into the panel rather than the journey root.
  - `styles.css` lost ~87 net lines tied to the page-header removal and journey re-layout.

**Verified locally** at http://127.0.0.1:8765/ via `python3 -m http.server 8765`.

**Gotcha logged for next time:** I initially looked for the project at `~/Documents/GitHub/Portfolio/` and found it empty. The repo lives on the external SSD `9100 PRO` — see `CLAUDE.md` → "Project location." If that disk isn't mounted, stop and ask before doing anything.
