"use client";
import Image from "next/image";
import List from "@/components/List";
import Display from "@/components/Display";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const [displayType, setDisplayType] = useState("List");
  const [headerIsOnMain, setHeaderIsOnMain] = useState(false);
  const mainRef = useRef();
  const headerRef = useRef();

  useEffect(() => {
    function checkIntersection() {
      const mainTop = mainRef.current.getBoundingClientRect().top;
      const headerBottom = headerRef.current.getBoundingClientRect().bottom;
      const isIntersecting = headerBottom > mainTop;
      if (isIntersecting === headerIsOnMain) {
        return;
      }
      console.log("Something Changed!");
      setHeaderIsOnMain(!headerIsOnMain);
    }

    window.addEventListener("scroll", checkIntersection);
    return () => removeEventListener("scroll", checkIntersection);
  }, [headerIsOnMain]);

  const ItemsTag = displayType === "List" ? List : Display;
  return (
    <>
      <Header
        showSeparator={headerIsOnMain}
        ref={headerRef}
        displayType={displayType}
        setDisplayType={setDisplayType}
      />
      <main ref={mainRef} className={styles.main}>
        <ItemsTag />
      </main>
    </>
  );
}
