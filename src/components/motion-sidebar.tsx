"use client";

import { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function MotionSidebar({
  children,
  delayOffset,
  className,
  ...props
}: {
  children: ReactNode;
  delayOffset?: number;
  className?: string;
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ x: -10, opacity: 0 }}
      animate={controls}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        delay: delayOffset,
        delayChildren: 1,
        staggerChildren: 0.2,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
