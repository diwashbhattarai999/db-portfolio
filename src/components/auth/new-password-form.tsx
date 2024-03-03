"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound } from "lucide-react";

import { newPassword } from "@/actions/new-password";

import { NewPasswordSchema } from "@/schemas";

import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CardWrapper from "@/components/auth/card-wrapper";
import FormError from "@/components/ui/form-error";
import FormSuccess from "@/components/ui/form-success";

const NewPasswordForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      newPassword(values, token).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
    console.log(values);
  };

  return (
    <CardWrapper
      headerLabel="Change Password"
      subHeaderLabel="Enter a new password"
      backButtonLabel="Back to login"
      backButtonHref="/login"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* User Inputs -- Password */}
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="******"
          icon={KeyRound}
          error={errors.password?.message}
          disabled={isPending}
          register={register("password")}
        />

        {/* Sucess Message */}
        {success && <FormSuccess message={success} />}

        {/* Error Message */}
        {error && <FormError message={error} />}

        {/* Submit Button */}
        <Button disabled={isPending} type="submit" full>
          Reset Password
        </Button>
      </form>
    </CardWrapper>
  );
};

export default NewPasswordForm;
// <Form {...form}>
//   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//     <div className="space-y-4">
//       {/* Email */}
//       <FormField
//         control={form.control}
//         name="password"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Password</FormLabel>
//             <FormControl>
//               <Input
//                 {...field}
//                 disabled={isPending}
//                 placeholder="******"
//                 type="password"
//               />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />
//     </div>
//     <FormError message={error} />
//     <FormSucess message={success} />
//     <Button disabled={isPending} type="submit" className="w-full">
//       Reset password
//     </Button>
//   </form>
// </Form>
