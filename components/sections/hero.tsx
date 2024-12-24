"use client";
import Image from "next/image";
import scott from "/public/scott.png";
import reactLogo from "/public/React.webp";
import nextLogo from "/public/next.webp";
import typescriptLogo from "/public/Typescript.png";
import jsLogo from "/public/javascript.webp";
import tailwindLogo from "/public/Tailwind.png";
import awsLogo from "/public/aws.png";
import { Vortex } from "../ui/Vortex";

// const logos = [
//   { logo: reactLogo },
//   { logo: nextLogo },
//   { logo: typescriptLogo },
// ];

export default function Hero() {
  return (
    <section className="w-[100vw] mx-auto rounded-md  h-[70vh] overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={150}
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
          <div className="flex flex-col justify-center items-center text-white">
            <h2 className="text-2xl md:text-6xl font-black text-center tracking-wider font-serif">
              SCOTT LUCAS
            </h2>
            <p className="text-md tracking-wider mt-2">
              Full Stack Dev | Athlete | Artist | Kansas Citian | Funny Dude
            </p>
          </div>
        </div>
        {/* <div className="flex justify-center items-center w-[100vw] mt-5">
          <p className="text-white text-sm md:text-2xl text-center">
            JS, React, NextJS, Typescript, AWS
          </p>
        </div> */}

        <div className="flex flex-col sm:flex-row items-center gap-8 mt-6">
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
            height={110}
            width={110}
            className="rounded-full"
          />
          <Image
            src={nextLogo}
            alt="react logo"
            height={100}
            width={100}
            className="rounded-full"
          />
          <Image src={typescriptLogo} alt="react logo" height={90} width={90} />
          <Image src={tailwindLogo} alt="react logo" height={110} width={110} />
          <Image src={awsLogo} alt="react logo" height={130} width={130} />
          {/* <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Order now
          </button>
          <button className="px-4 py-2  text-white ">Watch trailer</button> */}
        </div>
      </Vortex>
    </section>
  );
}
