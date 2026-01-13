import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
  problem: string;
  outcome: string;
  features?: string[];
  role?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
  icon: React.ReactNode;
}

export interface Experience {
  id: string;
  year: string;
  chapter: string;
  title: string;
  company?: string;
  description: string;
  type: 'work' | 'education' | 'milestone' | 'future';
  tags: string[];
  emoji: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar?: string;
}

// New Interface for Reputation/Traits
export interface ReputationItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  badge: string; // Added badge for category
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}