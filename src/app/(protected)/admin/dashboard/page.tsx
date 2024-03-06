import Container from "@/components/Container";
import AboutForm from "@/components/admin/about-form";
import DashboardForm from "@/components/admin/dashboard-form";

const AdminDashboardPage = () => {
  return (
    <Container className="flex-1">
      <div className="w-full flex flex-col items-center justify-center">
        <DashboardForm />
      </div>
    </Container>
  );
};

export default AdminDashboardPage;
