"use server";

import * as z from "zod";

import { getUserById } from "@/data/user";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

import { ProjectsSchema } from "@/schemas";
import { getProjectsByUserId } from "@/data/admin/project";

export const project = async (values: z.infer<typeof ProjectsSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const dbUser = await getUserById(user.id as string);

  if (!dbUser) {
    return { error: "Unauthorized!" };
  }

  const existingProjects = await getProjectsByUserId(user.id as string);

  const existingProject = existingProjects?.find(
    (project) =>
      project.title.toLowerCase().trim() === values.title.toLowerCase().trim()
  );

  try {
    if (existingProject) {
      // Update existing project
      await db.project.update({
        where: { id: existingProject.id },
        data: {
          ...values,
        },
      });

      return { success: "Project Updated!" };
    } else {
      // Create a new project
      await db.project.create({
        data: {
          ...values,
          userId: dbUser.id,
        },
      });
      return { success: "New Project Added!" };
    }
  } catch (error) {
    // Handle unique constraint violation
    if (
      error instanceof Error &&
      error.message.includes("Unique constraint failed")
    ) {
      return { error: "Project with the same name already exists!" };
    }

    // Handle other errors
    return { error: "Something went wrong!" };
  }
};

export const deleteProject = async (projectId: string) => {
  try {
    await db.project.delete({
      where: { id: projectId },
    });

    return { success: "Project Deleted!" };
  } catch (error) {
    return { error: "Failed to delete project!" };
  }
};
