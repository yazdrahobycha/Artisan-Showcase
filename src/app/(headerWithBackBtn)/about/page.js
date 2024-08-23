import { ABOUT_DATA } from "@/constans";
import AuthorPortraits from "@/components/AuthorPortraits";
import AnimatedSeparator from "@/components/AnimatedSeparator";
import React from "react";
import styles from "./page.module.css";
import ExitOpacityWrapper from "@/components/ExitOpacityWrapper";
import SlideInOut from "@/components/SlideInOut";

export default function Home() {
  const aboutDataKeys = Object.keys(ABOUT_DATA.lists);
  const paragraphsDelay = 1.4;

  return (
    <main>
      <ExitOpacityWrapper>
        <AuthorPortraits />
      </ExitOpacityWrapper>
      <AnimatedSeparator stiffness={150} damping={20} />
      <div className={styles.content}>
        <div className={styles.sectionWrapper}>
          <SlideInOut exitTo="bottom" from="bottom" delay={paragraphsDelay}>
            <h2>Bio</h2>
          </SlideInOut>
          <SlideInOut
            exitTo="bottom"
            from="bottom"
            delay={paragraphsDelay + 0.1}
          >
            {ABOUT_DATA.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </SlideInOut>
        </div>
        {aboutDataKeys.map((columnKey, i) => {
          return (
            <SlideInOut
              exitTo="bottom"
              from="bottom"
              delay={paragraphsDelay + 0.1 * (i + 1)}
              key={"section" + i}
              className={styles.sectionWrapper}
            >
              <h2>{columnKey}</h2>
              {ABOUT_DATA.lists[columnKey].map((columnEntry, pI) => {
                return (
                  <React.Fragment key={"paragraph" + pI}>
                    <p className="new-line">{columnEntry}</p>
                    <AnimatedSeparator cancelAnimation />
                  </React.Fragment>
                );
              })}
            </SlideInOut>
          );
        })}
      </div>
    </main>
  );
}
