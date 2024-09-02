import dynamic from "next/dynamic";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import { COLORS } from "@/constans";
import CustomPointerProvider from "@/components/CustomPointerProvider";
import ExitAnimationProvider from "@/components/ExitAnimationProvider";
const CustomPointer = dynamic(() => import("../components/CustomPointer"), {
  ssr: false,
});

const fkDisplayAlt = localFont({
  src: "../../public/fonts/FKDisplay-Regular.ttf",
});

export const metadata = {
  title: "Artisan Showcase",
  description:
    "Artisan Showcase is a platform for showcasing artisanal furniture.",
};

export default function RootLayout({ children }) {
  return (
    <html style={COLORS} lang="en">
      <body
        style={{ display: "flex", flexDirection: "column" }}
        className={fkDisplayAlt.className}
      >
        <CustomPointerProvider>
          <ExitAnimationProvider>
            {children}
            <Footer />
            <CustomPointer />
          </ExitAnimationProvider>
        </CustomPointerProvider>
      </body>
    </html>
  );
}
