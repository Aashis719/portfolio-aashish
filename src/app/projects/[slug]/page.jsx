import { AnimatedSection } from "@/components/AnimatedSection";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
{/* this is the project page where the project details are shown */}

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
      <div className="container mx-auto px-4 py-16 pt-24 sm:px-6 lg:px-8 lg:py-24">
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
            <p className="mx-auto mb-6 max-w-2xl text-xl text-gray-400">
              {project.description}
            </p>
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-4 py-2 text-sm font-medium bg-gray-800 text-gray-300"
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
                className="flex items-center rounded-md  px-8 py-3 text-white transition-colors  bg-gray-800 hover:bg-gray-700"
              >
                <FiExternalLink className="mr-2 h-5 w-5" />
                View Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-md border  px-6 py-3 transition-colors  border-gray-700 bg-gray-800 text-white hover:bg-gray-700"
              >
                <FiGithub className="mr-2 h-5 w-5" />
                View Source Code
              </a>
            </div>
          </div>

          {/* Project Details */}
                      <div className="prose prose-lg mx-auto max-w-none prose-invert">
              <div className="space-y-16">
                <div className="relative pl-6 md:pl-8">
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-blue-400/30 to-transparent"></div>
                  <h2 className="font-bold text-blue-400 text-2xl md:text-3xl mb-4">Project Overview</h2>
                  <p className="text-gray-300/90 leading-relaxed">{project.details.overview}</p>
                </div>

                <div className="relative pl-6 md:pl-8">
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-blue-400/30 to-transparent"></div>
                  <h2 className="font-bold text-blue-400 text-2xl md:text-3xl mb-4">The Challenge</h2>
                  <div className="text-gray-300/90 leading-relaxed whitespace-pre-line">{project.details.challenge}</div>
                </div>

                <div className="relative pl-6 md:pl-8">
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-blue-400/30 to-transparent"></div>
                  <h2 className="font-bold text-blue-400 text-2xl md:text-3xl mb-4">The Solution</h2>
                  <div className="text-gray-300/90 leading-relaxed whitespace-pre-line">{project.details.solution}</div>
                </div>

                <div className="relative pl-6 md:pl-8">
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-blue-400/30 to-transparent"></div>
                  <h2 className="font-bold text-blue-400 text-2xl md:text-3xl mb-4">Technical Details</h2>
                  <ul className="space-y-3 list-none">
                    {project.details.technicalDetails.map((detail) => (
                      <li key={detail} className="text-gray-300/90 relative flex items-center">
                        <span className="absolute -left-6 top-1/2 w-3 h-[1px] bg-blue-400/30"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          {/* Back to Projects */}
          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-md border   px-6 py-3 text-base font-medium  shadow-sm transition-colors  border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700"
            >
              ← Back to All Projects
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
} 