"use client";
import React from "react";
import { AnimatePresence, motion, spring } from "framer-motion";
import styles from "./animatedseparator.module.css";

function AnimatedSeparator({ delay = 0, stiffness = 50, damping = 2 }) {
  return (
    <motion.div
      key={"separator" + delay}
      initial={{
        width: 0,
      }}
      animate={{
        width: "100%",
        transition: {
          width: {
            type: "spring",
            stiffness,
            damping,
            delay,
          },
        },
      }}
      exit={{
        width: 0,
      }}
      className={styles.separator}
    />
  );
}

export default AnimatedSeparator;
