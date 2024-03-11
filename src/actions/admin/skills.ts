"use server";

import * as z from "zod";

import { getUserById } from "@/data/user";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

import { SkillsSchema } from "@/schemas";
import {
  getCategoryIdByCategoryName,
  getSKillsByUserId,
} from "@/data/admin/skill";

export const skills = async (values: z.infer<typeof SkillsSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const dbUser = await getUserById(user.id as string);

  if (!dbUser) {
    return { error: "Unauthorized!" };
  }

  const existingSkills = await getSKillsByUserId(user.id as string);

  const existingSkill = existingSkills?.find(
    (skill) =>
      skill.name.toLowerCase().trim() === values.name.toLowerCase().trim()
  );

  try {
    let categoryId = await getCategoryIdByCategoryName(values.category);

    if (!categoryId) {
      const newCategoryId = await createCategory(
        values.category,
        user.id as string
      );

      if (newCategoryId) {
        categoryId = newCategoryId;
      } else {
        return { error: "Failed to create or find category!" };
      }
    }

    if (existingSkill) {
      // Update existing skill
      await db.skill.update({
        where: { id: existingSkill.id },
        data: {
          image: values.image,
          name: values.name,
          categoryId: categoryId,
        },
      });

      return { success: "Skill Updated!" };
    } else {
      // Create a new skill
      await db.skill.create({
        data: {
          image: values.image,
          name: values.name,
          categoryId: categoryId,
          userId: dbUser.id,
        },
      });
      return { success: "New Skill Added!" };
    }
  } catch (error) {
    // Handle unique constraint violation
    if (
      error instanceof Error &&
      error.message.includes("Unique constraint failed")
    ) {
      return { error: "Skill with the same name already exists!" };
    }

    // Handle other errors
    return { error: "Something went wrong!" };
  }
};

export const deleteSkill = async (skillId: string) => {
  try {
    await db.skill.delete({
      where: { id: skillId },
    });

    return { success: "Skill Deleted!" };
  } catch (error) {
    return { error: "Failed to delete skill!" };
  }
};

export const deleteCategory = async (category: string) => {
  try {
    const categoryId = await getCategoryIdByCategoryName(category);
    if (categoryId) {
      await db.category.delete({
        where: { id: categoryId },
      });

      return { success: "Category Deleted!" };
    } else {
      return { error: "Category not found!" };
    }
  } catch (error) {
    return { error: "Failed to delete category!" };
  }
};

export const createCategory = async (
  name: string,
  userId: string
): Promise<string | null> => {
  try {
    const createdCategory = await db.category.create({
      data: {
        name,
        userId,
      },
    });

    return createdCategory.id;
  } catch (error) {
    console.error("Error creating category:", error);
    return null;
  }
};
