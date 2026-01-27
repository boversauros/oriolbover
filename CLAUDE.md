# CLAUDE.md - AI Assistant Guide

This document provides context for AI assistants working with this codebase.

## Project Overview

This is **Oriol Bover's Personal Portfolio Website** - a static portfolio site that automatically fetches and displays the latest GitHub repositories. The site is deployed at https://www.oriolbover.com.

**Key Features:**
- Auto-updating project showcase via GitHub API
- Light/dark theme toggle with system preference detection
- Responsive design with semantic HTML5
- SEO optimized with Schema.org structured data

## Tech Stack

- **Frontend:** Vanilla HTML5, CSS3, JavaScript (no frameworks)
- **Build Tools:** Node.js (v20), npm
- **Code Quality:** ESLint 9.x (flat config), Prettier
- **CI/CD:** GitHub Actions
- **APIs:** GitHub REST API

## Directory Structure

```
├── src/                  # Source files
│   ├── index.html        # HTML template (contains placeholder)
│   └── styles.css        # CSS with theme variables
├── scripts/              # Build automation
│   ├── build.js          # Static site generator
│   └── update-data.js    # GitHub API data fetcher
├── data/                 # Generated data
│   └── repo-data.json    # Cached repository information
├── public/               # Static assets (copied to dist)
│   ├── robots.txt
│   └── sitemap.xml
├── dist/                 # Build output (gitignored)
└── .github/workflows/    # CI/CD automation
    └── update-data.yml
```

## Common Commands

```bash
npm install          # Install dependencies
npm run update-data  # Fetch latest GitHub repos (requires .env with GITHUB_TOKEN)
npm run build        # Generate static site in dist/
npm run predeploy    # Run update-data + build
npm run lint         # Check code style
npm run lint:fix     # Auto-fix linting issues
npm run format       # Format code with Prettier
```

## Development Workflow

1. Create `.env` file with `GITHUB_TOKEN=your_token_here`
2. Run `npm install`
3. Run `npm run update-data` to fetch repository data
4. Run `npm run build` to generate the site
5. The built site is in `dist/`

## Build Pipeline

**Data Update (`scripts/update-data.js`):**
1. Fetches 5 most recent repos from GitHub API for user "boversauros"
2. Retrieves language stats for each repository
3. Saves to `data/repo-data.json`

**Site Build (`scripts/build.js`):**
1. Reads `repo-data.json` and `src/index.html`
2. Replaces `<!-- RECENT_WORKS_PLACEHOLDER -->` with generated project HTML
3. Copies all assets to `dist/`

## Code Conventions

### JavaScript
- ES modules (`"type": "module"` in package.json)
- ESLint with Prettier integration (flat config format)
- Use `node:` prefix for built-in modules (e.g., `node:fs`, `node:path`)

### CSS
- Use CSS custom properties for theming
- Light theme is default; dark theme via `[data-theme="dark"]` attribute
- Follow existing variable naming: `--primary-color`, `--bg-color`, etc.

### HTML
- Semantic HTML5 elements
- JSON-LD structured data for SEO
- Placeholder comments for dynamic content: `<!-- RECENT_WORKS_PLACEHOLDER -->`

### Formatting Rules (.prettierrc)
- Single quotes
- Trailing commas (ES5 style)
- 2-space indentation
- 100 character print width

## GitHub Actions

The `update-data.yml` workflow:
- **Trigger:** Manual dispatch only
- **Purpose:** Fetches latest repo data and creates a PR with changes
- **Token:** Uses `PERSONAL_ACCESS_TOKEN` secret (not default GITHUB_TOKEN)

## Important Files

| File | Purpose |
|------|---------|
| `src/index.html` | Main HTML template with placeholders |
| `src/styles.css` | All styling including theme support |
| `scripts/build.js` | Static site generator |
| `scripts/update-data.js` | GitHub API data fetcher |
| `data/repo-data.json` | Cached repository data |
| `eslint.config.js` | ESLint flat config (ES modules) |

## Making Changes

### Adding/Modifying Portfolio Content
- Edit `src/index.html` for static content changes
- Edit `src/styles.css` for styling changes
- The "Recent Works" section is auto-generated from GitHub data

### Changing Which Repos Appear
- Modify `scripts/update-data.js` to change:
  - Number of repos fetched (currently 5)
  - Sort order (currently by creation date)
  - Which user's repos to fetch

### Styling Themes
- CSS variables are defined in `:root` (light) and `[data-theme="dark"]` selectors
- Theme toggle uses localStorage key `'theme'`

## Testing Changes

1. Run `npm run lint` to check code quality
2. Run `npm run build` to ensure build succeeds
3. Open `dist/index.html` in browser to verify changes
4. Check responsive design at different viewport sizes

## Notes for AI Assistants

- This is a vanilla JS project - avoid suggesting frameworks
- The site is static; there's no server-side rendering
- Repository data is fetched at build time, not runtime
- Always run `npm run lint` before committing changes
- The `dist/` folder is gitignored - don't commit build artifacts
