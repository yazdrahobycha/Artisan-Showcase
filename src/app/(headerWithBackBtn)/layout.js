import Header from "@/components/Header";
import BackBtn from "@/components/BackBtn";

export default function Layout({ children }) {
  return (
    <>
      <Header withBackBtn>
        <BackBtn />
      </Header>
      {children}
    </>
  );
}
