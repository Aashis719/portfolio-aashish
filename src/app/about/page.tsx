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
        <Section title="About Me" subtitle="My journey and expertise"  className="mt-12 md:mt-0">
          <div className="mx-auto mt-16 pb-10 max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/haam.jpeg"
                    alt="Aashis"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-6 px-2 lg:col-span-3">
                <h3 className="text-2xl font-bold">
                  Web Developer | Designer
                </h3>
                <div className="space-y-4 text-lg  text-gray-400">
                  <p>
                    I&apos;m Aashis, a full-stack web developer with over 2 years of
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
      
     

     
    </>
  );
} 