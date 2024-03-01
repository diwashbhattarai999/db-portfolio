import { useState } from "react";
import CV from "../../assets/DB-Resume.pdf";
import NavSocial from "./NavSocial";

const NavLinks = ({ setIsOpen }) => {
  const [navActive, setNavActive] = useState("#home");
  return (
    <div className="nav__links">
      <a
        href="#about"
        className={`nav__link ${navActive === "#about" ? "active" : ""}`}
        onClick={() => {
          setNavActive("#about");
          setIsOpen(false);
        }}
      >
        About
      </a>
      <a
        href="#experience"
        className={`nav__link ${navActive === "#skills" ? "active" : ""}`}
        onClick={() => {
          setNavActive("#skills");
          setIsOpen(false);
        }}
      >
        Skills
      </a>
      <a
        href="#portfolio"
        className={`nav__link ${navActive === "#portfolio" ? "active" : ""}`}
        onClick={() => {
          setNavActive("#portfolio");
          setIsOpen(false);
        }}
      >
        Portfolio
      </a>
      <a
        href="#contact"
        className={`nav__link ${navActive === "#contact" ? "active" : ""}`}
        onClick={() => {
          setNavActive("#contact");
          setIsOpen(false);
        }}
      >
        Contact
      </a>
      <a href={CV} target="__blank" rel="noreferrer" className="btn">
        Resume
      </a>

      <NavSocial />
    </div>
  );
};

export default NavLinks;
