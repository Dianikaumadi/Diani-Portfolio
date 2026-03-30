import React from 'react';
import { Project, SkillCategory, Experience, ContactInfo, Stat, Testimonial, ReputationItem } from './types';
import { Terminal, Layout, Smartphone, Database, Cpu, Globe, GitBranch, Lightbulb, FileCode, Anchor, Zap, Palette } from 'lucide-react';

export const PERSONAL_DETAILS = {
  name: "Diani Wittahachchi",
  tagline: "Crafting calm, intelligent, and seamless digital experiences.",
  taglineVariants: [
    "Architecting Digital Elegance.",
    "Engineering the Future of Interactions.",
    "Code that breathes. Design that speaks.",
    "Merging Logic with Luxury.",
    "Building Systems, Crafting Stories."
  ],
  role: "SOFTWARE ENGINEERING UNDERGRADUATE",
  subHeadline: "Specializing in High-Performance Web & Mobile Systems",
  bio: "I am a Software Engineering Undergraduate at SLIIT with a relentless focus on quality and user experience. My work bridges the gap between complex backend logic and elegant frontend interfaces. I don't just write code; I engineer solutions that feel intuitive, responsive, and robust.",
  location: "Sri Lanka",
  availability: "Available for Hire",
  cvLink: "/cv/Diani_CV_Intern.pdf" 
};

export const CONTACT_INFO: ContactInfo = {
  email: "dkgwwittahachchi@gmail.com",
  phone: "+94 71 192 8893",
  location: "Colombo, Sri Lanka",
  socials: {
    github: "https://github.com/Dianikaumadi/",
    linkedin: "https://www.linkedin.com/in/diani-kaumadi/"
  }
};

export const STATS: Stat[] = [
  { label: "CGPA", value: "3.67", suffix: "/4.0" },
  { label: "ACADEMIC & PROJECT EXPERIENCE", value: "2", suffix: "+ Years" },
  { label: "OOP Grade", value: "A+", suffix: "" },
];

export const VALUES = [
  { title: "Precision", desc: "Clean, maintainable code is my standard, not an option." },
  { title: "User-Centric", desc: "I build for humans first, focusing on accessibility and flow." },
  { title: "Innovation", desc: "Constantly exploring new tech to solve old problems better." }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Systems",
    icon: <Terminal className="w-5 h-5" />,
    skills: [
      { name: "Java (Spring Boot)", level: 95 },
      { name: "MERN Stack", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "Hibernate / JPA", level: 85 }
    ]
  },
  {
    title: "Modern Frontend",
    icon: <Globe className="w-5 h-5" />,
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vite / Next.js", level: 80 }
    ]
  },
  {
    title: "Mobile Engineering",
    icon: <Smartphone className="w-5 h-5" />,
    skills: [
      { name: "Kotlin (Android)", level: 90 },
      { name: "Jetpack Compose", level: 75 },
      { name: "Firebase (Basic)", level: 60 }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <Cpu className="w-5 h-5" />,
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker (Basic)", level: 60 },
      { name: "CI/CD (Basic)", level: 60 },
      { name: "Linux CLI", level: 80 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "golden-grain-mill",
    title: "Golden Grain Mill Management System",
    category: "Full-Stack Web Platform",
    description:
      "A role-based platform that digitizes Sri Lanka's rice & paddy ecosystem with dashboards for Admin, Supplier, and Buyer—covering catalog, inventory, paddy requests, orders, payments, invoices, and reporting.",
    problem:
      "Manual coordination across buyers/suppliers/admins made inventory tracking, order handling, and invoicing slow and error-prone.",
    outcome:
      "Delivered an end-to-end web system with secure APIs, responsive UI, and structured modules for smoother operations and clearer reporting.",
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "REST APIs",
    ],
    image: "/projects/golden-grain.jpg",
    link: "#",
    github: "https://github.com/kiruluchamika/Golden-Grain-Mill-ITP-Project.git",
    isGroupProject: true,
  },
  {
    id: "thinkboard-mern",
    title: "Thinkboard | MERN Notes Board",
    category: "MERN Full-Stack App",
    description:
      "A full-stack notes board with clean CRUD flows (create/view/update/delete) powered by Express + MongoDB, with API protection using Upstash Redis-based rate limiting middleware.",
    problem:
      "Public CRUD APIs can be abused easily—needed a simple notes app with protection against spam/rapid requests.",
    outcome:
      "Built REST endpoints with persistent storage and added rate limiting to improve reliability and prevent abuse.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Upstash Redis",
    ],
    image: "/projects/thinkboard.jpg",
    link: "#",
    github: "https://github.com/Dianikaumadi/Thinkboard-MERN.git",
  },
  {
    id: "nivora-android",
    title: "Nivora | Android Mobile Application",
    category: "Android App",
    description:
      "An Android application with structured UI flows using Activities and Fragments, designed with practical screens and local persistence for managing app data offline.",
    problem:
      "Needed a smooth multi-screen Android flow with reliable offline storage to keep user data available without internet.",
    outcome:
      "Implemented Android navigation with local database persistence and clean UI structure for maintainability.",
    tech: ["Kotlin", "Android Studio", "XML", "SQLite", "Local Database"],
    image: "/projects/nivora.jpg",
    link: "https://drive.google.com/file/d/1P5eBGuNB9lSNr1CiQxNXFi-_wW5Q_NM4/view?usp=sharing",
    github: "https://github.com/Dianikaumadi/NivoraApp.git",
  },
  {
    id: "mind-bloom",
    title: "Mind Bloom | Android UI/UX (Figma to Android)",
    category: "Mobile UI/UX + Firebase",
    description:
      "A Figma-to-Android implementation focusing on modern UI/UX screens and navigation, with Firebase Authentication integrated for sign-in and sign-up flows.",
    problem:
      "Needed to convert high-fidelity Figma designs into a functional Android UI with proper navigation and authentication.",
    outcome:
      "Delivered polished UI screens in Android Studio with integrated auth flow for a realistic app experience.",
    tech: ["Figma", "Android Studio", "Kotlin", "XML", "Firebase Auth"],
    image: "/projects/mind-bloom.jpg",
    link: "https://drive.google.com/file/d/1OFYv2qlgT1XzFifyNdnSr7nJh-x19X4l/view?usp=sharing",
    github: "https://github.com/Dianikaumadi/Mind_Bloom_MobileApp.git",
  },
  {
    id: "rideease",
    title: "RideEase Transport System",
    category: "Web App (MVC)",
    description:
      "A ride-hailing web application with role-based dashboards for Passenger, Driver, and Admin—supporting ride booking flows, management features, and database-driven operations.",
    problem:
      "Required a structured transport/ride-hailing system with separate role workflows and maintainable architecture.",
    outcome:
      "Built an MVC-style web app with dynamic pages, server-side handling, and MySQL-backed workflows.",
    tech: ["Java Servlets", "JSP", "MySQL", "MVC", "HTML", "CSS", "JavaScript"],
    image: "/projects/rideease.jpg",
    link: "#",
    github: "https://github.com/kiruluchamika/RideEase-Transport-System-OOP-Project.git",
    isGroupProject: true,
  },
  {
    id: "carepro",
    title: "CarePro Health Insurance Management System",
    category: "Web App (IWT)",
    description:
      "A dynamic health insurance management web application built for IWT module, featuring CRUD operations, validation, and responsive UI pages for user/admin experiences.",
    problem:
      "Manual insurance handling and tracking needed a simple web system with organized data management and user flows.",
    outcome:
      "Created a functional PHP/MySQL web app with structured pages, validations, and core management features.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/projects/carepro.jpg",
    link: "#",
    github: "https://github.com/kiruluchamika/SLIIT-IWT-Project-2024.git",
    isGroupProject: true,
  },
];

export const TIMELINE: Experience[] = [
  {
    id: "t1",
    year: "2023",
    chapter: "Foundations & Logic",
    title: "University Commencement",
    description: "Embarked on the BSc journey. Focused on mastering the core principles of computation, algorithms, and logic.",
    type: "education",
    emoji: "🎓",
    tags: ["Algorithms", "Problem Solving", "C++"]
  },
  {
    id: "t2",
    year: "2024",
    chapter: "Object-Oriented Thinking",
    title: "Architecture & Patterns",
    description: "Shifted mindset from writing code to designing systems. Achieved A+ in OOP and built first robust Java applications.",
    type: "milestone",
    emoji: "🧠",
    tags: ["Java", "OOP", "Data Structures"]
  },
  {
    id: "t3",
    year: "2025",
    chapter: "Systems & Products",
    title: "Shipping Real Software",
    description: "The year of execution. Built and deployed Golden Grain (Enterprise), Mind Bloom (Mobile), and RideEase.",
    type: "work",
    emoji: "🛠",
    tags: ["React", "Spring Boot", "Kotlin", "Full-Stack"]
  },
  {
    id: "t4",
    year: "2026",
    chapter: "Internship Ready",
    title: "Professional Evolution",
    description: "Poised to join a high-performance engineering team. Focusing on scalable architecture and cloud infrastructure.",
    type: "future",
    emoji: "🚀",
    tags: ["Internship", "Cloud", "Professional"]
  }
];

// REPLACED Testimonials with Reputation Data & Badges
export const REPUTATION: ReputationItem[] = [
  {
    id: "r1",
    title: "Clear Thinking",
    description: "I’m appreciated for breaking down complex tasks into clear, logical steps — especially in backend workflows and Android UI flows.",
    icon: <Lightbulb size={24} />,
    badge: "Core Trait"
  },
  {
    id: "r2",
    title: "Clean Code",
    description: "Peers often note that my code is readable, structured, and well-organized, making collaboration easier.",
    icon: <FileCode size={24} />,
    badge: "Craft & Code"
  },
  {
    id: "r3",
    title: "Calm & Reliable",
    description: "I’m known for being steady, thoughtful, and supportive during group work — especially when deadlines are tight.",
    icon: <Anchor size={24} />,
    badge: "Collaboration"
  },
  {
    id: "r4",
    title: "Deep Curiosity",
    description: "Whether it’s Spring Boot, Kotlin, or design patterns, I enjoy exploring technology beyond surface level.",
    icon: <Zap size={24} />,
    badge: "Mindset"
  },
  {
    id: "r5",
    title: "Visual Harmony",
    description: "My mobile and web projects reflect a focus on visual harmony, spacing, and clarity — a rare blend in engineering students.",
    icon: <Palette size={24} />,
    badge: "Design Eye"
  }
];