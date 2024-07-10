"use client";
import React from "react";
import styles from "./listline.module.css";
import AnimatedSeparator from "../AnimatedSeparator";
import { AnimatePresence } from "framer-motion";
import Title from "../Title";

function ListLine({ itemData, index, startExitAnimation}) {
  return (
    <>
      <div className={styles.lineWrapper}>
        <Title>{itemData.name}</Title>
        <div className={styles.client}>{itemData.client}</div>
        <div className={styles.year}>{itemData.year}</div>
        <div className={styles.category}>{itemData.category}</div>
      </div>
      <AnimatePresence>
        {!startExitAnimation && (
          <AnimatedSeparator delay={0.08 * index} stiffness={20} damping={7} />
        )}
      </AnimatePresence>
    </>
  );
}

export default ListLine;
