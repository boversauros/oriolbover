import { readFile, mkdir, writeFile, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Escapes HTML special characters to prevent XSS and layout issues
 * @param {string} text - Text to escape
 * @returns {string} Escaped text safe for HTML insertion
 */
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function buildSite() {
  try {
    // Read repo data
    const repoData = JSON.parse(
      await readFile(path.join(__dirname, '..', 'data', 'repo-data.json'), 'utf8')
    );

    // Read HTML template
    let htmlTemplate = await readFile(path.join(__dirname, '..', 'src', 'index.html'), 'utf8');

    // Generate recent works HTML
    const recentWorksHtml = repoData
      .map(
        (repo) => `
          <li class="project">
            <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="project-link">
              <div class="project-header">
                <h3 class="project-name">${escapeHtml(repo.name)}</h3>
                <span class="project-arrow">→</span>
              </div>
              <p class="project-description">${escapeHtml(repo.description || 'No description available.')}</p>
              <div class="project-tags">
                ${repo.languages.map((lang) => `<span class="project-tag">${escapeHtml(lang)}</span>`).join('')}
              </div>
            </a>
          </li>`
      )
      .join('\n');

    // Replace placeholder in HTML template
    htmlTemplate = htmlTemplate.replace('<!-- RECENT_WORKS_PLACEHOLDER -->', recentWorksHtml);

    // Ensure dist directory exists
    await mkdir(path.join(__dirname, '..', 'dist'), { recursive: true });

    // Write final HTML to dist directory
    await writeFile(path.join(__dirname, '..', 'dist', 'index.html'), htmlTemplate);

    // Copy CSS file to dist directory
    await copyFile(
      path.join(__dirname, '..', 'src', 'styles.css'),
      path.join(__dirname, '..', 'dist', 'styles.css')
    );

    // Copy robots.txt file to dist directory
    await copyFile(
      path.join(__dirname, '..', 'public', 'robots.txt'),
      path.join(__dirname, '..', 'dist', 'robots.txt')
    );

    // Copy sitemap file to dist directory
    await copyFile(
      path.join(__dirname, '..', 'public', 'sitemap.xml'),
      path.join(__dirname, '..', 'dist', 'sitemap.xml')
    );

    console.log('Site built successfully! 🚀');
  } catch (error) {
    console.error('Error building site:', error);
  }
}

buildSite();
