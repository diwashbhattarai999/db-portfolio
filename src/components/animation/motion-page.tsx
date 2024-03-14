// "use client";

// import { motion } from "framer-motion";

// interface MotionPageProps {
//   children: React.ReactNode;
// }

// const MotionPage = ({ children }: MotionPageProps) => {
//   const anim = (
//     variants: typeof expand | typeof opacity,
//     custom: number | null = null
//   ) => {
//     return {
//       initial: "initial",
//       animate: "enter",
//       exit: "exit",
//       custom,
//       variants,
//     };
//   };

//   const nbOfColumns: number = 5;

//   return (
//     <div>
//       <motion.div
//         {...anim(opacity)}
//         className="fixed w-full h-screen bg-page-transition z-40 pointer-events-none top-0 left-0"
//       />

//       <div className="fixed w-screen h-screen flex left-0 top-0 pointer-events-none z-50">
//         {[...Array(nbOfColumns)].map((_, i) => {
//           return (
//             <motion.div
//               key={i}
//               {...anim(expand, nbOfColumns - i)}
//               className="relative h-full w-full bg-page-transition"
//             />
//           );
//         })}
//       </div>
//       {children}
//     </div>
//   );
// };

// export default MotionPage;

// export const expand = {
//   initial: {
//     top: 0,
//   },

//   enter: (i: number) => ({
//     top: "100vh",
//     transition: {
//       duration: 0.4,
//       delay: 0.05 * i,
//       ease: [0.215, 0.61, 0.355, 1],
//     },
//     transitionEnd: { height: "0", top: "0" },
//   }),

//   exit: (i: number) => ({
//     height: "100vh",
//     transition: {
//       duration: 0.4,
//       delay: 0.05 * i,
//       ease: [0.215, 0.61, 0.355, 1],
//     },
//   }),
// };

// export const opacity = {
//   initial: {
//     opacity: 0.5,
//   },

//   enter: {
//     opacity: 0,
//   },

//   exit: {
//     opacity: 0.5,
//   },
// };

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
        className="fixed top-0 left-0 w-full h-screen bg-secondary origin-bottom z-50 pointer-events-none"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-secondary origin-top z-50 pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* <motion.div
          className="absolute top-0 left-0 w-full h-screen bg-page-transition origin-bottom z-40 pointer-events-none grid place-items-center"
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
            className="font-bold text-6xl text-foreground z-50"
          >
            {label}
          </motion.h1>
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 w-full h-screen bg-page-transition origin-top z-40 pointer-events-none"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1 }}
        /> */}
    </AnimatePresence>
  );
};

export default MotionPage;
