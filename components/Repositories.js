import React from 'react'
import { formatTime } from 'lib/utils'
import PropTypes from 'prop-types'
import style from 'styles/components/repositories.module.css'
import Svg from 'components/Svg'

const Repositories = ({ repos = {} }) => {
  return (
    <section className="container">
      {repos && (
        <ul className={style.list}>
          {repos.nodes.map((node) => (
            <li key={node.name} className={style.listItem}>
              <h3 className={style.listTitle}>
                <a href={node.url} target="_blank" rel="noreferrer">
                  {node.name}
                </a>
              </h3>
              <div className={style.listDataTime}>
                <small>{formatTime(node.createdAt)}</small>
                {node.languages.edges.map((language) => (
                  <Svg key={language.node.name} iconType={language.node.name} />
                ))}
              </div>
              <p>{node.description}</p>
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
