import Header from "@/components/Header";
import ListLine from "@/components/ListLine";
import { PLACEHOLDER_DATA } from "@/constans";
import BackBtn from "@/components/BackBtn";
import SlideInOut from "@/components/SlideInOut";

export default function Layout({ children, params }) {
  const entry = PLACEHOLDER_DATA.find((obj) => obj.name === params.itemName);
  return (
    <>
      <Header
        withBackBtn
        endSlot={
          <SlideInOut style={{ position: "relative", zIndex: -1 }}>
            <ListLine inline itemData={entry} />
          </SlideInOut>
        }
      >
        <BackBtn />
      </Header>
      {children}
    </>
  );
}
