"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import * as z from "zod";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { HomePage, Resume } from "@prisma/client";
import {
  Briefcase,
  FileText,
  Home,
  NotepadText,
  UserRound,
} from "lucide-react";

import { home } from "@/actions/admin/home";

import { HomeSchema } from "@/schemas";

import { UploadButton } from "@/lib/uploadthing";

import Input from "@/components/ui/input";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/textarea";
import FormError from "@/components/ui/form-error";
import FormSuccess from "@/components/ui/form-success";
import CardWrapper from "@/components/ui/card-wrapper";
import MotionDiv from "@/components/animation/motion-div";

interface HomeFormProps {
  homePageDatas: HomePage | null;
  resume: Resume | null;
}

const HomeForm = ({ homePageDatas, resume }: HomeFormProps) => {
  const [profileImg, setProfileImg] = useState("");
  const [uploadedResume, setUploadedResume] = useState({
    name: "",
    url: "",
  });
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const { update } = useSession();

  const defaultValues = {
    name: homePageDatas?.name || "",
    position: homePageDatas?.position || "",
    homeDescription: homePageDatas?.homeDescription || "",
    aboutDescription: homePageDatas?.aboutDescription || "",
    image: homePageDatas?.image || profileImg || "",
    resume: {
      id: resume?.id,
      name: resume?.name || uploadedResume.name || "",
      url: resume?.url || uploadedResume.url || "",
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<z.infer<typeof HomeSchema>>({
    resolver: zodResolver(HomeSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof HomeSchema>) => {
    startTransition(() => {
      home(values)
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
        headerLabel="Home"
        HeaderIcon={Home}
        subHeaderLabel="Change your Home Page Contents"
        disabled={isPending}
        maxWidthFull
        className="my-20"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start z-0 my-5"
        >
          {/* User Inputs -- Image */}
          <div className="mb-4 text-left flex flex-col gap-4">
            <h1 className="text-primary-foreground">Upload Profile Image</h1>
            <div className="border-2 border-secondary-foreground h-40 w-40 p-1 rounded-full cursor-pointer duration-300 text-secondary-foreground relative">
              <Image
                src={defaultValues.image || "/images/default-profile.png"}
                alt="Profile"
                width={500}
                height={500}
                className="w-full h-full rounded-full"
                priority
              />
            </div>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setValue("image", res[0].url);
                setProfileImg(res[0].url);

                toast.success("Upload completed.");
              }}
              onUploadError={(error: Error) => {
                toast.error(`ERROR! ${error.message}`);
              }}
            />
          </div>

          {/* User Inputs -- Full name */}
          <Input
            label="Full name"
            name="name"
            type="text"
            placeholder="Full name"
            icon={UserRound}
            error={errors.name?.message}
            disabled={isPending}
            register={register("name")}
          />

          {/* User Inputs -- Position */}
          <Input
            label="Position"
            name="position"
            type="text"
            placeholder="Position"
            icon={Briefcase}
            error={errors.position?.message}
            disabled={isPending}
            register={register("position")}
          />

          {/* User Inputs -- HomeDescription */}
          <Textarea
            label="Homepage Description"
            name="homeDescription"
            Icon={NotepadText}
            setValue={setValue}
            disabled={isPending}
            value={defaultValues.homeDescription}
            error={errors.homeDescription?.message}
            register={register}
          />

          {/* User Inputs -- AboutDescription */}
          <Textarea
            label="Aboutpage Description"
            name="aboutDescription"
            Icon={NotepadText}
            setValue={setValue}
            disabled={isPending}
            value={defaultValues.aboutDescription}
            error={errors.aboutDescription?.message}
            register={register}
          />

          {/* User Inputs -- Resume */}
          <div className="mb-4 text-left flex flex-col gap-4">
            <h1 className="text-primary-foreground">Upload Resume</h1>
            <div className="flex max-sm:flex-col items-start gap-4">
              <UploadButton
                endpoint="pdfUploader"
                onClientUploadComplete={(res) => {
                  setValue("resume.url", res[0].url);
                  setValue("resume.name", res[0].name);
                  setUploadedResume({
                    name: res[0].name,
                    url: res[0].url,
                  });

                  toast.success("Upload completed.");
                }}
                onUploadError={(error: Error) => {
                  toast.error(`ERROR! ${error.message}`);
                }}
              />
              {defaultValues.resume.name.length > 0 && (
                <Link
                  href={uploadedResume.url}
                  target="_blank"
                  className="flex gap-3 sm:pt-2 max-sm:mb-4 h-fit text-secondary-foreground hover:text-primary-foreground duration-300"
                >
                  <FileText />
                  <h1>
                    {uploadedResume.name ||
                      defaultValues.resume.name ||
                      "Resume"}
                  </h1>
                </Link>
              )}
            </div>
          </div>

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

export default HomeForm;
