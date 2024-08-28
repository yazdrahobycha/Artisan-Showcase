"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ExitAnimationContext } from "../ExitAnimationProvider";

function OpacityReveal({
  children,
  delay = 0,
  stiffness = 150,
  damping = 30,
  ...delegated
}) {
  const { startExitAnimation } = React.useContext(ExitAnimationContext);

  return (
    <AnimatePresence mode="wait">
      {!startExitAnimation ? (
        <motion.div
          {...delegated}
          key="1"
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

export default OpacityReveal;
