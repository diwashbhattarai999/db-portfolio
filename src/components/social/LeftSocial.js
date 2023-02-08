import "./Social.css";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const LeftSocial = () => {
  return (
    <div className="social__container social__left">
      <BsGithub />
      <BsLinkedin />
      <BsInstagram />

      <div className="social__line"></div>
    </div>
  );
};

export default LeftSocial;
