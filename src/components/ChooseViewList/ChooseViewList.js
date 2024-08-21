import React from "react";
import BulletLi from "../BulletLi";
import styles from './chooseviewlist.module.css'

function ChooseViewList({
  displayType,
  delayedHandleDisplayChange,
  startExitAnimation
}) {
  return (
    <ul className={styles.listWrapper}>
      {["List", "Display"].map((itemsType, i) => (
        <BulletLi
          className={styles.listItem}
          onClick={() => {
            if (!startExitAnimation) {
              delayedHandleDisplayChange(itemsType);
            }
          }}
          active={displayType === itemsType}
          key={itemsType + i}
        >
          {itemsType}
      </BulletLi>
      ))}
    </ul>
  );
}

export default ChooseViewList;
