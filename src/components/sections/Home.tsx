import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import Social from "@/components/ui/socials";
import MotionDiv from "@/components/motion-div";
import MotionText from "@/components/motion-text";

const Home = () => {
  return (
    <section id="#home" className="min-h-minusNavHeight pt-14">
      <Container className="flex items-center justify-between gap-8 max-md:flex-col-reverse max-md:gap-0">
        <MotionDiv delayOffset={0}>
          <div className="flex flex-col justify-center my-28">
            <h6 className="text-lg font-medium">
              <span className="text-accent-secondary ml-[2px] md:ml-0">
                Hey there
              </span>{" "}
              , my name is
            </h6>

            <MotionText
              className="text-4xl md:text-6xl font-semibold mt-4 "
              delayOffset={0}
            >
              Diwash Bhattarai
            </MotionText>
            <h2 className="text-lg md:text-xl font-medium mt-2">
              FullStack Developer
            </h2>
            <p className="max-w-[28rem] text-base font-normal mt-3 text-secondary-foreground ">
              {`A passionate student learning to code from Nepal🇳🇵. I'm a CSIT
            student and enthusiastic programmer building my version of the
            programming world one step at a time. I am trying my best to learn
            and explore every opportunity of my life.`}
            </p>

            <Social />
            <Link
              href="/Resume.pdf"
              target="_blank"
              download
              className="bg-accent font-medium p-4 mt-8 w-fit rounded-md hover:bg-muted duration-300"
            >
              Download Resume
            </Link>
          </div>
        </MotionDiv>

        <MotionDiv delayOffset={0.1}>
          <Image
            src="/images/profile.png"
            className="h-64 sm:h-80 w-64 sm:w-80 dark:opacity-70 opacity-90 -z-10 border border-border rounded-full mt-6 md:-mt-8"
            alt="Profile"
            width={500}
            height={500}
            priority
          />
        </MotionDiv>
      </Container>
    </section>
  );
};

export default Home;
