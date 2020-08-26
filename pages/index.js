import Head from 'next/head'
import Header from 'components/Header'
import Introduction from 'components/Introduction'
import Repositories from 'components/Repositories'
import { getRepos } from 'lib/api'
import PropTypes from 'prop-types'

function Home({ repos }) {
  return (
    <>
      <Head>
        <title>{'>'} Oriol Bover 👨‍💻</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="content">
        <Introduction withRepos={!!repos} />
        {repos && <Repositories repos={repos.viewer.repositories} />}
      </main>
      <footer>
        <p>
          © {new Date().getFullYear()} Oriol Bover Vila <span>|</span> Built
          with{' '}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            Next.js
          </a>
        </p>
      </footer>
    </>
  )
}

Home.propTypes = {
  repos: PropTypes.object,
}

export default Home

export async function getStaticProps() {
  const repos = await getRepos()
  return {
    props: { repos },
  }
}
