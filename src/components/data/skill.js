import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact, DiPhotoshop, DiGit, DiGithubBadge } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

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
    logo: (
      <IoLogoJavascript className="skill-img" style={{ color: "#F0DB4F" }} />
    ),
    text: "JavaScript",
  },
  {
    id: 4,
    logo: <DiReact className="skill-img" style={{ color: "#61DBFB" }} />,
    text: "react",
  },
  {
    id: 5,
    logo: <SiTailwindcss className="skill-img" style={{ color: "#38bdf8" }} />,
    text: "tailwind css",
  },
  {
    id: 6,
    logo: <DiPhotoshop className="skill-img" style={{ color: "#31a8ff" }} />,
    text: "Photoshop",
  },
  {
    id: 7,
    logo: <DiGit className="skill-img" style={{ color: "#F1502F" }} />,
    color: "#264de4",
    text: "git",
  },
  {
    id: 8,
    logo: <DiGithubBadge className="skill-img" style={{ color: "#f0f6fc " }} />,
    text: "github",
  },
];

export default skills;

