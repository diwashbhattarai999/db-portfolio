import React, { useEffect, useRef, useState } from "react";
import "./Nav.css";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import CV from "../../assets/DiwashCv.pdf";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-scroll";
// import Hamburger from "hamburger-react";

const Nav = ({ contentRef }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const [navActive, setNavActive] = useState("#home");

  const navRef = useRef(null);
  const linkRef = useRef(null);
  const hamRef = useRef(null);

  /* ==================== Click Outside Close ==================== */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (linkRef.current && !linkRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  /* ==================== Click Outside Close End ==================== */

  /* ==================== Scroll Navbar ==================== */
  useEffect(() => {
    if (!isOpen) {
      const handleScroll = () => {
        if (typeof window !== "undefined") {
          if (window.scrollY > 500) {
            if (window.scrollY > lastScrollY) {
              setShowNavbar(false);
            } else {
              setShowNavbar(true);
            }
            navRef.current.style.boxShadow = "1px 1px 10px #7070701a";
            navRef.current.style.backgroundColor = "var(--nav-secondary)";
          } else {
            navRef.current.style.boxShadow = "";
            navRef.current.style.backgroundColor = "var(--nav-primary)";
          }

          setLastScrollY(window.scrollY);
        }
      };

      if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll);

        // CleanUp Function
        return () => window.removeEventListener("scroll", handleScroll);
      }
    }
  }, [lastScrollY, isOpen]);
  /* ==================== Scroll Navbar End ==================== */

  /* ==================== Blur Bg ==================== */
  useEffect(() => {
    if (isOpen) contentRef.current.className = "blur";
    else contentRef.current.className = undefined;
  });
  /* ==================== Blur Bg End ==================== */

  /* =============== Body Scroll=============== */
  if (isOpen) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";
  /* =============== Body Scroll End =============== */

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      ref={navRef}
      className={`nav__container  ${showNavbar ? "active" : "hidden"}`}
    >
      <Link
        to="home"
        className="nav__logo"
        onClick={() => {
          setNavActive("#home");
        }}
      >
        DB
      </Link>
      <div
        className={`nav__links ${isOpen === false ? "nav__close" : ""}`}
        ref={linkRef}
      >
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

        <div className="nav__social">
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
        </div>
      </div>
      <div ref={hamRef} className="nav__menu">
        {/* <Hamburger
          className="nav__menu-icon"
          toggled={isOpen}
          toggle={setIsOpen}
          size="25"
        /> */}
        {isOpen ? (
          <RxCross2 className="nav__menu-icon nav__menu-icon-close" onClick={handleMenu} />
        ) : (
          <CgMenuRight className="nav__menu-icon nav__menu-icon-open" onClick={handleMenu} />
        )}
      </div>
    </nav>
  );
};

export default Nav;
