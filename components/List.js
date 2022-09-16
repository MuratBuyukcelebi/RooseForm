import React, {useEffect, useState} from "react";
import Styles from "../styles/Home.module.scss";
import { ItemTypes } from './ItemTypes.js'
import { useDrop } from 'react-dnd'

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
  const [listTry, setListTry] = useState([{ slug:'header', element: <Header /> }])

  return (
    <div ref={drop} data-testid="dustbin" className={Styles.home__form}>
      {listTry.map((item, key) =>
        <div className={Styles['home__form-item']} key={key}>
          <div className={Styles['home__form-content']}>
            {item?.element}
          </div>
          <div className={Styles['home__form-action']}>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5.828L9.172 7.657 7.757 6.243 12 2l4.243 4.243-1.415 1.414L13 5.828V11h5.172l-1.829-1.828 1.414-1.415L22 12l-4.243 4.243-1.414-1.415L18.172 13H13v5.172l1.828-1.829 1.415 1.414L12 22l-4.243-4.243 1.415-1.414L11 18.172V13H5.828l1.829 1.828-1.414 1.415L2 12l4.243-4.243 1.414 1.415L5.828 11z"/></svg>
            </button>
          </div>
        </div>)
      }
    </div>
  )
}