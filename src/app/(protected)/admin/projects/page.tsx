import Container from "@/components/Container";
import ProjectsForm from "@/components/admin/projects-form";

const AdminProjectsPage = () => {
  return (
    <Container className="flex-1">
      <div className="w-full flex flex-col items-center justify-center">
        <ProjectsForm />
      </div>
    </Container>
  );
};

export default AdminProjectsPage;
