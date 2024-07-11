"use client";
import React, { forwardRef, useEffect, useState, useRef } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import BulletLi from "../BulletLi";

function Header(
  {
    displayType,
    showSeparator = true,
    setStartExitAnimation,
    delayedHandleDisplayChange,
    startExitAnimation,
  },
  ref
) {
  return (
    <header ref={ref} className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logoLetter}>C</div>
        <div className={styles.listsWrapper}>
          <ul>
            {["List", "Display"].map((itemsType) => (
              <BulletLi
                className={styles.listItem}
                onClick={() => {
                  setStartExitAnimation(true);
                  if (!startExitAnimation) {
                    delayedHandleDisplayChange(itemsType);
                  }
                }}
                active={displayType === itemsType}
                key={itemsType}
              >
                {itemsType}
              </BulletLi>
            ))}
          </ul>
          <ul>
            <li className={styles.listItem}>
              <Link href="./">About</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="./Press">Press</Link>
            </li>
          </ul>
        </div>
        <div className={styles.logoLetter}>G</div>
      </div>
      {showSeparator && <div className={styles.separator} />}
    </header>
  );
}

export default forwardRef(Header);
