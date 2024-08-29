"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { ExitAnimationContext } from "../ExitAnimationProvider";

function WatchExit({ children }) {
  const { startExitAnimation } = React.useContext(ExitAnimationContext);
  return (
    <AnimatePresence mode="wait">
      {!startExitAnimation ? (
        <React.Fragment key={1}>{children}</React.Fragment>
      ) : (
        <div key={2} style={{ opacity: 0 }}>
          children
        </div>
      )}
    </AnimatePresence>
  );
}

export default WatchExit;
