"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./verticalanimatedseparator.module.css";

function VerticalAnimatedSeparator({
  delay = 0,
  stiffness = 50,
  damping = 2,
  cancelAnimation,
  ...delegated
}) {
  if (cancelAnimation) {
    return <div className={styles.separator}></div>;
  }

  return (
    <motion.div
      {...delegated}
      key={"separator" + delay}
      initial={{
        height: 0,
      }}
      animate={{
        height: "100%",
        transition: {
          height: {
            type: "spring",
            stiffness,
            damping,
            delay,
          },
        },
      }}
      exit={{
        height: 0,
        transition: {
          height: {
            type: "spring",
            stiffness,
            damping,
            delay,
          },
        },
      }}
      className={styles.separator}
    />
  );
}

export default VerticalAnimatedSeparator;
