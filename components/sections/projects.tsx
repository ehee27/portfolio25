"use client";
import { ParallaxScroll } from "../ui/Parallax-Scroll";
import kcHomes from "/public/kcHomes.png";
import mahartwork from "/public/mahartwork.png";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center gap-10 bg-black"
    >
      <h2 className="text-5xl text-white font-serif font-bold">Projects</h2>
      <ParallaxScroll projects={projects} />
    </section>
  );
}

const projects = [
  {
    image: kcHomes,
    link: "https://www.espn.com",
    title: "Project 1 Title",
  },
  {
    image: mahartwork,
    link: "https://www.espn.com",
    title: "Project 2 Title",
  },
  {
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    link: "https://www.espn.com",
    title: "Project 3 Title",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    link: "https://www.espn.com",
    title: "Project 4 Title",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    link: "https://www.espn.com",
    title: "Project 5 Title",
  },
  {
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    link: "https://www.espn.com",
    title: "Project 6 Title",
  },
];
