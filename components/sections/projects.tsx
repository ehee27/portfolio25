"use client";
import { projectsData } from "@/projectData";
import Link from "next/link";
import Image from "next/image";
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
      className="flex flex-col justify-center items-center gap-8 md:gap-2 bg-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full md:h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <h2 className="text-5xl text-white font-serif font-bold">Projects</h2>
      {/* <ParallaxScroll projects={projectsData} /> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 md:mt-10">
        {projects?.map((project: ProjectValues, i: Key | null | undefined) => (
          <div key={i} className="relative group m-2">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-green-500 to-blue-800 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-100"></div>
            <div className="flex flex-col relative px-5 md:px-10 py-6 bg-black rounded-xl text-white">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={70}
                className="rounded"
              />
              <p className="text-xl mt-5 font-serif font-bold">
                {project.title}
              </p>
              <p className="text-sm mt-3">{project.description}</p>
              <Link href={project.link} target="_blank">
                <button className="flex justify-center items-center rounded py-1 text-zinc-700 bg-white mt-4 text-xs font-bold w-[100px]">
                  View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
