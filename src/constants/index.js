//1. Navigation links for Navbar and Mobile Menu
export const navLinks = [
    {id: "about", title: "About"},
    {id: "skills", title: "Jutsu Arsenal"},
    {id: "journey", title: "Journey"},
    {id: "projects", title: "Missions"},
    {id: "contact", title: "Summon"},
];

//2.Personal Information
export const personalInfo = {
  name: "Ravishka Praveen Bandara",
  role: "Full-Stack Developer | MERN & Next.js",
  location: "Negombo, Sri Lanka",
  email: "ravishkabandarasct123@gmail.com",
  phone: "+94 77 813 7631",
  status: "⚡ Open for Internships & Full-Stack Roles",
  summary:
    "Software Engineering undergraduate at University of Plymouth with hands-on experience building scalable MERN, Next.js, and Spring Boot applications.",
  socials: {
    github: "https://github.com/RavishkaB2003",
    linkedin: "https://www.linkedin.com/in/ravishka-bandara-177239308/",
  },
};

// 3. Specializations (For the About cards)
export const specializations = [
  {
    title: "Full-Stack MERN & Next.js",
    description: "Crafting scalable web applications with React, Next.js 15, Node.js, Express, and modern ORMs.",
  },
  {
    title: "Robust Backend & APIs",
    description: "Architecting secure RESTful APIs, role-based access control, JWT auth, and Spring Boot microservices.",
  },
  {
    title: "AI Integration & MCP",
    description: "Building context-aware AI tools, Gemini-powered workflows, and Model Context Protocol (MCP) servers.",
  },
  {
    title: "Interactive 3D & UI/UX",
    description: "Blending React Three Fiber, Framer Motion, and Tailwind CSS to build immersive user interfaces.",
  },
];

// 4. Skills (Grouped by category)
export const skills = [
  { name: "ReactJS", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Three.js / R3F", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Java 21 / Spring Boot", category: "Backend" },
  { name: "RESTful APIs", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Prisma & Drizzle", category: "Database" },
  { name: "Supabase & Firebase", category: "Database" },
];

// 5. Timeline / Journey (Education & Leadership)
export const experiences = [
  {
    title: "Software Engineering (BSc Hons)",
    company_name: "University of Plymouth | NSBM Green University",
    date: "Expected Dec 2027",
    points: [
      "Specializing in Software Engineering and distributed systems architecture.",
      "Leading multiple full-scale projects across MERN, Next.js, and Spring Boot stacks.",
    ],
  },
  {
    title: "Vice President - Marketing",
    company_name: "NSBM Speakers Club",
    date: "2025 - Present",
    points: [
      "Leading digital media, branding strategies, and promotional campaigns.",
      "Overseeing multimedia production and creative asset pipelines.",
    ],
  },
];


// 6. Featured Projects
export const projects = [
  {
    name: "Animeta — Anime Discovery Platform",
    description:
      "Interactive web platform for anime enthusiasts to explore, filter, and track trending anime series with rich media previews.",
    tags: [
      { name: "react", color: "text-blue-400" },
      { name: "tailwind", color: "text-cyan-400" },
      { name: "framer-motion", color: "text-purple-400" },
    ],
    source_code_link: "https://github.com/RavishkaB2003/Animeta.git",
    live_demo_link: "https://animeta-pi.vercel.app/",
  },
  {
    name: "Kapruka MCP Challenge",
    description:
      "High-speed commerce experience featuring an MCP JSON-RPC/SSE server, order checkout & delivery tracking, and Vitest test coverage.",
    tags: [
      { name: "nextjs-15", color: "text-white" },
      { name: "typescript", color: "text-blue-400" },
      { name: "gemini-2.5", color: "text-teal-400" },
      { name: "mcp", color: "text-orange-400" },
    ],
    source_code_link: "https://github.com/RavishkaB2003/kapruka-mcp-challenge.git",
    live_demo_link: "https://kapruka-mcp-challenge.vercel.app/",
  },
  {
    name: "Java IMR — Inventory Management",
    description:
      "Enterprise inventory management platform spanning 43 REST endpoints and 13 relational entities with JWT auth and role-based access control.",
    tags: [
      { name: "java-21", color: "text-red-400" },
      { name: "spring-boot", color: "text-emerald-400" },
      { name: "mysql", color: "text-sky-400" },
    ],
    source_code_link: "https://github.com/RavishkaB2003/Java-IMR-SpringBoot.git",
    live_demo_link: null,
  },
];