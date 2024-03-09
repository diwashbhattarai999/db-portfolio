import { currentUser } from "@/lib/auth";

import {
  getHomePageByUserId,
  getResumeByResumeId,
} from "@/data/admin/home-page";

import Home from "@/components/sections/Home";
import { getContactsByUserId } from "@/data/admin/contact";

export default async function HomePage() {
  const user = await currentUser();

  const homepageDatas = await getHomePageByUserId(user?.id as string);
  const contacts = await getContactsByUserId(user?.id as string);
  const resume = await getResumeByResumeId(homepageDatas?.resumeId as string);

  return (
    <>
      <Home homePageDatas={homepageDatas} resume={resume} contacts={contacts} />
    </>
  );
}
