import { useRef } from "react";
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

function App() {
  const contentRef = useRef();

  return (
    <div className="db__portfolio">
      <Nav contentRef={contentRef} />
      <LeftSocial />
      <RightSocial />
      <div id="content" ref={contentRef}>
        <Header />
        <main>
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
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
