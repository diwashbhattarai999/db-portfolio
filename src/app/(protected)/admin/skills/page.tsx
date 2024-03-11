import Container from "@/components/Container";
import SkillsForm from "@/components/admin/skills-form";
import { getCategoryByUserId } from "@/data/admin/skill";
import { currentUser } from "@/lib/auth";

const AdminSkillsPage = async () => {
  const user = await currentUser();
  const categoryOptions = await getCategoryByUserId(user?.id as string);

  return (
    <Container className="flex-1">
      <div className="w-full flex flex-col items-center justify-center">
        <SkillsForm categoryOptions={categoryOptions} />
      </div>
    </Container>
  );
};

export default AdminSkillsPage;
