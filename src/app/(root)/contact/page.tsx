import { Metadata } from "next";

import { getAllContacts } from "@/data/admin/contact";

import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact Me | Diwash Bhattarai",
  description:
    "Get in touch with Diwash Bhattarai. Explore my portfolio of projects, showcasing diverse skills and experiences.",
};

const ContactPage = async () => {
  const contacts = await getAllContacts();

  return <Contact contacts={contacts} />;
};

export default ContactPage;
