import React from "react";
import styles from "./gallery.module.css";
import { range } from "@/helpers/range";
import Image from "next/image";
import RevealOnScroll from "../RevealOnScroll";

function Gallery({ imagesNum, entryName }) {
  return (
    <div className={styles.galleryWrapper}>
      {range(imagesNum).map((_, i) => {
        return (
          <div key={i} className={styles.gridWrapper}>
            <RevealOnScroll className={styles.columnSize}>
              <Image
                style={{ objectFit: "cover", height: "auto", width: "100%" }}
                src={`/img/${entryName}/${i}.jpeg`}
                alt={`Picture of the ${entryName} furniture`}
                width={1000}
                height={1000}
              />
            </RevealOnScroll>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
