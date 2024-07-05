"use client";
import React from "react";
import styles from "./listline.module.css";
import AnimatedSeparator from "../AnimatedSeparator";

function ListLine({ itemData, index }) {
  return (
    <>
      <div className={styles.lineWrapper}>
        <h2 className={styles.title}>{itemData.name}</h2>
        <div className={styles.client}>{itemData.client}</div>
        <div className={styles.year}>{itemData.year}</div>
        <div className={styles.category}>{itemData.category}</div>
      </div>
      <AnimatedSeparator delay={0.08 * index} stiffness={20} damping={7} />
    </>
  );
}

export default ListLine;
