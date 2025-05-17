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
      "Modern, responsive websites and web applications built with Next.js, React, and other cutting-edge technologies.",
    icon: "WebDev",
  },
  {
    id: "2",
    title: "UI/UX Design",
    description:
      "User-centered design with a focus on usability, accessibility, and visual appeal using Figma and modern design systems.",
    icon: "Design",
  },
  {
    id: "3",
    title: "Performance Optimization",
    description:
      "Improve your website's Core Web Vitals, SEO, and overall performance for better user experience and search rankings.",
    icon: "Performance",
  },
  {
    id: "4",
    title: "Custom CMS & Dashboards",
    description:
      "Tailored content management systems and admin dashboards that make it easy to manage your website content.",
    icon: "Dashboard",
  },
]; 