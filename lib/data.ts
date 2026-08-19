export const profile = {
  name: "Valeryan Ramadhan",
  role: "Frontend Developer",
  tagline:
    "A creative frontend developer with 4+ years of experience building fast, accessible, and quietly delightful web products.",
  email: "valeryanr18@gmail.com",
  location: "Tangerang, Indonesia",
  resumeUrl: "#",
  social: {
    github: "https://github.com/pozok321",
    linkedin: "https://www.linkedin.com/in/valeryan-ramadhan",
    instagram: "https://www.instagram.com/valeryanramadhan",
  },
};

export const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "10+", label: "Projects shipped" }
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export const projetLink = [
  {  href: "https://labprivate.undangin.com/" },
  {  href: "https://apievent1.undangin.com/" },
  {  href: "https://undangin.com/" },
  {  href: "#wedding-invitation-website" },
  {  href: "https://portal.undangin.com/" },
];

export const stack = [
  {
    category: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Tailwind CSS", "Vue.js", "Nuxt.js"],
  },
  {
    category: "Backend",
    items: ["PostgreSQL, PHP, Laravel"],
  },
  {
    category: "Tooling",
    items: ["Git", "Figma", "Vercel", "Trello"],
  },
];

export const experience = [
  {
    company: "Infolab Digital Solusi",
    role: "Frontend Engineer",
    period: "Mei 2021 — Present",
    description:
      "Creating and maintaining web applications using modern frontend technologies, ensuring responsive design and optimal performance.",
  },
  {
    company: "Infolab Digital Solusi",
    role: "QA & Project Manager",
    period: "January 2019 - March 2021",
    description:
      "Testing and managing project development. Ensuring quality assurance and timely delivery of web applications.",
  },

  {
    company: "Infolab Digital Solusi",
    role: "Internship Backend Developer",
    period: "September 2018 - December 2018",
    description:
      "Creating Event Management Dashboard product for company and learning backend development.",
  }
];

export const projects = [
  {
    slug: "Private Apps",
    index: "01",
    title: "Event Management Dashboard",
    description: "Dashboard for managing events, attendees, and analytics with real-time updates.",
    tags: ["Nuxt", "JavaScript", "Tailwind CSS, Axios"],
    color: "from-accent/40 via-accent/10 to-transparent",
    link: projetLink[0].href,
  },
  {
    slug: "Self-Checkin Apps",
    index: "02",
    title: "Self Checkin",
    description: "Self-service check-in system for events and conferences.",
    tags: ["Vue 3", "JavScript", "Bootstrap"],
    color: "from-mint/40 via-mint/10 to-transparent",
    link: projetLink[1].href,
  },
  {
    slug: "Landing Pages Undangin",
    index: "03",
    title: "Landing Page",
    description: "Landing page for Undangin, a wedding invitation platform, showcasing features and user testimonials.",
    tags: ["Nuxt", "JavaScript", "Tailwind CSS, Axios"],
    color: "from-accent/40 via-mint/10 to-transparent",
    link: projetLink[2].href,
  },
  {
    slug: "Wedding Invitation Website",
    index: "04",
    title: "Wedding Invitation",
    description: "A customizable wedding invitation website with RSVP functionality and photo gallery.",
    tags: ["Vue 3", "Axios", "Tailwind"],
    color: "from-mint/40 via-mint/10 to-transparent",
    link: projetLink[3].href,
  },

  {
  slug: "Portal Event Management",
  index: "05",
  title: "Portal Website",
  description: "A portal website for event management, allowing users to browse events, register, and receive notifications.",
  tags: ["Vue.js", "Axios", "Tailwind"],
  color: "from-mint/40 via-mint/10 to-transparent",
  link: projetLink[4].href,
  },
];
