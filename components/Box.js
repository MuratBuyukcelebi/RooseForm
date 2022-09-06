import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import {motion} from "framer-motion";
import Styles from "../styles/Home.module.scss";
import React from "react";
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

export const Box = function Box({ name }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
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
