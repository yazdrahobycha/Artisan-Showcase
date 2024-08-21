"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@react-hookz/web";
import Portal from "../Portal";
import styles from "./cursorfollow.module.css";

function CursorFollow({
  children,
  offsetX = 0,
  offsetY = 0,
  nameClass,
  damping = 10,
  stiffness = 100,
  mass = 1,
}) {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [isFirstRender, setIsFirstRender] = useState(true);
  const springConfig = { damping, stiffness, mass };
  const cursorXSpring = useSpring(-1000, springConfig);
  const cursorYSpring = useSpring(-1000, springConfig);
  useEffect(() => {
    if (isSmallDevice) return;

    function updateMousePosition(e) {
      if (isFirstRender) {
        cursorXSpring.jump(e.clientX - offsetX);
        cursorYSpring.jump(e.clientY - offsetY);
        setIsFirstRender(false);
        return;
      }
      cursorXSpring.set(e.clientX - offsetX);
      cursorYSpring.set(e.clientY - offsetY);
    }

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [
    offsetX,
    offsetY,
    isFirstRender,
    cursorXSpring,
    cursorYSpring,
    isSmallDevice,
  ]);

  if (isSmallDevice) {
    return null;
  }

  return (
    <Portal>
      <motion.div
        className={`${styles.fixed} ${nameClass}`}
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
