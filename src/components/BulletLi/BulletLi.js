"use client";
import React from "react";
import styles from "./bulletLi.module.css";
function BulletLi({ children, active, onClick, ...delegated }) {
  return (
    <li {...delegated}>
      <button className={styles.wrapper} onClick={onClick}>
        <div className={`${styles.bullet} ${active ? styles.active : ""}`} />
        {children}
      </button>
    </li>
  );
}

export default BulletLi;
