import React from "react";
import styles from "./display.module.css";
import { PLACEHOLDER_DATA } from "@/constans";
import UtilityLink from "../UtilityLink";
import Title from "../Title";
import ImgContainer from "../ImgContainer";
import Grid from "../Grid";
import GridItem from "../GridItem";

function Display() {
  return (
    <Grid columnNum={4}>
      {PLACEHOLDER_DATA.map((entry, i) => {
        return (
          <GridItem key={entry.name + i}>
            <div className="line">
              <UtilityLink href={`/${entry.name}`}>
                <div className={`${styles.displayItem}`}>
                  <Title>{entry.name}</Title>
                  <ImgContainer
                    clsName={styles.imgContainer}
                    src={`/img/${entry.name}.png`}
                    alt={`Picture of the ${entry.name} furniture`}
                  />
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
