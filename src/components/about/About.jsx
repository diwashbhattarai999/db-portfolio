import React from "react";
import "./About.css";
import Profile from "../../assets/profile.png";
import { motion } from "framer-motion";
import { aboutAnimation, aboutImgAnimation } from "../../animation/animation";
import { useScroll } from "../../animation/useScroll";

const About = () => {
  const [element, controls] = useScroll();

  return (
    <section id="about" className="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="about__info" ref={element}>
        <motion.div
          className="about__info-img"
          variants={aboutImgAnimation}
          animate={controls}
          transition={{ delay: 0.1, type: "tween", duration: 1 }}
        >
          <img src={Profile} alt="Profile" />
        </motion.div>
        <motion.div
          className="about__info-details"
          variants={aboutAnimation}
          animate={controls}
          transition={{ delay: 0.1, type: "tween", duration: 1 }}
        >
          <h1>FullStack Developer</h1>
          <p>
            Hello people! My name is Diwash Bhattarai, and I'm a CSIT student
            with a burning passion for tech. My journey with code began at 18,
            and I've been fascinated by its ability to bring ideas to life ever
            since. As a believer in seamless and accessible experiences, I'm
            constantly learning and experimenting. While professional projects
            haven't come my way yet, I'm actively seeking opportunities to
            collaborate and apply my skills. So, if you have a cool project in
            mind or share my tech passion, let's connect and create something
            amazing!
          </p>
          <a href="#contact" className="btn">
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
