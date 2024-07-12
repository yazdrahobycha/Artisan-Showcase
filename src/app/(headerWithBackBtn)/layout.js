import Header from "@/components/Header";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <Link href="/">Back</Link>
      </Header>
      {children}
    </>
  );
}
