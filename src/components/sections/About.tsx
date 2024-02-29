import { SKILLS } from "@/constants";
import React from "react";
import Container from "../Container";

const About = () => {
  return (
    <section id="about" className="py-20">
      <Container className="flex flex-col gap-12 items-center justify-center">
        <h1 className="text-6xl font-semibold text-center mt-4 mb-8">
          About <span className="text-accent">Me</span>
        </h1>

        <div className="flex flex-col items-start w-full gap-8 text-base text-secondary-foreground">
          <span className="text-accent-secondary">{"< Hi everyone! />"}</span>
          <p>
            {`My name is Diwash Bhattarai, and I'm a CSIT student with a burning
              passion for tech. My journey with code began at 18, and I've been
              fascinated by its ability to bring ideas to life ever since. As a
              believer in seamless and accessible experiences, I'm constantly
              learning and experimenting. While professional projects haven't come
              my way yet, I'm actively seeking opportunities to collaborate and
              apply my skills. So, if you have a cool project in mind or share my
              tech passion, let's connect and create something amazing!`}
          </p>

          <ul className="flex items-start gap-4 flex-wrap">
            {SKILLS.map((skill) => {
              return (
                <li
                  key={skill.label}
                  className="bg-accent hover:bg-muted p-2 rounded-md cursor-pointer text-foreground text-sm duration-300"
                >
                  {skill.label}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default About;
