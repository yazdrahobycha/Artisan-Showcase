import React from "react";
import AnimatedSeparator from "../AnimatedSeparator";
import styles from "./gridItem.module.css";
import VerticalAnimatedSeparator from "../VerticalAnimatedSeparator";

function GridItem({ children, indexSeparatorDelay }) {
  return (
    <div>
      <div className={styles.gridItem}>
        {children}
        <VerticalAnimatedSeparator />
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
