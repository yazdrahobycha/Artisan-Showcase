import React from "react";
import styles from "./itemdescription.module.css";
import ImgContainer from "../ImgContainer";
import AnimatedSeparator from "../AnimatedSeparator";

function ItemDescription({ entry }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <ImgContainer
          style={{ padding: "45%" }}
          src={`/img/${entry.name}.png`}
          alt={`Picture of the ${entry.name} furniture`}
          priority
        />
      </div>
      <div className={styles.infoWrapper}>
        <h3>Info</h3>
        {entry.text.map((textPart, i) => {
          return <p key={"textPart" + i}>{textPart}</p>;
        })}
        <h3>Measures</h3>
        <ul className={styles.listWrapper}>
          {entry.measures.map((measure, i, arr) => {
            return (
              <li key={"measurePart" + i} className={styles.listItem}>
                <p>{measure}</p>
                {i !== arr.length - 1 && <AnimatedSeparator cancelAnimation />}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ItemDescription;
