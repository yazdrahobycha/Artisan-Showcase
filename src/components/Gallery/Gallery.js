import React from "react";
import styles from "./gallery.module.css";
import { range } from "@/helpers/range";
import ImgContainer from "../ImgContainer";
import imageSize from "image-size";
import Image from "next/image";
const placeholderSizes = ["1 / 10", "4 / 10", "1 / 7", "4 / 13"];

function Gallery({ imagesNum, entryName }) {
  return (
    <div className={styles.galleryWrapper}>
      {range(imagesNum).map((_, i) => {
        var dimensions = imageSize(`public/img/${entryName}/${i}.png`);
        return (
          <div className={styles.gridWrapper}>
            <div
              style={{ gridColumn: placeholderSizes[i], marginBottom: "21vw" }}
            >
              <Image
                style={{ objectFit: "cover", height: "auto" }}
                src={`/img/${entryName}/${i}.png`}
                alt="piska"
                width={dimensions.width}
                height={dimensions.height}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

<ImgContainer />;
export default Gallery;
