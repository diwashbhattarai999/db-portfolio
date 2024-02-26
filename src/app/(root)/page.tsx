import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Container from "@/components/Container";

export default function HomePage() {
  return (
    <>
      <Container>
        <Home />
        <About />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}
