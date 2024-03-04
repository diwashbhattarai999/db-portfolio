"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CircleUserRound, LogOut } from "lucide-react";

import { logout } from "@/actions/logout";

import { ADMIN_LINKS } from "@/constants";

import MotionList from "@/components/motion-list";
import MotionSidebar from "@/components/motion-sidebar";
import ThemeSwitcher from "@/components/theme-switcher";

const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const pathname = usePathname().split("/")[2];

  const handleLogout = () => {
    logout();
  };

  return (
    <div
      onMouseEnter={() => setExpandSidebar(true)}
      onMouseLeave={() => {
        setExpandSidebar(false);
        setProfileOpen(false);
      }}
      className={`bg-border rounded-r-2xl h-screen p-5 md:p-8 cursor-pointer transition-all duration-500 flex flex-col items-start justify-between  overflow-hidden z-0 ${
        expandSidebar ? "w-56" : "w-16 md:w-24"
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
            <div key={link.href} onClick={() => setProfileOpen(false)}>
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
                    className={`text-sm rounded-md p-3 hover:bg-muted transition-colors w-28 ${
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
      <div className="w-full group relative z-0">
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
              className="absolute z-50 -top-[11rem] left-0 bg-accent rounded-md py-3 px-2 w-40 text-primary-foreground"
            >
              <div className="flex flex-col gap-2">
                <Link
                  href="/admin/settings"
                  className="flex items-center gap-3 px-2 rounded-md font-medium transition-colors hover:text-foreground hover:bg-muted"
                >
                  <CircleUserRound className="py-3 w-auto h-11" />
                  <h3>Profile</h3>
                </Link>
                <div
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-2 rounded-md font-medium transition-colors hover:text-foreground hover:bg-muted"
                >
                  <LogOut className="py-3 w-auto h-11" />
                  <h3>Logout</h3>
                </div>

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
