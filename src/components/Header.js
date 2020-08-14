import style from 'styles/components/header.module.css'

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <div className={style.logo}>
          <span className={style.mark}>{'>'}</span>
          <span className={style.text}> Oriol Bover</span>
          <span className={style.cursor} />
        </div>
      </div>
    </header>
  )
}
