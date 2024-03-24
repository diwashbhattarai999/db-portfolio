"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

interface MotionPageProps {
  children: React.ReactNode;
  label?: string;
}

const MotionPage = ({ children, label }: MotionPageProps) => {
  return (
    <AnimatePresence mode="wait">
      {children}

      <motion.div
        className="fixed top-0 left-0 z-50 w-full h-screen origin-bottom pointer-events-none bg-secondary"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="fixed top-0 left-0 z-50 w-full h-screen origin-top pointer-events-none bg-secondary"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* <motion.div
          className="absolute top-0 left-0 z-40 grid w-full h-screen origin-bottom pointer-events-none bg-page-transition place-items-center"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1 }}
        >
          <motion.h1
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 0, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1 }}
            className="z-50 text-6xl font-bold text-foreground"
          >
            {label}
          </motion.h1>
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 z-40 w-full h-screen origin-top pointer-events-none bg-page-transition"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1 }}
        /> */}
    </AnimatePresence>
  );
};

export default MotionPage;
