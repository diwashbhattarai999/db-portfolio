"use server";

import * as z from "zod";

import { getUserById } from "@/data/user";
import { getContactsByUserId } from "@/data/admin/contact";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

import { ContactSchema } from "@/schemas";

export const contact = async (values: z.infer<typeof ContactSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const dbUser = await getUserById(user.id as string);

  if (!dbUser) {
    return { error: "Unauthorized!" };
  }

  const existingContacts = await getContactsByUserId(user.id as string);

  const existingContact = existingContacts?.find(
    (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
  );

  try {
    if (existingContact) {
      // Update existing contact
      await db.contact.update({
        where: { id: existingContact.id },
        data: {
          name: values.name,
          icon: values.icon,
          url: values.url,
        },
      });

      return { success: "Contact Updated!" };
    } else {
      // Create a new contact
      await db.contact.create({
        data: {
          name: values.name,
          icon: values.icon,
          url: values.url,
          userId: dbUser.id,
        },
      });
      return { success: "New Contact Added!" };
    }
  } catch (error) {
    // Handle unique constraint violation
    if (
      error instanceof Error &&
      error.message.includes("Unique constraint failed")
    ) {
      return { error: "Contact with the same name already exists!" };
    }

    // Handle other errors
    return { error: "Something went wrong!" };
  }
};

export const deleteContact = async (contactId: string) => {
  try {
    await db.contact.delete({
      where: { id: contactId },
    });

    return { success: "Contact Deleted!" };
  } catch (error) {
    return { error: "Failed to delete contact!" };
  }
};
