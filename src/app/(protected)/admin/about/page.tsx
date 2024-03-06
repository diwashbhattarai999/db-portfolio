import Container from "@/components/Container";
import AboutForm from "@/components/admin/about-form";

const AdminAboutPage = () => {
  return (
    <Container className="flex-1">
      <div className="w-full flex flex-col items-center justify-center">
        <AboutForm />
      </div>
    </Container>
  );
};

export default AdminAboutPage;
