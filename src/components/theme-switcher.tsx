"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { THEMES } from "@/constants";
import useOnClickOutside from "@/hooks/use-on-click-outside";

export default function ThemeSwitcher() {
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

  return (
    <div className="relative z-50" ref={themeRef}>
      <Button onclick={handleTheme} icon>
        {resolvedTheme === "dark" ? (
          <MoonIcon size={22} />
        ) : (
          <SunIcon size={22} />
        )}
      </Button>
      {isThemeOpen && (
        <ul className="absolute right-0 top-14 bg-accent flex flex-col gap-2 w-[128px] rounded-md py-2 px-1">
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
      )}
    </div>
  );
}
