"use client";

import { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import * as z from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FolderDot,
  FolderPen,
  Link as LucideLink,
  NotepadText,
} from "lucide-react";

import { deleteProject, project } from "@/actions/admin/project";

import { ProjectsSchema } from "@/schemas";

import { cn } from "@/lib/utils";
import { UploadButton } from "@/lib/uploadthing";

import { Project } from "@prisma/client";

import { useCurrentUser } from "@/hooks/use-current-user";

import Input from "@/components/ui/input";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/textarea";
import FormError from "@/components/ui/form-error";
import FormSuccess from "@/components/ui/form-success";
import CardWrapper from "@/components/ui/card-wrapper";
import MotionDiv from "@/components/animation/motion-div";

const ProjectForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const [projectData, setProjectData] = useState<Project[] | null>();
  const [editingProject, setEditingProject] = useState({
    image: "",
    title: "",
    description: "",
    projectUrl: "",
    githubUrl: "",
  });

  const { update } = useSession();

  const user = useCurrentUser();

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const data = await axios
          .get(`/api/projects/${user?.id}`)
          .then((res) => res.data.projects);

        setProjectData(data);
      }
    };

    fetchData();
  }, [user]);

  const defaultValues = {
    image: editingProject.image || "",
    title: editingProject.title || "",
    description: editingProject.description || "",
    projectUrl: editingProject.projectUrl || "",
    githubUrl: editingProject.githubUrl || "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<z.infer<typeof ProjectsSchema>>({
    resolver: zodResolver(ProjectsSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof ProjectsSchema>) => {
    startTransition(() => {
      console.log(values);
      project(values)
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
              title: "",
              description: "",
              projectUrl: "",
              githubUrl: "",
            });

            setEditingProject({
              image: "",
              title: "",
              description: "",
              projectUrl: "",
              githubUrl: "",
            });

            // setValue("description", "");
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  const handleEditProject = (project: Project) => {
    // Populate the form fields with the project details

    setEditingProject({
      image: project.image,
      title: project.title,
      description: project.description,
      projectUrl: project.projectUrl,
      githubUrl: project.githubUrl,
    });

    reset({
      image: project.image,
      title: project.title,
      description: project.description,
      projectUrl: project.projectUrl,
      githubUrl: project.githubUrl,
    });
  };

  const handleDeleteProject = (projectId: string) => {
    startTransition(() => {
      deleteProject(projectId)
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
        headerLabel="Projects"
        HeaderIcon={FolderDot}
        subHeaderLabel="Change your projects details"
        disabled={isPending}
        maxWidthFull
        className="my-20"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start z-0 mt-5"
        >
          {/* User Inputs -- Image */}
          <div className="mb-4 flex flex-col items-start gap-4 w-full">
            <h1 className="text-primary-foreground">Upload Project Image</h1>
            <div className="border-2 border-border h-full w-full rounded-md text-secondary-foreground relative">
              <Image
                src={defaultValues.image || "/images/default-banner.jpg"}
                alt="Project"
                width={800}
                height={800}
                className="w-full h-full rounded-md"
                priority
              />
            </div>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setValue("image", res[0].url);
                setEditingProject((prevEditingProject) => {
                  return {
                    ...prevEditingProject,
                    image: res[0].url,
                  };
                });

                toast.success("Upload completed.");
              }}
              onUploadError={(error: Error) => {
                toast.error(`ERROR! ${error.message}`);
              }}
            />
          </div>

          {/* User Inputs -- Project Title */}
          <Input
            label="Project Title"
            name="title"
            type="text"
            placeholder="Project Title"
            icon={FolderPen}
            error={errors.title?.message}
            disabled={isPending}
            value={defaultValues.title}
            register={register("title")}
          />

          {/* User Inputs -- Description */}
          <Textarea
            label="Description"
            name="description"
            Icon={NotepadText}
            value={defaultValues.description}
            setValue={setValue}
            disabled={isPending}
            error={errors.description?.message}
            register={register}
          />

          {/* User Inputs -- Project Url */}
          <Input
            label="Project Link"
            name="projectUrl"
            type="text"
            placeholder="Project Link"
            icon={LucideLink}
            error={errors.projectUrl?.message}
            disabled={isPending}
            value={defaultValues.projectUrl}
            register={register("projectUrl")}
          />

          {/* User Inputs -- GitHub Link */}
          <Input
            label="GitHub Link"
            name="githubUrl"
            type="text"
            placeholder="GitHub Link"
            icon={LucideLink}
            error={errors.githubUrl?.message}
            disabled={isPending}
            value={defaultValues.githubUrl}
            register={register("githubUrl")}
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

        {/* Show Projects */}
        <div className="w-full mt-10 flex flex-col gap-4">
          <label className="text-primary-foreground font-semibold text-xl">
            All Projects
          </label>
          {projectData && projectData.length > 0 ? (
            <ul className="border border-input p-2 mt-4 rounded-md shadow-sm bg-border">
              {projectData.map((project, i) => (
                <li
                  key={project.id}
                  className={cn(
                    "flex max-lg:flex-col gap-4 items-start lg:items-center justify-between py-4",
                    i !== projectData.length - 1 && " border-b border-input"
                  )}
                >
                  <div className="flex gap-3 flex-col lg:flex-row">
                    <Link
                      href={project.projectUrl}
                      target="_blank"
                      className="flex gap-2 items-center"
                    >
                      <Image
                        src={project.image || "/images/default-banner.jpg"}
                        alt="Project"
                        width={500}
                        height={500}
                        className="w-full h-full lg:w-56 lg:h-32 rounded-md"
                      />
                    </Link>
                    <div className="flex-1 flex flex-col gap-2 items-start text-left md:mr-8 lg:mr-0 lg:max-w-96">
                      <p className="font-semibold text-primary-foreground">
                        {project.title}
                      </p>
                      <p className="text-secondary-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex max-md:w-full gap-4">
                    <Button
                      className="bg-secondary hover:bg-secondary hover:opacity-70 w-24"
                      onClick={() => handleEditProject(project)}
                    >
                      Edit
                    </Button>
                    <Button
                      destructive
                      className="w-20 md:w-24"
                      onClick={() => handleDeleteProject(project.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <h3 className="my-6 border border-input py-4 w-full rounded-md bg-border">
              No Projects Added
            </h3>
          )}
        </div>
      </CardWrapper>
    </MotionDiv>
  );
};

export default ProjectForm;
