"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { text, curve, translate, AnimationVariants } from "./anim";

interface Dimensions {
  width: number | null;
  height: number | null;
}

interface CurveProps {
  children: React.ReactNode;
  label: string;
}

const anim = (variants: AnimationVariants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

const Curve = ({ children, label }: CurveProps) => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="curve">
        <div
          style={{ opacity: dimensions.width == null ? 1 : 0 }}
          className="background"
        />
        <motion.p
          className="route"
          style={{ opacity: dimensions.width == null ? 1 : 0 }}
          {...(anim(text) as {
            variants: Variants;
            initial: string;
            animate: string;
            exit: string;
          })}
        >
          {label || "Not Found"}
        </motion.p>
        {dimensions.width != null && dimensions.height != null && (
          <SVG height={dimensions.height} width={dimensions.width} />
        )}
        {children}
      </div>
    </AnimatePresence>
  );
};

const SVG = ({ height, width }: { height: number; width: number }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};

export default Curve;
