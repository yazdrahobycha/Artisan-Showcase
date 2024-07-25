"use client";
import React from "react";
import styles from "./bulletLi.module.css";
import UtilityLink from "../UtilityLink";

function BulletLi({ children, active, onClick, ...delegated }) {
  return (
    <li {...delegated}>
      <UtilityLink asButton className={styles.wrapper} onClick={onClick}>
        <div className={`${styles.bullet} ${active ? styles.active : ""}`} />
        {children}
      </UtilityLink>
    </li>
  );
}

export default BulletLi;
