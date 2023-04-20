import { useEffect, useRef, useState } from "react";
import {
  About,
  Contact,
  Footer,
  Header,
  LeftSocial,
  Nav,
  Portfolio,
  RightSocial,
  Experience,
} from "./components";
import { motion } from "framer-motion";
import Loading from "./components/loading/Loading";

function App() {
  const contentRef = useRef();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("load", setLoading(false));
    }, 1500);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <motion.div className="db__portfolio" initial="hidden" animate="show">
      <Nav contentRef={contentRef} />
      <LeftSocial />
      <RightSocial />
      <div id="content" ref={contentRef}>
        <Header />
        <div className="db__main db__about">
          <About />
        </div>
        <div className="db__main db__experience">
          <Experience />
        </div>
        <div className="db__main db__portfolio">
          <Portfolio />
        </div>
        <div className="db__main db__contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </motion.div>
  );
}

export default App;
