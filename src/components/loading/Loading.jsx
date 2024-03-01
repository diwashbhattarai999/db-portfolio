import "./Loading.css";
import { motion } from "framer-motion";
import {
  loadingAnimation,
  loadingCircle,
  loadingPara,
} from "../../animation/animation";

const Loading = () => {
  return (
    <motion.div
      className="db__main loading"
    >
      <div className="loading__header">
        <motion.div
          className="loading__circle"
          variants={loadingCircle}
          animate="loadingFirst"
        ></motion.div>
        <motion.h1
          variants={loadingAnimation}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
        >
          Loading
        </motion.h1>
        <motion.div
          className="loading__circle"
          variants={loadingCircle}
          animate="loadingSecond"
        ></motion.div>
      </div>
      <motion.div
        className="line"
        variants={loadingAnimation}
        initial="hidden"
        animate="show"
      ></motion.div>
      <motion.h2
        variants={loadingAnimation}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3 }}
      >
        Welcome To My Portfolio
      </motion.h2>
      <div
        className="loading-texts"
        variants={loadingAnimation}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.6 }}
      >
        <motion.p variants={loadingPara} animate="para">
          Developer
        </motion.p>
        <motion.p variants={loadingPara} animate="para">
          Designer
        </motion.p>
        <motion.p variants={loadingPara} animate="para">
          Programmer
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loading;
