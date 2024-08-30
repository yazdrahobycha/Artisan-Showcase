import imageSize from "image-size";

// images for press data
import wallpaperImg from "../public/img/press/wallpaper.jpg";
import damnImg from "../public/img/press/damn.jpg";
import iconImg from "../public/img/press/icon.jpg";
import interiorDesignImg from "../public/img/press/interior-design.jpg";
import minimalissimoImg from "../public/img/press/minimalissimo.jpg";
import neueImg from "../public/img/press/neue.jpg";
import sightUnseenImg from "../public/img/press/sight-unseen.jpg";
import styleparkImg from "../public/img/press/stylepark.png";
import wallpaperNovImg from "../public/img/press/wallpaper-nov.jpg";
import weltImg from "../public/img/press/welt.png";

export const BLOG_TITLE = "Artisan ShowCase";

export const COLORS = {
  "--color-primary": "#F9EBDE",
  "--color-secondary": "#815854",
  "--color-neutral": "#3D3A35",
  "--color-secondary-transparent": "rgba(129, 88, 84, 0.2)",
};

export const PLACEHOLDER_DATA = [
  {
    name: "Velo",
    client: "Artisan",
    year: "2024",
    category: "Seating",
    text: [
      "Introducing Velo, an epitome of refined design, technical mastery, and aesthetic allure. Drawing inspiration from the sleek curvature of high-performance racing bicycle handlebars, Velo seamlessly integrates this motif into its distinctive features, with gracefully bent handles at the forefront celebrating the fusion of elegance and functionality from the world of cycling.",
      "The name “Velo” pays homage to the velodrome, a poignant nod to the initial inspiration that sparked the creation of this avant-garde piece.",
      "Beyond being a mere furniture item, Velo stands as a living testament to Artisan’s unwavering commitment to artistry and meticulous craftsmanship. The fusion of clean, sleek lines elegantly marries traditional artisanship with a contemporary aesthetic, transforming Velo into more than just a functional piece—it’s a visual masterpiece.",
      "The evolution of Velo spans over five years, a testament to the dedication invested in perfecting its intricate structure. This extended development process underscores our commitment to delivering a chair that not only meets but surpasses the highest standards of design excellence. Experience the culmination of craftsmanship and innovation with Velo.",
    ],
    measures: ["Height: 56 cm", "Width: 54 cm", "Depth: 72 cm"],
    imagesNum: 4,
  },
  {
    name: "Treviso",
    client: "Kendo",
    year: "2023",
    category: "Table",
    text: [
      "The Treviso tables are grounded in architectural principles, with their inception rooted in the utilization of esteemed materials such as travertine marble. Drawing inspiration from the intricacies and proportions of classical Italian architecture, these tables strive to accentuate the inherent purity of the chosen material. The aesthetic manifestation mirrors that of a sculptural masterpiece, incorporating oval columns as foundational elements and thinner tabletops that engender a captivating interplay of volumes.",
      "This collection encompasses two distinct models, constituting a duo of varying heights. The low table boasts a top with an artfully asymmetrical composition, while its base exudes a robust and voluminous presence, infusing dynamism into the ensemble. Conversely, the high table features a circular top and an angled base, harmoniously employing the same module as its counterpart, thus fostering visual and stylistic coherence throughout the collection.",
    ],
    measures: [
      "Asymmetrical Coffee Table: W128 D56 H36 cm",
      "Rounded Coffee Table: W100 D100 H40 cm",
      "Side Table: W54 D54 H46 cm",
    ],
    imagesNum: 9,
  },
  {
    name: "Sirocco",
    client: "Please Wait to be seated",
    year: "2023",
    category: "Seating",
    text: [
      "Sirocco chair draws inspiration from the commanding presence of the desert wind, mirroring the elegance and aerodynamics found in sleek sailing boats. Just as a boat cuts through the water with grace, our creation showcases sculpted forms and sharp angles that exude a sense of dynamic movement. The wind’s erosive nature has sculpted every surface, leaving behind smooth lines as if shaped by the forces of nature itself.",
      "The chair’s refined volumes evoke a perfect balance and harmony, while seamless transitions between sections mirror the fluidity and agility of sailing on the open sea. Embracing the spirit of both the desert wind and sailing boats, the Sirocco chair captures a timeless essence of strength, grace, and timeless design.",
      "Sirocco was designed together with Alejandro Ortega, as part of our former studio OrtegaGuijarro.",
    ],
    measures: ["Width: 58,5 cm", "Depth: 52 cm", "High: 76,5 cm"],
    imagesNum: 9,
  },
  {
    name: "Udiya",
    client: "Kavehome",
    year: "2022",
    category: "Light",
    text: [
      "The Udiya portable lamp draws inspiration from the elegant Bell shape and its dynamic mobility. Featuring a practical top handle, it offers effortless portability for both indoor and outdoor settings, complemented by a faux leather handle for easy carrying.",
      "Equipped with a warm LED light source, Udiya ensures a welcoming ambiance, and its rechargeable functionality, complete with a USB cable, ensures continuous illumination. Users have the flexibility to select from three distinct light intensities to suit their specific lighting preferences.",
      "Udiya is versatile and suitable for indoor and covered outdoor spaces, making it a versatile lighting solution. It is designed to be child-friendly and boasts an appealing aesthetic that seamlessly integrates into any environment.",
    ],
    measures: ["W: 20cm", "D: 20cm", "H: 24cm"],
    imagesNum: 5,
  },
  {
    name: "Villa",
    client: "Kendo",
    year: "2022",
    category: "Table",
    text: [
      "The Villa collection generates an attractive visual game, transmitting an elegance that raises the level of any space. The Villa accent tables table were born from the search for an aesthetic balance through forms, achieving a particular beauty.",
      "The essence of the Villa side tables is their metallic structure in thermo-lacquered black lacquer, presenting strips that intertwine between their legs giving the sensation of wanting to embrace each one of them. It offers the possibility of a top in tempered smoked glass or tempered transparent glass to better adapt to each space.",
      "The Villa tables were designed together with Alejandro Ortega as part of our former studio OrtegaGuijarro.",
    ],
    measures: [
      "Coffee Table 100: W100 D100 H38 cm",
      "Coffee Table 70: W70 D70 H45 cm",
      "Side Table 55: W55 D55 H50 cm",
      "Side Table 45: W45 D45 H55 cm",
    ],
    imagesNum: 5,
  },
];

export const ABOUT_DATA = {
  bio: [
    "Carlos Guijarro (born 1989 in Alicante, Spain) is an experienced Industrial Designer currently based in Berlin. His design ethos is driven by a commitment to experimentation and purity,  drawing inspiration from the avant-garde movements that flourished throughout 20th-century Russia and northern Europe. At the core of Carlos Guijarro’s creative process lies his devotion to noble and refined materials. His work reflects a skillful melding of formal geometrics, seamlessly harmonizing traditional craftsmanship with cutting-edge digital techniques.",
    "Carlos Guijarro’s professional journey began with a foundation in Industrial Design at Elisava School in Barcelona, where his passion for design took root. This pursuit led him to the renowned Domus Academy in Milan, where he was awarded a coveted scholarship for advanced studies in Spatial Design. It was here that Carlos Guijarro honed his craft, graduated with distinction, and prepared himself for an independent design career, which he embarked on in 2015. In 2017, he co-founded the esteemed OrtegaGuijarro Studio alongside Alejandro Ortega, maintaining his solo creative endeavors alongside this collaborative venture.",
    "Drawing from this rich tapestry of experiences and successful collaborations, he has ventured into a new chapter in 2022 by founding his own design studio. Here, he passionately explores the interplay between digital and physical spaces, continually pushing the boundaries of design at this fascinating interface. Carlos Guijarro’s unwavering commitment to design integrity and his eagerness to seek new creative collaborations shape his ever-evolving journey in the realm of design.",
  ],
  lists: {
    Clients: [
      "Classicon",
      "Rolf-Benz Freistil",
      "Please Wait To Be Seated",
      "Artisan",
      "Kendo Mobiliario",
      "Boila",
      "ISI Mar",
      "KaveHome",
      "Lulu and Georgia",
      "Nyova",
    ],
    Shows: [
      "Imm \nCologne (DEU)",
      "3 Days of Design \nCopenhagen (DNK)",
      "Casa Decor \n Madrid (ESP)",
      "Salone del Mobile \nMilan (ITA)",
      "Fuori Salone \nMilan (ITA)",
      "Maison & Objet \nParis (FRA)",
      "IFFS \nSingapore (SGP)",
    ],
    Awards: [
      "Sol Side Table \nStylepark Selected",
      "Share Eat Competition \nTriennale di Milano",
      "Cafeteria Innovation Competition \nDomus Academy Milan",
      "Form Lighting \nNYOVA Design Award",
    ],
  },
};

export const PRESS_DATA = [
  {
    name: "Wallpaper Magazine",
    date: "Jun 2022",
    link: "https://www.wallpaper.com/design/june-2022-issue-read-more",
    image: wallpaperImg,
  },
  {
    name: "Neue Luzerner News Paper",
    date: "Mar 2022",
    link: "https://www.youtube.com/watch?v=Y-Ckib3EZJI&ab_channel=ClassiConDesign",
    image: neueImg,
  },
  {
    name: "Sight Unseen Year Book",
    date: "2021",
    link: "https://www.sightunseen.com/2022/02/sight-unseen-yearbook-2021/",
    image: sightUnseenImg,
  },
  {
    name: "Interior Design",
    date: "Dec 2021",
    link: "https://interiordesign.net/products/ortegaguijarro-principals-explore-the-origins-of-the-sol-side-table-they-created-for-classicon/",
    image: interiorDesignImg,
  },
  {
    name: "Wallpaper Magazine",
    date: "Nov 2021",
    link: "https://pocketmags.com/us/wallpaper-magazine/nov-2021",
    image: wallpaperNovImg,
  },
  {
    name: "Minimalissimo.com",
    date: "Nov 2021",
    link: "https://minimalissimo.com/articles/sol-side-table",
    image: minimalissimoImg,
  },
  {
    name: "Icon Magazine \nGermany",
    date: "Oct 2021",
    link: "https://img.welt.de/bin/ICON-234360494.pdf",
    image: iconImg,
  },
  {
    name: "Damn Magazine",
    date: "Spring 2021",
    link: "https://www.damnmagazine.net/",
    image: damnImg,
  },
  {
    name: "Welt am Sonntag",
    date: "Jan 2021",
    link: "/",
    image: weltImg,
  },
  {
    name: "Stylepark",
    date: "March 2022",
    link: "https://www.alexortegastudio.com/2022/03/16/stylepark-selected-award2021/",
    image: styleparkImg,
  },
];

export const COLUMN_NAMES = {
  title: "",
  category: "Category",
  year: "Year",
  client: "Client",
};

export const DELAY_EXIT = 1500;

export const GRID_SIZES = {
  mobile: [
    "1 / 13",
    "4 / 10",
    "1 / 17",
    "4 / 13",
    "3 / 11",
    "1 / 10",
    "3 / 13",
    "1 / 7",
    "4 / 13",
  ],
  desktop: [
    "1 / 11",
    "6 / 10",
    "1 / 6",
    "9 / 13",
    "5 / 10",
    "1 / 7",
    "6 / 13",
    "1 / 6",
    "9 /13",
  ],
};
