import {
  ShieldCheck,
  Zap,
  Code,
  Feather,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Bot,
  PaintBrush,
  Database,
  Server,
  Cloud,
  LayoutGrid,
} from "lucide-react";

export const features = [
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "Our platform is built with security in mind, featuring end-to-end encryption and compliance with industry standards to protect your data.",
  },
  {
    icon: Zap,
    title: "Blazing-Fast Performance",
    description:
      "Experience lightning-fast load times and a seamless user experience, powered by our optimized infrastructure and modern technology stack.",
  },
  {
    icon: Code,
    title: "Developer-Friendly API",
    description:
      "Integrate our services with your existing applications effortlessly using our well-documented and robust API, designed for developers.",
  },
  {
    icon: Feather,
    title: "Lightweight & Scalable",
    description:
      "Our architecture is designed to be lightweight and highly scalable, ensuring that our platform can grow with your business needs.",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/blackuidev",
    icon: Github,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/blackuidev",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/blackuidev",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/blackuidev",
    icon: Instagram,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/blackuidev",
    icon: Facebook,
  },
];

export const projects = [
  {
    id: "project-1",
    title: "AI-Powered CRM Platform",
    description:
      "A comprehensive CRM platform that leverages AI to automate sales workflows, predict customer behavior, and provide actionable insights. Built with a microservices architecture for maximum scalability.",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["AI", "SaaS", "React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    sourceUrl: "#",
    category: "Web Application",
    icons: [Bot, Database, Server],
  },
  {
    id: "project-2",
    title: "E-commerce Marketplace for Artisans",
    description:
      "A beautiful and intuitive online marketplace connecting local artisans with a global audience. Features a custom payment gateway, real-time chat, and a review system.",
    imageUrl:
      "https://images.unsplash.com/photo-1481437156560-3205f6a85705?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["E-commerce", "Next.js", "Stripe", "Firebase"],
    liveUrl: "#",
    sourceUrl: "#",
    category: "E-commerce",
    icons: [PaintBrush, Cloud, LayoutGrid],
  },
  {
    id: "project-3",
    title: "Real-time Collaborative Whiteboard",
    description:
      "A web-based collaborative whiteboard application that allows teams to brainstorm and visualize ideas in real-time. Built with WebSockets for instant updates.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Collaboration", "React", "WebSockets", "Canvas API"],
    liveUrl: "#",
    sourceUrl: "#",
    category: "Productivity Tool",
    icons: [Zap, Code, Feather],
  },
  {
    id: "project-4",
    title: "Interactive Data Visualization Dashboard",
    description:
      "A powerful dashboard for visualizing complex datasets. Features interactive charts, maps, and filters to help users uncover insights from their data. Connects to multiple data sources via a REST API.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Data Viz", "D3.js", "React", "Python", "Flask"],
    liveUrl: "#",
    sourceUrl: "#",
    category: "Data Science",
    icons: [Database, Code, LayoutGrid],
  },
  {
    id: "project-5",
    title: "Cloud-Native DevOps Automation Tool",
    description:
      "An automation tool that simplifies CI/CD pipelines and infrastructure management on AWS. Provides a declarative way to define and deploy applications, reducing manual effort and errors.",
    imageUrl:
      "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["DevOps", "AWS", "Terraform", "Docker", "Go"],
    liveUrl: "#",
    sourceUrl: "#",
    category: "Developer Tool",
    icons: [Server, Cloud, Code],
  },
  {
    id: "project-6",
    title: "Mobile App for Mental Wellness",
    description:
      "A cross-platform mobile app designed to promote mental wellness through guided meditations, mood tracking, and personalized content. Built with React Native for a native look and feel on iOS and Android.",
    imageUrl:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Mobile", "React Native", "Firebase", "Health"],
    liveUrl: "#",
    sourceUrl: "#",
    category: "Mobile App",
    icons: [Feather, ShieldCheck, Zap],
  },
];
