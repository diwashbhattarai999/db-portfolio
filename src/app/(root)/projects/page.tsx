import Projects from "@/components/sections/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Diwash Bhattarai",
  description:
    "Explore my portfolio of projects, showcasing diverse skills and experiences.",
};

const ProjectPage = () => {
  return <Projects />;
};

export default ProjectPage;
