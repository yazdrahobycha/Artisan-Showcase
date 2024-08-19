"use client";
import List from "@/components/List";
import Display from "@/components/Display";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { useContext, useRef, useState } from "react";
import useTopBottomIntersection from "@/hooks/useTopBottomIntersection";
import { useDelayedCallback } from "@/hooks/useDelayedCallback";
import ChooseViewList from "@/components/ChooseViewList";
import { DELAY_EXIT } from "@/constans";
import { ExitAnimationContext } from "@/components/ExitAnimationProvider";

export default function Home() {
  const [displayType, setDisplayType] = useState("List");
  const { startExitAnimation, setStartExitAnimation } =
    useContext(ExitAnimationContext);
  const mainRef = useRef();
  const headerRef = useRef();
  const isHeaderOnMain = useTopBottomIntersection(mainRef, headerRef, 0);

  const delayedHandleDisplayChange = useDelayedCallback(
    handleDisplayChange,
    DELAY_EXIT
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
        <ItemsTag />
      </main>
    </>
  );
}
