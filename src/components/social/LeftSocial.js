import "./Social.css";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const LeftSocial = () => {
  return (
    <div className="social__container social__left">
      <div className="social__line"></div>

      <a
        href="https://github.com/diwashbhattarai999"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub className="social__link" />
      </a>

      <a
        href="https://www.linkedin.com/in/diwash-bhattarai-343a41202/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="social__link" />
      </a>

      <a
        href="https://www.instagram.com/diwash81/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram className="social__link" />
      </a>

      <div className="social__line"></div>
    </div>
  );
};

export default LeftSocial;
