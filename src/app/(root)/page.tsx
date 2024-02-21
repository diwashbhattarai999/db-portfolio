import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Container from "@/components/ui/Container";

export default function HomePage() {
  return (
    <div className="flex-1">
      <Container>
        <Home />
        <About />
        <Projects />
        <Contact />
      </Container>
    </div>
  );
}
