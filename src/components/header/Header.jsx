import "./Header.css";
import CV from "../../assets/DB-Resume.pdf";
import { TbHandRock } from "react-icons/tb";
import { motion } from "framer-motion";
import { headerAnimation } from "../../animation/animation";

const Header = () => {

  return (
    <motion.header
      id="home"
      className="home db__main"
      variants={headerAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
    >
      <div
        className="header__container"

      >
        <h5>
          Hey there <TbHandRock />, my name is
        </h5>
        <h1>Diwash Bhattarai</h1>
        <h3>FullStack Developer</h3>
        <div className="header__hero-para">
          <p>
            A passionate student learning to code from Nepal🇳🇵. I'm a CSIT
            student and enthusiastic programmer building my version of the
            programming world one step at a time. I am trying my best to learn
            and explore every opportunity of my life.
          </p>
        </div>
        <a href={CV} download className="btn">
          Download Resume
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
