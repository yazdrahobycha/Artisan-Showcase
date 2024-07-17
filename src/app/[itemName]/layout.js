import Header from "@/components/Header";
import Link from "next/link";
import ListLine from "@/components/ListLine";
import { PLACEHOLDER_DATA } from "@/constans";

export default function Layout({ children, params }) {
  const entry = PLACEHOLDER_DATA.find((obj) => obj.name === params.itemName);
  return (
    <>
      <Header
        endSlot={<ListLine inline startExitAnimation={true} itemData={entry} />}
      >
        <Link href="/">Back</Link>
      </Header>
      {children}
    </>
  );
}
