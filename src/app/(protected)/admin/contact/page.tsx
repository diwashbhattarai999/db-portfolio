import Container from "@/components/Container";
import ContactForm from "@/components/admin/contact-form";

const AdminContactPage = async () => {
  return (
    <Container className="flex-1">
      <div className="w-full flex flex-col items-center justify-center">
        <ContactForm />
      </div>
    </Container>
  );
};

export default AdminContactPage;
