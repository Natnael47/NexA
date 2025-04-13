import about_img from "./abt2.webp";
import touristImage from "./Airplane.webp";
import background_image_2 from "./bg2-2.jpeg";
import background_image_3 from "./bg3-transformed (1).jpeg";
import background_image_4 from "./bg4-transformed.jpeg";
import background_image_5 from "./bg5-transformed.jpeg";
import background_image_6 from "./bg6-transformed.jpeg";
import background_image_7 from "./bg7-transformed.jpeg";
import brand_img from "./brand_img-transformed.png";
import C_logo from "./clogo.png";
import computerImage from "./computer.webp";
import {
  default as background_image_1,
  default as constructionImg,
} from "./construction-transformed.webp";
import cross_icon from "./cross_icon.svg";
import elevatorImage from "./elevtor.webp";
import googleMap from "./googlemap.png";
import header_img from "./header_img.png";
import hvacImage from "./hvac.webp";
import left_arrow from "./left_arrow.svg";
import menu_icon from "./menu_icon.svg";
import profile_img_3 from "./photo_Abdu.jpg";
import profile_img_2 from "./photo_Mensur.jpg";
import profile_img_1 from "./photo_Turkyu.jpg";
import project_img_1 from "./project_img_1.jpg";
import project_img_2 from "./project_img_2.jpg";
import project_img_3 from "./project_img_3.jpg";
import project_img_4 from "./project_img_4.jpg";
import project_img_5 from "./project_img_5.jpg";
import project_img_6 from "./project_img_6.jpg";
import logo, {
  default as logo_dark,
  default as nexa_logo,
} from "./ps-nexa-logo-w.png";
import right_arrow from "./right_arrow.svg";
import star_icon from "./star_icon.svg";
import tunnelImage from "./tunnel.webp";

export const assets = {
  nexa_logo,
  background_image_1,
  background_image_2,
  background_image_3,
  background_image_4,
  background_image_5,
  background_image_6,
  background_image_7,
  googleMap,
  about_img,
  C_logo,
  constructionImg,
  elevatorImage,
  tunnelImage,
  hvacImage,
  touristImage,
  computerImage,
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  header_img,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  left_arrow,
  right_arrow,
};

export const projectsData = [
  {
    _id: "120482",
    title: "Skyline Haven",
    price: "$2,50,000",
    location: "California",
    image: project_img_1,
  },
  {
    title: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    image: project_img_2,
  },
  {
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image: project_img_3,
  },
  {
    title: "Central Square",
    price: "$2,50,000",
    location: "Los Angeles",
    image: project_img_4,
  },
  {
    title: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    image: project_img_5,
  },
  {
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image: project_img_6,
  },
];

export const testimonialsData = [
  {
    name: "Oguzhan Oner",
    title: "Civil Engineer",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "as a civil engineer, would specialize in designing and managing infrastructure projects, each contributing uniquely to their respective fields.",
  },
  {
    name: "Mensur Jemal",
    title: "General Manager",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "as a general manager, would be responsible for overseeing the overall operations of a company or department, focusing on strategic planning, budget management, and ensuring efficient day-to-day operations.",
  },
  {
    name: "Abdurahman Ibrahim",
    title: "Vice Manager",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: " as a financial manager, would focus on overseeing financial operations and investments",
  },
];

export const services = [
  {
    name: "Construction",
    path: "/construction",
    image: constructionImg,
    alt: "Portrait of construction",
  },
  {
    name: "Elevators",
    path: "/elevators",
    image: profile_img_3,
  },
  { name: "Tunnels", path: "/tunnels", image: project_img_2 },
  { name: "HVAC", path: "/hvac", image: project_img_3 },
  { name: "Software", path: "/software", image: project_img_4 },
  { name: "Tourism", path: "/tourism", image: project_img_5 },
];
