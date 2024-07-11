import Header from "@/components/Header";
import Link from "next/link";
import style from '../page.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <Link href="/">Back</Link>
      </Header>
      <main  className={style.main}>{children}</main>
    </>
  );
}
