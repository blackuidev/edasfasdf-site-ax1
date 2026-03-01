import { Github, Linkedin, Twitter } from "lucide-react";

export const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with a modern UI, state management, and payment gateway integration.",
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    tech: ["React", "TypeScript", "Zustand", "Tailwind CSS", "Stripe"],
    live: "#",
    github: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "A responsive and data-driven dashboard for a SaaS application, featuring charts, tables, and authentication.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tech: ["Next.js", "Recharts", "Framer Motion", "Supabase"],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects and skills, built with a focus on animations and user experience.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0abfe3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tech: ["React", "Vite", "GSAP", "Three.js"],
    live: "#",
    github: "#",
  },
  {
    title: "Blogging Platform",
    description: "A content-focused blogging platform with markdown support, categories, and a clean reading interface.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tech: ["React", "GraphQL", "Tailwind CSS", "Headless CMS"],
    live: "#",
    github: "#",
  },
];

export const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", 
    "Vue.js", "Node.js", "GraphQL", "Tailwind CSS", "Framer Motion", 
    "Three.js", "GSAP", "Vite", "Webpack", "Git"
];

export const socialLinks = [
    {
        name: "GitHub",
        icon: Github,
        url: "https://github.com",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        url: "https://linkedin.com",
    },
    {
        name: "Twitter",
        icon: Twitter,
        url: "https://twitter.com",
    },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];
