import { projects } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-8x">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
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
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Overview</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </section>
            
            <section className='w-full md:col-span-3'>
              <h2 className="text-2xl font-bold mb-6 text-white">Project Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery?.map((img, i) => (
                  <div key={i} className="relative h-48 rounded-xl overflow-hidden border border-gray-800">
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
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
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-lg font-bold mb-4 text-white">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1.5 text-sm rounded-lg bg-gray-800 text-gray-300 border border-gray-700">
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
