"use client";
import React, { useState, useContext } from "react";
import dynamic from "next/dynamic";
import styles from "./list.module.css";
import { PLACEHOLDER_DATA } from "@/constans";
import ListLine from "../ListLine";
import AnimatedSeparator from "../AnimatedSeparator";
import { COLUMN_NAMES } from "@/constans";
const CursorFollow = dynamic(() => import("../CursorFollow"), { ssr: false });
import ImgContainer from "../ImgContainer";
import { ExitAnimationContext } from "../ExitAnimationProvider";

function List() {
  const [hoveredLine, setHoveredLine] = useState(false);
  const { startExitAnimation } = useContext(ExitAnimationContext);
  return (
    <div className={styles.listWrapper}>
      <ListLine
        index={0}
        inline
        itemData={COLUMN_NAMES}
        className={styles.columnNames}
        columnClass={styles.columnNames}
      />
      <AnimatedSeparator delay={0} stiffness={80} damping={19} />
      <div onMouseLeave={() => setHoveredLine(false)}>
        {PLACEHOLDER_DATA.map((entry, i) => {
          return (
            <ListLine
              lineClass={"line"}
              onMouseEnter={() => setHoveredLine(entry.name)}
              key={entry.name + i}
              index={i + 1}
              itemData={entry}
            />
          );
        })}
      </div>
      {hoveredLine && !startExitAnimation && (
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
