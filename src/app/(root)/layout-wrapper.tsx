"use client";

import React, { useRef } from "react";

import { Resume } from "@prisma/client";

import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

interface LayoutWrapperProps {
  resume?: Resume | null;
  children: React.ReactNode;
}

const LayoutWrapper = ({ children, resume }: LayoutWrapperProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Navbar resume={resume} contentRef={contentRef} />
      <div className="flex flex-col min-h-screen" ref={contentRef}>
        <div className="flex-1 mt-[62px]">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default LayoutWrapper;
