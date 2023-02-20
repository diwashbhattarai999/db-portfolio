import "./Experience.css";
import skills from "../data/skill";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h5>Check My</h5>
      <h2>Skills</h2>
      <div className="experience__skills">
        {skills.map((skills) => {
          const { id, logo, text } = skills;
          return (
            <article className="experience__skills-details" key={id}>
              <div className="ex-logo">{logo}</div>
              <h4>{text}</h4>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
