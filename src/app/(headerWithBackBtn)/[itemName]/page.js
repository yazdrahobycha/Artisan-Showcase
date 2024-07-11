"use client";
// import styles from "./page.module.css";


export default function Home() {
  const [displayType, setDisplayType] = useState("List");
//   const [startExitAnimation, setStartExitAnimation] = useState(false);

//   const delayedHandleDisplayChange = useDelayedCallback(
//     handleDisplayChange,
//     1000
// );

//   function handleDisplayChange(type) {
//     setDisplayType(type);
//     setStartExitAnimation(false);
//   }
  // const debounced = useDebouncedCallback(handleDisplayChange, [], 2000, 2000);
//   const ItemsTag = displayType === "List" ? List : Display;
  return (
    <>
      <Header
        showSeparator={isHeaderOnMain}
        ref={headerRef}
        displayType={displayType}
        delayedHandleDisplayChange={delayedHandleDisplayChange}
        startExitAnimation={startExitAnimation}
        setStartExitAnimation={setStartExitAnimation}
      />
      <main ref={mainRef} className={styles.main}>
        <ItemsTag startExitAnimation={startExitAnimation} />
      </main>
    </>
  );
}
