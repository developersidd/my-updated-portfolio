import React from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Muhammad Abu Bakkar Siddik. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/developersidd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
             <Github />
            </Link>
            <a
              href="https://www.linkedin.com/in/ab-siddik-95902a225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
