import { TextGenerateEffect } from "../ui/text-generate-effect";
import { WavyBackground } from "../ui/WavyBackground";

const text =
  "My name is Scott and I'm a lonely douche. My Butter Boy keeps me company but life is cruel and silly and amazing all at the same time, so ya, fuck off!";

export default function Hero() {
  return (
    <section>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-xl md:text-7xl lg:text-7xl text-white font-bold inter-var text-center font-serif">
          TwoSeven
        </p>
        <p className="text-base md:text-xl mt-4 text-white font-normal inter-var text-center">
          Full stack software engineer
        </p>
        {/* <TextGenerateEffect words={text} className="text-white" /> */}
      </WavyBackground>
      {/* <TextGenerateEffect words={text} /> */}
    </section>
  );
}
