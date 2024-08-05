"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@react-hookz/web";
import Portal from "../Portal";
import styles from "./cursorfollow.module.css";

function CursorFollow({ children, offsetX = 0, offsetY = 0 }) {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 100, stiffness: 1000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  useEffect(() => {
    if (isSmallDevice) return;

    function updateMousePosition(e) {
      cursorX.set(e.clientX - offsetX);
      cursorY.set(e.clientY - offsetY);
    }

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offsetX, offsetY]);

  if (isSmallDevice) {
    return null;
  }
  return (
    <Portal>
      <motion.div
        className={styles.fixed}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        {children}
      </motion.div>
    </Portal>
  );
}

export default CursorFollow;
