import React from "react";
import "./About.css";
import Profile from "../../assets/profile.jpg";
import { motion } from "framer-motion";
import { aboutAnimation } from "../../animation/animation";
import { useScroll } from "../../animation/useScroll";

const About = () => {
  const [element, controls] = useScroll();

  return (
    <section id="about" className="about" >
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="about__info">
        <div className="about__info-img">
          <img src={Profile} alt="" />
        </div>
        <div className="about__info-details">
          <h1>FrontEnd Developer</h1>
          <p>
            Hello People, I am Diwash Bhattarai currently pursuing my career in
            the field of Information Technology. I describe myself as a
            passionate developer who loves coding. I am currently learning
            Front-end Developement. Front-end developers are the coders of all
            the user-facing elements of websites, web applications, and mobile
            applications
          </p>
          <a href="#contact" className="btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
