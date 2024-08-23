"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ExitAnimationContext } from "../ExitAnimationProvider";

function ExitOpacityWrapper({ children }) {
  const { startExitAnimation } = React.useContext(ExitAnimationContext);
  return (
    <AnimatePresence mode="wait">
      {!startExitAnimation ? (
        <motion.div key="1" exit={{ opacity: 0 }}>
          {children}
        </motion.div>
      ) : (
        <div key="2" style={{ opacity: 0 }}>
          {children}
        </div>
      )}
    </AnimatePresence>
  );
}

export default ExitOpacityWrapper;
