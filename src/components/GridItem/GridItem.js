import React from "react";
import AnimatedSeparator from "../AnimatedSeparator";
import styles from './gridItem.module.css'

function GridItem({ children, indexSeparatorDelay }) {
  return (
    <>
      <div className={styles.gridItem}>{children}</div>
      <AnimatedSeparator
        delay={0.08 * indexSeparatorDelay}
        stiffness={10}
        damping={3}
      />
    </>
  );
}

export default GridItem;
