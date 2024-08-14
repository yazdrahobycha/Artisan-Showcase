"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./list.module.css";
import { PLACEHOLDER_DATA } from "@/constans";
import ListLine from "../ListLine";
import AnimatedSeparator from "../AnimatedSeparator";
import { AnimatePresence } from "framer-motion";
import { COLUMN_NAMES } from "@/constans";
const CursorFollow = dynamic(() => import("../CursorFollow"), { ssr: false });
import ImgContainer from "../ImgContainer";

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
      <div onMouseLeave={() => setHoveredLine(false)}>
        {PLACEHOLDER_DATA.map((entry, i) => {
          return (
            <ListLine
              lineClass={'line'}
              onMouseEnter={() => setHoveredLine(entry.name)}
              startExitAnimation={startExitAnimation}
              key={entry.name + i}
              index={i}
              itemData={entry}
            />
          );
        })}
      </div>
      {hoveredLine && (
        <CursorFollow
          offsetY={50}
          offsetX={-10}
          damping={2}
          stiffness={10}
          mass={0.1}
        >
          <ImgContainer
            clsName={styles.imgContainer}
            src={`/img/${hoveredLine}.png`}
            sizes="100vw"
          />
        </CursorFollow>
      )}
    </div>
  );
}

export default List;
