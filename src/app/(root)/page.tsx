import { Metadata } from "next";

import { getHomePage, getResume } from "@/data/admin/home-page";
import { getAllContacts } from "@/data/admin/contact";

import Home from "@/components/sections/Home";
import Curve from "@/components/animation/motion-curve";

export default async function HomePage() {
  const homepageDatas = await getHomePage();
  const contacts = await getAllContacts();
  const resume = await getResume();

  return (
    <Curve label="Diwash Bhattarai">
      <Home homePageDatas={homepageDatas} resume={resume} contacts={contacts} />
    </Curve>
  );
}
