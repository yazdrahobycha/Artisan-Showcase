import React from 'react';
import styles from './imgcontainer.module.css'
import Image from 'next/image';

function ImgContainer({style, ...delegated}) {
  return (
    <div style={style} className={styles.wrapper}>
      <Image
        {...delegated}
        // src={`/img/${entry.name}.png`}
        // alt={`Picture of the ${entry.name} furniture`}
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export default ImgContainer;
