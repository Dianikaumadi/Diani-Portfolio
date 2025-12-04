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
  role: "Software Engineer",
  subHeadline: "Specializing in High-Performance Web & Mobile Systems",
  bio: "I am a Software Engineering Undergraduate at SLIIT with a relentless focus on quality and user experience. My work bridges the gap between complex backend logic and elegant frontend interfaces. I don't just write code; I engineer solutions that feel intuitive, responsive, and robust.",
  location: "Sri Lanka",
  availability: "Available for Hire",
  cvLink: "#" // Placeholder
};

export const CONTACT_INFO: ContactInfo = {
  email: "dkgwwittahachchi@gmail.com",
  phone: "+94 71 192 8893",
  location: "Beliatta, Sri Lanka",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
};

export const STATS: Stat[] = [
  { label: "CGPA", value: "3.65", suffix: "/4.0" },
  { label: "Experience", value: "4", suffix: "+ Years" },
  { label: "Projects", value: "10", suffix: "+" },
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
      { name: "Microservices", level: 85 },
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
      { name: "Firebase", level: 85 }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <Cpu className="w-5 h-5" />,
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "CI/CD (Basic)", level: 75 },
      { name: "Linux CLI", level: 80 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Golden Grain Mill System",
    category: "Enterprise Full-Stack",
    role: "Lead Full-Stack Engineer",
    description: "A comprehensive enterprise resource planning (ERP) system customized for large-scale paddy mill operations.",
    problem: "Manual tracking of paddy stocks and payments led to significant inefficiencies and data errors in the supply chain.",
    outcome: "Digitized 100% of mill operations, reduced processing time by 40%, and provided real-time financial analytics.",
    tech: ["React", "Spring Boot", "MySQL", "Tailwind", "Axios"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2670",
    features: [
      "Role-Based Access Control (RBAC)",
      "Automated Invoice Generation",
      "Real-time Inventory Visualization"
    ],
    github: "https://github.com",
    link: "https://github.com"
  },
  {
    id: "p2",
    title: "Mind Bloom",
    category: "Mobile Application",
    role: "Android Developer",
    description: "A scientifically-backed mindfulness application designed to reduce anxiety through guided journaling and mood tracking.",
    problem: "Existing mental health apps were cluttered and complex. Users needed a calm, minimal interface for daily reflection.",
    outcome: "Achieved a 4.8/5 usability score in beta testing. praised for its fluid animations and calming color theory.",
    tech: ["Kotlin", "Android SDK", "Firebase Auth", "Room DB"],
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ce7d87?auto=format&fit=crop&q=80&w=2670",
    features: [
      "Mood trend analytics",
      "Secure local journaling",
      "Biometric authentication"
    ],
    github: "https://github.com",
    link: "https://github.com"
  },
  {
    id: "p3",
    title: "RideEase Transport",
    category: "System Architecture",
    role: "Backend Architect",
    description: "A scalable ride-hailing backend system capable of handling complex driver-rider matching algorithms.",
    problem: "Needed a high-concurrency system to match riders with drivers within seconds while managing location data.",
    outcome: "Built a robust MVC architecture handling real-time requests with sub-second latency.",
    tech: ["Java EE", "Servlets", "JSP", "MySQL", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2670",
    features: [
      "Geospatial queries for driver matching",
      "Fare estimation algorithm",
      "Driver payout calculation module"
    ],
    github: "https://github.com",
    link: "https://github.com"
  }
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