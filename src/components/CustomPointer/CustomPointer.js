"use client";
import React, { useContext } from "react";
import { CustomPointerContext } from "../CustomPointerProvider";
import styles from "./custompointer.module.css";
import { motion } from "framer-motion";
import CursorFollow from "../CursorFollow";

function CustomPointer() {
  const hovered = useContext(CustomPointerContext);
  const errorMargin = hovered ? 16 : 8;

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
    },
  };
  return (
    <CursorFollow offsetX={errorMargin} offsetY={errorMargin}>
      <motion.div
        variants={variants}
        animate={hovered ? "hovered" : "default"}
        className={styles.cursor}
      />
    </CursorFollow>
  );
}

export default CustomPointer;
