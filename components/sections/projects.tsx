"use client";
import { projectsData } from "@/projectData";
import Link from "next/link";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import { ParallaxScroll } from "../ui/Parallax-Scroll";
import { Key, useState, useEffect } from "react";

interface ProjectValues {
  title: string;
  image: string;
  description: string;
  link: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Array<ProjectValues>>([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center gap-10 bg-black"
    >
      <h2 className="text-5xl text-white font-serif font-bold">Projects</h2>
      {/* <ParallaxScroll projects={projectsData} /> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {projects?.map((project: ProjectValues, i: Key | null | undefined) => (
          <BackgroundGradient
            key={i}
            className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 text-white"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={280}
              height={50}
              className="rounded-md"
            />
            <p className="text-xl font-bold font-serif mt-5">{project.title}</p>

            <p className="text-sm">{project.description}</p>
            <button className="flex justify-center items-center rounded-xl py-1 text-white bg-black mt-4 text-xs font-bold w-[100px]">
              View
            </button>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
}

//   return (
//     <section
//       id="projects"
//       className="flex flex-col justify-center items-center gap-10 bg-black h-screen w-[100vw] border-8 border-red-500"
//     >
//       <h2 className="text-5xl text-white font-serif font-bold">Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
//         {projects?.map((project: ProjectValues, i: Key | null | undefined) => (
//           <BackgroundGradient
//             key={i}
//             className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 text-white"
//           >
//             <Image
//               src={project.image}
//               alt={project.title}
//               width={280}
//               height={50}
//               className="rounded-md"
//             />
//             <p className="text-xl font-bold font-serif mt-5">{project.title}</p>

//             <p className="text-sm">{project.description}</p>
//             <button className="flex justify-center items-center rounded-xl py-1 text-white bg-black mt-4 text-xs font-bold w-[100px]">
//               View
//             </button>
//           </BackgroundGradient>
//         ))}
//       </div>
//     </section>
//   );
// }
