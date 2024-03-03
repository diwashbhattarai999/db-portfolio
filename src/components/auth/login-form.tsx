"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, Mail } from "lucide-react";

import { LoginSchema } from "@/schemas";

import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CardWrapper from "@/components/auth/card-wrapper";
import FormError from "../ui/form-error";
import FormSuccess from "../ui/form-success";

const defaultValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<typeof defaultValues> = (data) => {
    console.log(data);
  };

  return (
    <CardWrapper
      headerLabel="Login"
      subHeaderLabel="Welcome back"
      backButtonHref="/register"
      backButtonLabel="Don't have an account ? Register Now"
      showSocial
    >
      <form onSubmit={handleSubmit(onSubmit)}>
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

export default LoginForm;
