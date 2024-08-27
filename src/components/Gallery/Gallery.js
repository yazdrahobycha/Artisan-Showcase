import React from "react";
import styles from "./gallery.module.css";
import { range } from "@/helpers/range";
import ImgContainer from "../ImgContainer";
import imageSize from "image-size";
import Image from "next/image";

function Gallery({ imagesNum, entryName }) {
  return (
    <div className={styles.galleryWrapper}>
      {range(imagesNum).map((_, i) => {
        var dimensions = imageSize(`public/img/${entryName}/${i}.png`);
        return (
          <div key={i} className={styles.gridWrapper}>
            <div className={styles.columnSize}>
              <Image
                style={{ objectFit: "cover", height: "auto" }}
                src={`/img/${entryName}/${i}.png`}
                alt={`Picture of the ${entryName} furniture`}
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
