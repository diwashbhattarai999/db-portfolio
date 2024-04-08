"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCursorPosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
    }
  }, []);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="pointer-events-none inset-0 z-0 transition duration-300 fixed sm:absolute"
      style={{
        background: isMounted
          ? theme === "dark"
            ? `radial-gradient(600px at ${cursorPosition.x}px ${
                typeof window !== "undefined" &&
                cursorPosition.y + window.scrollY
              }px, rgba(29, 78, 216, 0.122), transparent 80%)`
            : `radial-gradient(600px at ${cursorPosition.x}px ${
                typeof window !== "undefined" &&
                cursorPosition.y + window.scrollY
              }px, rgba(150, 191, 213, 0.247), transparent 80%)`
          : ``,
      }}
    />
  );
};

export default CustomCursor;
