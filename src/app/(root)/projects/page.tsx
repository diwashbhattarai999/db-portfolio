import Projects from "@/components/sections/Projects";
import { getProjectsByUserId } from "@/data/admin/project";
import { currentUser } from "@/lib/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Diwash Bhattarai",
  description:
    "Explore my portfolio of projects, showcasing diverse skills and experiences.",
};

const ProjectPage = async () => {
  const user = await currentUser();
  const projects = await getProjectsByUserId(user?.id as string);

  return <Projects projects={projects}/>;
};

export default ProjectPage;
