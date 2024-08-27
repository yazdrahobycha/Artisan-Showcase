import React, { forwardRef } from "react";
import styles from "./header.module.css";
import UtilityLink from "../UtilityLink";
import AnimatedNickname from "../AnimatedNickname";
import { DELAY_EXIT } from "@/constans";
import CheckPathSeparator from "../CheckPathSeparator";

function Header({ showSeparator = true, children, endSlot, withBackBtn }, ref) {
  return (
    <header ref={ref} className={styles.header}>
      <div className={styles.wrapper}>
        <AnimatedNickname>
          <div
            className={`${styles.listsWrapper} ${
              withBackBtn ? styles.withBackBtn : ""
            }`}
          >
            {children}
            <ul>
              <li className={styles.listItem}>
                <UtilityLink delayTime={DELAY_EXIT} href="./about">
                  About
                </UtilityLink>
              </li>
              <li className={styles.listItem}>
                <UtilityLink delayTime={DELAY_EXIT} href="./press">
                  Press
                </UtilityLink>
              </li>
            </ul>
          </div>
        </AnimatedNickname>
      </div>
      {showSeparator && <CheckPathSeparator stiffness={150} damping={20} />}
      {endSlot}
    </header>
  );
}

export default forwardRef(Header);
