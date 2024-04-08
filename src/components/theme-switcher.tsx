"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, ToggleLeft, ToggleRight } from "lucide-react";

import { THEMES } from "@/constants";

import useOnClickOutside from "@/hooks/use-on-click-outside";

import Button from "@/components/ui/Button";
import MotionDiv from "@/components/animation/motion-div";

export default function ThemeSwitcher({ admin }: { admin?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const themeRef = useRef<HTMLDivElement>(null);

  const { setTheme, resolvedTheme } = useTheme();

  useOnClickOutside(themeRef, () => {
    setIsThemeOpen(false);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleTheme = () => {
    setIsThemeOpen(!isThemeOpen);
  };

  const handleChangeTheme = (name: string) => {
    setIsThemeOpen(false);
    setTheme(name.toLowerCase());
  };

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (admin) {
    return (
      <div className="relative z-50 cursor-pointer" ref={themeRef}>
        <div
          onClick={handleToggleTheme}
          className="flex items-center gap-3 px-2 rounded-md font-medium transition-colors hover:text-foreground hover:bg-muted"
        >
          {resolvedTheme === "dark" ? (
            <>
              <ToggleLeft className="py-3 w-auto h-11" />
              <h3>Dark Mode</h3>
            </>
          ) : (
            <>
              <ToggleRight className="py-3 w-auto h-11" />
              <h3>Light Mode</h3>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-50" ref={themeRef}>
      <MotionDiv delayOffset={0}>
        <Button onClick={handleTheme} icon>
          {resolvedTheme === "dark" ? (
            <MoonIcon size={22} />
          ) : (
            <SunIcon size={22} />
          )}
        </Button>
      </MotionDiv>

      <ul
        className={`absolute right-0 bg-background dark:bg-secondary border border-primary flex flex-col gap-2 w-[128px] rounded-md py-2 px-1 duration-500 ease-in-out ${
          isThemeOpen
            ? "top-10 opacity-1 pointer-events-auto"
            : "top-8 opacity-0 pointer-events-none"
        }`}
      >
        {THEMES.map(({ label, Icon }) => {
          return (
            <li
              key={label + Icon}
              className="p-2 rounded-md text-sm font-medium flex gap-2 items-center justify-start hover:bg-muted cursor-pointer duration-300"
              onClick={() => handleChangeTheme(label)}
            >
              <Icon size={16} />
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
