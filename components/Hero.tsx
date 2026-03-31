'use client';

import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

const codeSnippet = `> Initializing developer profile...
> Loading skills...
> [OK] MERN Stack loaded.
> [OK] React Native loaded.
> [OK] Python & Django loaded.
> [OK] TypeScript & Redux loaded.
> System ready.
> Hello, World! I am a Full Stack Developer.`;

export function Hero() {
  const [text, setText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(codeSnippet.slice(0, i));
      i++;
      if (i > codeSnippet.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Radiant Blur Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-black to-black" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Digital</span> Experiences
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl">
              Full Stack Developer specializing in MERN, React Native, Python, and Django. Building scalable applications from end to end.
            </p>
          </motion.div>

          {/* CMD Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl overflow-hidden border border-gray-800 bg-black/50 backdrop-blur-md shadow-2xl relative z-20"
          >
            <div className="flex items-center px-4 py-3 border-b border-gray-800 bg-gray-900/80">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto flex items-center text-xs text-gray-500 font-mono">
                <Terminal className="w-3 h-3 mr-2" />
                developer.exe
              </div>
            </div>
            <div className="p-6 font-mono text-sm text-emerald-400 h-64 overflow-y-auto whitespace-pre-wrap bg-black/80">
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-emerald-400 ml-1 align-middle"
              />
            </div>
          </motion.div>
        </div>

        {/* Animated 3D Model Representation */}
        <div className="relative h-[500px] hidden lg:flex items-center justify-center perspective-[1200px]">
          <motion.div
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="relative w-72 h-72 transform-style-3d"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* 3D Cube Faces */}
            <div className="absolute inset-0 border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm flex items-center justify-center text-emerald-400 font-mono text-3xl font-bold shadow-[0_0_30px_rgba(16,185,129,0.2)]" style={{ transform: 'translateZ(144px)' }}>REACT</div>
            <div className="absolute inset-0 border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm flex items-center justify-center text-cyan-400 font-mono text-3xl font-bold shadow-[0_0_30px_rgba(6,182,212,0.2)]" style={{ transform: 'rotateY(180deg) translateZ(144px)' }}>NODE</div>
            <div className="absolute inset-0 border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm flex items-center justify-center text-blue-400 font-mono text-3xl font-bold shadow-[0_0_30px_rgba(59,130,246,0.2)]" style={{ transform: 'rotateY(90deg) translateZ(144px)' }}>PYTHON</div>
            <div className="absolute inset-0 border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm flex items-center justify-center text-purple-400 font-mono text-3xl font-bold shadow-[0_0_30px_rgba(168,85,247,0.2)]" style={{ transform: 'rotateY(-90deg) translateZ(144px)' }}>DJANGO</div>
            <div className="absolute inset-0 border border-yellow-500/30 bg-yellow-500/5 backdrop-blur-sm flex items-center justify-center text-yellow-400 font-mono text-3xl font-bold shadow-[0_0_30px_rgba(234,179,8,0.2)]" style={{ transform: 'rotateX(90deg) translateZ(144px)' }}>MONGO</div>
            <div className="absolute inset-0 border border-red-500/30 bg-red-500/5 backdrop-blur-sm flex items-center justify-center text-red-400 font-mono text-3xl font-bold shadow-[0_0_30px_rgba(239,68,68,0.2)]" style={{ transform: 'rotateX(-90deg) translateZ(144px)' }}>REDUX</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
