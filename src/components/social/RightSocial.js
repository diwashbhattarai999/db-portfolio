import { BsLightningFill } from "react-icons/bs";
import "./Social.css";

const RightSocial = () => {
  return (
    <div className="social__container social__right">
      <BsLightningFill className="dark__mode"/>
      <div className="scroll__down">Scroll down</div>
      <div className="social__line"></div>
    </div>
  );
};

export default RightSocial;
