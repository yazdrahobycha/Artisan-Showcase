"use client";
import Image from "next/image";
import List from "@/components/List";
import Display from "@/components/Display";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { useRef, useState } from "react";
import useTopBottomIntersection from "@/hooks/useTopBottomIntersection";

export default function Home() {
  const [displayType, setDisplayType] = useState("List");
  const mainRef = useRef();
  const headerRef = useRef();
  const isHeaderOnMain = useTopBottomIntersection(mainRef, headerRef, 40);

  const ItemsTag = displayType === "List" ? List : Display;
  return (
    <>
      <Header
        showSeparator={isHeaderOnMain}
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
