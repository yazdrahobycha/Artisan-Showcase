import React, { forwardRef } from "react";
import styles from "./header.module.css";
import UtilityLink from "../UtilityLink";
import { px } from "framer-motion";

function Header({ showSeparator = true, children, endSlot, withBackBtn }, ref) {
  return (
    <header ref={ref} className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logoLetter}>C</div>
        <div
          className={`${styles.listsWrapper} ${
            withBackBtn ? styles.withBackBtn : ""
          }`}
        >
          {children}
          <ul>
            <li className={styles.listItem}>
              <UtilityLink href="./about">About</UtilityLink>
            </li>
            <li className={styles.listItem}>
              <UtilityLink href="./press">Press</UtilityLink>
            </li>
          </ul>
        </div>
        <div className={styles.logoLetter}>G</div>
      </div>
      {showSeparator && <div className={styles.separator} />}
      {endSlot}
    </header>
  );
}

export default forwardRef(Header);
