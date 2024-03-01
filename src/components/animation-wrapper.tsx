"use client";

import { AnimatePresence, motion, AnimationProps } from "framer-motion";

interface AnimationWrapper {
  keyValue?: string;
  initial?: AnimationProps["initial"];
  animate?: AnimationProps["animate"];
  transition?: AnimationProps["transition"];
  className?: string;
  children: React.ReactNode;
}

const AnimationWrapper = ({
  keyValue,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 0.5 },
  className,
  children,
}: AnimationWrapper) => {
  return (
    <AnimatePresence>
      <motion.div
        key={keyValue}
        initial={initial}
        animate={animate}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationWrapper;
