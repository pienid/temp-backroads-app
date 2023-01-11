import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },

  {
    id: 2,
    href: "#about",
    text: "about",
  },

  {
    id: 3,
    href: "#services",
    text: "services",
  },

  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "http://facebook.com",
    icon: "fab fa-facebook",
  },

  {
    id: 2,
    href: "http://twitter.com",
    icon: "fab fa-twitter",
  },

  {
    id: 3,
    href: "http://squarespace.com",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },

  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },

  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "August 26th, 2020",
    title: "Tibet Adventure",
    info: "",
    location: "China",
    duration: "6 days",
    price: "From $2100",
  },

  {
    id: 2,
    image: tour2,
    date: "July 2nd, 2020",
    title: "Best Of Java",
    info: "",
    location: "Indonesia",
    duration: "11 days",
    price: "From $2100",
  },

  {
    id: 3,
    image: tour3,
    date: "September 23th, 2020",
    title: "Explore Hong Kong",
    info: "",
    location: "Hong Kong",
    duration: "8 days",
    price: "From $2100",
  },

  {
    id: 4,
    image: tour4,
    date: "May 17th, 2020",
    title: "Kenya Highlights",
    info: "",
    location: "Kenya",
    duration: "20 days",
    price: "From $2100",
  },
];
