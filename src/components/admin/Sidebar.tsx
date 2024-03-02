"use client";

import { ADMIN_LINKS, ADMIN_PROFILE_LINKS } from "@/constants";
import { CircleUserRound, LogOut } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MotionList from "../motion-list";
import MotionSidebar from "../motion-sidebar";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeSwitcher from "../theme-switcher";

const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const pathname = usePathname().split("/")[2];

  return (
    <div
      onMouseEnter={() => setExpandSidebar(true)}
      onMouseLeave={() => {
        setExpandSidebar(false);
        setProfileOpen(false);
      }}
      className={`bg-border rounded-r-2xl h-screen p-5 md:p-8 cursor-pointer transition-all duration-500 flex flex-col items-start justify-between w-16 overflow-hidden ${
        expandSidebar ? "md:w-56" : "md:w-24"
      }`}
    >
      <MotionSidebar delayOffset={0}>
        <Link
          href="/admin"
          className="font-bold text-3xl tracking-[-8px] text-foreground hover:text-primary-foreground"
        >
          D
          <span className="text-primary-foreground hover:text-foreground">
            B
          </span>
        </Link>
      </MotionSidebar>
      <MotionList className="flex flex-col gap-6">
        {ADMIN_LINKS.map((link) => {
          return (
            <div key={link.href}>
              <Link
                href={`/admin/${link.href}`}
                className={`flex items-center gap-6 font-semibold text-lg transition-colors hover:text-foreground ${
                  pathname === link.href
                    ? "text-foreground"
                    : "text-secondary-foreground"
                }`}
              >
                <link.icon className="py-3 w-auto h-11" />
                {expandSidebar && (
                  <MotionSidebar
                    delayOffset={0.2}
                    className={`text-sm max-md:hidden rounded-md p-3 hover:bg-muted transition-colors w-28 ${
                      pathname === link.href && "bg-muted"
                    }`}
                  >
                    {link.label}
                  </MotionSidebar>
                )}
              </Link>
            </div>
          );
        })}
      </MotionList>
      <div className="w-full group relative">
        {/* //TODO: Add user profile and logout button when hovering instead of icon below*/}
        <div className="w-full">
          <MotionSidebar delayOffset={0}>
            <Image
              src="/images/profile.png"
              alt="profile"
              width={100}
              height={100}
              className="h-6 md:h-8 w-6 md:w-8 rounded-full group-hover:opacity-70"
              onClick={() => setProfileOpen((currValue) => !currValue)}
              onMouseEnter={() => setProfileOpen(true)}
            />
          </MotionSidebar>
          {profileOpen && (
            <MotionSidebar
              delayOffset={0.2}
              className="absolute -top-[10.8rem] left-0 bg-accent rounded-md py-3 px-2 w-40 text-primary-foreground"
            >
              <div className="flex flex-col gap-2">
                {ADMIN_PROFILE_LINKS.map((link) => {
                  return (
                    <Link
                      key={link.href}
                      href={`/admin/${link.href}`}
                      className="flex items-center gap-3 px-2 rounded-md font-medium transition-colors hover:text-foreground hover:bg-muted"
                    >
                      <link.icon className="py-3 w-auto h-11" />
                      <h3>{link.label}</h3>
                    </Link>
                  );
                })}
                <ThemeSwitcher admin />
              </div>
            </MotionSidebar>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
