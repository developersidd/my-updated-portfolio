'use client';

import { motion } from 'motion/react';

export function Hero2() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black py-24">
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
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
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Building the future with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
              Modern Technologies
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            A passionate Full Stack Developer crafting seamless mobile and web experiences using MERN, React Native, Python, and Django.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
              View Projects
            </button>
            <button className="px-8 py-4 rounded-full border border-gray-700 text-white font-semibold hover:bg-gray-800 transition-colors">
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
