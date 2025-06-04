export const projects = [
  {
    id: "1",
    title: "Locus Tours and Travels",
    description:
      "A website for a travel agency that allows users to enquiry about the tours and travel packages.",
    imageUrl: "/images/locustours.png",
    tags: ["Next.js", "Tailwind CSS", ],
    demoUrl: "https://locustraveltours.com/",
    githubUrl: "https://github.com/Aashis719/locus-tours---travel",
    slug: "locus-tours",
    details: {
      overview: `Locus Tours and Travel is a web application for users to inquire about travel arrangements. It provides a simple interface for submitting travel preferences.`,
      challenge: `Key challenges faced during development:
        • Implementing efficient image optimization
        • Creating a responsive layout for various content types
        • Managing dynamic content updates
        • Ensuring fast page loads with rich media content`,
      solution: `The solution provides a seamless blogging experience:
        • Implemented MDX for rich content formatting
        • Developed a responsive layout system
        • Added dynamic content loading with pagination`,
      technicalDetails: [
        "Next.js for static site generation",
        "Responsive design with Tailwind CSS",
        "Dynamic content loading"
      ]
    }
  },
  {
    id: "2",
    title: "Laitora Store (Loading...)",
    description:
      "A modern e-commerce platform built with Next.js, Tailwind CSS, and Supabase for database and authentication ",
    imageUrl: "/images/laitorastore.png",
    tags: ["Next.js", "Tailwind CSS", "Supabase"],
    demoUrl: "https://laitora-store.vercel.app/",
    githubUrl: "https://github.com/Aashis719/Laitora-Store",
    slug: "laitora-online-store",
    details: {
      overview: `Laitora Store is a comprehensive e-commerce solution designed to provide a seamless shopping experience. Built with modern technologies, it offers a responsive interface, secure authentication, and efficient product management.`,
      challenge: `The main challenges included:
        • Implementing a secure and scalable authentication system
        • Optimizing performance with server-side rendering
        • Ensuring seamless integration with the Supabase backend`,
      solution: `The solution leverages Next.js and Tailwind CSS to create a fast, modern e-commerce platform:
        • Implemented user authentication using Supabase
        • Utilized Next.js server-side rendering for optimal performance
        • Integrated real-time inventory management`,
      technicalDetails: [
        "Next.js ",
        "Tailwind CSS ",
        "Supabase for authentication and database",
        "Responsive design for all device sizes "
      ]
    }
  },
 
  {
    id: "3",
    title: "FlowSync: SaaS Product",
    description:
      "FlowSync Dummy Landing Page for a AI-powered automation platform built with Next.js and Tailwind CSS.",
    imageUrl: "/images/flow-sync.png",
    tags: ["Next.js", "Tailwind CSS","Email js"],
    demoUrl: "https://flowsync-ashen.vercel.app/",
    githubUrl: "https://github.com/Aashis719/flow-sync",
    slug: "flowsync",
    details: {
      overview: `FlowSync Dummy Landing Page for a AI-powered automation platform built with React and Tailwind CSS, featuring a sleek, responsive UI.`,
      challenge: `Key challenges addressed during development included:
        • Designing an intuitive and user-friendly dashboard layout
        • Creating a clean, responsive design system`,
      solution: `The final solution delivers a modern, interactive SaaS dashboard featuring:
        • A custom-built, responsive UI with modular components
        • A simplified project and content management interface`,
      technicalDetails: [
        "React for building dynamic UI components",
        "Next.js for server-side rendering and routing",
        "Tailwind CSS for responsive and utility-first styling"
      ]
    }
  },
  {
    id: "4",
    title: "OG Restaurant",
    description:
      "A landing page for OG Restaurant, featuring a curated menu showcase and a functional table reservation form.",
    imageUrl: "/images/og.png", 
    tags: [ "CSS", "JavaScript", "Responsive Design"],
    demoUrl: "https://aashis719.github.io/OG-Restaurant/", 
    githubUrl: "https://github.com/Aashis719/OG-Restaurant", 
    slug: "og-restaurant",
    details: {
      overview: `OG Restaurant is a modern static website designed to showcase the restaurant's menu and allow visitors to easily make table reservations through a user-friendly form.`,
      challenge: `Project challenges included:
        • Designing an attractive layout with only HTML, CSS, and JavaScript
        • Creating a responsive design for all devices
        • Implementing a working reservation form without a backend`,
      solution: `Final solution highlights:
        • Stylish menu section with food item cards
        • Mobile-responsive design using CSS media queries
        • Smooth scrolling navigation and visual polish`,
      technicalDetails: [
        "HTML5 ",
        "CSS3 for styling and responsiveness",
        "Vanilla JavaScript for interactivity and form handling",
        "Responsive design using media queries"
      ]
    }
  }
  
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
} 