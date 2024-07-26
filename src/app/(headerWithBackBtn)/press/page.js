import React from "react";
import styles from "./page.module.css";
import PressDisplay from "@/components/PressDisplay";

export default function Home() {
  return (
    <main>
      <div className={styles.wrapper}>
        <PressDisplay />
      </div>
    </main>
  );
}
