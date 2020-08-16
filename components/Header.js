import style from 'styles/components/header.module.css'
import classnames from 'classnames'
import useTheme from 'lib/useTheme'

export default function Header() {
  const { toggleTheme } = useTheme()
  const innerClasses = classnames(style.inner, 'container')

  return (
    <header className={style.header}>
      <div className={innerClasses}>
        <div className={style.logo}>
          <span className={style.mark}>{'>'}</span>
          <span className={style.text}> Oriol Bover</span>
          <span className={style.cursor} />
        </div>
        <div className={style.right}>
          <button onClick={toggleTheme}>Theme</button>
        </div>
      </div>
    </header>
  )
}
