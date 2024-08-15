import React from "react";
import AnimatedSeparator from "../AnimatedSeparator";
import styles from "./grid.module.css";

function Grid({ children, columnNum, ...delegated }) {
  return (
    <div {...delegated} className={styles.wrapper}>
      <AnimatedSeparator delay={0.5} stiffness={30} damping={10} />
      <div className={styles.gridWrapper}>
        {children}
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}

export default Grid;
