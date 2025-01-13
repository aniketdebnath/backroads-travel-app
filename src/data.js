import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";
import img5 from "./images/tour-5.jpeg";
import img6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const serviceLinks = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "We offer affordable travel packages without compromising on quality, ensuring that your adventures stay within budget.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Explore scenic trails and breathtaking landscapes with our guided hiking tours, perfect for adventure enthusiasts.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Enjoy luxurious accommodations and exceptional service on all our tours, making your trip truly unforgettable.",
  },
];

export const tourLinks = [
  {
    id: 1,
    image: img1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Embark on an incredible journey through the majestic mountains of Tibet, exploring ancient monasteries and serene landscapes.",
    location: "china",
    days: "6",
    price: "2100",
  },
  {
    id: 2,
    image: img2,
    date: "october 1th, 2020",
    title: "Best of Java",
    text: "Discover the rich culture and breathtaking scenery of Java, from lush green landscapes to vibrant local markets.",
    location: "indonesia",
    days: "11",
    price: "1400",
  },
  {
    id: 3,
    image: img3,
    date: "september 15th, 2020",
    title: "Explore Hong Kong",
    text: "Dive into the vibrant streets of Hong Kong, where modern cityscapes meet traditional temples and bustling markets.",
    location: "hong kong",
    days: "8",
    price: "5000",
  },
  {
    id: 4,
    image: img4,
    date: "december 5th, 2019",
    title: "Kenya Highlights",
    text: "Experience the magic of Kenya with a safari adventure. Witness wildlife in their natural habitat and explore beautiful savannahs.",
    location: "kenya",
    days: "20",
    price: "3300",
  },
  {
    id: 5,
    image: img5,
    date: "july 10th, 2021",
    title: "Safari Adventure",
    text: "Immerse yourself in the wonders of the African wilderness. Watch zebras roam free and connect with nature like never before.",
    location: "south africa",
    days: "10",
    price: "4500",
  },
  {
    id: 6,
    image: img6,
    date: "november 20th, 2022",
    title: "Taj Mahal Tour",
    text: "Witness the timeless beauty of the Taj Mahal, one of the world’s greatest architectural marvels and a symbol of love.",
    location: "india",
    days: "5",
    price: "2500",
  },
];
