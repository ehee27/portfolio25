"use client";

import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";

interface LinkValues {
  title: string;
  href: string;
}

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
    <nav className="text-white m-0 pl-3 py-3 flex justify-around items-center w-[100%] bg-black">
      {/* // LOGO ----------------------------------------- */}
      <div className="flex items-center gap-2 w-[50%]">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold flex-shrink-0 text-lg mr-auto"
        >
          <p className="text-white font-black text-3xl font-serif">TwoSeven</p>
        </Link>
      </div>
      {/* // MENU ----------------------------------------- */}
      <div
        className={`absolute right-0 flex justify-center items-center px-5 min-h-[60vh] w-full md:static md:min-h-fit md:w-auto ${
          displayMenu ? "top-[0%] bg-black/90" : "top-[-100%] bg-transparent"
        } transition-all duration-500 w-[50%] z-10`}
      >
        <div className="flex flex-col gap-8 justify-right items-center md:flex-row md:gap-[4vw] w-[100%]">
          {links.map((item, i) => {
            return (
              <Link
                className="flex justify-center text-lg md:text-lg border-2 border-transparent p-1 rounded-md hover:border-orange-500 transition-all w-[50%]"
                key={i}
                href={item.href}
                onClick={() => setDisplayMenu(false)}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
      {/* // BUTTON ----------------------------------------- */}
      <div className="p-2 flex gap-8 items-center">
        {/* <button className="bg-orange-400 p-1 rounded">Button</button> */}
        <TiThMenu
          onClick={toggleMenu}
          className="text-xl cursor-pointer md:hidden z-10"
        />
      </div>
    </nav>
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
  );
}
