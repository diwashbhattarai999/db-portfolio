import * as z from "zod";
import { UserRole } from "@prisma/client";

export const LoginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Please provide a valid email",
    }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, {
        message: "Username is required",
      })
      .refine((name) => name.length > 3 && name.length < 255, {
        message: "Full name must be between 3 and 255 characters",
      }),
    email: z
      .string()
      .trim()
      .min(1, { message: "Email is required" })
      .email({ message: "Please provide a valid email" }),
    password: z
      .string()
      .trim()
      .min(1, { message: "Password is required" })
      .refine(
        (password: string): boolean => {
          const trimmedPassword = password.trim();
          return (
            trimmedPassword.length > 0 &&
            trimmedPassword.length >= 6 &&
            trimmedPassword.length <= 20 &&
            /[a-z]/.test(password) &&
            /[A-Z]/.test(password)
          );
        },
        {
          message:
            "Password must be between 6 and 20 characters and contain at least one lowercase and one uppercase letter",
        }
      ),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters required!",
  }),
});

export const SettingsSchema = z
  .object({
    image: z.optional(z.string()),
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string()),
    newPassword: z.optional(z.string()),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  )
  .refine(
    (data) => {
      if (data.password) {
        // Only validate password if it's provided
        return data.password.length >= 6;
      }

      return true; // Allow empty password
    },
    {
      message: "Password must be at least 6 characters",
      path: ["password"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword) {
        // Only validate newPassword if it's provided
        return data.newPassword.length >= 6;
      }

      return true; // Allow empty newPassword
    },
    {
      message: "New password must be at least 6 characters",
      path: ["newPassword"],
    }
  );

export const HomeSchema = z.object({
  name: z.optional(z.string()),
  position: z.optional(z.string()),
  homeDescription: z.optional(z.string()),
  aboutDescription: z.optional(z.string()),
  image: z.optional(z.string()),
  resume: z.optional(
    z.object({
      id: z.string(),
      name: z.optional(z.string()),
      url: z.optional(z.string()),
    })
  ),
});

export const ContactSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  icon: z.string().min(1, {
    message: "Icon is required",
  }),
  url: z.string().min(1, {
    message: "Url is required",
  }),
});

export const ProjectsSchema = z.object({
  image: z.string().min(1, {
    message: "Image is required",
  }),
  title: z.string().min(1, {
    message: "Title is required",
  }),
  description: z.string().min(1, {
    message: "Description is required",
  }),
  projectUrl: z.string().min(1, {
    message: "Project Url is required",
  }),
  githubUrl: z.string().min(1, {
    message: "GitHub url is required",
  }),
});

export const SkillsSchema = z.object({
  image: z.string().min(1, {
    message: "Image is required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  category: z.string().min(1, {
    message: "Category is required",
  }),
});

export const ContactFormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().min(1, {
    message: "Email is required",
  }),
  message: z
    .string()
    .min(1, {
      message: "Message is required",
    })
    .min(5, {
      message: "Message is too short.",
    }),
});
