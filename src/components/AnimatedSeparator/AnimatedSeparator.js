"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./animatedseparator.module.css";
import WatchExit from "../WatchExit";

function AnimatedSeparator({
  isVertical,
  delay = 0,
  stiffness = 15,
  damping = 7,
  cancelAnimation,
  ...delegated
}) {
  const styleObj = { [isVertical ? "width" : "height"]: "2px" };
  if (cancelAnimation) {
    return <div style={styleObj} className={styles.separator}></div>;
  }

  const animationDimention = isVertical ? "height" : "width";

  return (
    <WatchExit>
      <motion.div
        {...delegated}
        style={styleObj}
        key={"separator" + delay}
        initial={{
          [animationDimention]: 0,
        }}
        animate={{
          [animationDimention]: "100%",
          transition: {
            [animationDimention]: {
              type: "spring",
              stiffness,
              damping,
              delay,
              restDelta: 0.01,
            },
          },
        }}
        exit={{
          [animationDimention]: 0,
          transition: {
            [animationDimention]: {
              type: "spring",
              stiffness: 30,
              damping: 10,
              delay: 0 + delay / 2,
              restDelta: 0.01,
            },
          },
        }}
        className={styles.separator}
      />
    </WatchExit>
  );
}

export default AnimatedSeparator;
