import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import {motion} from "framer-motion";
import Styles from "../styles/Home.module.scss";
import React from "react";

export const Box = function Box({ name }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  return (
    <div ref={drag} data-testid={`box`} className={Styles.home__builder}>
      <div className={Styles['home__builder-icon']}>
        { name.charAt(0) }
      </div>
      <div className={Styles['home__builder-text']}>
        { name }
      </div>
    </div>
  )
}
