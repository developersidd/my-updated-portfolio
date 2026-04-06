'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import AbSiddik from "../assets/images/ab-siddik.jpeg"
export function About() {
  return (
    <section id="about" className="py-24 bg-black relative border-t border-gray-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image with animated border */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md aspect-square"
          >
            
            <div className="absolute inset-1 rounded-[22px] overflow-hidden bg-gray-900 border-3 border-emerald-400">
              <Image
                src={AbSiddik}
                alt="Muhammad Abu Bakkar Siddik"
                fill
                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              {/*<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />*/}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Me</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
             I am a full-stack developer with hands-on experience across the MERN stack, Python, Django, and React Native. My journey began with building dynamic web applications using MongoDB, Express, React, and Node.js, and has since grown to encompass server-side development with Django and cross-platform mobile development with React Native — giving me the versatility to work across the full spectrum of modern application development.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
             I am driven by a problem-solving mindset and a commitment to writing code that is not only functional but scalable and maintainable. As a developer who is continuously learning and evolving, I am eager to bring my skills to a professional environment where I can tackle meaningful challenges and grow alongside a forward-thinking team.
            </p>
            
            {/*<div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">5+</h4>
                <p className="text-gray-500 uppercase text-sm font-semibold tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">50+</h4>
                <p className="text-gray-500 uppercase text-sm font-semibold tracking-wider">Projects Completed</p>
              </div>
            </div>*/}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
