import { currentUser } from "@/lib/auth";

import {
  getHomePageByUserId,
  getResumeByResumeId,
} from "@/data/admin/home-page";
import { getContactsByUserId } from "@/data/admin/contact";

import Home from "@/components/sections/Home";
import Curve from "@/components/animation/motion-curve";

export default async function HomePage() {
  const user = await currentUser();

  const homepageDatas = await getHomePageByUserId(user?.id as string);
  const contacts = await getContactsByUserId(user?.id as string);
  const resume = await getResumeByResumeId(homepageDatas?.resumeId as string);

  return (
    <Curve label="Diwash Bhattarai">
      <Home homePageDatas={homepageDatas} resume={resume} contacts={contacts} />
    </Curve>
  );
}
