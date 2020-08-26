const API_URL = 'https://api.github.com/graphql'
const { GITHUB_TOKEN } = process.env

async function fetchAPI(query, { variables } = {}) {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    const json = await res.json()
    if (json.data) {
      return json.data
    } else {
      return null
    }
  } catch (error) {
    throw new Error('Failed to fetch API', error)
  }
}

export async function getRepos() {
  const data = await fetchAPI(
    `query($number_of_repos:Int!) {
      viewer { 
        login
        repositories(
          first : $number_of_repos, 
          affiliations: [OWNER],  
          privacy: PUBLIC, 
          orderBy: {field: CREATED_AT, direction: DESC } 
          ) {
          nodes {
            object(expression: "master:README.md") {
              ... on Blob {
                text
              }
            }
            name
            url
            description
            updatedAt
            createdAt
            languages(first: 4) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }`,
    {
      variables: {
        number_of_repos: 5,
      },
    }
  )
  return data
}
