import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28  ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mb-8 text-xl  text-gray-300">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
} 