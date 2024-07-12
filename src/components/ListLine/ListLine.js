"use client";
import React, { forwardRef } from "react";
import styles from "./listline.module.css";
import AnimatedSeparator from "../AnimatedSeparator";
import { AnimatePresence } from "framer-motion";
import Title from "../Title";
import Link from "next/link";

function ListLine({ itemData, index, startExitAnimation, inline }, ref) {
  return (
    <div
      ref={ref}
      className={`${styles.lineWrapper} ${inline ? styles.inline : ""}`}
    >
      <Link href={`/${itemData.name}`}>
        <Title>{itemData.name}</Title>
        <div className={styles.client}>{itemData.client}</div>
        <div className={styles.year}>{itemData.year}</div>
        <div className={styles.category}>{itemData.category}</div>
      </Link>
      <AnimatePresence>
        {!startExitAnimation && (
          <AnimatedSeparator delay={0.08 * index} stiffness={20} damping={7} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default forwardRef(ListLine);
