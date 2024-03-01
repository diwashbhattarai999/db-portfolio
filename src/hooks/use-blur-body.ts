"use client";
import { useEffect } from "react";

const useBlurBody = (
  elementRef: React.RefObject<HTMLDivElement>,
  condition: boolean
) => {
  useEffect(() => {
    if (elementRef.current && condition) {
      elementRef.current.classList.add("blur");
    } else if (elementRef.current) {
      elementRef.current.classList.remove("blur");
    }
  }, [elementRef, condition]);
};

export default useBlurBody;
