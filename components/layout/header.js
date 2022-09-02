import Styles from '../../styles/layout/Header.module.scss'
import Image from 'next/image'

export default function Header() {
  return (
    <div className={Styles.header}>
      <a href="/">
        <Image draggable="false" className={Styles.header__logo} src="/logo.svg" height={64} width={64} />
      </a>
    </div>
  )
}