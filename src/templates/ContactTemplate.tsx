import Container from "@/components/Container";

interface ContactTemplateProps {
  name: string;
  email: string;
  message: string;
}

const ContactTemplate = ({ name, email, message }: ContactTemplateProps) => {
  return (
    <div className="bg-border p-4 border-2 rounded-sm border-border">
      <Container className="max-w-[600px]">
        <header>
          <nav className="p-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <a
                className="text-6xl font-bold w-full pb-2 border-b border-foreground text-center"
                href="#"
              >
                DB
              </a>

              <div className="hidden md:flex items-center justify-center gap-4 py-4 border-b w-full border-foreground text-secondary-foreground">
                <a
                  className="hover:text-foreground hover:scale-110 duration-300"
                  href="#"
                >
                  Home
                </a>
                <a
                  className="hover:text-foreground hover:scale-110 duration-300"
                  href="#"
                >
                  About
                </a>
                <a
                  className="hover:text-foreground hover:scale-110 duration-300"
                  href="#"
                >
                  Services
                </a>
                <a
                  className="hover:text-foreground hover:scale-110 duration-300"
                  href="#"
                >
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main className="w-full text-center flex flex-col items-center justify-center gap-8">
          <h2 className="text-3xl font-semibold text-primary-foreground">
            Hello, {name || "@user"} has send you a message.
          </h2>

          <p className="my-8 text-sm text-secondary-foreground max-w-md">
            {message ||
              "Message fadfasdf adfadf alsdfkj;asdlfj adsfl kjad; asdf fa;lsdk j adlfk asd fkasd  asdfa tlje oer alc  oq czoi bjo  .ghgo al ghfjg vmxb xzih .ert ozi .qwe oioj "}
          </p>
        </main>

        <footer className="bg-white py-8 max-w-lg jt-10">
          <div>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default ContactTemplate;
