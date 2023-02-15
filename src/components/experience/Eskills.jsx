import { AiFillCheckCircle } from "react-icons/ai";

const Eskills = ({ skill, skillImg }) => {
  return (
    <div>
      <article className="experience__skills-details">
        <AiFillCheckCircle className="skill-check"/>
        <div className="experience__skills-img">{skillImg}</div>
        <h4>{skill}</h4>
      </article>
    </div>
  );
};

export default Eskills;
