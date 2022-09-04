import React from "react";
import Styles from '../styles/Home.module.scss'
import { motion, AnimateSharedLayout } from "framer-motion";
import Example from './example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function Builders() {
  const builderList = [
    { slug: 'header' , name: 'Header' },
    { slug: 'header' , name: 'Header' },
    { slug: 'header' , name: 'Header' },
  ]

  const onViewportBoxUpdate = () => {
    console.log('deneme')
  }

  return (
    builderList.map((item, index) => (
      <motion.div key={index} dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} drag dragElastic={1} className={Styles.home__builder}>
        <div className={Styles['home__builder-icon']}>
          { item.name.charAt(0) }
        </div>
        <div className={Styles['home__builder-text']}>
          { item.name }
        </div>
      </motion.div>
    ))
  )
}

function FormElements() {
  return (
    <></>
  )
}

export default function Home() {
  return (
    <div className={Styles.home}>
      <div className={Styles.home__list}>
        <Builders />
      </div>
      <div className={Styles.home__form}>
        <FormElements />
      </div>
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </div>
  )
}
