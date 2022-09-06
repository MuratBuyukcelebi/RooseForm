import React, { memo } from 'react'
import { Box } from './Box.js'
import { Dustbin } from './Dustbin.js'
import Styles from '../styles/Home.module.scss'

export const Container = memo(function Container() {
  return (
    <div className={Styles.home}>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <div className={Styles.home__list}>
          <Box name="Header" />
          <Box name="Header" />
          <Box name="Header" />
        </div>
      </div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Dustbin />
      </div>
    </div>
  )
})
