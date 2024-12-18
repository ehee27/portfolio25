import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import { Vortex } from "@/components/ui/Vortex";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>

    // </main>
  );
}
