import "./Experience.css";
import skills from "../data/skill";
import { motion } from "framer-motion";
import { skillAnimation } from "../../animation/animation";
import { useScroll } from "../../animation/useScroll";

const Experience = () => {
  const [element, controls] = useScroll();

  return (
    <section id="experience" className="experience">
      <h5>Check My</h5>
      <h2>Skills</h2>
      <div className="experience__skills" ref={element}>
        {skills.map((skills) => {
          const { id, logo, text } = skills;
          return (
            <motion.article
              className="experience__skills-details"
              key={id}
              variants={skillAnimation}
              animate={controls}
              transition={{delay: 0.03, type: "tween", duration: 0.5}}
            >
              <div className="ex-logo">{logo}</div>
              <h4>{text}</h4>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
