"use server";

import * as z from "zod";

import { ContactFormSchema } from "@/schemas";

import { currentUser } from "@/lib/auth";
import { sendContactEmailToAdmin } from "@/lib/mail";

export const contact = async (values: z.infer<typeof ContactFormSchema>) => {
  const validatedFields = ContactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid email!" };
  }

  const { name, email, message } = validatedFields.data;

  const user = await currentUser();

  if (!user) {
    return { error: "Invalid email!" };
  }

  const currentUserEmail = user.email;

  if (!currentUserEmail) {
    return { error: "User email doesn't exists!" };
  }

  await sendContactEmailToAdmin(email, message, name, currentUserEmail);

  return { success: "Your message has been sent!" };
};
