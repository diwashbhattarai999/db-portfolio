import React, { useEffect, useRef, useState } from "react";
import "./Nav.css";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import CV from "../../assets/DiwashCv.pdf";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = ({ contentRef }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [menuIcon, setMenuIcon] = useState(false);

  const [navActive, setNavActive] = useState("#home");

  const navRef = useRef();
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
    if (!menuIcon) {
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
  }, [lastScrollY, menuIcon]);
  /* ==================== Scroll Navbar End ==================== */

  /* ==================== Blur Bg ==================== */
  useEffect(() => {
    if (menuIcon) contentRef.current.className = "blur";
    else contentRef.current.className = undefined;
  });
  /* ==================== Blur Bg End ==================== */

  const handleMenu = (e) => {
    menuIcon ? setMenuIcon(false) : setMenuIcon(true);
  };

  /* =============== Body Scroll=============== */
  if (menuIcon) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";
  /* =============== Body Scroll End =============== */

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
          setMenuIcon(false);
        }}
      >
        DB
      </Link>
      <div className={`nav__links ${!menuIcon && "nav__close"}`} ref={linkRef}>
        <a
          href="#about"
          className={`nav__link ${navActive === "#about" ? "active" : ""}`}
          onClick={() => {
            setNavActive("#about");
            setMenuIcon(false);
          }}
        >
          About
        </a>
        <a
          href="#experience"
          className={`nav__link ${navActive === "#skills" ? "active" : ""}`}
          onClick={() => {
            setNavActive("#skills");
            setMenuIcon(false);
          }}
        >
          Skills
        </a>
        <a
          href="#portfolio"
          className={`nav__link ${navActive === "#portfolio" ? "active" : ""}`}
          onClick={() => {
            setNavActive("#portfolio");
            setMenuIcon(false);
          }}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className={`nav__link ${navActive === "#contact" ? "active" : ""}`}
          onClick={() => {
            setNavActive("#contact");
            setMenuIcon(false);
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
      <div className="nav__menu" onClick={handleMenu}>
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
