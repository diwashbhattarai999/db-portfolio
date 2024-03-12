import LayoutWrapper from "@/app/(root)/layout-wrapper";

import { currentUser } from "@/lib/auth";

import {
  getHomePageByUserId,
  getResumeByResumeId,
} from "@/data/admin/home-page";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  const homepageDatas = await getHomePageByUserId(user?.id as string);

  const resume = await getResumeByResumeId(homepageDatas?.resumeId as string);

  return (
    <main className="relative overflow-hidden">
      <LayoutWrapper resume={resume}>{children}</LayoutWrapper>
    </main>
  );
}
