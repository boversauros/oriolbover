# My Portfolio

This repository contains the source code for Oriol Bover's personal portfolio website. The site showcases recent projects and is automatically updated with the latest GitHub repository information.

## Project Structure

```
oriol-bover-portfolio/
│
├── src/               # Source files
│   ├── index.html     # Main HTML template
│   └── styles.css     # CSS styles
│
├── scripts/           # Build and update scripts
│   ├── build.js       # Builds the site
│   └── update-repo-data.js  # Fetches latest GitHub data
│
├── data/              # Data files
│   └── repo-data.json # Latest GitHub repository data
│
├── dist/              # Built files (generated)
│
└── .github/           # GitHub specific files
    └── workflows/     # GitHub Actions workflows
```

## Setup

1. Clone the repository:

   ```
   git clone https://github.com/boversauros/oriol-bover-portfolio.git
   cd oriol-bover-portfolio
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your GitHub token:
   ```
   GITHUB_TOKEN=your_github_token_here
   ```

## Usage

- To update GitHub data:

  ```
  npm run update-data
  ```

- To build the site:

  ```
  npm run build
  ```

- To run linting:

  ```
  npm run lint
  ```

- To format code:
  ```
  npm run format
  ```
