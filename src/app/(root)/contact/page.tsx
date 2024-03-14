import { currentUser } from "@/lib/auth";

import { getContactsByUserId } from "@/data/admin/contact";

import Contact from "@/components/sections/Contact";

const ContactPage = async () => {
  const user = await currentUser();
  const contacts = await getContactsByUserId(user?.id as string);

  return <Contact contacts={contacts} />;
};

export default ContactPage;
