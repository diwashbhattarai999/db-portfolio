import { db } from "@/lib/db";

export const getContactsByUserId = async (userId: string) => {
  try {
    const contacts = await db.contact.findMany({
      where: { userId },
    });

    return contacts;
  } catch (error) {
    return null;
  }
};

export const getAllContacts = async () => {
  try {
    const contacts = await db.contact.findMany();

    return contacts;
  } catch (error) {
    return null;
  }
};
