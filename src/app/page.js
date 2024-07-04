'use client'
import Image from "next/image";
import List from "@/components/List";
import Display from "@/components/Display";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [displayType, setDisplayType] = useState("List");
  const ItemsTag = displayType === 'List' ? List : Display
  return (
    <>
      <Header displayType={displayType} setDisplayType={setDisplayType} />
      <main className={styles.main}><ItemsTag/></main>
    </>
  );
}
