"use client";

import React, { useRef } from "react";

import { Resume } from "@prisma/client";

import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import CustomCursor from "@/components/custom-cursor";
import Curve from "@/components/animation/motion-curve";

interface LayoutWrapperProps {
  resume?: Resume | null;
  children: React.ReactNode;
}

const LayoutWrapper = ({ children, resume }: LayoutWrapperProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <Curve label="Diwash Bhattarai">
      <div className="bg-background/90 z-10">
        <Navbar resume={resume} contentRef={contentRef} />
        <div className="flex flex-col min-h-screen relative" ref={contentRef}>
          <CustomCursor />
          <div className="flex-1 mt-[62px]">{children}</div>
          <Footer />
        </div>
      </div>
    </Curve>
  );
};

export default LayoutWrapper;
