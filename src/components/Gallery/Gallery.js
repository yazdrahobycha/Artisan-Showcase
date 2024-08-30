import React from "react";
import styles from "./gallery.module.css";
import { range } from "@/helpers/range";
import ImgContainer from "../ImgContainer";
import imageSize from "image-size";
import Image from "next/image";
import RevealOnScroll from "../RevealOnScroll";
import { GALLERY_DIMENSIONS } from "@/constans";

function Gallery({ imagesNum, entryName }) {
  return (
    <div className={styles.galleryWrapper}>
      {range(imagesNum).map((_, i) => {
        // var dimensions = imageSize(`public/img/${entryName}/${i}.jpeg`);
        return (
          <div key={i} className={styles.gridWrapper}>
            <RevealOnScroll className={styles.columnSize}>
              <Image
                style={{ objectFit: "cover", height: "auto" }}
                src={`/img/${entryName}/${i}.jpeg`}
                alt={`Picture of the ${entryName} furniture`}
                width={GALLERY_DIMENSIONS.width}
                height={GALLERY_DIMENSIONS.height}
              />
            </RevealOnScroll>
          </div>
        );
      })}
    </div>
  );
}

<ImgContainer />;
export default Gallery;
