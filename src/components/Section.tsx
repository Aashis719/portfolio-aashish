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
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="relative mb-4 text-4xl md:text-5xl selection:text-blue-400   font-bold tracking-tight text-white">
            <span className="relative">
              {title}
              <span className="absolute -bottom-2 left-0 right-0 h-[2px] md:h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></span>
            </span>
          </h2>
          {subtitle && (
            <p className="mb-8 text-lg md:text-xl text-gray-400/90 font-light">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
} 