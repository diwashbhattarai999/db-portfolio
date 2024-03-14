"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";

import { logout } from "@/actions/logout";

import { ADMIN_LINKS } from "@/constants";

import { cn } from "@/lib/utils";

import { useCurrentUser } from "@/hooks/use-current-user";

import MotionList from "@/components/animation/motion-list";
import MotionSidebar from "@/components/animation/motion-sidebar";
import ThemeSwitcher from "@/components/theme-switcher";

const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const pathname = usePathname().split("/")[2];

  const handleLogout = () => {
    logout();
  };

  const user = useCurrentUser();

  return (
    <div
      onMouseEnter={() => setExpandSidebar(true)}
      onMouseLeave={() => {
        setExpandSidebar(false);
        setProfileOpen(false);
      }}
      className={cn(
        "bg-primary md:rounded-r-2xl h-fit md:min-h-screen p-5 md:p-8 md:py-10 md:cursor-pointer md:transition-all md:duration-500 flex md:flex-col items-center md:items-start justify-between z-20 left-0 w-full sticky top-0 md:left-0",
        expandSidebar ? "md:w-[260px]" : "md:w-28"
      )}
    >
      {/* Logo */}
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

      {/* Admin Links */}
      <MotionList delayOffset={0} className="hidden md:flex flex-col gap-6">
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

      {/* User Profile */}
      <div className="md:w-full group md:relative">
        <div className="w-full">
          <MotionSidebar delayOffset={0}>
            <Image
              src={user?.image || "/images/default-profile.png"}
              alt="profile"
              width={100}
              height={100}
              className="h-9 w-9 rounded-full group-hover:opacity-70 cursor-pointer"
              onClick={() => setProfileOpen((currValue) => !currValue)}
            />
          </MotionSidebar>
          {profileOpen && (
            <MotionSidebar
              delayOffset={0}
              className="absolute z-50 top-16 md:-top-[12rem] right-5 md:right-0 md:left-0 bg-accent rounded-md py-3 px-2 w-40 text-primary-foreground"
            >
              <div className="flex flex-col gap-2">
                <MotionSidebar
                  delayOffset={0}
                  className="flex md:hidden flex-col gap-2"
                >
                  {ADMIN_LINKS.map((link) => {
                    return (
                      <Link
                        key={link.href}
                        href={`/admin/${link.href}`}
                        onClick={() => setProfileOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-2 rounded-md font-medium transition-colors hover:text-foreground hover:bg-muted",
                          pathname === link.href && "text-foreground"
                        )}
                      >
                        <link.icon className="py-3 w-auto h-11" />
                        {expandSidebar && <p>{link.label}</p>}
                      </Link>
                    );
                  })}
                </MotionSidebar>

                <hr className="md:hidden my-2 bg-muted" />

                <MotionSidebar delayOffset={0}>
                  <ThemeSwitcher admin />
                </MotionSidebar>

                <MotionSidebar delayOffset={0}>
                  <div
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-2 rounded-md font-medium transition-colors hover:text-foreground hover:bg-muted cursor-pointer"
                  >
                    <LogOut className="py-3 w-auto h-11" />
                    <h3>Logout</h3>
                  </div>
                </MotionSidebar>

                <MotionSidebar delayOffset={0}>
                  <h3 className="px-2 py-3 rounded-md font-medium text-secondary-foreground">
                    @{user?.email?.split("@")[0]}
                  </h3>
                </MotionSidebar>
              </div>
            </MotionSidebar>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
