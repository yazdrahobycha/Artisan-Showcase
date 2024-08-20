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
  if (secondDirection) {
    direction = {
      ...direction,
      ...directions[secondDirection],
    };
  }

  return (
    <AnimatePresence>
      {!startExitAnimation && (
        <motion.div
          {...delegated}
          initial={{ ...direction, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness,
            damping,
            delay,
          }}
          animate={{
            y: 0,
            x: 0,
            opacity: 1,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SlideInOut;
