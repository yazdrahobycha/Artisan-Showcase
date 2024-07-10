import React from "react";
import styles from './title.module.css'

function Title({ children, ...delegated }) {
  return <h2 {...delegated} className={styles.title}>{children}</h2>;
}

export default Title;
