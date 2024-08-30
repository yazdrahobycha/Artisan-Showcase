import styles from "./page.module.css";
import { PLACEHOLDER_DATA } from "@/constans";
import ItemDescription from "@/components/ItemDescription";
import Gallery from "@/components/Gallery";

export default function Home({ params }) {
  const entry = PLACEHOLDER_DATA.find((obj) => obj.name === params.itemName);
  return (
    <main className={styles.main}>
      <ItemDescription entry={entry} />
      <Gallery imagesNum={entry.imagesNum} entryName={entry.name} />
    </main>
  );
}
