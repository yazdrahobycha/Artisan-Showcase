"use client";
import React from "react";
import styles from "./list.module.css";
import { PLACEHOLDER_DATA } from "@/constans";
import ListLine from "../ListLine";
import AnimatedSeparator from "../AnimatedSeparator";
import { AnimatePresence } from "framer-motion";

function List({ startExitAnimation }) {
  return (
    <div className={styles.listWrapper}>
      <AnimatePresence>
        {!startExitAnimation && (
          <AnimatedSeparator delay={0} stiffness={50} damping={10} />
        )}
      </AnimatePresence>
      {PLACEHOLDER_DATA.map((entry, i) => {
        return (
          <ListLine
            startExitAnimation={startExitAnimation}
            i={entry.name + i}
            key={entry.name + i}
            index={i}
            itemData={entry}
          />
        );
      })}
    </div>
  );
}

export default List;
