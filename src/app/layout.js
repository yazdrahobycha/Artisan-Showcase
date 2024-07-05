import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import { COLORS } from "@/constans";
const fkDisplayAlt = localFont({
  src: "../../public/fonts/FKDisplay-Regular.ttf",
});

export const metadata = {
  title: "Misha Makakov",
  description: "Showcase of the Misha's Makarov work",
};

export default function RootLayout({ children }) {
  return (
    <html style={COLORS} lang="en">
      <body className={fkDisplayAlt.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
