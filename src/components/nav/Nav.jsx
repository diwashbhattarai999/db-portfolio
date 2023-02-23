import React, { useEffect, useRef, useState } from "react";
import "./Nav.css";
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
import NavLinks from "./NavLinks";

const Nav = ({ contentRef }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

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
    isOpen
      ? (contentRef.current.className = "blur")
      : (contentRef.current.className = "");
  });
  /* ==================== Blur Bg End ==================== */

  /* =============== Body Scroll=============== */
  if (isOpen) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";
  /* =============== Body Scroll End =============== */

  return (
    <nav
      ref={navRef}
      className={`nav__container  ${showNavbar ? "active" : "hidden"}`}
    >
      <Link to="/" className="nav__logo">
        DB
      </Link>
      <div className={isOpen === false && "nav__close"} ref={linkRef}>
        <NavLinks setIsOpen={setIsOpen} />
      </div>
      <div
        ref={hamRef}
        className="nav__menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <RxCross2 className="nav__menu-icon" />
        ) : (
          <CgMenuRight className="nav__menu-icon" />
        )}
      </div>
    </nav>
  );
};

export default Nav;
