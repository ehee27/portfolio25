"use client";
import Image from "next/image";
import scott from "/public/scott.png";
import { Vortex } from "../ui/Vortex";

const logos = [
  {
    src: "/javascript.webp",
    alt: "javascript logo",
    height: 130,
    width: 130,
    mobileHeight: 50,
    mobileWidth: 50,
  },
  {
    src: "/React.webp",
    alt: "react logo",
    height: 110,
    width: 110,
    mobileHeight: 40,
    mobileWidth: 40,
  },
  {
    src: "/next.webp",
    alt: "nextjs logo",
    height: 100,
    width: 100,
    mobileHeight: 40,
    mobileWidth: 40,
  },
  {
    src: "/Typescript.png",
    alt: "typescript logo",
    height: 100,
    width: 100,
    mobileHeight: 40,
    mobileWidth: 40,
  },
  {
    src: "/Tailwind.png",
    alt: "tailwind logo",
    height: 110,
    width: 110,
    mobileHeight: 40,
    mobileWidth: 40,
  },
  {
    src: "/aws.png",
    alt: "aws logo",
    height: 130,
    width: 130,
    mobileHeight: 40,
    mobileWidth: 40,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="w-[100vw] mx-auto rounded-md  h-[70vh] overflow-hidden"
    >
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={150}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-[100vw]">
          <div>
            {/* <Image
              src={scott}
              alt="scott lucas"
              height={170}
              width={170}
              className="rounded-full hidden md:block"
            /> */}
            {/* ------------ MOBILE ---------------------- */}
            <Image
              src={scott}
              alt="scott lucas"
              height={150}
              width={150}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl md:text-6xl font-black text-center tracking-wider font-serif">
              Scott Lucas
            </h2>
            <p className="text-xs md:text-lg tracking-wider mt-2 font-serif">
              Full Stack Dev | Athlete | Artist | Kansas Citian | Funny Dude
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-8 mt-6 md:flex">
          {logos?.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              height={logo.height}
              width={logo.width}
              // className="hidden md:block"
            />
          ))}
        </div>
        <div className="flex items-center gap-4 mt-6 sm:block md:hidden">
          {logos?.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              height={logo.mobileHeight}
              width={logo.mobileWidth}
              // className="sm:block md:hidden"
            />
          ))}
        </div>
      </Vortex>
    </section>
  );
}
