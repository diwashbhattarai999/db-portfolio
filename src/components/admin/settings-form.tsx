"use client";

import { useEffect, useState, useTransition } from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, Mail, Settings, UserRound } from "lucide-react";
import { useSession } from "next-auth/react";

import { settings } from "@/actions/settings";

import { SettingsSchema } from "@/schemas";

import { useCurrentUser } from "@/hooks/use-current-user";

import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import Switch from "@/components/ui/switch";
import Button from "@/components/ui/Button";
import FormError from "@/components/ui/form-error";
import FormSuccess from "@/components/ui/form-success";
import CardWrapper from "@/components/ui/card-wrapper";
import MotionDiv from "@/components/animation/motion-div";
import ChangeProfileImg from "@/components/admin/change-profile";

const SettingsForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const [selectValue, setSelectValue] = useState("Select a Role");
  const { update } = useSession();

  const user = useCurrentUser();

  const defaultValues = {
    image: user?.image || undefined,
    name: user?.name || undefined,
    email: user?.email || undefined,
    password: undefined,
    newPassword: undefined,
    role: user?.role || undefined,
    isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
  };

  useEffect(() => {
    if (user) {
      setSelectValue(user.role);
    }
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
            setSuccess("");
          }
          if (data.success) {
            update();
            setSuccess(data.success);
            setError("");
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  return (
    <MotionDiv delayOffset={0.1} className="w-full">
      <CardWrapper
        headerLabel="Settings"
        HeaderIcon={Settings}
        subHeaderLabel="Change your account settings"
        disabled={isPending}
        maxWidthFull
        className="my-20"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start z-0 my-5"
        >
          <ChangeProfileImg setValue={setValue} value={defaultValues.image} />

          {/* User Inputs -- Name */}
          <Input
            label="Name"
            name="name"
            type="text"
            placeholder="Full name"
            icon={UserRound}
            error={errors.name?.message}
            disabled={isPending}
            register={register("name")}
          />
          {user?.isOAuth === false && (
            <>
              {/* User Inputs -- Email */}
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="name@example.com"
                icon={Mail}
                error={errors.email?.message}
                disabled={isPending}
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
                disabled={isPending}
                register={register("password")}
              />

              {/* User Inputs -- New Password */}
              <Input
                label="New Password"
                name="newPassword"
                type="password"
                placeholder="******"
                icon={KeyRound}
                error={errors.newPassword?.message}
                disabled={isPending}
                register={register("newPassword")}
              />
            </>
          )}
          {/* User Inputs -- Role */}
          <Select
            selectLabel="Role"
            name="role"
            value={selectValue}
            setSelectValue={setSelectValue}
            error={errors.role?.message}
            disabled={isPending}
            register={register("role")}
            options={[
              { label: "Admin", value: "ADMIN" },
              { label: "User", value: "USER" },
            ]}
          />

          {/* User Inputs -- 2FA */}
          {user?.isOAuth === false && (
            <Switch
              value={defaultValues.isTwoFactorEnabled}
              error={errors.isTwoFactorEnabled?.message}
              disabled={isPending}
              setValue={setValue}
              label="Two Factor Authentication"
              descriptions="Enable two factor authentication for your account"
            />
          )}

          {/* Sucess Message */}
          {success && <FormSuccess message={success} />}

          {/* Error Message */}
          {error && <FormError message={error} />}

          {/* Submit Button */}
          <Button disabled={isPending} type="submit" className="px-6 w-24">
            Save
          </Button>
        </form>
      </CardWrapper>
    </MotionDiv>
  );
};

export default SettingsForm;
