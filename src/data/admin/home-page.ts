import { db } from "@/lib/db";

export const getHomePageByUserId = async (userId: string) => {
  try {
    const homePage = await db.homePage.findUnique({
      where: { userId },
    });

    return homePage;
  } catch (error) {
    return null;
  }
};

export const getHomePage = async () => {
  try {
    const homePage = await db.homePage.findFirst();

    return homePage;
  } catch (error) {
    return null;
  }
};

export const getResumeByResumeId = async (resumeId: string) => {
  try {
    const resume = await db.resume.findUnique({
      where: { id: resumeId },
    });
    return resume;
  } catch (error) {
    return null;
  }
};

export const getResume = async () => {
  try {
    const resume = await db.resume.findFirst();
    return resume;
  } catch (error) {
    return null;
  }
};
