import "./Social.css";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const LeftSocial = () => {
  return (
    <div className="social__container social__left">
      <BsGithub  className="social__link"/>
      <BsLinkedin className="social__link"/>
      <BsInstagram className="social__link"/>

      <div className="social__line"></div>
    </div>
  );
};

export default LeftSocial;
