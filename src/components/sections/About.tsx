"use client";

import Link from "next/link";

import { CONNECT_LINKS, SKILLS } from "@/constants";

import { ArrowUpRight } from "@/components/ui/Icons";
import Container from "@/components/Container";
import AnimationWrapper from "../ui/animation-wrapper";
import { useTheme } from "next-themes";

const About = () => {
  const { resolvedTheme } = useTheme();
  return (
    <AnimationWrapper>
      <div className="py-20">
        <Container className="flex flex-col gap-12 justify-center">
          <div className="mt-4 mb-8">
            <h1 className="text-3xl font-semibold ">About</h1>
            <p className="text-primary-foreground font-medium">
              Just a quick glimpse.
            </p>
          </div>

          <section
            id="about"
            className="flex max-md:flex-col justify-center gap-20"
          >
            <h2 className="md:w-32 font-medium">About</h2>
            <div className="flex flex-col items-start  w-full gap-8 text-base text-secondary-foreground">
              <div className="flex flex-col gap-2">
                <p>{`Hello there,`}</p>
                <p>
                  {`My name is Diwash Bhattarai, and I'm a CSIT student with a burning
              passion for tech. My journey with code began at 18, and I've been
              fascinated by its ability to bring ideas to life ever since.`}
                </p>
                <p>
                  {`As a believer in seamless and accessible experiences, I'm constantly learning and experimenting. While professional projects haven't come my way yet, I'm actively seeking opportunities to collaborate and apply my skills. So, if you have a cool project in mind or share my tech passion, let's connect and create something amazing!`}
                </p>
              </div>

              <ul className="flex gap-8 flex-wrap">
                {SKILLS.map((skill) => {
                  return (
                    <li
                      key={skill.label}
                      className="p-2 rounded-md text-base font-medium flex gap-2 items-center justify-start hover:bg-border hover:text-muted-foreground cursor-pointer duration-300"
                    >
                      <skill.Icon />
                      {skill.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <section
            id="contact"
            className="flex max-md:flex-col justify-center gap-20 mt-20"
          >
            <h2 className="md:w-32 font-medium">Contact me</h2>
            <div className="flex flex-col items-start w-full gap-8 text-base text-primary-foreground">
              <p>
                Have a question or just want to chat? Feel free to{" "}
                <Link
                  href="mailto:diwashb999@gmail.com"
                  className="border-b border-accent hover:border-muted text-secondary-foreground hover:text-primary-foreground font-semibold"
                >
                  email me
                </Link>{" "}
                .
              </p>

              <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {CONNECT_LINKS.map((link) => (
                  <li className="col-span-1" key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between w-full border rounded-lg p-4 border-accent hover:bg-border duration-300"
                    >
                      <div className="flex items-center gap-3 font-medium">
                        <span className="text-xl">
                          <link.icon
                            fillColor={
                              resolvedTheme === "dark" ? "#e6e6e6" : "#303030"
                            }
                          />
                        </span>
                        {link.label}
                      </div>
                      <ArrowUpRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Container>
      </div>
    </AnimationWrapper>
  );
};

export default About;
