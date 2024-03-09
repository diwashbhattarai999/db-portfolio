import { currentUser } from "@/lib/auth";
import LayoutWrapper from "@/app/(root)/layout-wrapper";
import { getHomePageByUserId, getResumeByResumeId } from "@/data/home-page";

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
