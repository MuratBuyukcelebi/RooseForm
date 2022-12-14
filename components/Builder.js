import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import Styles from "../styles/Home.module.scss";
import React from "react";

export const Builder = function Box({ name, slug }) {
  const upperCase = require('lodash');

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
        { upperCase.startCase(name) }
      </div>
    </div>
  )
}
