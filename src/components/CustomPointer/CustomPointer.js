"use client";
import React, { useContext, useState, useEffect } from "react";
import { CustomPointerContext } from "../CustomPointerProvider";
import styles from "./custompointer.module.css";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@react-hookz/web";

function CustomPointer() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const hovered = useContext(CustomPointerContext);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 100, stiffness: 1000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const errorMargin = hovered ? 16 : 8;

  useEffect(() => {
    if (isSmallDevice) return;

    function updateMousePosition(e) {
      cursorX.set(e.clientX - errorMargin);
      cursorY.set(e.clientY - errorMargin);
    }

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [hovered]);

  if (isSmallDevice) {
    return null;
  }

  const variants = {
    default: {
      width: "16px",
      height: "16px",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    hovered: {
      width: "32px",
      height: "32px",
      // transition: {
      //   type: "spring",
      //   mass: 0.6,
      // },
    },
  };
  return (
    <motion.div
      variants={variants}
      animate={hovered ? "hovered" : "default"}
      className={styles.cursor}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
}

export default CustomPointer;
