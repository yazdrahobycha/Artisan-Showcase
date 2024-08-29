import styles from "./page.module.css";
import { PLACEHOLDER_DATA } from "@/constans";
import ItemDescription from "@/components/ItemDescription";
import Gallery from "@/components/Gallery";
import { Suspense } from "react";

export default function Home({ params }) {
  const entry = PLACEHOLDER_DATA.find((obj) => obj.name === params.itemName);
  return (
    <main className={styles.main}>
      <Suspense fallback={"Loading!"}>
        <ItemDescription entry={entry} />
        <Gallery imagesNum={entry.imagesNum} entryName={entry.name} />
      </Suspense>
    </main>
  );
}
