"use client";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";

const NavLink = motion(Link);

const HomeButton = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}

      href={"/"}
      target={"_self"}
      className="text-foreground  rounded-full flex items-center justify-center custom-bg fixed left-4 top-4 w-fit self-start z-50"
      aria-label={"home"}
      name={"home"}
    >
      <span className="relative w-14 h-14 p-4  hover:text-accent">
        <Home className="w-full h-auto" strokeWidth={1.5} />
        <span className="peer bg-trasnaprent absolute top-0 left-0 w-full h-full" />
        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
          Home
        </span>
      </span>
    </NavLink>
  );
};

export default HomeButton;
