# GitHub Copilot Instructions for Portfolio Project

## Project Overview
This is a static HTML/CSS/JavaScript portfolio website with no build step. Content is stored in JSON files and rendered client-side using vanilla JavaScript. The site supports multiple languages and has a dark/light theme toggle.

## Architecture
- **Pages**: Individual HTML files (index.html, work.html, journey.html, etc.) with shared header/footer
- **Content**: Stored in `data/*.json` files, fetched and rendered dynamically
- **Styling**: Single `styles.css` file with custom properties for theming
- **Functionality**: `shared.js` contains all interactive features and content rendering logic

## Key Components
- **Navigation**: Hamburger menu for mobile, theme toggle, language selector
- **Hero Section**: Typing animation with rotating job titles
- **Content Areas**: Work grid, journey timeline, blog posts with search/filtering
- **Internationalization**: English, Indonesian, Japanese, German translations embedded in shared.js

## Development Workflow
- **No Build Required**: Edit HTML/CSS/JS directly, serve with any static server (e.g., `npx serve .`)
- **Content Updates**: Modify `data/*.json` files directly - changes appear immediately on refresh
- **Font**: Berkeley Mono is embedded as base64 in CSS; source WOFF2 files in `assets/fonts/` (gitignored due to license)

## Code Patterns
- **DOM Creation**: Use the `el()` helper function for creating elements: `el('div', {class: 'my-class'}, 'content')`
- **Content Rendering**: Each page has render functions like `renderWork()`, `renderJourney()`, `renderPosts()`
- **Data Fetching**: `loadJSON(path)` handles fetching with error handling
- **Event Handling**: Use `addEventListener` directly; avoid frameworks
- **Styling**: CSS custom properties for themes, utility classes for common patterns

## File Organization
- `shared.js`: Common functionality (nav, theme, i18n, content rendering)
- `data/`: JSON content files (work.json, journey.json, posts.json)
- `styles.css`: All styling including embedded fonts
- Individual HTML pages: Minimal markup, rely on shared.js for dynamic content

## Internationalization
- Translations stored in `shared.js` as nested objects
- Use `data-i18n` attributes on HTML elements
- `t(key)` function returns translated strings
- Language persists in localStorage

## Common Tasks
- **Add New Work Item**: Edit `data/work.json`, add object with title, excerpt, thumbnail, background, link
- **Update Journey**: Modify `data/journey.json` with new year/events
- **Add Blog Post**: Update `data/posts.json` with post object including body as array of text blocks
- **Change Styling**: Edit `styles.css`, use CSS custom properties for theme-aware colors
- **Add Translation**: Update translation objects in `shared.js`, add `data-i18n` attributes to HTML

## Performance Notes
- JSON files are cached with `no-cache` header for development
- Images use CSS background properties for lazy loading
- Font is embedded to avoid external requests
- No JavaScript frameworks - keep bundle size minimal

## Deployment
- Static hosting (GitHub Pages, Netlify, etc.)
- No build process required
- Ensure `data/` directory is included in deployment