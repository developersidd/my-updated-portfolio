'use client';

import { motion } from 'motion/react';
import { Database, Layout, Server, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6 text-cyan-400" />,
    skills: ["Javascript",  "React js", "Next.js",  "Redux Toolkit", ]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 text-emerald-400" />,
    skills: ["Node.js", "Express", "Python", "Django", ]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    skills: ["React Native", "Expo",]
  },
  {
    title: "Database & Cloud",
    icon: <Database className="w-6 h-6 text-yellow-400" />,
    skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"]
  }
];

export function Skills() {
  return (
    <section className="py-24 bg-black relative border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive skill set across the modern stack, enabling end-to-end product development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map(skill => (
                  <li key={skill} className="flex items-center text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
