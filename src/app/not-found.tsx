import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function NotFound() {
  return (
    <AnimatedSection>
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900 dark:text-white">
          404
        </h1>
        <h2 className="mb-8 text-3xl font-bold text-gray-700 dark:text-gray-300">
          Page Not Found !
        </h2>
        <p className="mb-8 max-w-md text-lg text-gray-600 dark:text-gray-400">
          The page you are looking for doesnot exist or has been moved.
        </p>
        <Link
          href="/"
          className="rounded-md bg-gray-900 px-6 py-3 text-white shadow-sm transition-colors hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Go back home
        </Link>
      </div>
    </AnimatedSection>
  );
} 