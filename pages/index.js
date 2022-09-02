import React from "react";
import Styles from '../styles/Home.module.scss'
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

function Builders() {
  const builderList = [
    { slug: 'header' , name: 'Header', icon: 'H' },
    { slug: 'header' , name: 'Header', icon: 'H' },
    { slug: 'header' , name: 'Header', icon: 'H' },
  ]

  return (
    builderList.map((item) => (
      <motion.div dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} drag dragElastic={1} className={Styles.home__builder}>
        <div className={Styles['home__builder-icon']}>
          { item.icon }
        </div>
        <div className={Styles['home__builder-text']}>
          { item.name }
        </div>
      </motion.div>
    ))
  )
}

export default function Home() {
  return (
    <div className={Styles.home}>
      <AnimateSharedLayout>
        <div className={Styles.home__list}>
          <Builders />
        </div>
        <div className={Styles.home__form}>
        </div>
      </AnimateSharedLayout>
    </div>
  )
}
