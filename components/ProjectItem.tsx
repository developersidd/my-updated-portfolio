import { ProjectType } from "@/types";
import { ArrowRight, ExternalLink, Github, Maximize2 } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProjectViewModal from "./ProjectViewModal";

const ProjectItem = ({ project }: { project: ProjectType }) => {
  const {
    title,
    description,
    image,
    fullSizeImage,
    github,
    live,
    id,
    category,
    tech
  } = project || {}
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => setShowModal(true);
  const hideModalHandler = () => setShowModal(false);

  return (
    <>
      <ProjectViewModal
        showModal={showModal}
        onClose={hideModalHandler}
        title={title}
        description={description}
        imageUrl={fullSizeImage || image}
      />
      <motion.div
        key={id}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="group rounded-2xl bg-gray-900/50 border border-gray-800 overflow-hidden hover:border-gray-700 transition-colors flex flex-col"
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-top transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <button
              className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform cursor-pointer"
              onClick={showModalHandler}
            >
              <Maximize2 className="size-5" />
            </button>
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            {
              github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform"
            >
              <Github className="w-5 h-5" />
            </a>
            )}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wider">
            {category}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs rounded-md bg-gray-800 text-gray-300"
              >
                {t}
              </span>
            ))}
            {tech.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-md bg-gray-800 text-gray-500">
                +{tech.length - 3}
              </span>
            )}
          </div>
          <Link
            href={`/projects/${id}`}
            className="inline-flex items-center text-sm font-semibold text-white hover:text-emerald-400 transition-colors mt-auto"
          >
            View Details <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectItem;
