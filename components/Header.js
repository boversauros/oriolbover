import style from 'styles/components/header.module.css'
import useTheme from 'hooks/useTheme'

export default function Header() {
  const { toggleTheme } = useTheme()

  return (
    <header className={style.header}>
      <div className={style.inner}>
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
