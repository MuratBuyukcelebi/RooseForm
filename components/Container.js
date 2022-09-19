import React, { memo } from 'react'
import { Builder } from './Builder.js'
import { List } from './List.js'
import Styles from '../styles/Home.module.scss'

export const Container = memo(function Container() {
  function BoxList() {
    const boxList = [
      { name: 'Header', slug: 'header' },
      { name: 'Test', slug: 'test' },
      { name: 'Header', slug: 'header' }
    ]
    return (
      boxList.map((item, key) =>
        <Builder key={key} name={item.name} slug={item.slug} />
      )
    )
  }

  return (
    <div className={Styles.home}>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <div className={Styles.home__list}>
          <BoxList />
        </div>
      </div>
      <div style={{ overflow: 'hidden', clear: 'both'}}>
        <List />
      </div>
    </div>
  )
})
