"use server";

import * as z from "zod";

import { HomeSchema } from "@/schemas";

import { getUserById } from "@/data/user";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import {
  getHomePageByUserId,
  getResumeByResumeId,
} from "@/data/admin/home-page";

export const home = async (values: z.infer<typeof HomeSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const dbUser = await getUserById(user.id as string);

  if (!dbUser) {
    return { error: "Unauthorized!" };
  }

  const homePage = await getHomePageByUserId(user.id as string);
  let resumeId: string | undefined;

  if (values.resume) {
    const existingResume = await getResumeByResumeId(
      values.resume.id as string
    );

    if (existingResume) {
      // If resume already exists, update it
      await db.resume.update({
        where: { id: existingResume.id },
        data: {
          name: values.resume.name,
          url: values.resume.url,
        },
      });
      resumeId = existingResume.id;
    } else {
      // If resume doesn't exist, create it
      const newResume = await db.resume.create({
        data: {
          name: values.resume.name,
          url: values.resume.url,
          homePageId: homePage?.id,
        },
      });
      resumeId = newResume.id;
    }
  }

  if (homePage) {
    await db.homePage.update({
      where: { id: homePage.id },
      data: {
        name: values.name,
        position: values.position,
        homeDescription: values.homeDescription,
        aboutDescription: values.aboutDescription,
        image: values.image,
        resumeId: resumeId,
      },
    });
  } else {
    await db.homePage.create({
      data: {
        name: values.name,
        position: values.position,
        homeDescription: values.homeDescription,
        aboutDescription: values.aboutDescription,
        image: values.image,
        userId: dbUser.id,
        resumeId: resumeId,
      },
    });
  }

  return { success: "Home Page Updated!" };
};
