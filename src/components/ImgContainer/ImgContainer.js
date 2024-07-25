import React from 'react';
import styles from './imgcontainer.module.css'
import Image from 'next/image';

function ImgContainer({style, size, ...delegated}) {
  return (
    <div style={style} className={styles.wrapper}>
      <Image
        {...delegated}
        // src={`/img/${entry.name}.png`}
        alt={`Picture of the furniture`}
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

export default ImgContainer;
