"use client";

import { ADMIN_LINKS } from "@/constants";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MotionList from "../motion-list";
import MotionDiv from "../motion-div";
import MotionSidebar from "../motion-sidebar";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState(false);
  const pathname = usePathname().split("/")[2];

  return (
    <div
      onMouseEnter={() => setExpandSidebar(true)}
      onMouseLeave={() => setExpandSidebar(false)}
      className={`bg-border rounded-r-2xl h-screen p-5 md:p-8 cursor-pointer transition-all duration-500 flex flex-col items-start justify-between w-16 ${
        expandSidebar ? "md:w-56" : "md:w-24"
      }`}
    >
      <MotionDiv>
        <Link
          href="/admin"
          className="font-bold text-3xl tracking-[-8px] text-foreground hover:text-primary-foreground"
        >
          D
          <span className="text-primary-foreground hover:text-foreground">
            B
          </span>
        </Link>
      </MotionDiv>
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
      <MotionDiv>
        {/* //TODO: Add user profile and logout button when hovering instead of icon below*/}
        <CircleUserRound />
      </MotionDiv>
    </div>
  );
};

export default Sidebar;
