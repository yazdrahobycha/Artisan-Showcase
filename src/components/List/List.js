"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./list.module.css";
import { PLACEHOLDER_DATA } from "@/constans";
import ListLine from "../ListLine";
import AnimatedSeparator from "../AnimatedSeparator";
import { COLUMN_NAMES } from "@/constans";
const CursorFollow = dynamic(() => import("../CursorFollow"), { ssr: false });
import ImgContainer from "../ImgContainer";

function List() {
  const [hoveredLine, setHoveredLine] = useState(false);
  return (
    <div className={styles.listWrapper}>
      <ListLine
        inline
        itemData={COLUMN_NAMES}
        className={styles.columnNames}
        columnClass={styles.columnNames}
      />
      <AnimatedSeparator delay={0} stiffness={20} damping={8} />
      <div onMouseLeave={() => setHoveredLine(false)}>
        {PLACEHOLDER_DATA.map((entry, i) => {
          return (
            <ListLine
              lineClass={"line"}
              onMouseEnter={() => setHoveredLine(entry.name)}
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
