"use client";
import React, { useContext } from "react";
import AnimatedSeparator from "../AnimatedSeparator";
import styles from "./gridItem.module.css";
import { ExitAnimationContext } from "../ExitAnimationProvider";

function GridItem({ children, indexSeparatorDelay, ...delegated }) {
  const { startExitAnimation } = useContext(ExitAnimationContext);
  console.log(startExitAnimation);
  return (
    <div {...delegated}>
      <div
        className={`${styles.gridItem} ${!startExitAnimation ? "line" : ""} `}
      >
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
