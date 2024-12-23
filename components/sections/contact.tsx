"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md"
    >
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20 font-serif">
        Contact Me Anytime
      </h1>
      <Button className="z-10 mt-5 font-bold bg-white hover:bg-white/60 transition-all">
        Let's Connect
        <Mail />
      </Button>
    </section>
  );
}

// "use client";
// import React from "react";
// import { SparklesCore } from "../ui/sparkles";
// import { Button } from "../ui/button";
// import { Mail } from "lucide-react";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="relative bg-black flex flex-col items-center justify-center overflow-hidden w-[100vw] h-[50vh]"
//     >
//       <div className="w-full absolute inset-0 h-screen">
//         <SparklesCore
//           id="tsparticlesfullpage"
//           background="transparent"
//           minSize={0.6}
//           maxSize={1.4}
//           particleDensity={100}
//           className="w-full h-full"
//           particleColor="#FFFFFF"
//         />
//       </div>
//       <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20 font-serif">
//         Contact Me Anytime
//       </h1>
//       <Button className="mt-5 font-bold">
//         Let's Connect
//         <Mail />
//       </Button>
//     </section>
//   );
// }
