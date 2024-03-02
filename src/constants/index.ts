import {
  Laptop2,
  Moon,
  Sun,
  Home,
  Settings,
  CircleUserRound,
  FolderDot,
  Contact,
  LayoutDashboard,
} from "lucide-react";

import {
  HTML5,
  CSS3,
  TailwindCSS,
  JavaScript,
  TypeScript,
  ReactJS,
  NextJS,
  NodeJS,
  ExpressJS,
  MongoDB,
  Mail,
  GitHub,
  LinkedIn,
  Instagram,
} from "@/components/Icons";

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
    path: "about/#contact",
  },
];

export const CONNECT_LINKS = [
  {
    label: "Email",
    href: "mailto:diwashb999@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/diwashbhattarai999/",
    icon: GitHub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/diwash-bhattarai-343a41202/",
    icon: LinkedIn,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/diwash81/",
    icon: Instagram,
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
    Icon: HTML5,
    label: "HTML5",
  },
  {
    Icon: CSS3,
    label: "CSS3",
  },
  {
    Icon: TailwindCSS,
    label: "Tailwind CSS",
  },
  {
    Icon: JavaScript,
    label: "JavaScript",
  },
  {
    Icon: TypeScript,
    label: "TypeScript",
  },
  {
    Icon: ReactJS,
    label: "React JS",
  },
  {
    Icon: NextJS,
    label: "Next JS",
  },
  {
    Icon: NodeJS,
    label: "Node JS",
  },
  {
    Icon: ExpressJS,
    label: "Express JS",
  },
  {
    Icon: MongoDB,
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
    github: "",
  },
  {
    label: "Airbnb clone | Next.JS",
    description:
      "This project is a clone of the popular vacation rental platform, Airbnb, built with modern web technologies.The frontend is powered by Next.js for server-side rendering, tailwind css for styling and zustand for state management.",
    imagePath: "/images/airbnb.png",
    url: "https://db-booking-app.vercel.app/",
    github: "",
  },
  {
    label: "Moviz | React | Redux",
    description:
      "Moviz App provides the information of all the movies including trending, popular, upcoming and many more. You can find any movies in this app. This app uses the TMDB api to fetch the data of moives.",
    imagePath: "/images/moviz.png",
    url: "https://db-movie-app.vercel.app/",
    github: "",
  },
  {
    label: "Quiz app | React",
    description:
      "Quiz App is a general Knowledge and IQ game with a variety of options to play. There are different levels from easy to hard and different categories to choose for a player.",
    imagePath: "/images/quizapp.png",
    url: "https://db-quiz-app.netlify.app/",
    github: "",
  },
];

export const ADMIN_LINKS = [
  {
    href: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "settings",
    label: "Settings",
    icon: Settings,
  },
  {
    href: "home",
    label: "Home",
    icon: Home,
  },
  {
    href: "about",
    label: "About",
    icon: CircleUserRound,
  },
  {
    href: "projects",
    label: "Projects",
    icon: FolderDot,
  },
  {
    href: "contact",
    label: "Contact",
    icon: Contact,
  },
];
