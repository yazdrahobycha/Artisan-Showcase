import React from 'react';
import AnimatedSeparator from '../AnimatedSeparator';
import styles from './grid.module.css'

function Grid({children}) {
  return (
    <div className={styles.wrapper}>
      <AnimatedSeparator delay={0.5} stiffness={30} damping={10} />
      <div className={styles.gridWrapper}>
        {children}
      </div>
    </div>
  );
}

export default Grid;
