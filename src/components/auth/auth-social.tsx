"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Google, GitHub } from "@/components/ui/Icons";

const AUTH_SOCIAL_LINKS = [
  {
    label: "Google",
    icon: Google,
  },
  {
    label: "Projects",
    icon: GitHub,
  },
];

const AuthSocial = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full flex items-center justify-between gap-4">
      {AUTH_SOCIAL_LINKS.map((link) => {
        return (
          <div
            key={link.label}
            className="w-full bg-border flex items-center justify-center p-3 rounded-md cursor-pointer hover:bg-accent duration-300"
          >
            <link.icon
              fillColor={
                isMounted
                  ? theme === "light"
                    ? "#1d1d1d"
                    : "#ebebeb"
                  : "#7c7c7c"
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default AuthSocial;
