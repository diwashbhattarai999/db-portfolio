import React from "react";
import Container from "../Container";

const Contact = () => {
  return (
    <section id="contact" className="pt-20">
      <Container className="max-w-[900px]">
        <h1 className="text-6xl font-semibold text-center mt-4 mb-16">
          Contact <span className="text-accent">Me</span>
        </h1>

        <h3 className="my-4 text-center">
          Reach out directly at{" "}
          <span className="text-accent-secondary"> diwashb999@gmail.com </span>{" "}
          or through the form below.
        </h3>

        <form className="flex flex-col gap-8 my-8">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value=""
            className="px-4 py-3 bg-primary rounded-md border-none outline-none"
          />
          <input
            type="email"
            name="name"
            value=""
            placeholder="Email"
            className="px-4 py-3 bg-primary rounded-md border-none outline-none"
          />
          <textarea
            placeholder="Message"
            className="px-4 py-3 bg-primary rounded-md border-none outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-accent py-4 px-6 w-fit rounded-md hover:bg-muted duration-300 text-center"
          >
            Submit
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
