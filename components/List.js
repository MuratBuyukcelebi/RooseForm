import React, { useState } from "react";
import Styles from "../styles/Home.module.scss";
import { Reorder } from "framer-motion";
import { ItemTypes } from './ItemTypes.js'
import { useDrop } from 'react-dnd'

//Form Item Scheme
import Scheme from "./builders/Scheme";
//Form Items
import Header from "./builders/header";

export const List = () => {
  const [_, drop] = useDrop(() => ({
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
  ]
  const [listTry, setListTry] = useState([])

  return (
    <div>
      <Reorder.Group layoutScroll ref={drop} data-testid="dustbin" className={Styles.home__form} axis="y" onReorder={setListTry} values={listTry}>
        {listTry.map((item, key) =>
         <Scheme key={key} item={item}/>
        )}
      </Reorder.Group>
    </div>
  )
}