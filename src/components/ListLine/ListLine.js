"use client";
import React, { forwardRef, useContext } from "react";
import styles from "./listline.module.css";
import AnimatedSeparator from "../AnimatedSeparator";
import Title from "../Title";
import UtilityLink from "../UtilityLink";
import { DELAY_EXIT } from "@/constans";
import SlideInOut from "../SlideInOut";
import { ExitAnimationContext } from "../ExitAnimationProvider";

function ListLine(
  {
    itemData,
    index = 0,
    inline,
    columnClass = "",
    lineClass = "",
    ...delegated
  },
  ref
) {
  const WrapperTag = inline ? "div" : UtilityLink;
  const { startExitAnimation } = useContext(ExitAnimationContext);

  return (
    <div
      {...delegated}
      ref={ref}
      className={`${styles.lineWrapper} ${
        inline ? styles.inline : ""
      } ${columnClass}`}
    >
      <WrapperTag
        className={`${styles.secondLineWrapper} ${
          startExitAnimation ? "" : lineClass
        }`}
        href={!inline ? `/${itemData.name}` : undefined}
        {...(inline ? {} : { delayTime: DELAY_EXIT })}
      >
        <SlideInOut from="top" delay={0.1 + 0.1 * index}>
          <Title>{itemData.name}</Title>
        </SlideInOut>
        <SlideInOut from="top" secondDirection="left" delay={0.2 + 0.1 * index}>
          <div className={styles.client}>{itemData.client}</div>
        </SlideInOut>
        <SlideInOut from="top" secondDirection="left" delay={0.3 + 0.1 * index}>
          <div className={styles.year}>{itemData.year}</div>
        </SlideInOut>
        <SlideInOut from="top" secondDirection="left" delay={0.4 + 0.1 * index}>
          <div className={styles.category}>{itemData.category}</div>
        </SlideInOut>
      </WrapperTag>
      {!inline && (
        <AnimatedSeparator delay={0.08 * index} stiffness={80} damping={19} />
      )}
    </div>
  );
}

export default forwardRef(ListLine);
