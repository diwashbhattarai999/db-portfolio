import React from "react";
import "./About.css";
import Profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__title">
          <h5>Get to know</h5>
          <h2>About Me</h2>
          <div className="about__line"></div>
        </div>
        <div className="about__info">
          <div className="img about__info-img">
            <img src={Profile} alt="" />
          </div>
          <div className="about__info-img-info">
            <h1>Diwash Bhattarai</h1>
            <h3>FrontEnd Developer</h3>
            <h5>
              Hello People, I am Diwash Bhattarai currently pursuing my career
              in the field of Information Technology. I describe myself as a
              passionate developer who loves coding. I am currently learning
              Front-end Developement. Front-end developers are the coders of all
              the user-facing elements of websites, web applications, and mobile
              applications
            </h5>
            <a href="#contact" className="btn">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
