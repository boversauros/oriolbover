import React from 'react'
import { formatTime } from 'lib/utils'
import PropTypes from 'prop-types'
import style from 'styles/components/repositories.module.css'

const Repositories = ({ repos = {} }) => {
  return (
    <section className="container">
      {repos && (
        <ul className={style.list}>
          {repos.nodes.map((node) => (
            <li key={node.name} className={style.item}>
              <article>
                <header className={style.header}>
                  <h3 className={style.title}>
                    <a href={node.url} target="_blank" rel="noreferrer">
                      {node.name}
                    </a>
                  </h3>
                  <small className={style.listDataTime} >{formatTime(node.createdAt)}</small>
                 </header>
                 <ul className={style.languageList}>
                  {node.languages.edges.map((language, index) => (
                    <li key={index}>
                      <small>{language.node.name}</small>
                    </li>
                  ))}
                 </ul>
                <p className={style.description}>{node.description}</p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

Repositories.propTypes = {
  repos: PropTypes.object,
}

export default Repositories
