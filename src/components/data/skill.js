import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { DiReact, DiGit, DiGithubBadge } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

const skills = [
  {
    id: 1,
    logo: <AiFillHtml5 className="skill-img" style={{ color: "#e34c26" }} />,
    text: "Html",
  },
  {
    id: 2,
    logo: <DiCss3 className="skill-img" style={{ color: "#264de4" }} />,
    text: "css",
  },
  {
    id: 3,
    logo: <SiTailwindcss className="skill-img" style={{ color: "#38bdf8" }} />,
    text: "tailwind css",
  },
  {
    id: 4,
    logo: (
      <IoLogoJavascript className="skill-img" style={{ color: "#F0DB4F" }} />
    ),
    text: "JavaScript",
  },
  {
    id: 5,
    logo: <DiReact className="skill-img" style={{ color: "#61DBFB" }} />,
    text: "react",
  },
  {
    id: 6,
    logo: <SiNextdotjs className="skill-img" style={{ color: "#000" }} />,
    text: "Next.js",
  },
  {
    id: 7,
    logo: <TbBrandTypescript className="skill-img" style={{ color: "#fff" }} />,
    text: "TypScript",
  },
  {
    id: 8,
    logo: <SiMongodb className="skill-img" style={{ color: "#4DB33D" }} />,
    text: "MongoDB",
  },
  {
    id: 9,
    logo: <IoLogoNodejs className="skill-img" style={{ color: "#68a063" }} />,
    text: "Node.js",
  },
  {
    id: 10,
    logo: <SiExpress className="skill-img" style={{ color: "#000" }} />,
    text: "Express.js",
  },
  {
    id: 11,
    logo: <DiGit className="skill-img" style={{ color: "#F1502F" }} />,
    color: "#264de4",
    text: "git",
  },
  {
    id: 12,
    logo: <DiGithubBadge className="skill-img" style={{ color: "#f0f6fc " }} />,
    text: "github",
  },
];

export default skills;
