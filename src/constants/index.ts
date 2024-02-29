import { Laptop2, Moon, Sun, SunMoon } from "lucide-react";

export const NAV_LINKS = [
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const THEMES = [
  {
    label: "Light",
    Icon: Sun,
  },
  {
    label: "Dark",
    Icon: Moon,
  },
  {
    label: "System",
    Icon: Laptop2,
  },
];

export const SKILLS = [
  {
    label: "HTML",
  },
  {
    label: "CSS",
  },
  {
    label: "Tailwind CSS",
  },
  {
    label: "JavaScript",
  },
  {
    label: "TypeScript",
  },
  {
    label: "React JS",
  },
  {
    label: "Next JS",
  },
  {
    label: "Node JS",
  },
  {
    label: "Express JS",
  },
  {
    label: "MongoDB",
  },
];

export const PROJECTS = [
  {
    label: "E-commerce | Next.js | MongoDB | NextAuth",
    description:
      "A sleek e-commerce clone using Next.js, Tailwind CSS, and MongoDB. Secure authentication and a responsive design make for a seamless shopping experience.",
    imagePath: "/images/sastodeal.png",
    url: "https://db-ecommerce-clone.vercel.app/",
  },
  {
    label: "Airbnb clone | Next.JS",
    description:
      "This project is a clone of the popular vacation rental platform, Airbnb, built with modern web technologies.The frontend is powered by Next.js for server-side rendering, tailwind css for styling and zustand for state management.",
    imagePath: "/images/airbnb.png",
    url: "https://db-booking-app.vercel.app/",
  },
  {
    label: "Moviz | React | Redux",
    description:
      "Moviz App provides the information of all the movies including trending, popular, upcoming and many more. You can find any movies in this app. This app uses the TMDB api to fetch the data of moives.",
    imagePath: "/images/moviz.png",
    url: "https://db-movie-app.vercel.app/",
  },
  {
    label: "Quiz app | React",
    description:
      "Quiz App is a general Knowledge and IQ game with a variety of options to play. There are different levels from easy to hard and different categories to choose for a player.",
    imagePath: "/images/quizapp.png",
    url: "https://db-quiz-app.netlify.app/",
  },
];
