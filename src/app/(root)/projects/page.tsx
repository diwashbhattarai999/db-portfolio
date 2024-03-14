import { Metadata } from "next";

import { getAllProjects } from "@/data/admin/project";

import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects | Diwash Bhattarai",
  description:
    "Explore my portfolio of projects, showcasing diverse skills and experiences.",
};

const ProjectPage = async () => {
  const projects = await getAllProjects();

  return <Projects projects={projects} />;
};

export default ProjectPage;
