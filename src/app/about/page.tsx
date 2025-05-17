import { AnimatedSection } from "@/components/AnimatedSection";
import { Section } from "@/components/Section";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Aashis Portfolio",
  description:
    "Learn about my journey, skills, and experience as a full-stack web developer specializing in Next.js and React.",
};

export default function AboutPage() {
  return (
    <>
      <AnimatedSection>
        <Section title="About Me" subtitle="My journey and expertise">
          <div className="mx-auto mt-16 max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/haam.png"
                    alt="Aashis"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-6 lg:col-span-3">
                <h3 className="text-2xl font-bold">
                  Full-Stack Developer with a passion for modern web technologies
                </h3>
                <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
                  <p>
                    I&apos;m Aashis, a full-stack web developer with over 5 years of
                    experience building modern web applications. I specialize in
                    React, Next.js, TypeScript, and Tailwind CSS to create fast,
                    responsive, and user-friendly experiences.
                  </p>
                  <p>
                    My journey began with a fascination for how websites work,
                    leading me to dive deep into JavaScript and its ecosystem.
                    Now, I help businesses and individuals bring their ideas to
                    life through clean code and thoughtful design.
                  </p>
                  <p>
                    I&apos;m passionate about creating accessible, performant, and
                    beautiful digital experiences that solve real problems. I
                    believe in the power of well-crafted software to make a
                    positive impact on people&apos;s lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Section
          title="My Skills"
          subtitle="Technologies and tools I work with"
          className="bg-gray-50 dark:bg-gray-900"
        >
          <div className="mx-auto mt-16 max-w-6xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-bold">Frontend</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                  <li>React Query</li>
                  <li>Responsive Design</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-bold">Backend</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Prisma</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-bold">Other Skills</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>CI/CD Pipelines</li>
                  <li>Agile Development</li>
                  <li>Web Performance</li>
                  <li>Testing (Jest, Cypress)</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <Section
          title="My Journey"
          subtitle="Experience and education"
        >
          <div className="mx-auto mt-16 max-w-3xl space-y-12">
            <div className="border-l-4 border-gray-300 pl-8 dark:border-gray-700">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                2021 - Present
              </span>
              <h3 className="mt-1 text-xl font-bold">
                Senior Frontend Developer
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Leading the frontend development of modern web applications,
                working with React, Next.js, and TypeScript. Implementing
                best practices for performance, accessibility, and user
                experience.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-8 dark:border-gray-700">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                2018 - 2021
              </span>
              <h3 className="mt-1 text-xl font-bold">Web Developer</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Built responsive websites and web applications for clients
                across various industries. Worked with React, JavaScript, and
                CSS frameworks.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-8 dark:border-gray-700">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                2016 - 2018
              </span>
              <h3 className="mt-1 text-xl font-bold">
                Computer Science Degree
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Completed a Bachelor&apos;s degree in Computer Science with a focus
                on web development and user interface design.
              </p>
            </div>
          </div>
        </Section>
      </AnimatedSection>
    </>
  );
} 