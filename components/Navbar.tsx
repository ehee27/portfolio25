"use client";

import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";

// interface LinkValues {
//   title: string;
//   href: string;
// }

const links = [
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export function NavBar() {
  const [displayMenu, setDisplayMenu] = useState(false);
  //
  const toggleMenu = () => {
    setDisplayMenu(!displayMenu);
    //
  };
  return (
    <nav className="bg-black text-white fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex flex-row w-full items-center">
            <div className="text-xl font-bold w-[50%]">
              <Link href="#home">TWOSEVEN</Link>
            </div>
            <div className="hidden md:block w-[50%]">
              <div className="flex justify-end gap-4 ml-10 items-baseline space-x-2 w-[80%]">
                {links?.map((link, i) => (
                  <Link key={i} href={link.href}>
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex gap-2">
                <Link href="https://github.com/ehee27" target="_blank">
                  <IoLogoGithub className="text-3xl hover:scale-125 transition-all duration-100 text-green-600 hover:text-green-300" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sjlucas/"
                  target="_blank"
                >
                  <FaLinkedin className="text-3xl hover:scale-125 transition-all duration-100 text-green-600 hover:text-green-300" />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <TiThMenu
              onClick={toggleMenu}
              className="text-xl cursor-pointer md:hidden z-10"
            />
          </div>
        </div>
      </div>

      <div
        className={`w-full h-[400px] flex flex-col justify-center items-center gap-4 md:hidden px-4 py-10 bg-black/90 absolute ${
          displayMenu ? "top-14" : "top-[-1000%]"
        } transition-all duration-500`}
      >
        {links?.map((link, i) => (
          <Link
            className="text-xl rounded p-3"
            onClick={toggleMenu}
            key={i}
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
        <div className="flex gap-2 mt-10">
          <Link href="https://github.com/ehee27" target="_blank">
            <IoLogoGithub className="text-3xl hover:scale-125 transition-all duration-100 text-green-600 hover:text-green-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/sjlucas/" target="_blank">
            <FaLinkedin className="text-3xl hover:scale-125 transition-all duration-100 text-green-600 hover:text-green-300" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

// <header className="flex flex-col justify-center items-center shadow-lg fixed w-full bg-zinc-900/60 py-2 z-10 font-serif">
//   <div className="flex w-[100%]">
//     <div className=" pl-10 w-[50%]">
//       <Link
//         href="/"
//         className="flex items-center gap-2 font-semibold flex-shrink-0 text-lg mr-auto"
//       >
//         {/* <Image src={ninja} alt="ninja-logo" height={60} /> */}
//         <p className="text-white font-black text-3xl font-serif">
//           TwoSeven
//         </p>
//       </Link>
//     </div>
//     <nav className="flex justify-center items-center gap-10 container text-white w-[40%]">
//       {links?.map((link, i) => (
//         <Link key={i} href={link.href}>
//           {link.title}
//         </Link>
//       ))}
//     </nav>
//     <div className="flex justify-center items-center gap-2 w-[10%]">
//       <Link href="https://github.com/ehee27" target="_blank">
//         <IoLogoGithub className="text-3xl text-white hover:scale-125 ease-in transition-all" />
//       </Link>
//       <Link href="https://www.linkedin.com/in/sjlucas/" target="_blank">
//         <FaLinkedin className="text-3xl text-white hover:scale-125 ease-in transition-all" />
//       </Link>
//     </div>
//   </div>
// </header>
