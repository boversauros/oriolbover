import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = 'boversauros';
const REPO_COUNT = 5;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function fetchRepos() {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${USERNAME}/repos?sort=created&direction=desc&per_page=${REPO_COUNT}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    const repos = await Promise.all(
      data.map(async (repo) => ({
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
        updatedAt: repo.updated_at,
        createdAt: repo.created_at,
        languages: await fetchLanguages(repo.languages_url),
      }))
    );

    return repos;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
}

async function fetchLanguages(languagesUrl) {
  try {
    const response = await fetch(languagesUrl, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return Object.keys(data).slice(0, 4);
  } catch (error) {
    console.error('Error fetching languages:', error);
    return [];
  }
}

async function saveReposData(repos) {
  const data = JSON.stringify(repos, null, 2);
  try {
    await mkdir(path.join(__dirname, '..', 'data'), { recursive: true });
    await writeFile(path.join(__dirname, '..', 'data', 'repo-data.json'), data);
    console.log('✅ Repositories data saved correctly');
  } catch (error) {
    console.error('Error saving repositories data:', error);
  }
}

async function main() {
  const repos = await fetchRepos();
  await saveReposData(repos);
}

main();
