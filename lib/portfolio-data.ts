export type Project = {
  title: string;
  description: string;
  technologies: string[];
  href: string;
};

export type JourneyItem = {
  period: string;
  role: string;
  summary: string;
};

export const portfolioData = {
  hero: {
    name: "Bilal K.",
    role: "Full-Stack Software Developer",
    tagline:
      "I design and build reliable digital products with clean architecture and delightful user experiences.",
    primaryCta: {
      label: "View Projects",
      href: "#projects",
    },
    secondaryCta: {
      label: "Contact Me",
      href: "#contact",
    },
  },
  about:
    "I am a developer focused on modern web technologies, performance, and accessibility. I enjoy turning product ideas into maintainable software that scales.",
  skills: [
    {
      category: "Frontend",
      items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Accessibility"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tooling",
      items: ["GitHub Actions", "Docker", "Jest", "ESLint", "CI/CD"],
    },
  ],
  projects: [
    {
      title: "Developer Analytics Dashboard",
      description:
        "A metrics dashboard for engineering teams with role-based access, historical trends, and exportable reports.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      href: "https://github.com/your-username/project-analytics",
    },
    {
      title: "Real-Time Collaboration Workspace",
      description:
        "A collaborative workspace featuring live cursors, shared notes, and synchronized Kanban workflows.",
      technologies: ["React", "Node.js", "WebSockets", "Redis"],
      href: "https://github.com/your-username/realtime-workspace",
    },
    {
      title: "E-Commerce Starter Platform",
      description:
        "A production-ready storefront starter with authentication, checkout flows, and admin inventory tools.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Docker"],
      href: "https://github.com/your-username/ecommerce-starter",
    },
  ] satisfies Project[],
  journey: [
    {
      period: "2024 - Present",
      role: "Senior Software Engineer",
      summary:
        "Leading delivery of customer-facing web features, improving reliability, and mentoring developers.",
    },
    {
      period: "2022 - 2024",
      role: "Full-Stack Developer",
      summary:
        "Built internal tools and external product features across frontend and backend systems.",
    },
    {
      period: "2020 - 2022",
      role: "Software Engineer",
      summary:
        "Implemented reusable UI systems and optimized APIs to reduce latency and improve developer velocity.",
    },
  ] satisfies JourneyItem[],
  contact: {
    email: "hello@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-profile",
  },
};
