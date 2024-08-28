"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import styles from "./animatedseparator.module.css";
import { AnimatePresence } from "framer-motion";
import { ExitAnimationContext } from "../ExitAnimationProvider";

function AnimatedSeparator({
  isVertical,
  delay = 0,
  stiffness = 15,
  damping = 7,
  cancelAnimation,
  ...delegated
}) {
  const { startExitAnimation } = useContext(ExitAnimationContext);
  const styleObj = { [isVertical ? "width" : "height"]: "2px" };
  if (cancelAnimation) {
    return <div style={styleObj} className={styles.separator}></div>;
  }

  const animationDimention = isVertical ? "height" : "width";

  return (
    <AnimatePresence mode="wait">
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
        // ) : (
        //   <div
        //     key="2"
        //     className={styles.separator}
        //     style={{ ...styleObj, opacity: 0 }}
        //   />
      )}
    </AnimatePresence>
  );
}

export default AnimatedSeparator;
