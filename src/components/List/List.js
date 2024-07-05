"use client";
import React from "react";
import styles from "./list.module.css";
import { PLACEHOLDER_DATA } from "@/constans";
import ListLine from "../ListLine";
import AnimatedSeparator from "../AnimatedSeparator";

function List() {
  return (
    <div className={styles.listWrapper}>
      <AnimatedSeparator delay={0} stiffness={50} damping={10} />
      {PLACEHOLDER_DATA.map((entry, i) => {
        return <ListLine key={entry.name + i} index={i} itemData={entry} />;
      })}
    </div>
  );
}

export default List;
