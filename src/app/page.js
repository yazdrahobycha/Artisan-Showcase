"use client";
import Image from "next/image";
import List from "@/components/List";
import Display from "@/components/Display";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { useRef, useState } from "react";
import useTopBottomIntersection from "@/hooks/useTopBottomIntersection";
import { useDelayedCallback } from "@/hooks/useDelayedCallback";
import BulletLi from "@/components/BulletLi";

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
      {/* <Header
        showSeparator={isHeaderOnMain}
        ref={headerRef}
        displayType={displayType}
        delayedHandleDisplayChange={delayedHandleDisplayChange}
        startExitAnimation={startExitAnimation}
        setStartExitAnimation={setStartExitAnimation}
      /> */}
      <Header ref={headerRef} showSeparator={isHeaderOnMain}>
        <ul>
          {["List", "Display"].map((itemsType, i) => (
            <BulletLi
              className={styles.listItem}
              onClick={() => {
                setStartExitAnimation(true);
                if (!startExitAnimation) {
                  delayedHandleDisplayChange(itemsType);
                }
              }}
              active={displayType === itemsType}
              key={itemsType + i}
            >
              {itemsType}
            </BulletLi>
          ))}
        </ul>
      </Header>
      <main ref={mainRef} className={styles.main}>
        <ItemsTag startExitAnimation={startExitAnimation} />
      </main>
    </>
  );
}
