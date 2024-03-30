"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Resume } from "@prisma/client";

import { NAV_LINKS } from "@/constants";

import useOnClickOutside from "@/hooks/use-on-click-outside";
import useScreenInnerWidth from "@/hooks/use-screen-inner-width";
import useBlurBody from "@/hooks/use-blur-body";

import Container from "@/components/Container";
import ThemeSwitcher from "@/components/theme-switcher";
import MobileMenu from "@/components/ui/mobile-menu";
import MotionDiv from "@/components/animation/motion-div";
import MotionList from "@/components/animation/motion-list";

interface NavbarProps {
  contentRef: React.RefObject<HTMLDivElement>;
  resume: Resume | null | undefined;
}

const Navbar = ({ contentRef, resume }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navLinkActive, setNavLinkActive] = useState(
    usePathname().split("/")[1]
  );
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const handleMenu = () => {
    setIsMenuOpen((currentValue) => !currentValue);
  };

  const handleNavLinkActive = (label: string) => {
    setNavLinkActive(label.toLowerCase());
  };

  const screenWidth = useScreenInnerWidth();
  useBlurBody(contentRef, isMenuOpen && screenWidth <= 768);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isMenuOpen]);

  useOnClickOutside(menuRef, () => {
    setIsMenuOpen(false);
  });

  return (
    <nav
      ref={navRef}
      className="h-[62px] border-b border-b-border backdrop-blur bg-background/90 fixed w-full top-0 z-30"
    >
      <MotionDiv
        className="h-full"
        delayOffset={0}
        initial={{ y: -10, opacity: 0 }}
      >
        <Container className="h-full flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-[2rem] tracking-[-8px] text-foreground"
            onClick={() => setNavLinkActive("")}
          >
            D<span className="text-primary-foreground">B</span>
          </Link>

          <div className="flex max-md:hidden lg:gap-24 gap-16 text-sm font-medium">
            <ul className="flex gap-4 items-center justify-between">
              {NAV_LINKS.map((link) => {
                return (
                  <li
                    key={link.label + link.path}
                    onClick={() => handleNavLinkActive(link.label)}
                  >
                    <Link
                      href={link.path}
                      className={`p-2 rounded-md hover:bg-muted transition ease-linear duration-300 ${
                        navLinkActive === link.label.toLowerCase() && "bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href={resume?.url || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-border rounded-md hover:bg-muted duration-300 cursor-pointer"
            >
              Resume
            </Link>
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
      </MotionDiv>
    </nav>
  );
};

export default Navbar;
