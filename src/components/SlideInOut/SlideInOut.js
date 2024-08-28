"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ExitAnimationContext } from "../ExitAnimationProvider";

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
  const { startExitAnimation } = useContext(ExitAnimationContext);

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
    <AnimatePresence mode="wait">
      {!startExitAnimation ? (
        <motion.div
          {...delegated}
          key="1"
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
      ) : (
        // for the item not to be removed immediately after the animation is done
        // (causing a flickering)
        // not just remove motion item from the DOM, but replace it with a transparent placeholder
        <div key="2" style={{ opacity: 0 }}>
          {children}
        </div>
      )}
    </AnimatePresence>
  );
}

export default SlideInOut;
