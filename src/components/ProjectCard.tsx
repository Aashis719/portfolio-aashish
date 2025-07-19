"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  slug: string;
}
 
export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-lg border   shadow-sm transition-all hover:shadow-md border-gray-700 bg-gray-800/50"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="mb-4  text-gray-300">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full  px-3 py-1 text-xs font-medium  bg-gray-700 text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-md  px-4 py-2 text-sm font-medium text-white transition-colors  bg-gray-700 hover:bg-gray-600"
          >
            View Details
          </Link>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border  px-4 py-2 text-sm font-medium transition-colors  border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
} 