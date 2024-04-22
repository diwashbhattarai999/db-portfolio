"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import { Project } from "@prisma/client";

import Container from "@/components/Container";
import { ChainLink, GitHub } from "@/components/ui/Icons";
import MotionDiv from "@/components/animation/motion-div";
import MotionList from "@/components/animation/motion-list";

interface ProjectsProps {
  projects: Project[] | null;
}

const Projects = ({ projects }: ProjectsProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="projects" className="pt-20 mb-16">
      <Container className="flex flex-col gap-12 justify-center">
        <MotionDiv delayOffset={0}>
          <div className="mt-4 mb-8">
            <h1 className="text-3xl font-semibold">Projects</h1>
            <p className="text-primary-foreground font-medium">
              {`Here are some of the projects I've worked on.`}
            </p>
          </div>
        </MotionDiv>

        {projects && (
          <MotionList className="flex flex-col gap-8">
            {projects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="flex max-md:flex-col gap-8 p-4 border border-border rounded-md hover:bg-border hover:scale-[0.99] cursor-pointer duration-300 shadow-sm"
                >
                  <div className="w-72 h-auto relative">
                    <Image
                      alt={project.title}
                      src={project.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill
                      priority
                      className="h-auto w-60 max-sm:w-full max-md:w-2/3 object-fill border-4 border-border rounded-md"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-base font-medium text-secondary-foreground max-w-[550px]">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4">
                      <Link
                        href={project.projectUrl}
                        target="_blank"
                        className="bg-muted py-2 px-4 w-fit rounded-md hover:bg-secondary duration-300 text-center text-sm"
                      >
                        <ChainLink
                          fillColor={
                            isMounted
                              ? theme === "light"
                                ? "#1d1d1d"
                                : "#ebebeb"
                              : "#7c7c7c"
                          }
                        />
                      </Link>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="bg-muted py-2 px-4 w-fit rounded-md hover:bg-secondary duration-300 text-center text-sm"
                      >
                        <GitHub
                          fillColor={
                            isMounted
                              ? theme === "light"
                                ? "#1d1d1d"
                                : "#ebebeb"
                              : "#7c7c7c"
                          }
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </MotionList>
        )}
      </Container>
    </section>
  );
};

export default Projects;
