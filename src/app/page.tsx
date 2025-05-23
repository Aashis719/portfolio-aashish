import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <AnimatedSection className="py-24 pb-16 sm:py-24 md:py-48 md:pb-32 image.png">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl md:mt-4">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
              <div className="flex-1 space-y-8 text-center lg:text-left">
                <AnimatedTitle />
                <p className="text-xl  text-gray-400 sm:text-2xl px-3 md:px-0">
                I craft accessible, fast, and scalable digital experiences that captivate audiences.
                </p>
                <div className="flex flex-col gap-4 mx-5 md:mx-0 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    href="/projects"
                    className="rounded-md  px-8 py-3 text-lg font-medium text-white shadow-sm transition-colors  bg-gray-700 hover:bg-gray-600"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-md border   px-8 py-3 text-lg font-medium  shadow-sm transition-colors    border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
              <div className="relative h-64 w-64 flex-shrink-0 overflow-hidden rounded-full border-8  shadow-xl border-gray-800 sm:h-96 sm:w-96">
                <Image
                  src="/images/ham.png"
                  alt="Aashis"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection delay={0.2}>
        <Section
          id="services"
          title="What I Offer"
          subtitle="Specialized services to help your business succeed online"
          
        >
          <div className="mx-auto mt-16 grid md:max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Section>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection delay={0.3}>
        <Section
          id="projects"
          title="Featured Projects"
          subtitle="Recent work that showcases my skills and expertise"
          className="bg-gray-900"
        >
          <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="rounded-md border  px-6 py-3 text-base font-medium shadow-sm transition-colors  border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700"
            >
              View All Projects
            </Link>
          </div>
        </Section>
      </AnimatedSection>
     

     
    </>
  );
}
