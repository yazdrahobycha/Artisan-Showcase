"use client";
import React, { useRef, useEffect } from "react";
import styles from "./page.module.css";
import ListLine from "@/components/ListLine";
import { PLACEHOLDER_DATA } from "@/constans";
import Image from "next/image";
import ImgContainer from "@/components/ImgContainer";

export default function Home({ params }) {
  const listLineRef = useRef();

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (listLineRef.current) {
        const containerTop = listLineRef.current.getBoundingClientRect().top;
        const headerHeight = containerTop - window.scrollY;
        console.log(headerHeight);
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
      <ImgContainer
        style={{ padding: "23%" }}
        src={`/img/${entry.name}.png`}
        alt={`Picture of the ${entry.name} furniture`}
      />
      <ImgContainer
        style={{ padding: "23%" }}
        src={`/img/${entry.name}.png`}
        alt={`Picture of the ${entry.name} furniture`}
      />
      <ImgContainer
        style={{ padding: "23%" }}
        src={`/img/${entry.name}.png`}
        alt={`Picture of the ${entry.name} furniture`}
      />
      <ImgContainer
        style={{ padding: "23%" }}
        src={`/img/${entry.name}.png`}
        alt={`Picture of the ${entry.name} furniture`}
      />
      <ImgContainer
        style={{ padding: "23%" }}
        src={`/img/${entry.name}.png`}
        alt={`Picture of the ${entry.name} furniture`}
      />
      <ImgContainer
        style={{ padding: "23%" }}
        src={`/img/${entry.name}.png`}
        alt={`Picture of the ${entry.name} furniture`}
      />
      <ImgContainer
        style={{ padding: "23%" }}
        src={`/img/${entry.name}.png`}
        alt={`Picture of the ${entry.name} furniture`}
      />
    </main>
    // <div>{props.itemName} product!</d`iv>
  );
}
