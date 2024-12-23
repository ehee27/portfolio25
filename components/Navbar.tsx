import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export function NavBar() {
  return (
    <>
      <header className="flex flex-col justify-center items-center shadow-lg fixed w-full bg-zinc-900/60 py-2 z-10">
        <div className="flex w-[100%]">
          <div className=" pl-10 w-[50%]">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold flex-shrink-0 text-lg mr-auto"
            >
              {/* <Image src={ninja} alt="ninja-logo" height={60} /> */}
              <p className="text-white font-black text-3xl font-serif">
                TwoSeven
              </p>
            </Link>
          </div>
          <nav className="flex justify-center items-center gap-10 container text-white w-[40%]">
            <Link href="#about" className="text-lg">
              About
            </Link>
            <Link href="#projects" className="text-lg">
              Projects
            </Link>
            <Link href="#contact" className="text-lg">
              Contact
            </Link>
          </nav>
          <div className="flex justify-center items-center gap-2 w-[10%]">
            <Link href="https://github.com/ehee27" target="_blank">
              <IoLogoGithub className="text-3xl text-green-400 hover:scale-125 ease-in transition-all" />
            </Link>
            <Link href="https://www.linkedin.com/in/sjlucas/" target="_blank">
              <FaLinkedin className="text-3xl text-green-600 hover:scale-125 ease-in transition-all" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
