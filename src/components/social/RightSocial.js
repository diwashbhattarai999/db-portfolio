import { BsLightningFill } from "react-icons/bs";
import "./Social.css";

const RightSocial = () => {
  return (
    <div className="social__container social__right">
      <BsLightningFill className="dark__mode social__link"/>
      <a href="#about" className="scroll__down">Scroll down</a>
      <div className="social__line"></div>
    </div>
  );
};

export default RightSocial;
