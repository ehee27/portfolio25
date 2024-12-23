"use client";
import { projectsData } from "@/projectData";
import Link from "next/link";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
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
      className="flex flex-col justify-center items-center gap-8 md:gap-2 bg-black px-10 md:px-20 py-20 md:py-2 md:h-screen overflow-y-scroll"
    >
      <h2 className="text-5xl text-white font-serif font-bold">Projects</h2>
      {/* <ParallaxScroll projects={projectsData} /> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 md:mt-10">
        {projects?.map((project: ProjectValues, i: Key | null | undefined) => (
          <BackgroundGradient
            key={i}
            className="rounded-[22px] max-w-sm p-8 bg-zinc-900 text-white"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={280}
              height={50}
              className="rounded-xl"
            />
            <p className="text-xl font-black mt-5">{project.title}</p>

            <p className="text-sm mt-3">{project.description}</p>
            <Link href={project.link} target="_blank">
              <button className="flex justify-center items-center rounded py-1 text-zinc-700 bg-white mt-4 text-xs font-bold w-[100px]">
                View
              </button>
            </Link>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
}
