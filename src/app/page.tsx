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
                <p className="text-xl text-gray-600 dark:text-gray-400 sm:text-2xl">
                  I craft accessible, fast, and scalable digital experiences
                  using Next.js & Tailwind CSS
                </p>
                <div className="flex flex-col gap-4 mx-5 md:mx-0 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    href="/projects"
                    className="rounded-md bg-gray-900 px-8 py-3 text-lg font-medium text-white shadow-sm transition-colors hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-md border border-gray-300 bg-white px-8 py-3 text-lg font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
              <div className="relative h-64 w-64 flex-shrink-0 overflow-hidden rounded-full border-8 border-gray-200 shadow-xl dark:border-gray-800 sm:h-96 sm:w-96">
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
          className="bg-gray-50 dark:bg-gray-900"
        >
          <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              View All Projects
            </Link>
          </div>
        </Section>
      </AnimatedSection>

      {/* About Section */}
      {/* <AnimatedSection delay={0.4}>
        <Section id="about" title="About Me" subtitle="My journey as a developer">
          <div className="mx-auto mt-16 max-w-3xl space-y-6 text-lg">
            <p>
              I&apos;m a passionate full-stack developer with over 5 years of
              experience building modern web applications. I specialize in
              React, Next.js, and Tailwind CSS to create fast, responsive, and
              user-friendly experiences.
            </p>
            <p>
              My journey began with a fascination for how websites work,
              leading me to dive deep into JavaScript and its ecosystem. Now, I
              help businesses and individuals bring their ideas to life through
              clean code and thoughtful design.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through blog posts and mentoring.
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 dark:border-gray-700 dark:text-gray-400">
              &quot;My goal is to create digital experiences that are not only
              visually appealing but also accessible, performant, and a joy to
              use.&quot;
            </blockquote>
          </div>
        </Section>
      </AnimatedSection> */}

     
    </>
  );
}
