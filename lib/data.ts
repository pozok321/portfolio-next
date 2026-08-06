export const profile = {
  name: "Valeryan Ramadhan",
  role: "Frontend Developer",
  tagline:
    "A creative frontend developer with 4+ years of experience building fast, accessible, and quietly delightful web products.",
  email: "valeryanr18@gmail.com",
  location: "Tangerang, Indonesia",
  resumeUrl: "#",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
};

export const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "24+", label: "Projects shipped" },
  { value: "12K+", label: "Hours worked" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export const stack = [
  {
    category: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "NestJS"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    category: "Tooling",
    items: ["Git", "Docker", "Figma", "Vercel"],
  },
];

export const experience = [
  {
    company: "Nebula Studio",
    role: "Senior Frontend Engineer",
    period: "Jan 2024 — Present",
    description:
      "Leading the frontend architecture for a suite of client products, mentoring two engineers, and setting the animation and design-system standards used company-wide.",
  },
  {
    company: "Kalibrasi Tech",
    role: "Frontend Developer",
    period: "Aug 2022 — Dec 2023",
    description:
      "Built and maintained customer-facing dashboards in React and TypeScript, cutting median page load time by 38% through code-splitting and image pipeline work.",
  },
  {
    company: "Studio Anagram",
    role: "Frontend Engineer",
    period: "Feb 2021 — Jul 2022",
    description:
      "Translated Figma prototypes into pixel-accurate, responsive interfaces for early-stage startups across fintech and e-commerce.",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2020 — 2021",
    description:
      "Delivered marketing sites and small web apps for local businesses, handling everything from scoping to deployment.",
  },
];

export const projects = [
  {
    slug: "orbit-finance",
    index: "01",
    title: "Orbit Finance",
    description: "A consumer investing dashboard with real-time charts and portfolio insights.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-accent/40 via-accent/10 to-transparent",
  },
  {
    slug: "loop-cart",
    index: "02",
    title: "Loop Cart",
    description: "Headless storefront with instant search, filters, and localized checkout.",
    tags: ["React", "Redux", "i18n"],
    color: "from-mint/40 via-mint/10 to-transparent",
  },
  {
    slug: "resume-lab",
    index: "03",
    title: "Resume Lab",
    description: "AI-assisted resume review tool with actionable, section-by-section feedback.",
    tags: ["Next.js", "OpenAI", "PostgreSQL"],
    color: "from-accent/40 via-mint/10 to-transparent",
  },
  {
    slug: "keystate",
    index: "04",
    title: "Keystate",
    description: "Real estate listing platform with map search and saved-property alerts.",
    tags: ["React", "Redux", "Tailwind CSS"],
    color: "from-mint/40 via-accent/10 to-transparent",
  },
  {
    slug: "ledger-notes",
    index: "05",
    title: "Ledger Notes",
    description: "Lightweight bookkeeping app for freelancers, built as a weekend project.",
    tags: ["HTML", "SCSS", "JavaScript"],
    color: "from-accent/40 via-accent/10 to-transparent",
  },
  {
    slug: "devlinks",
    index: "06",
    title: "DevLinks",
    description: "Drag-and-drop link-in-bio builder for developers, with live preview.",
    tags: ["Next.js", "Formik", "Drag & Drop"],
    color: "from-mint/40 via-mint/10 to-transparent",
  },
];
