import styles from "./page.module.css";
import StickyListLine from "@/components/StickyListLine";
import { PLACEHOLDER_DATA } from "@/constans";
import ItemDescription from "@/components/ItemDescription";

export default function Home({ params }) {
  const entry = PLACEHOLDER_DATA.find((obj) => obj.name === params.itemName);
  return (
    <main className={styles.main}>
      <StickyListLine entry={entry} />
      <ItemDescription entry={entry} />
    </main>
    // <div>{props.itemName} product!</d`iv>
  );
}
