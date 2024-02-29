import React from "react";
import Container from "../Container";
import Image from "next/image";
import { PROJECTS } from "@/constants";

const Projects = () => {
  return (
    <section id="projects" className="pt-20 mb-16">
      <Container>
        <h1 className="text-6xl font-semibold text-center mb-20">
          All <span className="text-accent">Projects</span>
        </h1>

        <ul className="flex flex-col gap-8">
          {PROJECTS.map((project) => {
            return (
              <li
                key={project.url}
                className="flex max-md:flex-col justify-between gap-8 p-4 rounded-md hover:bg-accent hover:bg-opacity-50 hover:scale-[0.99] cursor-pointer duration-300"
              >
                <Image
                  src={project.imagePath}
                  className="h-auto w-60 max-sm:w-full max-md:w-2/3 object-cover border-4 border-border rounded-md"
                  alt=""
                  width="500"
                  height="500"
                />

                <div className="flex flex-col gap-4 ">
                  <h3 className="text-lg font-semibold">{project.label}</h3>
                  <p className="text-sm text-secondary-foreground">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    className="bg-muted py-2 px-4 w-fit rounded-md hover:bg-secondary duration-300 text-center text-sm"
                  >
                    Visit
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Projects;
