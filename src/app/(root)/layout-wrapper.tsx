"use client";

import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import React, { useRef } from "react";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Navbar contentRef={contentRef} />
      <div className="flex flex-col min-h-screen" ref={contentRef}>
        <div className="flex-1 mt-[62px]">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default LayoutWrapper;
