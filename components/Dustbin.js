import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import Styles from "../styles/Home.module.scss";
import React from "react";

export const Dustbin = () => {
  const [{ canDrop, isOver, getItem }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      console.log(monitor.getItem())
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  return (
    <div ref={drop} data-testid="dustbin" className={Styles.home__form} />
  )
}
