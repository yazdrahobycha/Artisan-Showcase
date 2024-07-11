import React, { forwardRef } from "react";
import styles from "./header.module.css";
import Link from "next/link";

function Header({ showSeparator = true, children }, ref) {
  return (
    <header ref={ref} className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logoLetter}>C</div>
        <div className={styles.listsWrapper}>
          {children}
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
