"use client";

import { useEffect, useState } from "react";

const useScreenInnerWidth = () => {
  const [innerWidth, setInnerWidth] = useState(
    typeof window === "object" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return innerWidth;
};

export default useScreenInnerWidth;
