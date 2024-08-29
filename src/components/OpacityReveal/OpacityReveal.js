"use client";
import React from "react";
import { motion } from "framer-motion";
import WatchExit from "../WatchExit";

function OpacityReveal({
  children,
  delay = 0,
  stiffness = 150,
  damping = 30,
  ...delegated
}) {
  return (
    <WatchExit>
      <motion.div
        {...delegated}
        initial={{ opacity: 0 }}
        transition={{
          type: "spring",
          stiffness,
          damping,
          delay,
          restDelta: 0.01,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0,
            stiffness,
            damping,
            restDelta: 0.01,
          },
        }}
      >
        {children}
      </motion.div>
    </WatchExit>
  );
}

export default OpacityReveal;
