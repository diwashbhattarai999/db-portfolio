import Container from "@/components/Container";
import HomeForm from "@/components/admin/home-form";
import { getHomePageByUserId, getResumeByResumeId } from "@/data/home-page";
import { currentUser } from "@/lib/auth";

const AdminHomePage = async () => {
  const user = await currentUser();
  const homepageDatas = await getHomePageByUserId(user?.id as string);

  const resume = await getResumeByResumeId(homepageDatas?.resumeId as string);

  return (
    <Container className="flex-1">
      <div className="w-full flex flex-col items-center justify-center">
        <HomeForm homePageDatas={homepageDatas} resume={resume}/>
      </div>
    </Container>
  );
};

export default AdminHomePage;
