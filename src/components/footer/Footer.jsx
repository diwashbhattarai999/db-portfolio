import React, { useState } from "react";
import "./Footer.css";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IoMdRocket } from "react-icons/io";
import { animateScroll as Scroll } from "react-scroll";

const Footer = () => {
  const [top, setTop] = useState(false);
  const handleMouseEnter = () => {
    setTop(true);
  };
  const handleMouseLeave = () => {
    setTop(false);
  };

  return (
    <footer className="footer">
      <div className="footer__links">
        <li className="footer__link">
          <a
            href="https://github.com/diwashbhattarai999"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="social__link" />
          </a>
        </li>
        <li className="footer__link">
          <a
            href="https://www.linkedin.com/in/diwash-bhattarai-343a41202/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="social__link" />
          </a>
        </li>
        <li className="footer__link">
          <a
            href="https://www.instagram.com/diwash81/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="social__link" />
          </a>
        </li>
      </div>
      <h2 onClick={() => Scroll.scrollToTop()}>
        <a
          href="#home"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <IoMdRocket />
        </a>
        <p className={!top &&"none"}>Boost me up</p>
      </h2>
      <h5 className="footer__copyright">&copy;Diwash Bhattarai 2023</h5>
    </footer>
  );
};

export default Footer;
