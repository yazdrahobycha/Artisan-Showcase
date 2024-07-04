import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
const fkDisplayAlt = localFont({
  src: "../../public/fonts/FKDisplay-RegularAlt.ttf",
});

export const metadata = {
  title: "Misha Makakov",
  description: "Showcase of the Misha's Makarov work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fkDisplayAlt.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
