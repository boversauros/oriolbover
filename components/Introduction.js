import React from 'react'
import useSalute from 'lib/useSalute'
import PropTypes from 'prop-types'
import style from 'styles/components/introduction.module.css'

const Introduction = ({ withRepos }) => {
  const salute = useSalute()
  return (
    <section className="container">
      <h1>{salute}</h1>
      <p className={style.iParagraph}>
        My name is <strong>Oriol Bover</strong>. I am a full-stack developer
        from Barcelona, Spain. I am currently working at{' '}
        <a
          href="https://www.xxxl.digital"
          target="_blank"
          rel="noreferrer"
          className={style.iLink}
        >
          XXXLdigital
        </a>
        . I used to develop side projects in my free time. You can find my work on my personal{' '}
        <a
          href="https://www.github.com/boversauros"
          target="_blank"
          rel="noreferrer"
          className={style.iLink}
        >
          Github
        </a>{' '}
        page.
      </p>
      <p className={style.iParagraph}>
        Feel free to contact me by writing to my{' '}
        <a href="mailto:bover73@gmail.com" className={style.iLink}>
          email
        </a>{' '}
        or on{' '}
        <a
          href="https://www.linkedin.com/in/oriol-bover/"
          target="_blank"
          rel="noreferrer"
          className={style.iLink}
        >
          Linkedin
        </a>
        .
      </p>
      {withRepos && (
        <>
          <p className={style.iParagraph}>
            Also, you can check some of my latest <strong>projects</strong>.
          </p>
          <hr/>
        </>
      )}
    </section>
  )
}

Introduction.propTypes = {
  withRepos: PropTypes.bool,
}

export default Introduction
