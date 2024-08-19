import React from "react";
import AnimatedSeparator from "../AnimatedSeparator";
import styles from "./gridItem.module.css";

function GridItem({ children, indexSeparatorDelay, ...delegated }) {
  return (
    <div {...delegated}>
      <div className={styles.gridItem}>
        {children}
        <AnimatedSeparator isVertical={true} />
      </div>
      <AnimatedSeparator
        delay={0.08 * indexSeparatorDelay}
        stiffness={10}
        damping={3}
      />
    </div>
  );
}

export default GridItem;
