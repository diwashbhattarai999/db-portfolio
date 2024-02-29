import Image from "next/image";
import React from "react";
import Container from "../Container";

const Home = () => {
  return (
    <section id="#home" className="min-h-minusNavHeight pt-14 max-md:pt-10">
      <Container className="flex items-center justify-between gap-8 max-md:flex-col-reverse max-md:gap-0">
        <div className="flex flex-col justify-center my-28">
          <h6 className="text-lg">
            <span className="text-accent-secondary">Hey there</span> , my name
            is
          </h6>
          <h1 className="text-6xl font-semibold mt-4 -ml-1">
            Diwash Bhattarai
          </h1>
          <h2 className="text-4xl font-medium mt-2">FullStack Developer</h2>
          <p className="max-w-[28rem] text-base mt-3 text-secondary-foreground">
            {`A passionate student learning to code from Nepal🇳🇵. I'm a CSIT
            student and enthusiastic programmer building my version of the
            programming world one step at a time. I am trying my best to learn
            and explore every opportunity of my life.`}
          </p>

          <a
            href="~/Diwash-Bhattarai-Resume.pdf"
            download
            className="bg-accent p-4 mt-8 w-fit rounded-md hover:bg-muted duration-300"
          >
            Download Resume
          </a>
        </div>

        <Image
          src="/images/profile.png"
          className="h-80 w-80 dark:opacity-70 opacity-90 -z-10 border border-border rounded-full -mt-8"
          alt="Profile"
          width={500}
          height={500}
        />
      </Container>
    </section>
  );
};

export default Home;
