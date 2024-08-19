"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import styles from "./animatedseparator.module.css";
import { AnimatePresence } from "framer-motion";
import { ExitAnimationContext } from "../ExitAnimationProvider";

function AnimatedSeparator({
  isVertical,
  delay = 0,
  stiffness = 50,
  damping = 2,
  cancelAnimation,
  ...delegated
}) {
  const { startExitAnimation } = useContext(ExitAnimationContext);
  const styleObj = { [isVertical ? "width" : "height"]: "2px" };
  if (cancelAnimation) {
    return <div style={styleObj} className={styles.separator}></div>;
  }

  const animationDimention = isVertical ? "height" : "width";
  const transitionObj = {
    [animationDimention]: {
      type: "spring",
      stiffness,
      damping,
      delay,
    },
  };

  return (
    <AnimatePresence>
      {!startExitAnimation && (
        <motion.div
          {...delegated}
          style={styleObj}
          key={"separator" + delay}
          initial={{
            [animationDimention]: 0,
          }}
          animate={{
            [animationDimention]: "100%",
            transition: transitionObj,
          }}
          exit={{
            [animationDimention]: 0,
            transition: transitionObj,
          }}
          className={styles.separator}
        />
      )}
    </AnimatePresence>
  );
}

export default AnimatedSeparator;
