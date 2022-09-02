import Styles from '../styles/Home.module.scss'

function Builders() {
  const builderList = [
    {name: 'Header', icon: 'H'},
  ]

  return (
    builderList.map((item) => (
      <div className={Styles.home__builder}>
        <div className={Styles['home__builder-icon']}>
          { item.icon }
        </div>
        <div className={Styles['home__builder-text']}>
          { item.name }
        </div>
      </div>
    ))
  )
}

export default function Home() {
  return (
    <div className={Styles.home}>
      <div className={Styles.home__list}>
        <Builders />
      </div>
      <div className={Styles.home__form}>
      </div>
    </div>
  )
}
