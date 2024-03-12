"use client";

import { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import * as z from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { BrainCircuit, FolderPen } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { skills, deleteSkill } from "@/actions/admin/skills";

import { Category, Skill } from "@prisma/client";

import { SkillsSchema } from "@/schemas";

import { UploadButton } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";

import { useCurrentUser } from "@/hooks/use-current-user";
import useSkillsData, { SkillsWithCategory } from "@/hooks/use-skills-data";

import Input from "@/components/ui/input";
import Select, { Options } from "@/components/ui/select";
import Button from "@/components/ui/Button";
import FormError from "@/components/ui/form-error";
import FormSuccess from "@/components/ui/form-success";
import CardWrapper from "@/components/ui/card-wrapper";
import MotionDiv from "@/components/animation/motion-div";

const SkillsForm = ({
  categoryOptions,
}: {
  categoryOptions: Category[] | null;
}) => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const [skillImg, setSkillImg] = useState("");
  const [selectValue, setSelectValue] = useState("Select a Category");
  const [options, setOptions] = useState<Options[]>([]);

  const [editingSkill, setEditingSkill] = useState({
    image: "",
    name: "",
    category: "",
  });

  useEffect(() => {
    if (categoryOptions) {
      const options = categoryOptions.map((option) => {
        return { label: option.name, value: option.name.toUpperCase() };
      });
      setOptions(options);
    }
  }, [categoryOptions]);

  const { update } = useSession();

  const user = useCurrentUser();

  const {
    skillsData,
    loading,
    error: skillError,
  } = useSkillsData(user?.id) as {
    skillsData: SkillsWithCategory[] | undefined;
    loading: boolean;
    error: null;
  };

  const defaultValues = {
    image: editingSkill?.image || "",
    name: editingSkill?.name || "",
    category: editingSkill?.category || "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<z.infer<typeof SkillsSchema>>({
    resolver: zodResolver(SkillsSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof SkillsSchema>) => {
    startTransition(() => {
      // console.log(values);
      skills(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
            setSuccess("");
          }
          if (data.success) {
            update();
            setSuccess(data.success);
            setError("");
            // Reset both form values and editingProject state
            reset({
              image: "",
              name: "",
              category: "",
            });
            setEditingSkill({
              image: "",
              name: "",
              category: "",
            });
            setSkillImg("");
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  const handleEditSkill = async (skill: Skill) => {
    try {
      const categoryData: string = await axios
        .get(`/api/skills/category/${skill.categoryId}`)
        .then((res) => res.data.category.name);

      setEditingSkill({
        image: skill.image,
        name: skill.name,
        category: categoryData,
      });

      reset({
        image: skill.image,
        name: skill.name,
        category: categoryData,
      });

      setSelectValue(categoryData);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  const handleDeleteSkill = (skillId: string) => {
    startTransition(() => {
      deleteSkill(skillId)
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
        headerLabel="Skills"
        HeaderIcon={BrainCircuit}
        subHeaderLabel="Add or update your skills"
        disabled={isPending}
        maxWidthFull
        className="my-20"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start z-0 mt-5"
        >
          {/* User Inputs -- Image */}
          <div className="mb-4 text-left flex flex-col gap-4">
            <h1 className="text-primary-foreground">Upload Skill Image</h1>
            <div className="flex gap-4 items-end relative">
              <Image
                src={
                  skillImg || defaultValues.image || "/images/default-image.jpg"
                }
                alt="Profile"
                width={500}
                height={500}
                className="w-20 h-20 rounded-md bg-cover aspect-square"
                priority
              />
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  setValue("image", res[0].url);
                  setSkillImg(res[0].url);

                  toast.success("Upload completed.");
                }}
                onUploadError={(error: Error) => {
                  toast.error(`ERROR! ${error.message}`);
                }}
              />
              {errors.image && (
                <div className="mb-4 text-destructive italic">
                  {errors.image.message}
                </div>
              )}
            </div>
          </div>

          {/* User Inputs -- Project Title */}
          <Input
            label="Skill Name"
            name="name"
            type="text"
            placeholder="Skill Name"
            icon={FolderPen}
            error={errors.name?.message}
            disabled={isPending}
            value={defaultValues.name}
            register={register("name")}
          />

          {/* User Inputs -- Category */}
          <Select
            selectLabel="Category"
            showAddNewButton
            name="category"
            value={selectValue}
            setSelectValue={setSelectValue}
            error={errors.category?.message}
            disabled={isPending}
            register={register("category")}
            options={options}
            setOptions={setOptions}
          />

          {/* Add Add Button */}
          <Button disabled={isPending} type="submit" className="px-6 my-2 w-24">
            Add
          </Button>

          {/* Sucess Message */}
          {success && <FormSuccess message={success} />}

          {/* Error Message */}
          {error && <FormError message={error} />}
        </form>

        {/* Show Skills */}
        <div className="w-full mt-10 flex flex-col gap-4">
          <label className="text-primary-foreground font-semibold text-xl">
            All Skills
          </label>
          {skillsData && skillsData.length > 0 ? (
            <>
              {loading && (
                <h3 className="my-6 border border-input py-4 w-full rounded-md bg-border">
                  Loading Skills...
                </h3>
              )}
              <ul className="border border-input p-2 mt-4 rounded-md shadow-sm bg-border">
                {skillsData.map((skill, i) => (
                  <li
                    key={skill.id}
                    className={cn(
                      "flex max-lg:flex-col gap-4 items-start lg:items-center justify-between py-4",
                      i !== skillsData.length - 1 && " border-b border-input"
                    )}
                  >
                    <div className="flex gap-3">
                      <Image
                        src={skill.image || "/images/default-image.jpg"}
                        alt="Skill"
                        width={500}
                        height={500}
                        className="w-16 h-16 rounded-md"
                      />

                      <div className="flex-1 flex flex-col gap-1 items-start text-left md:mr-8 lg:mr-0 lg:max-w-96">
                        <p className="font-semibold text-primary-foreground">
                          {skill.name}
                        </p>
                        <p className="text-secondary-foreground line-clamp-2 capitalize">
                          {skill.category.toLowerCase()}
                        </p>
                      </div>
                    </div>
                    <div className="flex max-md:w-full gap-4">
                      <Button
                        className="bg-secondary hover:bg-secondary hover:opacity-70 w-24"
                        onClick={() => handleEditSkill(skill)}
                      >
                        Edit
                      </Button>
                      <Button
                        destructive
                        className="w-20 md:w-24"
                        onClick={() => handleDeleteSkill(skill.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <h3 className="my-6 border border-input py-4 w-full rounded-md bg-border">
              No Skills Added
            </h3>
          )}
        </div>
      </CardWrapper>
    </MotionDiv>
  );
};

export default SkillsForm;
