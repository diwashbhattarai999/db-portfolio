"use server";

import * as z from "zod";

import { ContactFormSchema } from "@/schemas";

import { sendContactEmailToAdmin } from "@/lib/mail";

export const contact = async (values: z.infer<typeof ContactFormSchema>) => {
  const validatedFields = ContactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid email!" };
  }

  const { name, email, message } = validatedFields.data;

  await sendContactEmailToAdmin(email, message, name, "diwashb999@gmail.com");

  return { success: "Your message has been sent!" };
};
