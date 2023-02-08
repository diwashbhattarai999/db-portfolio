import React, { useEffect, useRef, useState } from "react";
import "./Nav.css";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import CV from "../../assets/DiwashCv.pdf";

const Nav = ({ contentRef }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [menuIcon, setMenuIcon] = useState(false);

  const linkRef = useRef();
  /* ==================== Click Outside Close ==================== */

  useEffect((e) => {
    const handleNav = (e) => {
      if (!linkRef.current.contains(e.target)) {
        setMenuIcon(false);
      }
    };

    /* ==================== Click Outside Close End ==================== */

    document.addEventListener("mousedown", handleNav);
  });

  /* ==================== Scroll Navbar ==================== */

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }

        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // CleanUp Function
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollY]);

  /* ==================== Scroll Navbar End ==================== */

  /* ==================== Blur Bg ==================== */

  useEffect(() => {
    if (menuIcon) contentRef.current.className = "blur";
    else contentRef.current.className = undefined;
  });

  /* ==================== Blur Bg End ==================== */

  /* ==================== Mobile Navbar ==================== */
  const handleMenu = () => {
    setMenuIcon((prevMenuIcon) => !prevMenuIcon);
  };

  /* =============== Body Scroll=============== */
  if (menuIcon) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";
  /* =============== Body Scroll End =============== */

  const showNavLinks = menuIcon ? "nav__links" : "nav__links nav__close";

  /* ==================== Mobile Navbar End==================== */

  return (
    <nav className={`nav__container  ${showNavbar ? "active" : "hidden"}`}>
      <a href="#home" className="nav__logo">
        DB
      </a>
      <div className={showNavLinks} ref={linkRef}>
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
