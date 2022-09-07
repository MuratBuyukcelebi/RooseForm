import React from "react";
import Styles from "../styles/Home.module.scss";
import { ItemTypes } from './ItemTypes.js'
import { useDrop } from 'react-dnd'

//Form Items
import Header from "./form/header";

export const Dustbin = () => {
  const [{canDrop, isOver, getItem}, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {},
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      getItem: monitor.getItem(),
    }),
  }))
  function FormList() {
    if (isOver && canDrop && !!getItem?.slug) {
      console.log('nice')
    }

    let list = [
      { slug:'header', element: <Header /> }
    ]
    return (
      list.map((item, key) =>
        <div key={key}>
          {item.element}
        </div>
      )
    )
  }

  return (
    <div ref={drop} data-testid="dustbin" className={Styles.home__form}>
      <FormList />
    </div>
  )
}
