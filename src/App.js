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
    <div className="main">
      <Nav contentRef={contentRef}/>
      <LeftSocial />
      <RightSocial />
      <div id="content" ref={contentRef}>
        <Header />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
