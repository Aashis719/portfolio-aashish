export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Web Development",
    description:
      "Building fast, responsive, and modern web applications with Next.js and React. Focus on clean code and best practices.",
    icon: "WebDev",
  },
  {
    id: "2",
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces. Emphasis on accessibility and user-centered design principles.",
    icon: "Design",
  },
  {
    id: "3",
    title: "Performance",
    description:
      "Optimizing web vitals, loading speeds, and SEO. Ensuring your website performs at its absolute best.",
    icon: "Performance",
  },
  {
    id: "4",
    title: "Custom Solutions",
    description:
      "Building tailored dashboards and content management systems that simplify your workflow and save time.",
    icon: "Dashboard",
  },
]; 