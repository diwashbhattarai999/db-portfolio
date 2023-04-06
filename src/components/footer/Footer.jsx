import React, { useState } from "react";
import "./Footer.css";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IoMdRocket } from "react-icons/io";
import { animateScroll as Scroll } from "react-scroll";
import { motion } from "framer-motion";
import { footerAnimation, footerTopAnimation } from "../../animation/animation";
import { useScroll } from "../../animation/useScroll";

const Footer = () => {
  const [top, setTop] = useState(false);

  const [element, controls] = useScroll();

  const handleMouseEnter = () => {
    setTop(true);
  };

  const handleMouseLeave = () => {
    setTop(false);
  };

  return (
    <footer className="footer " ref={element}>
      <motion.div
      className="inner__footer"
        variants={footerAnimation}
        animate={controls}
        transition={{ type: "tween", duration: .2 }}
      >
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
          <motion.a
            href="#home"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            variants={footerTopAnimation}
            whileTap="hidden"
          >
            <IoMdRocket />
          </motion.a>
          <p className={!top && "none"}>Boost me up</p>
        </h2>
        <h5 className="footer__copyright">&copy;Diwash Bhattarai 2023</h5>
      </motion.div>
    </footer>
  );
};

export default Footer;
