import React from "react";
import AnimatedSeparator from "../AnimatedSeparator";
import styles from "./grid.module.css";

function Grid({ children, columnNum, ...delegated }) {
  return (
    <div {...delegated} className={styles.wrapper}>
      <AnimatedSeparator delay={0.1} stiffness={150} damping={30} />
      <div className={styles.gridWrapper}>
        {children}
      </div>
    </div>
  );
}

export default Grid;
