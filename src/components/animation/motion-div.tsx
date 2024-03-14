"use client";

import { ReactElement, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface MotionDivProps {
  children: ReactElement | string;
  delayOffset?: number;
  initial?: { y: number; opacity: number };
  className?: string;
}

export default function MotionDiv({
  children,
  delayOffset,
  initial = { y: 50, opacity: 0 },
  className,
}: MotionDivProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={controls}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        delay: delayOffset,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}
