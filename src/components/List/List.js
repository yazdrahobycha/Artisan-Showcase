"use client";
import React, { useState } from "react";
import styles from "./list.module.css";
import { PLACEHOLDER_DATA } from "@/constans";
import ListLine from "../ListLine";
import AnimatedSeparator from "../AnimatedSeparator";
import { AnimatePresence } from "framer-motion";
import { COLUMN_NAMES } from "@/constans";

function List({ startExitAnimation }) {
  const [hoveredLine, setHoveredLine] = useState(false);
  return (
    <div className={styles.listWrapper}>
      <ListLine
        inline
        itemData={COLUMN_NAMES}
        className={styles.columnNames}
        startExitAnimation={true}
        columnClass={styles.columnNames}
      />
      <AnimatePresence>
        {!startExitAnimation && (
          <AnimatedSeparator delay={0} stiffness={50} damping={10} />
        )}
      </AnimatePresence>
      {PLACEHOLDER_DATA.map((entry, i) => {
        return (
          <ListLine
            startExitAnimation={startExitAnimation}
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
