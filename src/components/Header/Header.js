"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import BulletLi from "../BulletLi";

function Header({ setDisplayType, displayType }) {
  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.logoLetter}>C</div>
        <div className={styles.listsWrapper}>
          <ul>
            {["List", "Display"].map((itemsType) => (
              <BulletLi
                className={styles.listItem}
                onClick={() => setDisplayType(itemsType)}
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
    </header>
  );
}

export default Header;
