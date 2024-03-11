"use client";

import { useEffect, RefObject } from "react";

const useBlurBody = (
  elementRef: RefObject<HTMLElement>,
  condition: boolean
): void => {
  useEffect(() => {
    const body = document.body;
    if (elementRef.current && condition) {
      elementRef.current.classList.add("bg-blur");
      body.style.overflow = "hidden";
    } else if (elementRef.current) {
      elementRef.current.classList.remove("bg-blur");
      body.style.overflow = "";
    }
  }, [elementRef, condition]);
};

export default useBlurBody;
