"use client";
import React, { forwardRef } from "react";
import styles from "./listline.module.css";
import AnimatedSeparator from "../AnimatedSeparator";
import { AnimatePresence } from "framer-motion";
import Title from "../Title";
import UtilityLink from "../UtilityLink";
import { DELAY_EXIT } from "@/constans";

function ListLine(
  {
    itemData,
    index,
    startExitAnimation,
    inline,
    columnClass = "",
    lineClass = "",
    ...delegated
  },
  ref
) {
  const WrapperTag = inline ? "div" : UtilityLink;

  return (
    <div
      {...delegated}
      ref={ref}
      className={`${styles.lineWrapper} ${
        inline ? styles.inline : ""
      } ${columnClass}`}
    >
      <WrapperTag
        delayTime={DELAY_EXIT}
        className={`${styles.secondLineWrapper} ${lineClass}`}
        href={!inline ? `/${itemData.name}` : undefined}
      >
        <Title>{itemData.name}</Title>
        <div className={styles.client}>{itemData.client}</div>
        <div className={styles.year}>{itemData.year}</div>
        <div className={styles.category}>{itemData.category}</div>
      </WrapperTag>
      <AnimatePresence>
        {!startExitAnimation && (
          <AnimatedSeparator delay={0.08 * index} stiffness={20} damping={7} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default forwardRef(ListLine);
