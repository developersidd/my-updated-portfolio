'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { projects, categories } from '@/lib/data';
import ProjectItem from './ProjectItem';

export function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = projects.filter(p => activeTab === 'All' || p.category === activeTab);

  return (
    <section className="py-24 bg-black relative border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work across different technology stacks.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === category 
                  ? 'bg-white text-black' 
                  : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <ProjectItem project={project} key={project.id} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
