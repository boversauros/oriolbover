import Head from 'next/head'
import Header from 'components/Header'
import Introduction from 'components/Introduction'
import Svg from 'components/Svg'
import style from 'styles/components/repositories.module.css'
import { getRepos } from 'lib/api'
import PropTypes from 'prop-types'

function Home({ repos }) {
  const {
    viewer: { repositories },
  } = repos

  return (
    <div>
      <Head>
        <title>{'>'} Oriol Bover 👨‍💻</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="content">
        <Introduction />
        <section className="container">
          <ul className={style.list}>
            {repositories.nodes.map((node) => (
              <li key={node.name} className={style.listItem}>
                <h3 className={style.listTitle}>{node.name}</h3>
                <div className={style.listDataTime}>
                  <small>{node.updatedAt} • </small>
                  {node.languages.edges.map((language) => (
                    <Svg
                      key={language.node.name}
                      iconType={language.node.name}
                    />
                  ))}
                </div>
                <p>{node.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
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
