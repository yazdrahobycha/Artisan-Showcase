import React from "react";
import ImageCarousel from "../ImageCarousel";
import Image from "next/image";
// import imageSize from "image-size";
import { range } from "@/helpers/range";

function AuthorPortraits() {
  return (
    // <ImageCarousel>
    //   {range(5).map((_, i) => {
    //     // var dimensions = imageSize(`public/img/carlos/${i}.jpg`);
    //     return (
    //       <>
    //         <Image
    //           style={{ objectFit: "cover", height: "auto" }}
    //           src={`/img/carlos/${i}.jpg`}
    //           alt="piska"
    //           fill
    //           sizes="100vw"
    //           priority
    //         />
    //       </>
    //     );
    //   })}
    // </ImageCarousel>
  );
}

export default AuthorPortraits;
