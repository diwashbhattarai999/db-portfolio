import "./Portfolio.css";
import Projects from "../projects/Project";
import { BiLink } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h5>See My Work</h5>
      <h2>Portfolio</h2>

      {Projects.map((project) => {
        return (
          <div className="portfolio__container" key={project.id}>
            <div className="project__img">
              <a href={project.link} target="_blank" rel="noreferrer">
                <img src={project.img} alt={project.name} />
              </a>
            </div>
            <div className="project__details" key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project__link">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <BiLink />
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FiGithub />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Portfolio;
