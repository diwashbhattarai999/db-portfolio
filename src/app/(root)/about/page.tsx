import { Metadata } from "next";

import { currentUser } from "@/lib/auth";

import { getAllContacts } from "@/data/admin/contact";
import { getHomePage } from "@/data/admin/home-page";
import { getAllCategories, getAllSKills } from "@/data/admin/skill";

import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About Me | Diwash Bhattarai",
  description:
    "Uncovering the journey of Diwash Bhattarai, a passionate web developer.",
};

const AboutPage = async () => {
  const contacts = await getAllContacts();
  const homepageDatas = await getHomePage();
  const skills = await getAllSKills();
  const categories = await getAllCategories();

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
