import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import {
  GalleryHorizontal,
  Home,
  MailQuestion,
  UserCircleIcon,
} from "lucide-react";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import Footer from "@/components/Footer";
import { NavBar } from "@/components/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: (
      <UserCircleIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Projects",
    link: "#projects",
    icon: (
      <GalleryHorizontal className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <MailQuestion className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* <FloatingNav navItems={navItems} /> */}
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
