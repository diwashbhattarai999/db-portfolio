import Container from "@/components/Container";
import HomeForm from "@/components/admin/home-form";

const AdminHomePage = () => {
  return (
    <Container className="flex-1">
      <div className="w-full flex flex-col items-center justify-center">
        <HomeForm />
      </div>
    </Container>
  );
};

export default AdminHomePage;
