import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import tezer from "../assets/tezer.png";
import trx from "../assets/trx.png";
import usdt from "../assets/usdt.png";

export const data = [
  {
    id: 1,
    img: img1,
    title: "Withdrawal status",
    info: "Connected cryptocurrencies",
    position: { tezer, trx, usdt },
  },
  {
    id: 2,
    img: img2,
    title: "Buy items",
    info: "Time from the last purchase",
    position: { text: "25 sec", color: "#fff" },
  },
  {
    id: 3,
    img: img3,
    title: "Waxpeer pay bots",
    info: "The number of avaliable bots on Wxpeer pay",
    position: { text: "259 bots", color: "#fff" },
  },
  {
    id: 4,
    img: img4,
    title: "Waxpeer pay",
    info: "The last successful trade",
    position: { text: "10 sec", color: "#fff" },
  },
  {
    id: 5,
    img: img5,
    title: "Availability of a site",
    info: "The availability of the home page of the site",
    position: { text: "available", color: "#20CE70" },
  },
  {
    id: 6,
    img: img6,
    title: "Server status",
    info: "The status of the website servers",
    position: { text: "unstable", color: "#EC7A2A" },
  },
  {
    id: 7,
    img: img7,
    title: "Steam Web API",
    info: "Last check June 3, 2022 02:50:16",
    position: { text: "stable", color: "#20CE70" },
  },
  {
    id: 8,
    img: img8,
    title: "API response",
    info: "Last request 10 seconds ago",
    position: { text: "2.856 ms", color: "#fff" },
  },
  {
    id: 9,
    img: img9,
    title: "Last trade",
    info: "The last trade was created 5s ago",
    position: { text: "canceled", color: "#EF5858" },
  },
  {
    id: 10,
    img: img10,
    title: "Login",
    info: "Shows either your login is working or not",
    position: { text: "active", color: "#20CE70" },
  },
];
