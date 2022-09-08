import React, {useEffect, useState} from "react";
import Styles from "../styles/Home.module.scss";
import { ItemTypes } from './ItemTypes.js'
import { useDrop } from 'react-dnd'

//Form Items
import Header from "./form/header";

export const Dustbin = () => {
  const [{canDrop, isOver, getItem}, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      let itemSlug = monitor.getItem()?.slug
      console.log(components.find((element) => element.slug === itemSlug))
      listTry.push( components.find((element) => element?.slug === itemSlug) )
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      getItem: monitor.getItem(),
    }),
  }))
  const components = [
    { slug:'header', element: <Header /> },
    { slug:'test', element: <div>test</div> },
    { slug:'header', element: <Header /> },
  ]
  const [listTry, setListTry] = useState([])

  return (
    <div ref={drop} data-testid="dustbin" className={Styles.home__form}>
      {listTry.map((item, key) => <div key={key}>{item?.element}</div>)}
    </div>
  )
}
