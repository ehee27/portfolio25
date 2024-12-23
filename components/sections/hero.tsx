"use client";
import Image from "next/image";
import { Vortex } from "../ui/Vortex";
import { WavyBackground } from "../ui/WavyBackground";
import scott from "/public/scott.png";
import reactLogo from "/public/React.webp";
import nextLogo from "/public/next.webp";
import typescriptLogo from "/public/Typescript.png";
import jsLogo from "/public/javascript.webp";

const logos = [
  { logo: reactLogo },
  { logo: nextLogo },
  { logo: typescriptLogo },
];

export default function Hero() {
  return (
    // <section>
    //   <WavyBackground className="max-w-4xl mx-auto pb-40">
    //     <p className="text-xl md:text-7xl lg:text-7xl text-white font-bold inter-var text-center font-serif">
    //       TwoSeven
    //     </p>
    //     <p className="text-base md:text-xl mt-4 text-white font-normal inter-var text-center">
    //       Full stack software engineer
    //     </p>
    //     {/* <TextGenerateEffect words={text} className="text-white" /> */}
    //   </WavyBackground>
    //   {/* <TextGenerateEffect words={text} /> */}
    // </section>
    // <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
    <section className="w-[100vw] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={100}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <div className="flex justify-center gap-8 w-[100vw]">
          <div>
            <Image
              src={scott}
              alt="scott lucas"
              height={170}
              width={170}
              className="rounded-full"
            />
          </div>
          <div className="flex justify-center items-center">
            <h2 className="text-white text-2xl md:text-6xl font-bold text-center font-serif">
              Scott Lucas
            </h2>
          </div>
        </div>

        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Full stack software engineer. JS, React, NextJS, Typescript, AWS
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Image
            src={jsLogo}
            alt="react logo"
            height={130}
            width={130}
            className="rounded-full"
          />
          <Image
            src={reactLogo}
            alt="react logo"
            height={130}
            width={130}
            className="rounded-full"
          />
          <Image
            src={nextLogo}
            alt="react logo"
            height={130}
            width={130}
            className="rounded-full"
          />
          <Image
            src={typescriptLogo}
            alt="react logo"
            height={110}
            width={110}
          />
          {/* <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button> */}
        </div>
      </Vortex>
    </section>
  );
}
