import About from "@/components/sections/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Diwash Bhattarai",
  description:
    "Uncovering the journey of Diwash Bhattarai, a passionate web developer.",
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
