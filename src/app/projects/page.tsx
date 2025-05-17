import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Aashis Portfolio",
  description: "Explore my portfolio of web development projects using Next.js, React, and Tailwind CSS.",
};

export default function ProjectsPage() {
  return (
    <AnimatedSection>
      <Section
        title="My Projects"
        subtitle="A collection of my recent work and experiments"
      >
        <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </AnimatedSection>
  );
} 