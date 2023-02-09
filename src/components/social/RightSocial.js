import { useEffect, useState } from "react";
import { BsLightningFill } from "react-icons/bs";
import "./Social.css";

const RightSocial = () => {
  const [scroll, setScroll] = useState(false);
  
  useEffect(() => {

    const handleScroll = () => {
      if(window.scrollY > 100)
        setScroll(true)
      else
        setScroll(false)
    }

    window.addEventListener('scroll', handleScroll);
  })
  const href = scroll ? "#" : "#about"; 
  console.log(href)

  return (
    <div className="social__container social__right">
      <BsLightningFill className="dark__mode social__link" />
      <a href={href} className="scroll__down">
        {scroll ? "Scroll Up" : "Scroll Down"}
      </a>
      <div className="social__line"></div>
    </div>
  );
};

export default RightSocial;
