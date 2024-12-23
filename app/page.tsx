import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import { Vortex } from "@/components/ui/Vortex";

export default function Home() {
  return (
    // <main className="flex flex-col border-8 border-red-500">

    //   <Hero />
    //   <About />
    //   <div className="border-8 h-[30vh]">
    //     <p>Content</p>
    //   </div>
    //   <div className="border-8 h-[30vh]">
    //     <p>Content</p>
    //   </div>

    //   <div id="projects" className="border-8 h-[30vh]">
    //     <p>Content</p>
    //   </div>
    // </main>
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
