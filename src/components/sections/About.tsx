"use client";

import Image from "next/image";

import { Category, Contact, Skill } from "@prisma/client";

import Container from "@/components/Container";
import MotionDiv from "@/components/animation/motion-div";
import MotionList from "@/components/animation/motion-list";
import { cn } from "@/lib/utils";

interface AboutProps {
  contacts: Contact[] | null;
  aboutDescription: string | null | undefined;
  skills: Skill[] | null;
  categories: Category[] | null;
}

const EDUCATIONS = [
  {
    id: "1",
    degree:
      "Bachelor of Science in Computer Science and Information Technology (B.Sc.CSIT)",
    title: "Bachelor",
    college: "Bhaktapur Multiple Campus",
    location: "Dudhpati, Bhaktapur",
    date: "April 2021 - Present",
    status: "In Progress",
  },
  {
    id: "2",
    degree: "School Leaving Certificate (SLC)",
    title: "Science +2",
    college: "Xavier International College",
    location: "Kalopul, Kathmandu",
    date: "April 2019 - April 2021",
    status: "Completed",
  },
  {
    id: "3",
    degree: "Secondary Education Examination (SEE)",
    title: "Primary Education",
    college: "Advanced English Boarding High School",
    location: "Rudramti Marg, Handigaun, Kathmandu",
    date: "March 2015 - April 2018",
    status: "Completed",
  },
];

const About = ({ aboutDescription, skills, categories }: AboutProps) => {
  return (
    <section id="about" className="py-20">
      <Container className="flex flex-col gap-12 justify-center">
        {/* About Title */}
        <MotionDiv delayOffset={0}>
          <div className="mt-4 mb-8">
            <h1 className="text-3xl font-semibold ">About</h1>
            <p className="text-primary-foreground font-medium">
              Just a quick glimpse.
            </p>
          </div>
        </MotionDiv>

        {/* About Description */}
        <section
          id="about"
          className="flex max-md:flex-col justify-between gap-12 md:gap-20"
        >
          <MotionDiv delayOffset={0} className="md:w-32">
            <h2 className="font-medium">About</h2>
          </MotionDiv>
          <MotionDiv delayOffset={0.1} className="w-full">
            <div className="flex flex-col items-start w-full gap-4 text-base text-secondary-foreground">
              {aboutDescription?.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </MotionDiv>
        </section>

        {/* About Skills */}
        <section
          id="skills"
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

        {/* About Education */}
        <section
          id="education"
          className="flex max-md:flex-col justify-between gap-12 md:gap-20"
        >
          <MotionDiv delayOffset={0} className="md:w-32">
            <h2 className="font-medium">Education</h2>
          </MotionDiv>
          <div className="flex flex-col gap-6 w-full">
            {EDUCATIONS.map((edu) => {
              return (
                <div
                  key={edu.id}
                  className="border-b border-border pb-8 flex items-center gap-4"
                >
                  <div className="w-full flex flex-col gap-1">
                    <MotionDiv delayOffset={0}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-4 text-primary-foreground">
                        <h3 className="md:max-w-[60%] lg:max-w-[70%]">
                          {edu.degree}
                        </h3>
                        <div className="flex gap-2 items-center">
                          <div
                            className={cn(
                              "w-2 h-2 rounded-full",
                              edu.status === "Completed"
                                ? "bg-emerald-500"
                                : "bg-amber-500"
                            )}
                          />
                          <h3 className="text-primary-foreground opacity-80">
                            {edu.date}
                          </h3>
                        </div>
                      </div>
                    </MotionDiv>
                    <MotionDiv delayOffset={0.1} className="w-full">
                      <p className="flex flex-col items-start w-full gap-4 text-base text-secondary-foreground">
                        {edu.title}
                      </p>
                    </MotionDiv>
                    <MotionDiv delayOffset={0.1} className="w-full">
                      <p className="flex flex-col items-start w-full gap-4 text-base text-secondary-foreground">
                        {edu.college}
                      </p>
                    </MotionDiv>
                    <MotionDiv delayOffset={0.1} className="w-full">
                      <p className="flex flex-col items-start w-full gap-4 text-base text-secondary-foreground">
                        {edu.location}
                      </p>
                    </MotionDiv>
                  </div>
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
