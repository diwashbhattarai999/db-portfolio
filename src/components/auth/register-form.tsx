"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleUser, KeyRound, Mail } from "lucide-react";

import { LoginSchema, RegisterSchema } from "@/schemas";

import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CardWrapper from "@/components/auth/card-wrapper";
import FormError from "../ui/form-error";
import FormSuccess from "../ui/form-success";

const defaultValues = {
  fullname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues,
  });

  //   console.log(errors);

  const onSubmit: SubmitHandler<typeof defaultValues> = (data) =>
    console.log(data);

  return (
    <CardWrapper
      headerLabel="Register"
      subHeaderLabel="Join us today"
      backButtonHref="/login"
      backButtonLabel="Already have an account ? Login Now"
      showSocial
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* User Inputs -- UserName */}
        <Input
          label="Full Name"
          name="fullname"
          type="text"
          placeholder="Full Name"
          icon={CircleUser}
          error={errors.fullname?.message}
          disabled={loading}
          register={register("fullname")}
        />

        {/* User Inputs -- Email */}
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          icon={Mail}
          error={errors.email?.message}
          disabled={loading}
          register={register("email")}
        />

        {/* User Inputs -- Password */}
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="******"
          icon={KeyRound}
          error={errors.password?.message}
          disabled={loading}
          register={register("password")}
        />

        {/* User Inputs -- Password */}
        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="******"
          icon={KeyRound}
          error={errors.confirmPassword?.message}
          disabled={loading}
          register={register("confirmPassword")}
        />

        {/* Sucess Message */}
        {success && <FormSuccess message={success} />}

        {/* Error Message */}
        {error && <FormError message={error} />}

        {/* Submit Button */}
        <Button disabled={loading} type="submit" full>
          Login
        </Button>
      </form>
    </CardWrapper>
  );
};

export default RegisterForm;
