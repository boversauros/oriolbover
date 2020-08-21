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

    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }

    return json.data
  } catch (error) {
    console.error(error)
    return null
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
        number_of_repos: 10,
      },
    }
  )
  return data
}
