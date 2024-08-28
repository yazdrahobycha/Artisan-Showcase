import React from "react";
import styles from "./display.module.css";
import { DELAY_EXIT, PLACEHOLDER_DATA } from "@/constans";
import UtilityLink from "../UtilityLink";
import Title from "../Title";
import ImgContainer from "../ImgContainer";
import Grid from "../Grid";
import GridItem from "../GridItem";
import SlideInOut from "../SlideInOut";
import OpacityReveal from "../OpacityReveal";

function Display() {
  return (
    <Grid columnNum={4}>
      {PLACEHOLDER_DATA.map((entry, i) => {
        return (
          <GridItem key={entry.name + i}>
            <div>
              <UtilityLink delayTime={DELAY_EXIT} href={`/${entry.name}`}>
                <div className={`${styles.displayItem}`}>
                  <SlideInOut delay={0.1 * i}>
                    <Title>{entry.name}</Title>
                  </SlideInOut>
                  <OpacityReveal delay={0.1 * i}>
                    <ImgContainer
                      clsName={styles.imgContainer}
                      src={`/img/${entry.name}.png`}
                      alt={`Picture of the ${entry.name} furniture`}
                    />
                  </OpacityReveal>
                </div>
              </UtilityLink>
            </div>
          </GridItem>
        );
      })}
    </Grid>
  );
}

export default Display;
