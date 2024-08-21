"use client";
import List from "@/components/List";
import Display from "@/components/Display";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { useContext, useRef, useState } from "react";
import useTopBottomIntersection from "@/hooks/useTopBottomIntersection";
import ChooseViewList from "@/components/ChooseViewList";
import { DELAY_EXIT } from "@/constans";
import { ExitAnimationContext } from "@/components/ExitAnimationProvider";
import sleep from "@/helpers/sleep";

export default function Home() {
  const [displayType, setDisplayType] = useState("List");
  const { startExitAnimation, setStartExitAnimation } =
    useContext(ExitAnimationContext);
  const mainRef = useRef();
  const headerRef = useRef();
  const isHeaderOnMain = useTopBottomIntersection(mainRef, headerRef, 0);

  const handleDisplayChange = async (type) => {
    setStartExitAnimation(true);
    await sleep(DELAY_EXIT);
    setDisplayType(type);
    // await sleep(300);
    setStartExitAnimation(false);
  };

  // const debounced = useDebouncedCallback(handleDisplayChange, [], 2000, 2000);
  const ItemsTag = displayType === "List" ? List : Display;
  return (
    <>
      <Header ref={headerRef} showSeparator={isHeaderOnMain}>
        <ChooseViewList
          displayType={displayType}
          delayedHandleDisplayChange={handleDisplayChange}
          startExitAnimation={startExitAnimation}
        />
      </Header>
      <main ref={mainRef} className={styles.main}>
        <ItemsTag />
      </main>
    </>
  );
}
