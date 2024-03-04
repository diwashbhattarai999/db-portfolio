import Container from "@/components/Container";
import SettingsForm from "@/components/admin/settings-form";

const AdminSettingsPage = () => {
  return (
    <Container className="flex-1">
      <div className="w-full flex flex-col items-center justify-center">
        {/* <h1 className="text-3xl font-semibold text-foreground">Settings</h1> */}

        <SettingsForm />
      </div>
    </Container>
  );
};

export default AdminSettingsPage;
