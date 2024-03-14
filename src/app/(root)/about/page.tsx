import { Metadata } from "next";

import { currentUser } from "@/lib/auth";

import { getContactsByUserId } from "@/data/admin/contact";
import { getHomePageByUserId } from "@/data/admin/home-page";
import { getCategoryByUserId, getSKillsByUserId } from "@/data/admin/skill";

import About from "@/components/sections/About";
import Curve from "@/components/animation/motion-curve";

export const metadata: Metadata = {
  title: "About Me | Diwash Bhattarai",
  description:
    "Uncovering the journey of Diwash Bhattarai, a passionate web developer.",
};

const AboutPage = async () => {
  const user = await currentUser();
  const contacts = await getContactsByUserId(user?.id as string);
  const homepageDatas = await getHomePageByUserId(user?.id as string);
  const skills = await getSKillsByUserId(user?.id as string);
  const categories = await getCategoryByUserId(user?.id as string);

  const aboutDescription = homepageDatas?.aboutDescription;

  return (
    <About
      contacts={contacts}
      aboutDescription={aboutDescription}
      skills={skills}
      categories={categories}
    />
  );
};

export default AboutPage;
