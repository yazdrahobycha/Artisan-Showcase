"use client";
import React, { useRef, useEffect } from "react";
import styles from "./page.module.css";
import ListLine from "@/components/ListLine";
import { PLACEHOLDER_DATA } from "@/constans";
import ImgContainer from "@/components/ImgContainer";
import ItemDescription from "@/components/ItemDescription";

export default function Home({ params }) {
  const listLineRef = useRef();

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (listLineRef.current) {
        const containerTop = listLineRef.current.getBoundingClientRect().top;
        const headerHeight = containerTop + window.scrollY;
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerHeight}px`
        );
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      document.documentElement.style.removeProperty("--header-height"); // Remove the CSS variable
    };
  }, []);

  const entry = PLACEHOLDER_DATA.find((obj) => obj.name === params.itemName);
  return (
    <main className={styles.main}>
      <ListLine
        ref={listLineRef}
        inline
        startExitAnimation={true}
        itemData={entry}
      />
        <ItemDescription entry={entry}/>
    </main>
    // <div>{props.itemName} product!</d`iv>
  );
}
