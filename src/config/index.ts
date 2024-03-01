import { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "DB | Portfolio",
  metadataBase: new URL("https://diwashb.com.np"),
  alternates: {
    canonical: "/",
  },
  authors: [
    { name: "Diwash Bhattarai", url: "https://github.com/diwashbhattarai999" },
    { name: "दिवस भट्टराई", url: "https://github.com/diwashbhattarai999" },
  ],
  description:
    "Diwash Bhattarai's personal portfolio website, दिवस भट्टराई को व्यक्तिगत वेबसाइट",
  openGraph: {
    title: "DB | Portfolio",
    description:
      "Diwash Bhattarai's personal portfolio website, दिवस भट्टराई को व्यक्तिगत वेबसाइट",
    images: [
      {
        url: "/profile.png",
        alt: "Diwash Bhattarai's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "db-portfolio",
    "diwash-portfolio",
    "portfolio",
    "react-icons",
    "cn",
    "clsx",
    "sonner",
    "framer-motion",
    "motion",
    "animation",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ] as Array<string>,
} as const;
