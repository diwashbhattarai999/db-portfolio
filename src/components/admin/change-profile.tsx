"use client";

import Image from "next/image";
import toast from "react-hot-toast";

import { UploadButton } from "@/lib/uploadthing";
import { UseFormSetValue } from "react-hook-form";
import { useState } from "react";

interface ChangeProfileImgProps {
  value?: string;
  setValue: UseFormSetValue<{
    image?: string | undefined;
    role: "ADMIN" | "USER";
    name?: string | undefined;
    isTwoFactorEnabled?: boolean | undefined;
    email?: string | undefined;
    password?: string | undefined;
    newPassword?: string | undefined;
  }>;
}

const ChangeProfileImg = ({ value, setValue }: ChangeProfileImgProps) => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <>
      <div className="mb-4 text-left flex flex-col gap-4">
        <h1 className="text-primary-foreground">Profile Image</h1>
        <div className="border-2 border-secondary-foreground h-40 w-40 p-1 rounded-full cursor-pointer duration-300 text-secondary-foreground relative">
          <Image
            src={imageUrl || value || "/images/default-profile.png"}
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
            setImageUrl(res[0].url);

            toast.success("Upload completed.");
          }}
          onUploadError={(error: Error) => {
            toast.error(`ERROR! ${error.message}`);
          }}
        />
      </div>
    </>
  );
};

export default ChangeProfileImg;
