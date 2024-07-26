import React from "react";
import Portal from "../Portal";
import styles from "./overlaytitle.module.css";

function OverlayTitle({ titleData }) {
  return (
    <Portal>
      <div className={styles.title}>
        <div>{titleData?.name}</div>
        <div>{titleData?.date}</div>
      </div>
    </Portal>
  );
}

export default OverlayTitle;
