import React, { useState } from "react";
import "./Nav.css";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import CV from "../../assets/DiwashCv.pdf";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const [menuIcon, setMenuIcon] = useState(false);

  const changeBackground = () => {
    window.scrollY > 0 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener("scroll", changeBackground);

  const navActive = navbar ? "nav__container active" : "nav__container";

  const handleMenu = () => {
    setMenuIcon((prevMenuIcon) => !prevMenuIcon);
  };

  const showNavLinks = menuIcon ? "nav__links" : "nav__links nav__close";
  console.log(showNavLinks)

  return (
    <nav className={navActive}>
      <a href="#home" className="nav__logo">DB</a>
      <div className={showNavLinks}>
        <a href="#about" className="nav__link">
          About
        </a>
        <a href="#experience" className="nav__link">
          Experience
        </a>
        <a href="#portfolio" className="nav__link">
          Portfolio
        </a>
        <a href="#contact" className="nav__link">
          Contact
        </a>
        <a href={CV} target="__blank" className="btn">
          Resume
        </a>
      </div>
      <div className="nav__menu">
        {menuIcon ? (
          <RxCross2 className="nav__menu-icon" onClick={handleMenu} />
        ) : (
          <CgMenuRight className="nav__menu-icon" onClick={handleMenu} />
        )}
      </div>
    </nav>
  );
};

export default Nav;

