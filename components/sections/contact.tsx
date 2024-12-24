"use client";
import React from "react";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { Vortex } from "../ui/Vortex";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-[60vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md"
    >
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={100}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20 font-serif">
            Contact Me Anytime
          </h1>
          <Button className="z-10 mt-5 font-bold bg-white hover:bg-white/60 transition-all w-[200px] rounded">
            Connect
            <Mail />
          </Button>
        </div>
      </Vortex>
    </section>
  );
}
