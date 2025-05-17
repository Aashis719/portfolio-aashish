import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js, Tailwind CSS, and Supabase for database and authentication.",
    imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Stripe"],
    demoUrl: "https://ecommerce-demo.aashis.dev",
    githubUrl: "https://github.com/aashisdev/ecommerce-platform",
    slug: "ecommerce-platform",
  },
  {
    id: "2",
    title: "Travel Blog",
    description:
      "A travel blog with rich content editing, image optimization, and a custom CMS built with Next.js and Notion API.",
    imageUrl: "/images/locustours.png",
    tags: ["Next.js", "Tailwind CSS", "Notion API", "MDX"],
    demoUrl: "https://travelblog.aashis.dev",
    githubUrl: "https://github.com/aashisdev/travel-blog",
    slug: "travel-blog",
  },
  {
    id: "3",
    title: "Portfolio Dashboard",
    description:
      "A dashboard for creatives to showcase their portfolio with analytics, client feedback, and project management.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["React", "Next.js", "ChartJS", "Firebase"],
    demoUrl: "https://dashboard.aashis.dev",
    githubUrl: "https://github.com/aashisdev/portfolio-dashboard",
    slug: "portfolio-dashboard",
  },
  {
    id: "4",
    title: "Recipe Finder",
    description:
      "An app to find recipes based on ingredients you have, with filtering options and personalized recommendations.",
    imageUrl: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a",
    tags: ["Next.js", "Tailwind CSS", "Spoonacular API", "Vercel"],
    demoUrl: "https://recipes.aashis.dev",
    githubUrl: "https://github.com/aashisdev/recipe-finder",
    slug: "recipe-finder",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
} 