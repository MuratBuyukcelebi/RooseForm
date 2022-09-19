import React from "react";
import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import Styles from "../../styles/Home.module.scss";

export const Scheme = ({ item }) => {
  const y = useMotionValue(0);
  const dragControls = useDragControls();

  //Delete Action
  const deleteAction = (e) => {
    // Shit code
    //e.target.parentElement.parentElement.parentElement.remove()
  }

  return (
    <Reorder.Item
      value={item.slug}
      style={{ width: '100%', y }}
      dragListener={false}
      dragControls={dragControls}
    >
      <div className={Styles['home__form-item']}>
        <div className={Styles['home__form-content']}>
          {item?.element}
        </div>
        <div className={Styles['home__form-action']}>
          <button disabled={true} onClick={deleteAction}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
          </button>
          <button disabled={true} onPointerDown={(e) => dragControls.start(e)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5.828L9.172 7.657 7.757 6.243 12 2l4.243 4.243-1.415 1.414L13 5.828V11h5.172l-1.829-1.828 1.414-1.415L22 12l-4.243 4.243-1.414-1.415L18.172 13H13v5.172l1.828-1.829 1.415 1.414L12 22l-4.243-4.243 1.415-1.414L11 18.172V13H5.828l1.829 1.828-1.414 1.415L2 12l4.243-4.243 1.414 1.415L5.828 11z"/></svg>
          </button>
        </div>
      </div>
    </Reorder.Item>
  )
}

export default Scheme