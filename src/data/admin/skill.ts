import { db } from "@/lib/db";

export const getSKillsByUserId = async (userId: string) => {
  try {
    const skills = await db.skill.findMany({
      where: { userId },
    });

    return skills;
  } catch (error) {
    return null;
  }
};

export const getAllSKills = async () => {
  try {
    const skills = await db.skill.findMany();

    return skills;
  } catch (error) {
    return null;
  }
};

export const getCategoryByUserId = async (userId: string) => {
  try {
    const category = await db.category.findMany({
      where: { userId },
    });

    return category;
  } catch (error) {
    return null;
  }
};

export const getCategoryIdByCategoryName = async (categoryName: string) => {
  try {
    const category = await db.category.findFirst({
      where: { name: categoryName },
    });

    return category?.id || null;
  } catch (error) {
    console.error("Error fetching categoryId:", error);
    return null;
  }
};

export const getAllCategories = async () => {
  try {
    const category = await db.category.findMany();

    return category;
  } catch (error) {
    return null;
  }
};
