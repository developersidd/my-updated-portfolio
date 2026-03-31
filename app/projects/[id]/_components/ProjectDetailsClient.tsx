"use client";
import { projects } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, ZapIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "./LightBox";
function ProjectDetailsClient({ project }: { project: (typeof projects)[0] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12">
      <AnimatePresence>
        {lightboxIndex !== null && project.gallery && (
          <Lightbox
            images={project.gallery}
            initialIndex={lightboxIndex}
            title={project.title}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 max-w-8xl">
        <Link
          href="/#projects"
          className="inline-flex items-center text-gray-400 hover:text-emerald-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Hero Image */}
        <div className="relative w-full h-[55vh] md:h-[75vh] rounded-3xl overflow-hidden mb-12 border border-gray-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className=""
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Overview</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </section>

            {/* Gallery with lightbox trigger */}
            <section className="w-full">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery?.map((img, i) => (
                  <motion.button
                    key={i}
                    onClick={() => openLightbox(i)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative h-48 rounded-xl overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition-colors duration-300 group cursor-zoom-in text-left"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full">
                        View
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
              <p className="text-gray-600 text-xs mt-3">
                Click any image to open gallery
              </p>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-400">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mr-3 mt-0.5">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <ZapIcon className="w-5 h-5 text-amber-400" />
                  <h2 className="text-2xl font-bold text-white">
                    Challenges & Solutions
                  </h2>
                </div>
                <div className="space-y-4">
                  {project.challenges.map((challenge, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="group relative p-6 rounded-2xl border border-gray-800 bg-gray-900/30 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300"
                    >
                      {/* Number badge */}
                      <span className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-gray-900 border border-gray-700 group-hover:border-amber-500/40 text-gray-500 group-hover:text-amber-400 text-xs font-bold flex items-center justify-center transition-colors duration-300">
                        {i + 1}
                      </span>

                      {typeof challenge === "string" ? (
                        <p className="text-gray-400 leading-relaxed">
                          {challenge}
                        </p>
                      ) : (
                        <div className="space-y-3">
                          <h3 className="text-white font-semibold text-base">
                            {challenge.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed text-sm">
                            {challenge.description}
                          </p>
                          {challenge.solution && (
                            <div className="flex items-start gap-2 pt-1">
                              <span className="flex-shrink-0 mt-0.5 px-2 py-0.5 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Solution
                              </span>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {challenge.solution}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-lg font-bold mb-4 text-white">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-sm rounded-lg bg-gray-800 text-gray-300 border border-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetailsClient;
