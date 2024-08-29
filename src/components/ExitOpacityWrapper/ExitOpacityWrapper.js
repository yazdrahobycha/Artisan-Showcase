"use client";
import React from "react";
import { motion } from "framer-motion";
import WatchExit from "../WatchExit";

function ExitOpacityWrapper({ children }) {
  return (
    <WatchExit>
      <motion.div exit={{ opacity: 0 }}>{children}</motion.div>
    </WatchExit>
  );
}

export default ExitOpacityWrapper;
