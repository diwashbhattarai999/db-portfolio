import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import "./Social.css";
import "../../DarkMode.css";

const RightSocial = () => {
  const [scroll, setScroll] = useState(false);
  const [darkMode, setDarkMode] = useState("light");

  /* ========== SCROLL DOWN AND UP ========== */

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setScroll(true);
      else setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
  });
  const href = scroll ? "#" : "#about";
  /* ========== END SCROLL DOWN AND UP ========== */

  /* ========== DARK MODE ========== */
  document.body.className = darkMode;
  const handleClick = () => {
    darkMode === "light" ? setDarkMode("dark") : setDarkMode("light");
  };

  /* ========== END DARK MODE ========== */

  return (
    <div className="social__container social__right">
      <div className="social__line"></div>

      {darkMode === "light" ? (
        <MdOutlineDarkMode
          className="dark__mode social__link"
          onClick={handleClick}
        />
      ) : (
        <MdDarkMode className="dark__mode social__link" onClick={handleClick} />
      )}
      <a href={href} className="scroll__down">
        {scroll ? "Scroll Up" : "Scroll Down"}
      </a>

      <div className="social__line"></div>
    </div>
  );
};

export default RightSocial;
