import "./Experience.css";
import Eskills from "./Eskills";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact, DiPhotoshop, DiGit, DiGithubBadge } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h5>Check My</h5>
      <h2>Skills</h2>
      <div className="experience__info">
        {/* ==================== Experience Info Container Left ==================== */}
        <div className="experience__info-container left">
          <h1>Frontend Development</h1>
          <div className="experience__skills">
            {/* ========== Skills ========== */}
            <Eskills
              skill="Html"
              skillImg={<AiFillHtml5 className="skill-img" />}
            />
            <Eskills skill="CSS" skillImg={<DiCss3 className="skill-img" />} />
            <Eskills
              skill="JavaScript"
              skillImg={<IoLogoJavascript className="skill-img" />}
            />
            <Eskills
              skill="React"
              skillImg={<DiReact className="skill-img" />}
            />
            <Eskills
              skill="Tailwind CSS"
              skillImg={<SiTailwindcss className="skill-img" />}
            />
            {/* ========== Skills End ========== */}
          </div>
        </div>
        {/* ==================== Experience Info Container Left ==================== */}

        {/* ==================== Experience Info Container Right ==================== */}
        <div className="experience__info-container right">
          <h1>Others</h1>
          <div className="experience__skills">
            {/* ========== Skills ========== */}
            <Eskills
              skill="PhotoShop"
              skillImg={<DiPhotoshop className="skill-img" />}
            />
            <Eskills skill="Git" skillImg={<DiGit className="skill-img" />} />
            <Eskills
              skill="Github"
              skillImg={<DiGithubBadge className="skill-img" />}
            />
            {/* ========== Skills End ========== */}
          </div>
        </div>
        {/* ==================== Experience Info Container Right ==================== */}
      </div>
    </section>
  );
};

export default Experience;
