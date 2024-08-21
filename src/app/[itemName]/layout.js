import Header from "@/components/Header";
import Link from "next/link";
import ListLine from "@/components/ListLine";
import { PLACEHOLDER_DATA } from "@/constans";
import BackBtn from "@/components/BackBtn";

export default function Layout({ children, params }) {
  const entry = PLACEHOLDER_DATA.find((obj) => obj.name === params.itemName);
  return (
    <>
      <Header
        withBackBtn
        endSlot={<ListLine inline itemData={entry} />}
      >
        <BackBtn />
      </Header>
      {children}
    </>
  );
}
