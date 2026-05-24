export interface Project {
  id: string;
  title: string;
  category: 'software' | 'academic' | 'computer_solution';
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'software' | 'academic' | 'document' | 'computer_solutions';
  icon: string; // Name of Lucide icon
  subservices?: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'databases' | 'tools';
  level: number; // 0-100%
  description?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}
