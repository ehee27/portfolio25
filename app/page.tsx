import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
