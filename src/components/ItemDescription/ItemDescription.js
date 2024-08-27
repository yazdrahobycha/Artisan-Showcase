import React from "react";
import styles from "./itemdescription.module.css";
import ImgContainer from "../ImgContainer";
import AnimatedSeparator from "../AnimatedSeparator";
import OpacityReveal from "../OpacityReveal";
import SlideInOut from "../SlideInOut";

function ItemDescription({ entry }) {
  return (
    <div className={styles.wrapper}>
      {/* Img */}
      <OpacityReveal delay={0.5}>
        <div className={styles.imgWrapper}>
          <ImgContainer
            clsName={styles.imgContainer}
            src={`/img/${entry.name}.png`}
            alt={`Picture of the ${entry.name} furniture`}
            priority
          />
        </div>
      </OpacityReveal>

      {/* Info */}
      <SlideInOut from="bottom">
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
                  {i !== arr.length - 1 && (
                    <AnimatedSeparator cancelAnimation />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </SlideInOut>
    </div>
  );
}

export default ItemDescription;
