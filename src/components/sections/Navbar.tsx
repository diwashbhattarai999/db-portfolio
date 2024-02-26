"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { NAV_LINKS } from "@/constants";

import Container from "@/components/Container";
import ThemeSwitcher from "@/components/theme-switcher";
import { Menu, X } from "lucide-react";
import MobileMenu from "../ui/mobile-menu";
import useOnClickOutside from "@/hooks/use-on-click-outside";

interface NavbarProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const Navbar = ({ contentRef }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navLinkActive, setNavLinkActive] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenu = () => {
    setIsMenuOpen((currentValue) => !currentValue);
  };

  const handleNavLinkActive = (label: string) => {
    setNavLinkActive(label);
  };

  useEffect(() => {
    if (contentRef.current && isMenuOpen) {
      contentRef.current.classList.add("blur");
    } else if (contentRef.current) {
      contentRef.current.classList.remove("blur");
    }
  }, [contentRef, isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isMenuOpen]);

  useOnClickOutside(menuRef, () => {
    setIsMenuOpen(false);
  });

  return (
    <nav className="h-[62px] border-b border-b-border backdrop-blur bg-transparent fixed w-full top-0">
      <Container className="h-full flex items-center justify-between max-w-[1024px]">
        <Link
          href="/"
          className="font-bold text-3xl text-foreground tracking-[-8px] hover:text-primary-foreground"
        >
          D{" "}
          <span className="text-primary-foreground hover:text-foreground">
            B
          </span>
        </Link>
        <div className="flex max-md:hidden lg:gap-24 gap-16 text-sm">
          <ul className="flex gap-4 items-center justify-between">
            {NAV_LINKS.map((link) => {
              return (
                <li
                  key={link.label + link.path}
                  onClick={() => handleNavLinkActive(link.label)}
                >
                  <Link
                    href={link.path}
                    className={`p-2 rounded-md hover:text-secondary-foreground transition ease-linear duration-300 ${
                      navLinkActive === link.label && "bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="p-2 border border-accent rounded-md hover:bg-muted duration-300 cursor-pointer">
            Resume
          </p>
        </div>
        <div className="flex gap-4 items-center z-50" ref={menuRef}>
          <ThemeSwitcher />
          <div
            className="md:hidden flex flex-col gap-1 px-2 py-1 rounded-sm cursor-pointer hover:bg-muted duration-300 z-50"
            onClick={handleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>

          <MobileMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            navLinkActive={navLinkActive}
            handleNavLinkActive={handleNavLinkActive}
          />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
