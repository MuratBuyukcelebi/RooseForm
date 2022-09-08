import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import {motion} from "framer-motion";
import Styles from "../styles/Home.module.scss";
import React from "react";

export const Box = function Box({ name, slug }) {
  const [_, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name, slug },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  return (
    <div ref={drag} data-testid={`box`} className={Styles.home__builder}>
      <div className={Styles['home__builder-icon']}>
        { name.charAt(0).toUpperCase() }
      </div>
      <div className={Styles['home__builder-text']}>
        { name.charAt(0).toUpperCase() + name.slice(1) }
      </div>
    </div>
  )
}
