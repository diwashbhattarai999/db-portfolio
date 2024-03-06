import Container from "@/components/Container";
import SettingsForm from "@/components/admin/settings-form";

const AdminSettingsPage = () => {
  return (
    <Container className="flex-1">
      <div className="w-full flex flex-col items-center justify-center">
        <SettingsForm />
      </div>
    </Container>
  );
};

export default AdminSettingsPage;
