import React from "react";
import styles from "./display.module.css";
import Image from "next/image";
import { PLACEHOLDER_DATA } from "@/constans";
import Link from "next/link";
import Title from "../Title";
import AnimatedSeparator from "../AnimatedSeparator";
import ImgContainer from "../ImgContainer";

function Display() {
  return (
    <div className={styles.wrapper}>
      {PLACEHOLDER_DATA.map((entry, i, arr) => {
        return (
          <React.Fragment key={entry.name + i}>
            <AnimatedSeparator
              delay={i === 0 ? 0.5 : 0.08 * i}
              stiffness={30}
              damping={10}
            />
            <div className={styles.displayItem}>
              <Link href={`/${entry.name}`}>
                <Title>{entry.name}</Title>
                <ImgContainer
                  style={{ padding: "23%", marginTop: '20px' }}
                  src={`/img/${entry.name}.png`}
                  alt={`Picture of the ${entry.name} furniture`}
                />
              </Link>
            </div>
            {i === arr.length - 1 && (
              <AnimatedSeparator delay={0.08 * i} stiffness={10} damping={3} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Display;
