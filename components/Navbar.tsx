"use client";

import { Code2 } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

export function Navbar() {
  useEffect(function toggleNavClassesOnScroll() {
    // scroll listener
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (window.scrollY > 60) {
        navbar?.classList.add(
          "bg-[#080808]/80",
          "backdrop-blur-sm",
          "shadow-lg",
          "border-b",
        );
      } else {
        navbar?.classList.remove(
          "bg-[#080808]/80",
          "backdrop-blur-sm",
          "shadow-lg",
          "border-b",
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.2,
      }}
      className="fixed top-0 left-0 right-0 z-50  border-gray-800"
    >
      <div className="container md:mx-auto px-4 h-20 flex items-center justify-between w-screen">
        <div className="flex items-center space-x-2 text-white font-bold text-xl">
          <Code2 className="w-6 h-6 text-emerald-400" />
          <span>AB SIDDIk</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
        <a
          href="https://drive.google.com/uc?export=download&id=1lyAH0qkAF7G3EWdWhKs7nz2GLfZjt6K0"
          download
          className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
