"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import ABSiddik from "../assets/images/ab-siddik.jpeg";
const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Django",
  "React Native",
  "TypeScript",
  "MongoDB",
];

 function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808] pt-[100px] sm:pt-36  pb-24">
      <div className="absolute inset-0 w-full h-full  bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.07),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col items-center gap-4"
        >  
          {/* Avatar */}
          <motion.div
            initial="initial"
            whileHover="hovered"
            className="relative group"
          >
            {/*  Add zoom effect on Image on hover div */}
            <motion.div
              variants={{
                initial: { scale: 1 },
                hovered: { scale: 1.03 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="size-36  rounded-full  
            border-4 border-[rgba(16,185,129,0.8)]
            flex items-center justify-center text-2xl font-bold shadow-[0_0_40px_rgba(16,185,129,0.35)]"
            >
              <Image
                src={ABSiddik}
                alt="AB Siddik"
                width={500}
                height={500}
                className="group-hover:scale-[107%] transition-transform size-full rounded-full object-cover border-4 border-[rgba(16,185,129,0.02)]"
              />
            </motion.div>
            {/* Online dot */}
            <span className="absolute bottom-2.5 right-1.5 size-7  bg-black rounded-full border-8 border-[rgb(16,185,129)] " />
          </motion.div>
          {/* Name */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm mb-8">
            <span className="flex w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Building the future with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
              Modern Technologies
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            A passionate Full Stack Developer crafting seamless mobile and web
            experiences using MERN, React Native, Python, and Django.
          </p>
          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <a href="#projects" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-emerald-300 transition-colors duration-200 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              
              View Projects
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              
            </a>
            <a href="#contact" className="px-7 py-3.5 rounded-full border border-white/10 text-white/70 text-sm font-medium hover:border-white/25 hover:text-white transition-all duration-200">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
        {/* ── Tech stack pills ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 max-w-lg mb-10 mx-auto"
        >
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.06 }}
              className="px-3 py-1 rounded-full border border-white/[0.07] bg-white/[0.03] text-gray-400 text-xs font-mono hover:border-emerald-500/30 hover:text-emerald-400 transition-colors duration-200 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-emerald-400/60 to-transparent"
        />
        <span className="text-gray-700 text-[10px] tracking-widest uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
export default Hero;