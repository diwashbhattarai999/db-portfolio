import { useRef } from "react";
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  LeftSocial,
  Nav,
  Portfolio,
  RightSocial,
  Services,
  Testimonials,
} from "./components";

function App() {
  const contentRef = useRef();

  return (
    <div className="db__portfolio">
      <Nav contentRef={contentRef} />
      <LeftSocial />
      <RightSocial />
      <div id="content" ref={contentRef}>
        <main className="db__main">
          <Header />
          <About />
          {/* <Experience />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer /> */}
        </main>
      </div>
    </div>
  );
}

export default App;
