"use client";

import Image from "next/image";

import { Category, Contact, Skill } from "@prisma/client";

import Container from "@/components/Container";
import MotionDiv from "@/components/animation/motion-div";
import MotionList from "@/components/animation/motion-list";

interface AboutProps {
  contacts: Contact[] | null;
  aboutDescription: string | null | undefined;
  skills: Skill[] | null;
  categories: Category[] | null;
}

const About = ({
  contacts,
  aboutDescription,
  skills,
  categories,
}: AboutProps) => {
  return (
    <section id="about" className="py-20">
      <Container className="flex flex-col gap-12 justify-center">
        <MotionDiv delayOffset={0}>
          <div className="mt-4 mb-8">
            <h1 className="text-3xl font-semibold ">About</h1>
            <p className="text-primary-foreground font-medium">
              Just a quick glimpse.
            </p>
          </div>
        </MotionDiv>

        <section
          id="about"
          className="flex max-md:flex-col justify-between gap-12 md:gap-20"
        >
          <MotionDiv delayOffset={0} className="md:w-32">
            <h2 className="font-medium">About</h2>
          </MotionDiv>
          <MotionDiv delayOffset={0.1} className="w-full">
            <div className="flex flex-col items-start w-full gap-4 text-base text-secondary-foreground">
              {aboutDescription
                ?.split("\n")
                .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </MotionDiv>
        </section>

        <section
          id="about"
          className="flex max-md:flex-col justify-between gap-12 md:gap-20"
        >
          <MotionDiv delayOffset={0} className="md:w-32">
            <h2 className="font-medium">Skills</h2>
          </MotionDiv>
          <div className="flex flex-col gap-8 w-full">
            {categories?.map((category) => {
              const categorySkills = skills?.filter(
                (skill) => skill.categoryId === category.id
              );

              return (
                <div key={category.id} className="w-full flex flex-col gap-8">
                  <MotionDiv delayOffset={0}>
                    <h3 className="text-primary-foreground border-b border-border pb-2">
                      {category.name}
                    </h3>
                  </MotionDiv>
                  {categorySkills && (
                    <MotionList className="flex gap-8 flex-wrap w-full">
                      {categorySkills.map((skill) => {
                        return (
                          <div
                            key={skill.name}
                            className="p-2 rounded-md text-base font-medium flex gap-2 items-center justify-start hover:bg-border hover:text-muted-foreground cursor-pointer duration-300"
                          >
                            <Image
                              src={skill.image}
                              alt={skill.name}
                              width={500}
                              height={500}
                              className="h-14 w-14"
                            />
                            {skill.name}
                          </div>
                        );
                      })}
                    </MotionList>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </section>
  );
};

export default About;
