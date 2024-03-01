import Link from "next/link";
import Image from "next/image";

import { PROJECTS } from "@/constants";

import Container from "@/components/Container";
import { ArrowUpRight, ChainLink, GitHub } from "@/components/ui/Icons";
import AnimationWrapper from "../ui/animation-wrapper";

const Projects = () => {
  return (
    <section id="projects" className="pt-20 mb-16">
      <AnimationWrapper>
        <Container className="flex flex-col gap-12 justify-center">
          <div className="mt-4 mb-8">
            <h1 className="text-3xl font-semibold">Projects</h1>
            <p className="text-primary-foreground font-medium">
              {`Here are some of the projects I've worked on.`}
            </p>
          </div>

          <ul className="flex flex-col gap-8">
            {PROJECTS.map((project) => {
              return (
                <li
                  key={project.url}
                  className="flex max-md:flex-col justify-center gap-8 p-4 border border-border rounded-md hover:bg-accent hover:bg-opacity-50 hover:scale-[0.99] cursor-pointer duration-300 shadow-sm"
                >
                  <Image
                    src={project.imagePath}
                    className="h-auto w-60 max-sm:w-full max-md:w-2/3 object-cover border-4 border-border rounded-md"
                    alt={project.label}
                    width="500"
                    height="500"
                    priority
                  />

                  <div className="flex flex-col gap-4 ">
                    <h3 className="text-xl font-semibold">{project.label}</h3>
                    <p className="text-base font-medium text-secondary-foreground max-w-[550px]">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4">
                      <Link
                        href={project.url}
                        target="_blank"
                        className="bg-muted py-2 px-4 w-fit rounded-md hover:bg-secondary duration-300 text-center text-sm"
                      >
                        <ChainLink />
                      </Link>
                      <Link
                        href={project.url}
                        target="_blank"
                        className="bg-muted py-2 px-4 w-fit rounded-md hover:bg-secondary duration-300 text-center text-sm"
                      >
                        <GitHub />
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </AnimationWrapper>
    </section>
  );
};

export default Projects;
