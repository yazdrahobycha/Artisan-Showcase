"use client";
import Image from "next/image";
import List from "@/components/List";
import Display from "@/components/Display";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { useRef, useState } from "react";
import useTopBottomIntersection from "@/hooks/useTopBottomIntersection";
import { useDelayedCallback } from "@/hooks/useDelayedCallback";
import ChooseViewList from "@/components/ChooseViewList";

export default function Home() {
  const [displayType, setDisplayType] = useState("List");
  const [startExitAnimation, setStartExitAnimation] = useState(false);
  const mainRef = useRef();
  const headerRef = useRef();
  const isHeaderOnMain = useTopBottomIntersection(mainRef, headerRef, 40);

  const delayedHandleDisplayChange = useDelayedCallback(
    handleDisplayChange,
    1000
  );

  function handleDisplayChange(type) {
    setDisplayType(type);
    setStartExitAnimation(false);
  }
  // const debounced = useDebouncedCallback(handleDisplayChange, [], 2000, 2000);
  const ItemsTag = displayType === "List" ? List : Display;
  return (
    <>
      <Header ref={headerRef} showSeparator={isHeaderOnMain}>
        <ChooseViewList
          displayType={displayType}
          delayedHandleDisplayChange={delayedHandleDisplayChange}
          startExitAnimation={startExitAnimation}
          setStartExitAnimation={setStartExitAnimation}
        />
      </Header>
      <main ref={mainRef} className={styles.main}>
        <ItemsTag startExitAnimation={startExitAnimation} />
      </main>
    </>
  );
}
