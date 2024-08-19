import { ABOUT_DATA } from "@/constans";
import AuthorPortraits from "@/components/AuthorPortraits";
import AnimatedSeparator from "@/components/AnimatedSeparator";
import React from "react";
import styles from "./page.module.css";

export default function Home() {
  const aboutDataKeys = Object.keys(ABOUT_DATA.lists);

  return (
    <main>
      <AuthorPortraits />
      <AnimatedSeparator cancelAnimation />
      <div className={styles.content}>
        <div className={styles.sectionWrapper}>
          <h2>Bio</h2>
          {ABOUT_DATA.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        {aboutDataKeys.map((columnKey, i) => {
          return (
            <div className={styles.sectionWrapper} key={"section" + i}>
              <h2>{columnKey}</h2>
              {ABOUT_DATA.lists[columnKey].map((columnEntry, pI) => {
                return (
                  <React.Fragment key={"paragraph" + pI}>
                    <p className="new-line">{columnEntry}</p>
                    <AnimatedSeparator cancelAnimation />
                  </React.Fragment>
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
}
