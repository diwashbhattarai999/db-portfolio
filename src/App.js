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
  return (
    <div className="main">
      <Nav />
      <LeftSocial />
      <RightSocial />
      <Header />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
