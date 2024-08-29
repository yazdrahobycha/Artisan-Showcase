"use client";
import React from "react";
import { motion } from "framer-motion";
import WatchExit from "../WatchExit";

function SlideInOut({
  children,
  delay = 0,
  stiffness = 150,
  damping = 30,
  from = "top",
  exitTo = "top",
  secondDirection,
  ...delegated
}) {
  const directions = {
    top: { y: "-150%" },
    bottom: { y: "150%" },
    left: { x: "-30%" },
    right: { x: "30%" },
  };

  let direction = directions[from];
  let exitDirection = directions[exitTo];
  if (secondDirection) {
    direction = {
      ...direction,
      ...directions[secondDirection],
    };
  }

  return (
    <WatchExit>
      <motion.div
        {...delegated}
        initial={{ ...direction, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness,
          damping,
          delay,
          restDelta: 0.01,
        }}
        animate={{
          y: 0,
          x: 0,
          opacity: 1,
        }}
        exit={{
          ...exitDirection,
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

export default SlideInOut;
