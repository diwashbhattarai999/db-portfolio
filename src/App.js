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
        <main className="db__main">
          <About />
          <Experience />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
