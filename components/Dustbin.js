import React, {useEffect, useState} from "react";
import Styles from "../styles/Home.module.scss";
import { ItemTypes } from './ItemTypes.js'
import { useDrop } from 'react-dnd'

//Form Items
import Header from "./form/header";

export const Dustbin = () => {
  const [{getItem}, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      let itemSlug = monitor.getItem()?.slug
      listTry.push( components.find((element) => element?.slug === itemSlug) )
    },
    collect: (monitor) => ({
      getItem: monitor.getItem(),
    }),
  }))
  const components = [
    { slug:'header', element: <Header /> },
    { slug:'test', element: <div>test</div> },
    { slug:'header', element: <Header /> },
  ]
  const [listTry, _] = useState([])

  return (
    <div ref={drop} data-testid="dustbin" className={Styles.home__form}>
      {listTry.map((item, key) => <div key={key}>{item?.element}</div>)}
    </div>
  )
}
