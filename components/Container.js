import React, { memo } from 'react'
import { Box } from './Box.js'
import { Dustbin } from './Dustbin.js'
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
        <Box key={key} name={item.name} slug={item.slug} />
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
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Dustbin />
      </div>
    </div>
  )
})
