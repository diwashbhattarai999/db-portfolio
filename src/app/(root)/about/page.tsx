import About from "@/components/sections/About";
import { getContactsByUserId } from "@/data/admin/contact";
import { currentUser } from "@/lib/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Diwash Bhattarai",
  description:
    "Uncovering the journey of Diwash Bhattarai, a passionate web developer.",
};

const AboutPage = async () => {
  const user = await currentUser();
  const contacts = await getContactsByUserId(user?.id as string);

  return <About contacts={contacts} />;
};

export default AboutPage;
