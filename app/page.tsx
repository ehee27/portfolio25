import Projects from "@/components/sections/projects";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/Vortex";
import { WavyBackground } from "@/components/ui/WavyBackground";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          SCOTT LUCAS
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          My Portfolio Sub-Title
        </p>
      </WavyBackground>
      <Projects />
    </>

    // </main>
  );
}
