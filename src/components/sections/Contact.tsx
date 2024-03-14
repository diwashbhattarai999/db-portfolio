"use client";

import Link from "next/link";

import { Contact } from "@prisma/client";

import { ArrowUpRight } from "@/components/ui/Icons";
import Container from "@/components/Container";
import MotionDiv from "@/components/animation/motion-div";
import MotionList from "@/components/animation/motion-list";
import ContactForm from "../ui/contact-form";

interface ContactProps {
  contacts: Contact[] | null;
}

const Contact = ({ contacts }: ContactProps) => {
  return (
    <section id="contact" className="py-20">
      <Container>
        <MotionDiv delayOffset={0}>
          <div className="mt-4 mb-8">
            <h1 className="text-3xl font-semibold ">Connect with me</h1>
            <p className="text-primary-foreground font-medium">
              {`Let's turn ideas into reality.`}
            </p>
          </div>
        </MotionDiv>

        <div className="flex max-md:flex-col justify-between gap-12 md:gap-20 mt-20">
          <MotionDiv delayOffset={0} className="md:w-32">
            <h2 className="font-medium">Get in Touch</h2>
          </MotionDiv>
          <div className="flex flex-col items-start w-full gap-8 text-base text-primary-foreground">
            <MotionDiv delayOffset={0.1}>
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
            </MotionDiv>

            {contacts && (
              <MotionList
                delayOffset={0.2}
                className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
              >
                {contacts.map((contact) => (
                  <div className="col-span-1" key={contact.id}>
                    <Link
                      href={contact.url}
                      target="_blank"
                      className="flex items-center justify-between w-full border rounded-lg p-4 border-accent hover:bg-border duration-300"
                    >
                      <div className="flex items-center gap-3 font-medium">
                        <div
                          dangerouslySetInnerHTML={{ __html: contact.icon }}
                          className="svg"
                        ></div>
                        {contact.name}
                      </div>
                      <ArrowUpRight />
                    </Link>
                  </div>
                ))}
              </MotionList>
            )}
          </div>
        </div>

        <div className="flex max-md:flex-col justify-between gap-12 md:gap-20 mt-20">
          <MotionDiv delayOffset={0} className="md:w-32">
            <h2 className="font-medium">{`Let's talk!`}</h2>
          </MotionDiv>
          <div className="flex flex-col items-start w-full gap-8 text-base text-primary-foreground">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
