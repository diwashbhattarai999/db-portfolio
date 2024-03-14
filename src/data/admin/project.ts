import { db } from "@/lib/db";

export const getProjectsByUserId = async (userId: string) => {
  try {
    const projects = await db.project.findMany({
      where: { userId },
    });

    return projects;
  } catch (error) {
    return null;
  }
};

export const getAllProjects = async () => {
  try {
    const projects = await db.project.findMany();

    return projects;
  } catch (error) {
    return null;
  }
};
