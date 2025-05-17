import { AnimatedSection } from "@/components/AnimatedSection";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Aashis - Full-Stack Web Developer`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  const paths = await getAllProjectSlugs();
  return paths.map(path => ({
    slug: path.slug
  }));
}

export default async function ProjectPage({ params }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <AnimatedSection>
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Project Image */}
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Project Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-xl text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-md bg-gray-900 px-6 py-3 text-white transition-colors hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <FiExternalLink className="mr-2 h-5 w-5" />
                View Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                <FiGithub className="mr-2 h-5 w-5" />
                View Source Code
              </a>
            </div>
          </div>

          {/* Project Details */}
          <div className="prose prose-lg mx-auto max-w-none dark:prose-invert">
            <h2>Project Overview</h2>
            <p>
              This is a detailed explanation of the {project.title} project. In a
              real portfolio, this would include information about the project
              goals, challenges, solutions, and outcomes.
            </p>

            <h2>The Challenge</h2>
            <p>
              The main challenge of this project was to create a modern,
              responsive design that works well on all devices while maintaining
              excellent performance and accessibility.
            </p>

            <h2>The Solution</h2>
            <p>
              I implemented a custom design using Next.js and Tailwind CSS,
              focusing on performance optimization and a great user experience.
              The project features a clean, intuitive interface with smooth
              animations and responsive layouts.
            </p>

            <h2>Technical Details</h2>
            <ul>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>

          {/* Back to Projects */}
          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              ← Back to All Projects
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
} 